import { ToastContainer, Flip, Zoom } from "react-toastify";
import styled from "styled-components";


export const ToastContainerStyled = styled(ToastContainer).attrs({
    position: "top-center",
    transition: Zoom,
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true,
  })`
    .Toastify__toast {
      width: 250px;
      height: 150px;
      font-size: 1.2rem;
      text-align: center;
      color: white;
    }
    .registerSuccess {
      background-color: var(--dark-purple);
      span {
        font-size: 1.4rem;
        font-family: var(--title-font);
        color: var(--light-green);
      }
    }
  
    .registerFail {
      background-color: var(--color-red);
      color: white;
  
      span {
        font-size: 1.4rem;
        font-family: var(--title-font);
        color: var(--light-green);
      }
  
     
    }
  
  
    .loadingToast {
        background-color: #f7f7f7;
        p,svg {
          color: #000;
        }
      }
  `;
  