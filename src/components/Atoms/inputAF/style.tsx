import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--light-black);
  width: 90%;
  height: 2.5rem;
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 0.5rem 0.64rem;
  color: var(--light-gray);
  font-family: var(--font-roboto);
  font-size: var(--font-input);

  ::-webkit-input-placeholder {
    color: var(--light-gray);
    font-size: 1.2rem;
    font-style: italic;
    font-family: var(--font-roboto);
    line-height: 1.4rem;
    padding: 0;
    margin: 0;
  }
`;
