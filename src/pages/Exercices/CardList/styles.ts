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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2%;
  }
`;
