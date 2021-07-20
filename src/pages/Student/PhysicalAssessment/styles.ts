import styled from "styled-components";
import "../../../styles/animations.css"

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 100px;
  width: 100%;
 
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.1rem;
    font-weight: bolder;
    margin-left: 5%;
    margin-bottom: 5%;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
      margin-bottom: 4%;
      margin-top: 2%;
    }
  }

  .container--af {
    width: 100%;
    height: 75vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1200px) {
      flex-direction: row;
      width: 90%;
      height: 70vh;
      margin: 0 auto;
    }

    ul {
      list-style: none;
      height: 35%;
      margin-left: 5%;
      animation: scaleUp 0.5s ease-in-out;
      width: 90%;
      margin-bottom: 3%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #f8f8f8;
      padding: 2%;
      border-radius: 3px;

      -webkit-box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);
      box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);

      @media (min-width: 1200px) {
        max-width: 650px;
        height: 80%;
        margin-left: 0;
      }

      li {
        font-weight: bolder;

        @media (min-width: 768px) {
          font-size: 1.2rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
        span {
          font-weight: 400;
        }
      }
    }

    .figure {
      animation: translateXLeft 0.5s ease-in-out;
      background-image: url(${({ img }) => img});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 5%;
      width: 95%;
      height: 60%;
      margin: 0 auto;

      @media (min-width: 768px) {
        height: 60%;
      }

      @media (min-width: 1200px) {
        max-width: 650px;
        margin: 0;
        height: 80%;
        background-position: center bottom;
      }
    }
  }
`;
