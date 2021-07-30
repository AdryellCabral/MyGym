import styled from "styled-components";

export const ContainerRegister = styled.div`
  height: calc(100vh - 90px);
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;
  overflow: hidden;

  img {
    width: calc(100vw - 400px);
    max-width: 800px;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (min-width: 1024px) {
    img {
      margin-left: 10%;
    }
  }

  @media (min-width: 768px) {
    padding-right: 16px;
    margin-bottom: 0;
  }
`;

