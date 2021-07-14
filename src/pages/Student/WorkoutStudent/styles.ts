import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  .info {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 5%;

    .container--right {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .rpt {
        font-size: 1.5rem;
      }
    }
  }

  .title {
    align-self: flex-start;
    margin-left: 5%;
    margin-top: 5%;
    font-size: 1.1rem;
    font-weight: bolder;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 1200px) {
      margin-left: 10%;
    }
  }

  .check--workout {
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-radius: 3px;
    background-color: var(--light-black);

    @media (min-width: 768px) {
      height: 40px;
    }

    @media (min-width: 1200px) {
      width: 100%;
    }

    input {
      height: 70%;
      width: 10%;
    }

    span {
      color: white;
      display: block;
      margin: 0 auto;
      transform: translate(-10%);

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
      @media (min-width: 1200px) {
        font-size: 1.4rem;
      }
    }
  }
`;
