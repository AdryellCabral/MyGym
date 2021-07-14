import styled from "styled-components";

export const ContainerRegister = styled.div`
  background-color: var(--light-black);
  height: calc(112vh - 65px);
  display: flex;
  align-items: center;

  img {
    width: calc(85vw - 400px);
    max-width: 600px;
    margin-right: 5%;
    margin-top: 100px;
  }

  @media (min-width: 1024px) {
    img {
      margin-left: 10%;
    }

    padding-right: 16px;
  }

  @media (min-width: 768px) {
    height: calc(112vh - 65px);
  }

  @media (min-width: 1366px) {
    height: calc(112vh - 75px);
  }
`;

export const Container = styled.div`
  background-color: var(--light-black);
`;
