import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 16vh;

  @media (min-width: 768px) {
    margin-top: 10vh;
  }

  @media (min-width: 1200px) {
    margin-top: 14vh;
  }

  .container--top {
    margin: 0 auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: bolder;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .container--filter {
      width: 50%;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      span {
        font-size: 1rem;
        margin-right: 2%;

        @media (min-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
