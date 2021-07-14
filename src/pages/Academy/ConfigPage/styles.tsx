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
    }
    span:nth-child(2) {
      font-size: 20px;
    }
  }

  .components {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100wh;
    height: 375px;
  }
`;

export const AlterarPlano = styled.div`
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
  }

  select {
    border: none;
    outline: none;
    height: 35px;

    option {
      max-width: 80%;
    }
  }
`;

export const GreenButtonStyled2 = styled(GreenButtonStyled)`
  color: var(--btnColor-secondary);
  font-size: 24px;
  font-family: var(--title-font);
`;

export const RedButtonStyled = styled(GreenButtonStyled)`
  background-color: var(--color-red);
  width: 90%;
  align-self: center;
  font-size: 24px;
  color: var(--btnColor-secondary);
  font-family: var(--title-font);
`;
