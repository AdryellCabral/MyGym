import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiKabit } from "../../services/api";
import { useEffect } from "react";

// interface TypeUser {
//   userType: string;
// }

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
  gymCoaches: any;
  academyInfo: any;
}

const AcademyContext = createContext<AcademyProviderData>(
  {} as AcademyProviderData
);

export const AcademyProvider = ({ children }: AcademyProvidersProps) => {
  const idGym = localStorage.getItem("@idAcademy") || "";

  const [academyInfo, setAcademyInfo] = useState({} as AcademyInformation);
  const [gymCoaches, setGymInfo] = useState({});

  const loginAcademy = (info: InfosToLogin) => {
    apiKabit.post("coaches", info).then((response) => {
      const { accessToken } = response.data;
      const { sub } = jwtDecode<JwtPayload>(accessToken);
      setAcademyInfo({ token: accessToken, id: sub });
      localStorage.setItem("@tokenAcademy", JSON.stringify(accessToken));
      localStorage.setItem("@idAcademy", JSON.stringify(sub));
    });
  };

  const addCoach = (info: Coach) => {
    apiKabit.post("coaches", info, {
      headers: {
        Authorization: `Bearer ${academyInfo.token}`,
      },
    });
  };

  const addStudent = (info: Student) => {
    apiKabit.post("students", info, {
      headers: {
        Authorization: `Bearer ${academyInfo.token}`,
      },
    });
  };

  const loadInfoAcademy = (idAcademy: string) => {
    apiKabit
      .get(`academys?userId=${idAcademy}&_embed=coaches&_embed=students`, {
        headers: {
          Authorization: `Bearer ${academyInfo.token}`,
        },
      })
      .then((response) => setGymInfo(response.data));
  };

  const getStudent = (idStudent: string) => {
    apiKabit.get(`/students?userId=${idStudent}`);
  };

  useEffect(() => {
    if (localStorage.getItem("@idAcademy") !== "") {
      loadInfoAcademy(idGym);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AcademyContext.Provider
      value={{
        loginAcademy,
        loadInfoAcademy,
        addCoach,
        addStudent,
        getStudent,
        gymCoaches,
        academyInfo,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);

// const loadInfoAcademy = (idCoach: string) => {
//   apiKabit
//     .get(`coaches?userId=${idCoach}&_embed=students`, {
//       headers: {
//         Authorization: `Bearer ${academyInfo.token}`,
//       },
//     })
//     .then((response) => setGymInfo(response.data));
// };
