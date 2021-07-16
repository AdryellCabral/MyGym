import { Container } from "./styles";
import FigScreenFour from "../../../../assets/LandingPage/FigScreenFour.svg";

const ScreenFour = () => {
  return (
    <section style={{ width: "100%" }} className="benefits">
      <Container>
        <figure>
          <img src={FigScreenFour} alt="Pessoas malhando" />
        </figure>
        <p>
          Os alunos de sua academia poderão acompanhar seu progresso, passo a passo, desde o ínicio de sua primeira rotina de treinamento, acompanhando o histórico de evolução conforme o tempo passa.
        </p>
        <div className="backgroundFooter" />
      </Container>
    </section>
  );
};

export default ScreenFour;
