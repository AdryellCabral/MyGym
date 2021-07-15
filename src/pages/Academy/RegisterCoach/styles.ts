import styled from "styled-components";

export const ContainerRegister = styled.div`
  /* background-color: var(--light-black); */
  height: calc(100vh - 80px);
  margin-top: 80px;
  display: flex;
  align-items: center;

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
  }
`;

export const Container = styled.div`
  /* background-color: var(--light-black); */
`;
