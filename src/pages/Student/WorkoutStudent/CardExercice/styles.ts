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
    width: 45%;
  }

  .image {
    width: 30%;
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
      margin-bottom: 1vh;
      color: var(--dark-purple);

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 0.9rem;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
`;
