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
          <CoachProvider>{children}</CoachProvider>
        </ExercisesProvider>
      </AcademyProvider>
    </WindowWidthProvider>
  );
};

export default Providers;
