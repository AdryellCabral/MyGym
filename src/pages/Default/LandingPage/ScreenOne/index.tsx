import { Container } from "./styles";
import Logo from "../../../../assets/logo.png";
import { useHistory } from "react-router-dom";

const ScreenOne = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <section className="apresentation">
      <Container>
        <header>
          <div className="containerHeader">
            <div className="containerLogo">
              <img src={Logo} alt="Logo" />
              <h1>My Gym</h1>
            </div>

            <button onClick={() => handleLogin()}>Login</button>
          </div>
          <p className="apresentationText">
          Conheça o My Gym, um serviço de gestão completo para impulsionar os resultados dos negócios de sua academia.
          </p>
        </header>

        <div className="container--infoMyGym">
          <div className="figPersonal"></div>
          <div className="container--text">
            <p>
              MygyM é um serviço baseado na web que visa transformar sua academia num negócio moderno, fácil de acessar e o melhor, contando com uma série de recursos que ajudam e facilitam a vida tanto dos alunos como dos coaches.
              <a href="#getNow"> Get now!</a>
            </p>
          </div>
        </div>

        <div className="backgroundFooterStart" />
      </Container>
    </section>
  );
};

export default ScreenOne;
