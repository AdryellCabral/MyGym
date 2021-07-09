import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";

import { GlobalStyle } from "./styles/global";
import jwt_decode from "jwt-decode";

const App = () => {
  const decoded = jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTYyNTc4ODAwOCwiZXhwIjoxNjI1NzkxNjA4LCJzdWIiOiI0In0.xSJI5i-FYpMC0gqIbueF5HH6ofRQtDdbl0iHbYKiMOw");
  console.log(decoded);
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
    </>
  );
};

export default App;
