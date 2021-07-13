import styled from "styled-components";

export const HomePageContainer = styled.div`
  margin-top: 80px;
  padding: 20px 18px;

  h1,
  h2 {
    font-family: var(--title-font);
    font-weight: bolder;
    font-size: var(--font-title-mobile);
    margin: 5px 0;
  }
  > div {
    margin: 0 auto;

  }

  @media (min-width: 768px) {
    > div {
      display: flex;
      justify-content: space-between;
      max-width: 1100px;
      
      > div + div {
        margin-left: 25px;
      }
    }

    h1,
    h2 {
      font-size: var(--font-title-desktop);
    }
  }
`;

export const ContainerLista = styled.div`
  margin: 0 auto;
  margin-top: 30px;

  width: 100%;
  max-width: 500px;
`;

export const ModalContainer = styled.div`
  width: 50%;
  background-color: var(--color-red);
  border: none;
  height: 50%;
  margin: 0 auto;
  margin-top: 50%;
  outline: none;
`;
