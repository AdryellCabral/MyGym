import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* margin-top: 4vh; */

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
      width: 60%;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      input {
        font-size: 1rem;
        width: 80%;
        height: 25px;
        border: 1px solid black;
        border-radius: 3px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        max-width: 400px;

        @media (min-width: 768px) {
          height: 30px;
        }
      }
      button {
        border: none;
        border-radius: 3px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        padding: 0 3px;
        height: 29px;
        width: 37px;
        background-color: var(--color-black);

        @media (min-width: 768px) {
          height: 34px;
          border: 1px solid black;
        }
      }
    }
  }
`;
