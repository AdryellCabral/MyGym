import { Container } from "./styles";
import FigPageTwo from "../../../../assets/LandingPage/FigOnePageTwo.svg";
const ScreenTwo = () => {
  return (
    <section className="info--Product" style={{ width: "100%" }}>
      <Container>
        <header>
          <h1>Informações sobre o produto</h1>
        </header>
        <figure>
          <img src={FigPageTwo} alt="Pessoas malhando" />
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
      </Container>
    </section>
  );
};

export default ScreenTwo;
