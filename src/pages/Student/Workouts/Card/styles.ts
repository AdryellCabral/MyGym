import styled from "styled-components";

interface ContainerProps {
  img: string;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 35vh;
  margin-top: 5vh;
  background-color: #f8f8f8;
  cursor: pointer;
  padding: 1%;
  border-radius: 3px;

  -webkit-box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);
  box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);

  @media (min-width: 1200px) {
    max-width: 42%;

    &:hover {
      -webkit-box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.8);
      box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.8);
      transform: perspective(1);
      transition-duration: 0.7s;
    }
  }

  .image {
    width: 65%;
    height: 95%;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid black;
    border-radius: 3px;
    margin-right: 5%;
    margin-left: 1%;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 60%;
    border-bottom: 2px solid black;
    h1 {
      margin-bottom: 2vh;
      color: var(--color-green);
      font-size: 1.3rem;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 0.9rem;
      overflow: scroll;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }

    span {
      display: block;
      margin-top: auto;
      margin-bottom: 1vh;

      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;
