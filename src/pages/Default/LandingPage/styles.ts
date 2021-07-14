import styled from "styled-components";
import BackgroundHeaderScreenTwoDesk from "../../../assets/LandingPage/backgroundHeaderScreenTwoDesk.svg";
import BackgroundFooterDesk from "../../../assets/LandingPage/backgroundFooterDesk.svg";

export const ContainerDesk = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-image: url(${BackgroundHeaderScreenTwoDesk});
  background-size: 110%;
  background-position-y: -12%;
  background-repeat: no-repeat;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;

    margin-top: 3%;

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

  .container--info {
    height: 70%;
    display: flex;
    justify-content: space-evenly;
  }

  .backgroundFooter {
    background-image: url(${BackgroundFooterDesk});
    height: 60%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: auto;
  }
`;
