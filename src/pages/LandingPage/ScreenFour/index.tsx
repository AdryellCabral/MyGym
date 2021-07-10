import { Container } from "./styles";
import FigScreenFour from "../../../assets/LandingPage/FigScreenFour.svg";
import { ReactComponent as Arrow } from "../../../assets/LandingPage/Arrow.svg";
const ScreenFour = () => {
  return (
    <section style={{ width: "100%" }}>
      <Container>
        <figure>
          <img src={FigScreenFour} alt="Pessoas malhando" />
        </figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa maxime
          impedit nulla cupiditate similique delectus labore velit enim odio
          assumenda alias officia cum itaque reprehenderit, accusamus est,
          soluta excepturi illo? <br /> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ipsa maxime impedit nulla cupiditate similique
          delectus labore velit enim odio assumenda alias officia cum itaque
          reprehenderit, accusamus est, soluta excepturi illo?
        </p>
        <Arrow className="arrow"></Arrow>
        <div className="backgroundFooter" />
      </Container>
    </section>
  );
};

export default ScreenFour;
