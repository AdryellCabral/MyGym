import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainerStyled } from "./styles/global";

import Providers from "./providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <ToastContainerStyled />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
