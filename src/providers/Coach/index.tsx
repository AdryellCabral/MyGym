import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiKabit } from "../../services/api";
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

interface CoachProviderData {}

const CoachContext = createContext<CoachProviderData>({} as CoachProviderData);

export const CoachProvider = ({ children }: CoachProvidersProps) => {
  const idCoach = localStorage.getItem("@idAcademy") || "";

  const [coachInfo, setCoachInfo] = useState({} as CoachInformation);
  const [coachResume, setCoachResume] = useState();

  const acess = "ss";

  const loginCoach = (info: InfosToLogin) => {
    apiKabit.post("login", info).then((response) => {
      const { accessToken } = response.data;
      const { sub } = jwtDecode<JwtPayload>(accessToken);
      setCoachInfo({ token: accessToken, id: sub });
      localStorage.setItem("@tokenCoach", JSON.stringify(accessToken));
      localStorage.setItem("@idCoach", JSON.stringify(sub));
    });
  };

  const loadInfoCoach = (idCoach: string) => {
    apiKabit
      .get(`coaches?userId=${idCoach}&_embed=students`, {
        headers: {
          Authorization: `Bearer ${acess}`,
        },
      })
      .then((response) => setCoachResume(response.data));
  };

  const updadteWorkouts = (idStudent: string, workoutData: Workouts) => {
    apiKabit.patch(`students/${idStudent}`, workoutData);
  };

  const updadteSnacks = (idStudent: string, snacksData: Snacks) => {
    apiKabit.patch(`students/${idStudent}`, snacksData);
  };

  const updadtePhysicalAssessment = (
    idStudent: string,
    physicalAssessmentData: PhysicalAssessment
  ) => {
    apiKabit.patch(`students/${idStudent}`, physicalAssessmentData);
  };


  useEffect(() => {
    if (localStorage.getItem("@idCoach") !== "") {
        loadInfoCoach(idCoach);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return <CoachContext.Provider value={{}}>{children}</CoachContext.Provider>;
};

export const useCoach = () => useContext(CoachContext);
