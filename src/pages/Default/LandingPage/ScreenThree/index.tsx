import { Container, CarouselStyled } from "./styles";
import { useState } from "react";
import CardImageApp from "../CardImageApp";
import { carrouselImages } from "../../../../assets/images/info";

const ScreenThree = () => {
  const [imgList] = useState([
    {
      id: 1,
      img: carrouselImages[0].img,
    },
    {
      id: 2,
      img: carrouselImages[1].img,
    },
    {
      id: 3,
      img: carrouselImages[2].img,
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
