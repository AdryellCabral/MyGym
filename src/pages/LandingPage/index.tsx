import { ContainerScreenOne } from "./styles";
import Logo from "../../assets/logo.png";
import { ReactComponent as Arrow } from "../../assets/LandingPage/Arrow.svg";
import ScreenTwo from "./ScreenTwo";
import ScreenThree from "./ScreenThree";
import ScreenFour from "./ScreenFour";
import ScreenFive from "./ScreenFive";
const LandingPage = () => {
  return (
    <section className="landingPage">
      <ContainerScreenOne>
        <header className="containerHeader">
          <img src={Logo} alt="Logo" />
          <button>Login</button>
        </header>
        <p className="apresentationText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          repellat hic eveniet harum eius id qui praesentium natus aut alias.
          Eveniet vel rem omnis natus veniam blanditiis? Tempore, ad debitis.
          Lorem ipsum dolor sit amet, consectetur.
          <span> Get now!</span>
        </p>
        <div className="container--infoMyGym">
          <div className="figPersonal"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            repellat hic eveniet harum eius id qui praesentium natus aut alias.
            Eveniet vel rem omnis natus veniam blanditiis? Tempore, ad debitis.
          </p>
        </div>
        <Arrow className="arrow"></Arrow>

        <div className="backgroundFooterStart" />
      </ContainerScreenOne>
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
    </section>
  );
};

export default LandingPage;
