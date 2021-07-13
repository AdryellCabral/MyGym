import styled from "styled-components";
import FigPersonalTrainer from "../../../assets/LandingPage/undraw_personal_trainer.svg";
import BackgroundFooterStart from "../../../assets/LandingPage/backgroundFooterStart.svg";
import BackgroundFooterStartDesk from "../../../assets/LandingPage/backgroundFooterStartDesk.svg";
import BackgroundScreenOneDesk from "../../../assets/LandingPage/backgroundScreenOneDesk.svg";
import BackgroundScreenOneMobile from "../../../assets/LandingPage/backgroundHeaderLandingPage.svg";
import BackgroundTopMedium from "../../../assets/LandingPage/backgroundTopMedium.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 568px;
  position: relative;
  overflow: hidden;

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
    background-size: 100%;
    background-position-y: -10%;
  }

  header {
    height: 35%;
    .containerHeader {
      margin-top: 8%;
      height: 18%;
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
      margin: 0 5%;
      margin-right: 10%;
      margin-top: 7%;

      color: white;
      font-size: 1rem;

      @media (min-width: 768px) {
        margin-top: 3%;
        max-width: 700px;
        margin-left: 5%;
        font-size: 1.8rem;
        margin-bottom: 2%;
      }
    }
  }

  .container--infoMyGym {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    margin-top: 10%;

    @media (min-width: 768px) {
      align-items: center;
      margin-top: 0%;
      height: 60%;
    }

    @media (min-width: 1200px) {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    }

    .figPersonal {
      background-image: url(${FigPersonalTrainer});
      height: 50%;
      width: 100%;
      background-size: 35vh;
      background-repeat: no-repeat;
      background-position: right;
      align-self: flex-end;
      max-width: 410px;
      margin-bottom: 5%;

      @media (min-width: 768px) {
        margin-bottom: 0%;
        margin-top: 3%;
        max-width: 600px;
        background-size: 45vh;
      }
      @media (min-width: 1200px) {
        height: 80%;
        max-width: 600px;
        background-size: 65vh;
        align-self: flex-start;
        margin-right: 3%;
      }
    }

    .container--text {
      height: 35%;
      width: 100%;
      display: flex;
      align-items: center;

      @media (min-width: 1200px) {
        align-items: flex-end;
        margin-top: 2%;
      }

      p {
        padding: 0 5%;
        color: black;
        font-size: 4.5vw;
        max-width: 500px;

        height: 70%;

        @media (min-width: 768px) {
          height: 30%;
          max-width: 680px;
          font-size: 1.8rem;
          margin-bottom: 0;
          padding: 0;
          margin-left: 5%;
          margin-top: 4%;
        }

        @media (min-width: 1200px) {
          max-width: 800px;
          margin-left: 7%;
        }

        a {
          color: var(--color-green);
          text-decoration: none
        }
      }
    }
  }

  .backgroundFooterStart {
    background-image: url(${BackgroundFooterStart});
    height: 15%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: auto;

    @media (min-width: 768px) {
      background-image: url(${BackgroundFooterStartDesk});
    }
  }
`;
