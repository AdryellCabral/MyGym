import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiMyGym } from "../../services/api";

interface ExercisesProvidersProps {
  children: ReactNode;
}

interface ExercisesProviderData {}

const ExercisesContext = createContext<ExercisesProviderData>(
  {} as ExercisesProviderData
);

export const ExercisesProvider = ({ children }: ExercisesProvidersProps) => {
  const [exercises, setExercises] = useState();

  const loadInfoExercises = (idExercises: string) => {
    apiMyGym
      .get("exercises")
      .then((response) => setExercises(response.data));
  };

  return (
    <ExercisesContext.Provider value={{}}>{children}</ExercisesContext.Provider>
  );
};

export const useExercises = () => useContext(ExercisesContext);
