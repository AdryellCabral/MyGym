import { Container, CarouselStyled } from "./styles";
import { useState } from "react";
import CardImageApp from "../CardImageApp";

const ScreenThree = () => {
  const [imgList] = useState([
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/b5/31/c7/b531c76caaea2955ca25d644450d3bed.jpg",
    },
  ]);
  return (
    <section style={{ width: "100%" }} className="carousel--app">
      <Container>
        <h1>App</h1>
        <CarouselStyled>
          {imgList.map((item: { id: number; img: string }) => (
            <CardImageApp key={item.id} backgroundUrl={item.img}></CardImageApp>
          ))}
        </CarouselStyled>
      </Container>
    </section>
  );
};

export default ScreenThree;
