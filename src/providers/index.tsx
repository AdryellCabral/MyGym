import { AcademyProvider } from "./Academy";
interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return <AcademyProvider>{children}</AcademyProvider>;
};

export default Providers;
