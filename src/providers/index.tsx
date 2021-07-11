import { AcademyProvider } from "./Academy";
import { WindowWidthProvider } from "./WindowWidth";

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return (
    <WindowWidthProvider>
      <AcademyProvider>{children}</AcademyProvider>;
    </WindowWidthProvider>
  );
};

export default Providers;
