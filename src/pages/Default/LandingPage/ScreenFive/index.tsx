import { Container, CarouselStyled } from "./styles";
import { useState } from "react";
import CardGetGroup from "../CardGetProduct";
const ScreenFive = () => {
  const [plans] = useState([
    {
      id: 1,
      title: "Plano Fit",
      description:
        "Plano para academias de pequeno porte: comporta até 80 alunos ativos e 4 coaches. Adiquira agora e já comece a usar!",
      price: 100,
    },
    {
      id: 1,
      title: "Plano Birl",
      description:
        "Plano para academias de médio porte: comporta até 140 alunos ativos e 8 coaches. Adiquira agora e já comece a usar!",
      price: 200,
    },
    {
      id: 1,
      title: "Plano Olympia",
      description:
        "Plano para academias de grande porte: comporta 140+ alunos ativos e 8+ coaches. Adiquira agora e já comece a usar!",
      price: 500,
    },
  ]);
  return (
    <section className="getProducts" style={{ width: "100%" }}>
      <Container>
        <header id="getNow">
          <h1>PLANOS</h1>
        </header>
        <CarouselStyled>
          {plans.map((item) => (
            <CardGetGroup key={item.id} plan={item}></CardGetGroup>
          ))}
        </CarouselStyled>
        <div className="backgroundFooter" />
      </Container>
    </section>
  );
};

export default ScreenFive;
