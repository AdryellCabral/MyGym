import styled from "styled-components";

interface ContainerProps {
  backgroundUrl: string;
}
export const Container = styled.div<ContainerProps>`
  height: 85vh;
  width: 100%;
  border: 1px solid black;
  border-radius: 2px;
  max-width: 500px;

  background-image: url(${(props) => props.backgroundUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 1200px) {
    height: 60vh;
  }
`;
