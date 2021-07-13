import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import { GlobalStyle } from "./styles/global";
import Workouts from "./pages/Workouts";
import Exercices from "./pages/Exercices";
import Students from "./pages/Students";

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
      <Exercices />
      <Students />
    </>
  );
};

export default App;
