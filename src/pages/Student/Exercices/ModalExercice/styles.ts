import styled from "styled-components";

interface ContainerProps {
  img: string;
}
export const Container = styled.div<ContainerProps>`
  width: 90%;
  height: 90vh;
  background-color: white;
  border: none;
  margin-left: 25%;
  margin: 5vh auto;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--light-black);
    height: 6vh;
    margin-bottom: 3vh;
    width: 100%;

    h1 {
      color: var(--color-green);
      margin-left: 3%;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
    button {
      background-color: var(--light-black);
      border: none;
      cursor: pointer;
      span {
        background-color: none;
        color: white;
        font-size: 1rem;

        @media (min-width: 768px) {
          font-size: 1.3rem;
          margin-right: 10px;
        }
      }
    }
  }

  .img {
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid black;
    border-radius: 3px;
    width: 50%;
    height: 35vh;
    margin: 0 auto;
    margin-bottom: 3vh;
  }

  p {
    width: 90%;
    height: 16vh;
    background-color: var(--light-black);
    border-radius: 3px;
    color: white;
    margin: 0 auto;
    margin-bottom: 3vh;
    font-size: 0.9rem;
    padding: 4px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .container--video {
    width: 90%;
    height: 30%;
    /* background-color: black; */
    border-radius: 3px;
    margin: 0 auto;
    margin-bottom: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;
