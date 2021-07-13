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
      width: 50%;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      span {
        font-size: 1rem;
        margin-right: 2%;
      }
    }
  }
`;
