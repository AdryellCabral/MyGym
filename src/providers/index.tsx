import { WindowWidthProvider } from "./WindowWidth";

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return <WindowWidthProvider>{children}</WindowWidthProvider>;
};

export default Providers;
