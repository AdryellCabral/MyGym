import styled from "styled-components";
import BackgroundHeaderScreenTwo from "../../../../assets/LandingPage/backgroundHeaderScreenTwo.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;

  background-image: url(${BackgroundHeaderScreenTwo});
  background-size: 120% auto;
  background-repeat: no-repeat;
  background-position: top;

  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    background-image: none;
    background-size: 110%;
    height: 45%;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;

    @media (min-width: 1200px) {
      display: none;
    }

    h1 {
      color: white;
      font-weight: bolder;
      font-size: 1.5rem;
      font-family: "Bill";

      @media (min-width: 768px) {
        font-size: 2rem;
      }
      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;

    @media (min-width: 768px) {
      margin-top: 14%;
    }

    @media (min-width: 1200px) {
      margin-top: 27%;
    }
    img {
      width: 70%;

      @media (min-width: 1200px) {
        width: 50%;
      }
    }
  }

  p {
    margin: 0 10%;
    margin-top: 10%;
    font-size: 1rem;
    line-height: 1.1;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.1rem;
      margin-top: 2%;
    }
  }
`;
