import styled from "styled-components";
import backgroundFooter from "../../../assets/LandingPage/backgroundFooterScreenFour.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    height: 45%;
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;

    @media (min-width: 1200px) {
      margin-top: 15%;
    }

    img {
      width: 80%;

      @media (min-width: 1200px) {
        width: 70%;
      }
    }
  }

  p {
    margin: 0 10%;
    margin-top: 10%;
    font-size: 1rem;
    line-height: 1.1;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
    @media (min-width: 1200px) {
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

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;
