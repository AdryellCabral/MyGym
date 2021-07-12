import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiMyGym } from "../../services/api";
import { useEffect } from "react";

interface CoachProvidersProps {
  children: ReactNode;
}

interface InfosToLogin {
  email: string;
  password: string;
}

interface CoachInformation {
  token: string;
  id: any;
}

interface Workout {
  treino: string;
  peso: number;
}

interface Workouts {
  workouts: Workout;
}

interface Snack {
  snack: string;
}

interface Snacks {
  snacks: Snack;
}

interface Assessment {
  peso: number;
  icm: number;
}

interface PhysicalAssessment {
  physicalAssessment: Assessment;
}

interface CoachProviderData {
  loginCoach: (info: InfosToLogin) => void;
  loadInfoCoach: (idCoach: string) => void;
  updadteWorkouts: (idStudent: string, workoutData: Workouts) => void;
  updadteSnacks: (idStudent: string, snacksData: Snacks) => void;
  updadtePhysicalAssessment: (
    idStudent: string,
    physicalAssessmentData: PhysicalAssessment
  ) => void;
  coachAuthInfo: any;
  coachResume: any;
}

const CoachContext = createContext<CoachProviderData>({} as CoachProviderData);

export const CoachProvider = ({ children }: CoachProvidersProps) => {
  const idCoach = localStorage.getItem("@idAcademy") || "";

  const [coachAuthInfo, setCoachAuthInfo] = useState({} as CoachInformation);
  const [coachResume, setCoachResume] = useState();

  const loginCoach = (info: InfosToLogin) => {
    apiMyGym.post("login", info).then((response) => {
      const { accessToken } = response.data;
      const { sub } = jwtDecode<JwtPayload>(accessToken);
      setCoachAuthInfo({ token: accessToken, id: sub });
      localStorage.setItem("@tokenCoach", JSON.stringify(accessToken));
      localStorage.setItem("@idCoach", JSON.stringify(sub));
    });
  };

  const loadInfoCoach = (idCoach: string) => {
    apiMyGym
      .get(`coaches?userId=${idCoach}&_embed=students`, {
        headers: {
          Authorization: `Bearer ${coachAuthInfo.token}`,
        },
      })
      .then((response) => setCoachResume(response.data));
  };

  const updadteWorkouts = (idStudent: string, workoutData: Workouts) => {
    apiMyGym.patch(`students/${idStudent}`, workoutData);
  };

  const updadteSnacks = (idStudent: string, snacksData: Snacks) => {
    apiMyGym.patch(`students/${idStudent}`, snacksData);
  };

  const updadtePhysicalAssessment = (
    idStudent: string,
    physicalAssessmentData: PhysicalAssessment
  ) => {
    apiMyGym.patch(`students/${idStudent}`, physicalAssessmentData);
  };

  useEffect(() => {
    if (localStorage.getItem("@idCoach") !== "") {
      loadInfoCoach(idCoach);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CoachContext.Provider
      value={{
        loginCoach,
        loadInfoCoach,
        updadteWorkouts,
        updadteSnacks,
        updadtePhysicalAssessment,
        coachAuthInfo,
        coachResume,
      }}
    >
      {children}
    </CoachContext.Provider>
  );
};

export const useCoach = () => useContext(CoachContext);
