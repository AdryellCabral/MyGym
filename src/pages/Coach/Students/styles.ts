import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 4vh;

  .container--top {
    margin: 0 auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: bolder;
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
        border: 0;
      }
      button {
        border: 0;
        border-radius: 3px;
        padding: 0 3px;
        height: 29px;
        width: 37px;
        background-color: var(--light-purple);
      }
    }
  }
`;
