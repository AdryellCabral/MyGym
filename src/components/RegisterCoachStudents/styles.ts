import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 320px;
  margin: 0 auto;
  max-height: 525px;
  padding-top: 10px;
  text-align: center;
  
  div {
    div {
      background-color: white;
      border-radius: 4px;
    }
  }

  #coach {
      width: 20ch;
  }
  button {
    width: 225px;
    margin-top: 5px;
  }
  h1 {
    font-size: var(--font-title-mobile);
    font-family: var(--title-font);
    margin: 5px 0;
    color: white;
  }
  p {
    height: 16px;
    margin: 4px 0;
  }

  @media (min-width:768px) {
    h1 {
      font-size: var(--font-title-desktop)
    }
    border: 1px solid white;
    padding-bottom: 25px;
  }
`;

