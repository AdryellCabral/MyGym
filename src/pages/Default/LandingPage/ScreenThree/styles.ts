import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    height: 45%;
    margin-top: 12%;
  }

  h1 {
    font-family: "Bill", sans-serif;
    font-size: 1.3rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1200px) {
      margin-top: 22%;
      margin-bottom: 3%;
    }
  }
`;

export const CarouselStyled = styled(Carousel)`
  height: 100vh;
  width: 80%;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 5vh;
  border-radius: 3px;

  @media (min-width: 768px) {
    max-width: 500px;
  }
  @media (min-width: 1200px) {
    height: 60vh;
    margin-top: 0;
  }

  .carousel {
  }

  @media (min-width: 768px) {
    .carousel.carousel-slider .control-arrow {
      background-color: #8f5affc7;
    }
  }
`;
