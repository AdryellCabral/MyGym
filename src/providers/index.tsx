import { AcademyProvider } from "./Academy";
import { WindowWidthProvider } from "./WindowWidth";
import { CoachProvider } from "./Coach";
interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return (
    <WindowWidthProvider>
      <AcademyProvider>
        <CoachProvider>{children}</CoachProvider>
      </AcademyProvider>
    </WindowWidthProvider>
  );
};

export default Providers;
