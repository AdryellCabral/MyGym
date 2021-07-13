import styled from "styled-components";
import BackgroundHeaderScreenFive from "../../../assets/LandingPage/backgroundHeaderScreenTwo.svg";
import backgroundFooter from "../../../assets/LandingPage/backgroundFooterScreenFour.svg";
import BackgroundHeaderScreenTwoDesk from "../../../assets/LandingPage/backgroundHeaderScreenTwoDesk.svg";
import BackgroundFooterDesk from "../../../assets/LandingPage/backgroundFooterDesk.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;

  background-image: url(${BackgroundHeaderScreenFive});
  background-size: 120% auto;
  background-repeat: no-repeat;
  background-position: top;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1200px) {
    background-image: url(${BackgroundHeaderScreenTwoDesk});
    background-size: 110%;
    background-position-y: -12%;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    margin-bottom: 15%;

    @media (min-width: 768px) {
      align-items: flex-end;
    }

    @media (min-width: 1200px) {
      margin-bottom: 5%;
      height: 10%;
    }

    h1 {
      color: white;
      font-weight: bolder;
      font-size: 1.1rem;
      font-family: "Bill";

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .backgroundFooter {
    background-image: url(${backgroundFooter});
    height: 15%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: auto;

    @media (min-width: 1200px) {
      background-image: url(${BackgroundFooterDesk});
    }
  }
`;

export const CarouselStyled = styled(Carousel)`
  height: 65vh;
  width: 80%;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 5vh;

  @media (min-width: 768px) {
    height: 60vh;
  }

  @media (min-width: 1200px) {
    height: 40vh;
  }

  .carousel {
  }

  @media (min-width: 768px) {
    .carousel.carousel-slider .control-arrow {
      /* background-color: #8f5affc7; */
    }
  }
`;
