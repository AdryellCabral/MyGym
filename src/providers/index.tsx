import { StudentProvider } from "./Student";
import { WindowWidthProvider } from "./WindowWidth";

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return (
    <StudentProvider>
      <WindowWidthProvider>
        {children}
      </WindowWidthProvider>
    </StudentProvider>);
};

export default Providers;
