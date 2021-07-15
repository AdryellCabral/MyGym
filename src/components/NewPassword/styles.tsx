import styled from "styled-components";
import GreenButton from "../GreenButton";

export const Container = styled.form`
  background-color: var(--color-black);
  width: 90%;
  height: 215px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  border-radius: 3px;

  span {
    color: var(--light-gray);
    font-family: var(--font-roboto);
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 35px;
    }
  }

  .aside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      width: 49%;
    }
  }

  button {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    width: 47%;
    height: 400px;
    padding: 20px;
  }
`;

export const InputStyled = styled.div`
  background-color: var(--btnColor-secondary);
  max-width: 100%;
  border: none;
  border-radius: 3px;
  height: 35px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 5px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: inherit;
    outline: none;
  }

  @media (min-width: 768px) {
    height: 68px;
  }
`;

export const GreenButtonStyled = styled(GreenButton)`
  background-color: var(--color-green);
  width: 100%;
  align-items: center;
  font: var(--title-font);
  color: var(--btncolor-primary);
  cursor: pointer;

  @media (min-width: 768px) {
    height: 76px;
    font-size: 50px;
  }
`;
