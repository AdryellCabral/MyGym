import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import { apiMyGym } from "../../services/api";
import { useEffect } from "react";
import { useUserProvider } from "../User";
interface AcademyProvidersProps {
  children: ReactNode;
}

interface AcademyInformation {
  token: string;
  id: any;
}

interface AcademyProviderData {
  loadInfoAcademy: () => void;
  academyResume: any;
  academyAuthInfo: any;
}

const AcademyContext = createContext<AcademyProviderData>(
  {} as AcademyProviderData
);

export const AcademyProvider = ({ children }: AcademyProvidersProps) => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  let idUser = localStorage.getItem("@idUser") || "";
  let token = localStorage.getItem("@tokenMyGym") || "";
  const {userProvider} = useUserProvider()
  if (token !== "") {
    token = JSON.parse(token);
    idUser = JSON.parse(idUser);
  }

  const [academyAuthInfo] = useState(
    {} as AcademyInformation
  );
  const [academyResume, setAcademyResume] = useState({});

  const loadInfoAcademy = () => {
    apiMyGym
      .get(`academys?userId=${idUser}&_embed=coaches&_embed=students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setAcademyResume(response.data[0])).catch((err) => console.log(err));
  };


  useEffect(() => {
   
    if (typeUser !== "academys") {
      loadInfoAcademy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProvider]);

  return (
    <AcademyContext.Provider
      value={{
        loadInfoAcademy,     
        academyResume,
        academyAuthInfo,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);
