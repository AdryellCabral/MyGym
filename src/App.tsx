import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";

import { GlobalStyle } from "./styles/global";

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
