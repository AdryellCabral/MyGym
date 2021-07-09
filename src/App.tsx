import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import "./styles/font.css";
import "./assets/fonts/postnobillscolombo-bold.ttf";
import GreenButton from "./components/GreenButton";
import RedButton from "./components/RedButton";
import PurpleButton from "./components/PurpleButton";
import { GlobalStyle } from "./styles/global";

const App = () => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  const handleClick = () => {
    console.log("oi");
  };
  return (
    <>
      <GreenButton onClick={handleClick} small>
        ADD
      </GreenButton>
      <RedButton onClick={handleClick} size="large">
        REMOVE
      </RedButton>
      <PurpleButton onClick={handleClick} small>
        CADASTRAR
      </PurpleButton>

      {typeUser === "" ? (
        <DefaultRoutes />
      ) : (
        <>
          {typeUser === "academy" && <AcademyRoutes />}
          {typeUser === "coach" && <CoachRoutes />}
          {typeUser === "student" && <StudentRoutes />}
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
