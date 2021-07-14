import { StudentProvider } from "./Student";
import { AcademyProvider } from "./Academy";
import { WindowWidthProvider } from "./WindowWidth";
import { CoachProvider } from "./Coach";
import { ExercisesProvider } from "./Exercises";
import { UserProvider } from "./User";

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return (
    <WindowWidthProvider>
      <UserProvider>
        <AcademyProvider>
          <ExercisesProvider>
            <CoachProvider>
              <StudentProvider>{children}</StudentProvider>
            </CoachProvider>
          </ExercisesProvider>
        </AcademyProvider>
      </UserProvider>
    </WindowWidthProvider>
  );
};

export default Providers;
