import styled from "styled-components";
import BackgroundHeaderScreenFive from "../../../assets/LandingPage/backgroundHeaderScreenTwo.svg";
import backgroundFooter from "../../../assets/LandingPage/backgroundFooterScreenFour.svg";

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

  .backgroundFooter {
    background-image: url(${backgroundFooter});
    height: 15%;
    background-size: cover;
    /* background-color: var(--color-light); */
    background-repeat: no-repeat;
    margin-top: auto;
  }
`;
