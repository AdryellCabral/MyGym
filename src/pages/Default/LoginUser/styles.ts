import styled from "styled-components";
import logo from "../../../assets/logo.png";

export const ContainerRegister = styled.div`
  background-color: var(--light-black);
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  /* max-width: 500px; */

  img {
    width: 40vh;
    max-width: 800px;

    @media (min-width: 1200px) {
      width: 70vh;
    }
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

  @media (min-width: 768px) {
    height: 100vh;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 5%;
  }

  @media (min-width: 1200px) {
    height: 100vh;
    flex-direction: row;
  }
`;

export const Container = styled.div`
  background-color: var(--light-black);
`;
