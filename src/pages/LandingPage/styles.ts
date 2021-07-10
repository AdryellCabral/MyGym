import styled from "styled-components";
import FigPersonalTrainer from "../../assets/LandingPage/undraw_personal_trainer.svg";
import BackgroundFooterStart from "../../assets/LandingPage/backgroundFooterStart.svg";
import BackgroundScreenOneDesk from "../../assets/LandingPage/backgroundScreenOneDesk.svg";

import BackgroundScreenOneMobile from "../../assets/LandingPage/backgroundHeaderLandingPage.svg";
import BackgroundTopMedium from "../../assets/LandingPage/backgroundTopMedium.svg";
import BackgroundHeaderScreenTwo from "../../assets/LandingPage/backgroundHeaderScreenTwo.svg";

export const ContainerScreenOne = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;

  background-image: url(${BackgroundScreenOneMobile});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: top;

  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    background-image: url(${BackgroundTopMedium});
  }

  @media (min-width: 1200px) {
    background-image: url(${BackgroundScreenOneDesk});
    background-position-y: -25%;
  }

  .containerHeader {
    margin-top: 4%;
    height: 8%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;

    @media (min-width: 768px) {
      margin-top: 2%;
    }

    img {
      width: 60px;
      height: 25px;

      @media (min-width: 768px) {
        width: 90px;
        height: 40px;
      }
    }
    button {
      padding: 4px;
      padding-top: 6px;
      padding-bottom: 6px;
      background-color: var(--light-purple);
      border: none;
      border-radius: 3px;
      width: 80px;
      color: white;
      font-size: 1rem;

      @media (min-width: 768px) {
        width: 120px;
        padding: 10px;
        font-size: 1.5rem;
      }
    }
  }

  .apresentationText {
    margin-top: 7%;
    padding: 0 5%;
    color: white;
    font-size: 1rem;

    @media (min-width: 768px) {
      margin-top: 3%;
      max-width: 700px;
      padding: 0 5%;
      font-size: 1.5rem;
      margin-bottom: 2%;
    }

    span {
      color: var(--color-green);
    }
  }
  .container--infoMyGym {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    margin-top: 10%;

    @media (min-width: 768px) {
      align-items: center;
      margin-top: 0%;
      height: 60%;
      justify-content: space-around;
    }

    .figPersonal {
      background-image: url(${FigPersonalTrainer});
      height: 68%;
      width: 84%;
      background-size: 100%;
      background-repeat: no-repeat;
      align-self: flex-end;
      max-width: 410px;
      margin-bottom: 5%;

      @media (min-width: 768px) {
        /* align-self: auto; */
        margin-bottom: 0%;
        margin-top: 3%;
        max-width: 600px;
      }

      @media (min-width: 768px) {
        max-width: none;
        width: 400px;
        position: absolute;
      }
    }

    p {
      padding: 0 5%;
      color: black;
      font-size: 1rem;
      max-width: 500px;
      margin-bottom: 4%;

      @media (min-width: 768px) {
        height: 30%;
        max-width: 680px;
        font-size: 1.6rem;
        padding: 0 2%;
        margin-bottom: 0;
        align-self: flex-start;
        margin-left: 5%;
        margin-top: 4%;
      }
    }
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

  .backgroundFooterStart {
    background-image: url(${BackgroundFooterStart});
    height: 15%;
    background-size: cover;
    /* background-color: var(--color-light); */
    background-repeat: no-repeat;
    margin-top: auto;
  }
`;

export const ContainerScreenTwo = styled.div`
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
`;
