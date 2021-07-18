import AutorenewIcon from "@material-ui/icons/Autorenew";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "./styles";


export const ToastLoading = () => {
  return (
    
      <ToastContainer>
        <p>Aguarde enquanto criamos a conta. </p> <AutorenewIcon id="icon" />
      </ToastContainer>
    
  );
};
