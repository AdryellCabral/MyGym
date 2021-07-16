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

    margin-bottom: 10px;
    span {
      @media (min-width: 768px) {
      }
    }

    @media (min-width: 768px) {
      width: 90%;
      margin-left: 5%;

      span {
        font-size: 57px;
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

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;

  .foto {
    flex-direction: column;
    align-self: center;
    margin-bottom: 30px;
    margin-right: 20px;
    display: flex;

    div {
      display: flex;
      align-items: center;

      img:nth-child(1) {
        width: 105px;
        height: 105px;
        border-radius: 50%;
        border: solid 3px var(--color-black);
        object-fit: cover;
      }

      img:nth-child(2) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        align-self: flex-end;
        cursor: pointer;
      }
    }

    span {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
    }
  }

  span {
    font-size: 18px;
  }

  span b {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 47%;
    height: 400px;
    margin: 10px;
    padding: 20px;

    .foto div img:nth-child(1) {
      width: 300px;
      height: 300px;
    }

    .foto div img:nth-child(2) {
      width: 100px;
      height: 100px;
    }

    .foto span {
      font-size: 45px;
    }

    > span {
      display: none;
    }
  }
`;
