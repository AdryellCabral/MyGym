import { StudentProvider } from "./Student";

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return (
    <StudentProvider>
      {children}
    </StudentProvider>);
};

export default Providers;
