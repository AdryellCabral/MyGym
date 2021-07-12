import { StudentProvider } from "./Student";
import { AcademyProvider } from "./Academy";
import { WindowWidthProvider } from "./WindowWidth";
import { CoachProvider } from "./Coach";
import { ExercisesProvider } from "./Exercises";

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return (
    <WindowWidthProvider>
      <AcademyProvider>
        <ExercisesProvider>
          <CoachProvider>
            <StudentProvider>{children}</StudentProvider>
          </CoachProvider>
        </ExercisesProvider>
      </AcademyProvider>
    </WindowWidthProvider>
  );
};

export default Providers;
