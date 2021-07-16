import styled from "styled-components";
import logo from "../../../assets/logo.png";

export const ContainerRegister = styled.div`
  background-color: var(--light-black);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 5%;
  }

  .btBack {
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 30px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30px;
    left: 0;
    right: 0;
    text-align: center;

    cursor: pointer;

    @media (min-width: 1200px) {
      left: 40px;
      margin: 0;
      height: 40px;
    }
  }

  img {
    width: 50%;
    max-width: 600px;

    margin-top: 100px;
  }
`;

export const Container = styled.div`
  background-color: var(--light-black);
`;
