import styled from "styled-components";

interface ContainerProps {
  img: string;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 18vh;
  margin-top: 3vh;
  background-color: #f8f8f8;
  cursor: pointer;
  padding: 1%;
  border-radius: 3px;

  -webkit-box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);
  box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);

  @media (min-width: 1200px) {
    max-width: 800px;
    height: 22vh;

    &:hover {
      -webkit-box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.8);
      box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.8);
      transform: perspective(1);
      transition-duration: 0.6s;
    }
  }

  .image {
    width: 30%;
    height: 95%;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid black;
    border-radius: 3px;
    margin-right: 5%;
    margin-left: 1%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95%;
    width: 60%;
    border-bottom: 2px solid black;
    h1 {
      font-size: 1.2rem;
      color: var(--dark-purple);
      font-family: var(--title-font);

      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
    }

    p {
      font-size: 1.2rem;
      font-family: var(--title-font);

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
`;
