import { useEffect, useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import { apiMyGym } from "../../services/api";

interface ExercisesProvidersProps {
  children: ReactNode;
}

interface ExercisesProviderData {
  loadExercises: () => void;
  exercises: any;
}

const ExercisesContext = createContext<ExercisesProviderData>(
  {} as ExercisesProviderData
);

export const ExercisesProvider = ({ children }: ExercisesProvidersProps) => {
  const [exercises, setExercises] = useState();

  const loadExercises = () => {
    apiMyGym.get("exercises").then((response) => setExercises(response.data[0]));
  };

  useEffect(() => {
    loadExercises();
  },[])

  return (
    <ExercisesContext.Provider value={{ loadExercises, exercises }}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercises = () => useContext(ExercisesContext);
