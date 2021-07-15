import styled from "styled-components";
import { GreenButtonStyled } from "../../../components/NewPassword/styles";

export const PageContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;

  .spans {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 10px;
    font-family: var(--font-roboto);
    font-size: 18px;
    font-weight: bold;

    span:nth-child(1) {
      margin-bottom: 10px;

      @media (min-width: 768px) {
      }
    }
    span:nth-child(2) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      width: 90%;
      margin-left: 5%;

      span:nth-child(1) {
        font-size: 57px;
      }
      span:nth-child(2) {
        font-size: 42px;
      }
    }
  }

  .components {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100wh;
    height: 375px;

    @media (min-width: 768px) {
      flex-direction: row;
      width: 90%;
      align-self: center;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const AlterarPlano = styled.form`
  background-color: var(--color-black);
  width: 90%;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  border-radius: 3px;
  margin-top: 10px;

  span {
    color: var(--btnColor-secondary);
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 35px;
    }
  }

  select {
    border: none;
    outline: none;
    height: 35px;
    font-size: 20px;
    font-family: var(--font-roboto);
    padding: 0 10px;
    border-radius: 3px;
    cursor: pointer;

    option {
      background-color: var(--color-black);
      color: var(--btnColor-secondary);
    }

    @media (min-width: 768px) {
      height: 68px;
    }
  }

  @media (min-width: 768px) {
    width: 47%;
    height: 400px;
    margin: 10px;
    padding: 20px;
  }
`;

export const GreenButtonStyled2 = styled(GreenButtonStyled)`
  color: var(--btnColor-secondary);
  font-size: 24px;
  font-family: var(--title-font);

  @media (min-width: 768px) {
    height: 76px;
    font-size: 50px;
  }
`;

export const RedButtonStyled = styled(GreenButtonStyled)`
  background-color: var(--color-red);
  width: 90%;
  align-self: center;
  font-size: 24px;
  color: var(--btnColor-secondary);
  font-family: var(--title-font);

  :hover {
    filter: brightness(0.8);
  }

  @media (min-width: 768px) {
    width: 470px;
    height: 76px;
    font-size: 50px;
  }
`;
