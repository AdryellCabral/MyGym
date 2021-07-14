import styled from "styled-components";

interface ContainerProps {
  img: string;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 18vh;
  cursor: pointer;
  border-radius: 3px;

  @media (min-width: 1200px) {
    max-width: 50%;
    height: 25vh;
  }

  .image {
    width: 75%;
    height: 95%;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-repeat: no-repeat;
    border: 4px solid black;
    border-radius: 3px;
    margin-right: 5%;
    margin-left: 1%;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 60%;
    h1 {
      margin-bottom: 2vh;
      color: var(--color-green);
      font-size: 1rem;
      margin-top: 5px;

      @media (min-width: 768px) {
        font-size: 2rem;
      }

      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 0.8rem;
      margin-top: auto;

      @media (min-width: 768px) {
        font-size: 1.4rem;
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
