import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 90vh;
  background-color: white;
  border: none;
  margin-left: 25%;
  margin: 5vh auto;
  border-radius: 3px;

  max-width: 500px;

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

      @media (min-width: 768px) {
        font-size: 1.2rem;
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
          font-size: 1.2rem;
          margin-right: 10px;
        }
      }
    }
  }

  .new {
    height: 30%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    row-gap: 3%;

    h1 {
      font-size: 1.1rem;
      font-weight: bold;
    }

    textarea {
      height: 40%;
    }

    button {
      width: 100%;
      border: none;
      background-color: var(--dark-purple);
      color: white;
      border-radius: 3px;
      padding: 3px;
      font-family: "Bill", "Roboto", sans-serif;
      font-size: 1.1rem;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }

  .feed {
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    h2 {
      font-weight: bold;
      font-size: 1rem;
    }

    ul {
      list-style: none;
      background-color: #f8f8f8;
      border-radius: 3px;
      height: 70%;
      width: 100%;
      overflow: scroll;

      @media (min-width: 1200px) {
        height: 70%;
      }

      li {
        margin-bottom: 1px;

        @media (min-width: 768px) {
          font-size: 1.4rem;
        }
        span {
          font-weight: bold;
        }
      }
    }

    button {
      width: 100%;
      border: none;
      background-color: var(--light-purple);
      color: white;
      border-radius: 3px;
      padding: 3px;
      font-family: "Bill", "Roboto", sans-serif;
      font-size: 1.1rem;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
`;
