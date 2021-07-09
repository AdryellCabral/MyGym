import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";

import { GlobalStyle } from "./styles/global";

//provisório
import Header from "./components/Header";
import { WindowWidthProvider } from './providers/WindowWidth';


const App = () => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  return (
    <>
      {typeUser === "" ? (
        <DefaultRoutes />
      ) : (
        <>
          {typeUser === "academys" && <AcademyRoutes />}
          {typeUser === "coaches" && <CoachRoutes />}
          {typeUser === "students" && <StudentRoutes />}
        </>
      )}
      <GlobalStyle />

      {/* COLOQUEI AQUI DE MANEIRA PROVISÓRIA APENAS PARA EFEITO DE VIZUALIZAÇÃO */}
      <WindowWidthProvider>
        <Header/>
      </WindowWidthProvider>
    </>
  );
};

export default App;
