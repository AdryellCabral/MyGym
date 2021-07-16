import styled from "styled-components";

export const SelectFilterStyled = styled.select`
  font-size: 0.9rem;
  width: 80%;
  padding: 2px;
  max-width: 120px;
  border: none;
  border-radius: 2px;
  background-color: var(--light-black);
  color: #fff;

  @media (min-width: 1000px) {
    max-width: 170px;
    width: 15%;
    padding: 6px;
    font-size: 1rem;
  }
`;
