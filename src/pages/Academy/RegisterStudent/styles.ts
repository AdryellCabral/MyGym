import styled from "styled-components";

export const ContainerRegister = styled.div`
  margin-top: 90px;
  display: flex;
  align-items: center;

  width: 100%;

  img {
    width: calc(100vw - 400px);
    max-width: 700px;
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
