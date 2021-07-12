import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiMyGym } from "../../services/api";
import { useEffect } from "react";
interface AcademyProvidersProps {
  children: ReactNode;
}
interface Coach {
  email: string;
  academyId: number;
  userId: number;
  id?: number;
}

interface Student {
  email: string;
  academyId: number;
  coachId: number;
  userId: number;
  id?: number;
}

interface InfosToLogin {
  email: string;
  password: string;
}

interface AcademyInformation {
  token: string;
  id: any;
}

interface AcademyProviderData {
  loginAcademy: (info: InfosToLogin) => void;
  loadInfoAcademy: (idCoach: string) => void;
  addCoach: (info: Coach) => void;
  addStudent: (info: Student) => void;
  getStudent: (idStudent: string) => void;
  academyResume: any;
  academyAuthInfo: any;
}

const AcademyContext = createContext<AcademyProviderData>(
  {} as AcademyProviderData
);

export const AcademyProvider = ({ children }: AcademyProvidersProps) => {
  const idAcademy = localStorage.getItem("@idAcademy") || "";

  const [academyAuthInfo, setAcademyAuthInfo] = useState(
    {} as AcademyInformation
  );
  const [academyResume, setAcademyResume] = useState({});

  const loginAcademy = (info: InfosToLogin) => {
    apiMyGym.post("login", info).then((response) => {
      const { accessToken } = response.data;
      const { sub } = jwtDecode<JwtPayload>(accessToken);
      setAcademyAuthInfo({ token: accessToken, id: sub });
      localStorage.setItem("@tokenAcademy", JSON.stringify(accessToken));
      localStorage.setItem("@idAcademy", JSON.stringify(sub));
    });
  };

  const addCoach = (info: Coach) => {
    apiMyGym.post("coaches", info, {
      headers: {
        Authorization: `Bearer ${academyAuthInfo.token}`,
      },
    });
  };

  const addStudent = (info: Student) => {
    apiMyGym.post("students", info, {
      headers: {
        Authorization: `Bearer ${academyAuthInfo.token}`,
      },
    });
  };

  const loadInfoAcademy = (idAcademy: string) => {
    apiMyGym
      .get(`academys?userId=${idAcademy}&_embed=coaches&_embed=students`, {
        headers: {
          Authorization: `Bearer ${academyAuthInfo.token}`,
        },
      })
      .then((response) => setAcademyResume(response.data));
  };

  const getStudent = (idStudent: string) => {
    apiMyGym.get(`/students?userId=${idStudent}`);
  };

  // useEffect(() => {
  //   if (localStorage.getItem("@idAcademy") !== "") {
  //     loadInfoAcademy(idAcademy);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <AcademyContext.Provider
      value={{
        loginAcademy,
        loadInfoAcademy,
        addCoach,
        addStudent,
        getStudent,
        academyResume,
        academyAuthInfo,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);
