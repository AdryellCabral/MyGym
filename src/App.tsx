import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import { useAcademy } from "./providers/Academy";
import { GlobalStyle } from "./styles/global";

const App = () => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }
  const { gymCoaches, getStudent } = useAcademy ();

  const teste = () => {
    // getStudent();
  };

  const testa = () => {
    console.log(gymCoaches);
  };
  return (
    <>
      {/* <button onClick={teste}>Enviar</button> */}
      <button onClick={testa}>Enviar2</button>
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
