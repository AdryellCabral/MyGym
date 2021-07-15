import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 30vh;
  background-color: white;
  border: none;
  margin-left: 25%;
  margin: 15vh auto;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 400px;
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

  form {
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-evenly;
    align-items: center;

    > input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;

      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }

    > button {
      width: 80%;
      border: none;
      padding: 4px 1px;
      font-size: 1rem;
      border-radius: 3px;
      background-color: var(--color-green);
      color: white;

      &:hover {
        filter: brightness(90%);
      }

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
`;
