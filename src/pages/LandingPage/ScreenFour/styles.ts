import styled from "styled-components";
import backgroundFooter from "../../../assets/LandingPage/backgroundFooterScreenFour.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;

  display: flex;
  flex-direction: column;

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

  .backgroundFooter {
    background-image: url(${backgroundFooter});
    height: 15%;
    background-size: cover;
    /* background-color: var(--color-light); */
    background-repeat: no-repeat;
    margin-top: auto;
  }

  .arrow {
    margin-top: auto;
    align-self: center;

    @media (min-width: 768px) {
      align-self: center;
      cursor: pointer;
      width: 30px;
    }
  }
`;
