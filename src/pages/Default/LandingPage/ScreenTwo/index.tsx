import { Container } from "./styles";
import FigPageTwo from "../../../../assets/LandingPage/FigOnePageTwo.svg";
const ScreenTwo = () => {
  return (
    <section className="info--Product" style={{ width: "100%" }}>
      <Container>
        <header>
          <h1>APLICAÇÃO</h1>
        </header>
        <figure>
          <img src={FigPageTwo} alt="Pessoas malhando" />
        </figure>
        <p>
          Faça a gestão dos alunos e dos coaches diretamente pela plataforma, de qualquer lugar, até mesmo do seu smartphone!
        </p>
        <p>
          Esqueça as fichas de papel, os alunos poderão ter seus treinos na palma de suas mãos, através de seus telefones. Os treinos podem ser atualizados pelos coaches a qualquer momento.
        </p>
      </Container>
    </section>
  );
};

export default ScreenTwo;
