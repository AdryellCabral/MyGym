import styled from "styled-components";
import "../../styles/animations.css"

export const Container = styled.div`
  background-color: var(--color-black);
  width: 100%;
  max-width: 600px;
  height: 170px;
  overflow: auto;
  margin: 0 auto;
  font-size: var(--font-list-mobile);
  border-radius: 3px;

  li {
    color: white;
    width: 100%;
    list-style: none;
  }

  img {
    width: 40px;
  }
  div {
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    margin: 10px 0;
  }


  animation: heightDown 0.5s forwards;

  @media (min-width: 768px) {
  

    animation: heightUP 0.5s forwards;
  }
`;
