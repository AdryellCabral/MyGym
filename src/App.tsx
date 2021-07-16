import AcademyRoutes from "./routes/academy";
import CoachRoutes from "./routes/coach";
import StudentRoutes from "./routes/student";
import DefaultRoutes from "./routes/default";
import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import { useUserProvider } from "./providers/User";

const App = () => {
  const {
    userProvider: { typeUser },
  } = useUserProvider();

  return (
    <>
      {!typeUser ? (
        <>
          <DefaultRoutes />
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
