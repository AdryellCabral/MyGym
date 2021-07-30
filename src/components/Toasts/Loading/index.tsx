import AutorenewIcon from "@material-ui/icons/Autorenew";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "./styles";

interface ToastLoadingProps {
  children: React.ReactNode;
}

export const ToastLoading = ({ children }: ToastLoadingProps) => {
  return (
    <ToastContainer>
      <p>{children}</p> <AutorenewIcon id="icon" />
    </ToastContainer>
  );
};
