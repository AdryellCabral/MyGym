import { Container } from "./styles";
import Logo from "../../../assets/logo.png";

const ScreenOne = () => {
  return (
    <section className="apresentation">
      <Container>
        <header>
          <div className="containerHeader">
            <img src={Logo} alt="Logo" />
            <button>Login</button>
          </div>
          <p className="apresentationText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            repellat hic eveniet harum eius id qui praesentium natus aut alias.
            Eveniet vel rem omnis natus veniam blanditiis? Tempore, ad debitis.
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </header>

        <div className="container--infoMyGym">
          <div className="figPersonal"></div>
          <div className="container--text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              repellat hic eveniet harum eius id qui praesentium natus aut
              alias. Eveniet vel rem omnis natus veniam blanditiis? Tempore, ad
              debitis.
              <span> Get now!</span>
            </p>
          </div>
        </div>

        <div className="backgroundFooterStart" />
      </Container>
    </section>
  );
};

export default ScreenOne;
