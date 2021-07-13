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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--light-black);
    height: 6vh;
    margin-bottom: 3vh;

    h1 {
      color: var(--color-green);
      margin-left: 3%;
    }
    button {
      background-color: var(--light-black);
      border: none;
      cursor: pointer;
      span {
        background-color: none;
        color: white;
        font-size: 1rem;
      }
    }
  }

  .img {
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid black;
    border-radius: 3px;
    width: 90%;
    height: 30vh;
    margin: 0 auto;
    margin-bottom: 3vh;
  }

  p {
    width: 90%;
    height: 20vh;
    background-color: var(--light-black);
    border-radius: 3px;
    color: white;
    margin: 0 auto;
    margin-bottom: 3vh;
    font-size: 0.9rem;
    padding: 4px;
  }

  .container--video {
    width: 90%;
    height: 22vh;
    background-color: var(--light-black);
    border-radius: 3px;
    margin: 0 auto;
    margin-bottom: 3vh;
  }
`;
