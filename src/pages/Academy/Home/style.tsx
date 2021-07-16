import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;

  /* padding: 0 18px; */

  margin-top: 90px;

  h1,
  h2 {
    /* font-family: var(--title-font); */
    font-weight: bolder;
    font-size: 1rem;
    margin: 5px 0;
  }
  h1 {
    margin: 5px 5%;
    font-size: var(--font-title-mobile);
  }
  > div {
    margin: 0 5%;
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-title-desktop);
    }
    h2 {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 1200px) {
    > div {
      display: flex;
      justify-content: space-between;
      /* max-width: 1100px; */
      margin-top: 2%;

      > div + div {
        margin-left: 25px;
      }
    }
    h2 {
      font-size: 1.5rem;
    }
    h1 {
      font-size: var(--font-title-desktop);
    }
  }
`;

export const ContainerLista = styled.div`
  margin: 0 auto;
  margin-top: 15px;

  width: 100%;
  /* max-width: 500px; */
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
