import styled from "styled-components";
import BackgroundHeaderScreenTwo from "../../../assets/LandingPage/backgroundHeaderScreenTwo.svg";

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

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;

    h1 {
      color: white;
      font-weight: bolder;
      font-size: 1.1rem;
    }
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    img {
      width: 70%;
    }
  }

  p {
    margin: 0 5%;
    margin-top: 10%;
    font-size: 1rem;
    line-height: 1.1;
  }
`;
