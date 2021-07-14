import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 5vh;

  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
