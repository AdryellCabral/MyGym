import styled from "styled-components";

interface PercentageBarProps {
  percentage: number;
}

export const Container = styled.div<PercentageBarProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  margin-top: 80px;
  margin-bottom: 2vh;

  @keyframes translateYUp {
    from {
      transform: translateY(50%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes translateYDown {
    from {
      transform: translateY(-50%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
    justify-content: none;
  }

  .container--user {
    width: 100%;
    animation: translateYDown 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 0 5%;

    @media (min-width: 768px) {
      width: 90%;
      flex-direction: row;
      justify-content: center;
      gap: 5%;
      align-items: center;
      padding: 0 0 0 5%;
      margin-top: 30px;
    }

    @media (min-width: 1024px) {
      width: 100%;
      padding: 0;
      margin: 0;
      gap: 5%;
    }

    .status {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;

      width: 75%;

      figure {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;

        @media (min-width: 768px) {
          width: 90%;
          height: 100%;
          flex-direction: column;
          align-items: center;
        }
        img {
          object-fit: cover;
          width: 8vh;
          height: 8vh;
          border: 2px solid black;
          background-color: black;
          border-radius: 50px;

          @media (min-width: 768px) {
            width: 12vh;
            height: 12vh;
            border-radius: 100%;
          }

          @media (min-width: 1200px) {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            /* border-radius: 5px; */
          }
        }

        figcaption {
          font-weight: bolder;
          align-self: center;
          font-size: 1.1rem;
          width: 250px;
          margin-left: 5px;
          /* margin-left: 15px; */

          @media (min-width: 768px) {
            margin-top: 1%;
            font-size: 1rem;
            margin-left: 0;
            width: 100%;
            text-align: center;
          }

          @media (min-width: 1200px) {
            font-size: 1.3rem;
          }
        }
      }
    }

    .trainingPerformed {
      width: 90%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (min-width: 768px) {
        /* margin-top: auto; */
      }
      @media (min-width: 1200px) {
        /* align-self: flex-end; */
        width: 100%;
        /* height: auto; */
      }

      h2 {
        margin-top: 10%;
        margin-bottom: 2%;
        font-weight: bolder;

        @media (min-width: 768px) {
          font-size: 1rem;
          margin-top: 0;
        }

        @media (min-width: 1200px) {
          font-size: 1.3rem;
        }
      }

      .percentageBar {
        border: 1px solid var(--light-black);
        border-radius: 2px;
        background-color: var(--light-black);
        width: 100%;
        height: 40px;
        margin-bottom: 5%;

        @media (min-width: 1200px) {
          height: 60px;
          margin-bottom: 0;
        }
        > div {
          background-color: var(--color-green);
          height: 100%;
          width: ${({ percentage }) => percentage}%;

          display: flex;
          align-items: center;

          span {
            color: white;
            margin-left: 5%;

            @media (min-width: 768px) {
              font-size: 1rem;
            }
            @media (min-width: 1200px) {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
  .boxs {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex-direction: row;
      /* padding: 0; */
      margin-top: 5%;
      /* height: 75vh; */
    }
    @media (min-width: 1200px) {
      padding: 0;
    }
    .workouts--chart {
      width: 100%;
      animation: translateYUp 0.5s ease-in-out;

      @media (min-width: 768px) {
        width: 40vw;
      }

      @media (min-width: 1200px) {
        width: 40vw;
      }

      h2 {
        margin-bottom: 2%;
        font-weight: bolder;
        @media (min-width: 768px) {
          font-size: 1.5rem;
        }

        @media (min-width: 1200px) {
          margin-bottom: 0;
          font-size: 1.5rem;
          display: block;
          height: 5vh;
        }
      }
      ul {
        background-color: var(--color-black);
        color: var(--light-gray);
        border-radius: 5px;
        max-height: 150px;
        overflow-y: auto;
        li {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 8px;
        }
      }
      > div {
        height: 30vh;
        width: 100%;
        border: 1px solid black;
        border-radius: 2px;
        margin-bottom: 5%;

        @media (min-width: 768px) {
          height: 40vh;
        }

        @media (min-width: 1200px) {
          /* height: 45%; */
          /* width: 45%; */
        }
      }
    }
    .progression--chart {
      width: 100%;
      animation: translateYUp 0.5s ease-in-out;

      @media (min-width: 768px) {
        width: 40vw;
      }

      @media (min-width: 1200px) {
        height: 75vh;
        width: 40vw;
      }

      h2 {
        margin-top: 4%;
        margin-bottom: 2%;
        font-weight: bolder;
        @media (min-width: 768px) {
          font-size: 1.5rem;
          margin-top: 0;
        }

        @media (min-width: 1200px) {
          margin-bottom: 0;
          font-size: 1.5rem;
          display: block;
          height: 5vh;
        }
      }
      ul {
        background-color: var(--color-black);
        color: var(--light-gray);
        border-radius: 5px;
        max-height: 150px;
        overflow-y: auto;
        li {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 8px;
        }
      }
      > div {
        height: 35vh;
        width: 100%;
        border: 1px solid black;
        border-radius: 2px;
        margin-bottom: 5%;

        @media (min-width: 768px) {
          height: 40vh;
        }

        @media (min-width: 1200px) {
          /* height: 45%; */
          /* height: 70vh; */
        }
      }
    }
  }
`;
