import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100%;
  border: 1px solid black;
  max-width: 500px;
  max-height: 500px;
  border-radius: 3px;
  background-color: var(--light-black);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 1200px) {
    height: 60vh;
  }

  h1 {
    font-family: "Bill";
    color: var(--light-green);
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    text-align: center;
    color: white;
    margin: 0 7%;
    line-height: 1.5rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  span {
    display: block;
    font-family: "Bill";
    font-size: 2rem;
    color: white;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

export const Button = styled.button`
  width: 70%;
  border: none;
  border-radius: 3px;
  background-color: var(--light-green);
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  span {
    font-family: "Bill";
    font-size: 1.8rem;
    color: black;
  }

  @media (min-width: 768px) {
    cursor: pointer;
    span {
      font-size: 2.8rem;
    }
  }
`;
