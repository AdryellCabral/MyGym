import { Container, CarouselStyled } from "./styles";
import { useState } from "react";
import CardGetGroup from "../CardGetProduct";
const ScreenFive = () => {
  const [plans] = useState([
    {
      id: 1,
      title: "Plano Birl",
      description:
        "Plano para academias pequenas, comporta 80 alunos ativos e 4 coachs. Adiquira agora e já comece a usar!",
      price: 200,
    },
    {
      id: 1,
      title: "Plano Birl",
      description:
        "Plano para academias pequenas, comporta 80 alunos ativos e 4 coachs. Adiquira agora e já comece a usar!",
      price: 200,
    },
    {
      id: 1,
      title: "Plano Birl",
      description:
        "Plano para academias pequenas, comporta 80 alunos ativos e 4 coachs. Adiquira agora e já comece a usar!",
      price: 200,
    },
  ]);
  return (
    <section className="getProducts" style={{ width: "100%" }}>
      <Container>
        <header id="getNow">
          <h1>Informações sobre o produto</h1>
        </header>
        <CarouselStyled >
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
