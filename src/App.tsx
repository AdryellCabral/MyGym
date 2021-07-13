import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import RegisterUser from "./pages/RegisterUser";

const App = () => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  return (
    <>
    <RegisterUser/>
      {/* {typeUser === "" ? (
        <DefaultRoutes />
      ) : (
        <>
          {typeUser === "academys" && (
            <>            
              <Header /> 
              <AcademyRoutes />
            </>
          )}
          {typeUser === "coaches" && <CoachRoutes />}
          {typeUser === "students" && <StudentRoutes />}
        </>
      )} */}
      <GlobalStyle />
    </>
  );
};

export default App;
