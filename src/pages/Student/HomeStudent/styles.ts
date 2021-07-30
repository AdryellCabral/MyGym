import styled from "styled-components";

interface PercentageBarProps {
  percentage: number;
}

export const Container = styled.div<PercentageBarProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 16vh;

  @media (min-width: 768px) {
    margin-top: 12vh;
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    width: 90%;
    margin: 0 auto;
    margin-top: 16vh;
    justify-content: none;
  }

  .container--user {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      height: 42vh;
      width: 100%;
    }

    @media (min-width: 1200px) {
      height: 75vh;
      width: 35%;
      align-items: flex-end;
      gap: 5%;
    }

    .status {
      display: flex;
      justify-content: center;
      flex-direction: column;

      height: 100%;
      width: 100%;

      figure {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        @media (min-width: 1200px) {
          width: 100%;
          height: 100%;
          margin-top: 5vh;
        }
        img {
          object-fit: cover;
          width: 100px;
          height: 100px;
          border: 3px solid black;
          background-color: black;
          border-radius: 50px;

          @media (min-width: 768px) {
            width: 35%;
            height: 25vh;
            border-radius: 100%;
          }

          @media (min-width: 1200px) {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }

        figcaption {
          font-weight: bolder;
          align-self: center;

          @media (min-width: 768px) {
            margin-top: 1%;
            font-size: 2rem;
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

      @media (min-width: 768px) {
        margin-top: auto;
      }

      @media (min-width: 1200px) {
        align-self: flex-end;
        width: 100%;
        height: auto;
      }

      h2 {
        margin-top: 10%;
        margin-bottom: 2%;
        font-weight: bolder;
        @media (min-width: 768px) {
          font-size: 1.5rem;
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
              font-size: 1.3rem;
            }

            /* @media (min-width: 1200px) {
              font-size: 1.3rem;
            } */
          }
        }
      }
    }
  }

  .progression--chart {
    width: 90%;

    @media (min-width: 1200px) {
      height: 75vh;
      width: 60%;
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
    > div {
      height: 40vh;
      width: 100%;
      border: 1px solid black;
      border-radius: 2px;
      margin-bottom: 5%;

      @media (min-width: 1200px) {
        height: 100%;
        height: 70vh;
      }
    }
  }
`;
