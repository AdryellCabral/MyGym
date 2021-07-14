import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import { GlobalStyle } from "./styles/global";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Exercices from "./pages/Exercices";
=======
>>>>>>> feat/HomeStudent
>>>>>>> feat/exercices
import Header from "./components/Header";

const App = () => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  return (
    <>
      {typeUser === "" ? (
        // <DefaultRoutes />
        <>
          <Header />
          <StudentRoutes />
        </>
      ) : (
        <>
          <Header />
          {typeUser === "academys" && <AcademyRoutes />}
          {typeUser === "coaches" && <CoachRoutes />}
          {typeUser === "students" && <StudentRoutes />}
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
