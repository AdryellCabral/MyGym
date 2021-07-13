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
  margin-top: 5vh;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    width: 90%;
    margin: 0 auto;
    margin-top: 5vh;
    justify-content: none;
  }

  .container--top {
    width: 100%;

    @media (min-width: 768px) {
      height: 40vh;
      width: 60%;
    }
    @media (min-width: 768px) {
      height: 85vh;
      width: 60%;
    }
    .container--user {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        width: 100%;
        align-items: flex-end;
      }

      figure {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        @media (min-width: 768px) {
          align-items: flex-end;
        }
        img {
          object-fit: cover;
          width: 100px;
          height: 100px;
          border: 3px solid black;
          background-color: black;
          border-radius: 50px;

          @media (min-width: 768px) {
            width: 90%;
            height: 30vh;
            border-radius: 5px;
          }

          @media (min-width: 1200px) {
            margin-top: 2%;
            height: 65vh;
          }
        }

        figcaption {
          /* margin-top: 3%; */
          font-weight: bolder;
          align-self: center;
          transform: translate(+20%);
        }
      }

      .trainingPerformed {
        width: 90%;
        height: 20%;

        @media (min-width: 768px) {
          margin-top: auto;
        }
        h2 {
          margin-top: 10%;
          margin-bottom: 2%;
          font-weight: bolder;
        }

        .percentageBar {
          border: 1px solid var(--light-black);
          border-radius: 2px;
          background-color: var(--light-black);
          width: 100%;
          height: 40px;
          margin-bottom: 5%;

          @media (min-width: 768px) {
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
            }
          }
        }
      }
    }
  }

  .progression--chart {
    width: 90%;

    @media (min-width: 1200px) {
      height: 90vh;
    }

    h2 {
      margin-bottom: 2%;
      font-weight: bolder;
    }
    > div {
      height: 40vh;
      width: 100%;
      border: 1px solid black;
      border-radius: 2px;
      margin-bottom: 5%;

      @media (min-width: 1200px) {
        height: 82vh;
      }
    }
  }
`;
