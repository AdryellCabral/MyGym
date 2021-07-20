import styled from "styled-components";
import { withStyles, TextField } from "@material-ui/core";
import "../../styles/animations.css"

export const ContainerForm = styled.div`
  width: 90%;
  margin: 0 auto;
  max-height: 525px;

  max-width: 400px;


  animation: translateXLeft 0.6s ease-out;

  div {
    div {
      background-color: white;
      border-radius: 4px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 300px;

    @media (min-width: 768px) {
      border-radius: 3px;
      padding: 16px 4px;

      -webkit-box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);
      box-shadow: 2px 3px 9px 4px rgba(0, 0, 0, 0.27);
    }

    h1 {
      font-size: 2rem;
      font-family: var(--title-font);

      margin-bottom: 10%;

      color: black;
      align-self: flex-start;
      margin-left: 5%;
    }

    select {
      width: 265px;

      border-radius: 3px;
      background-color: white;
      border-color: rgba(0, 0, 0, 0.23);
    }
  }

  #coach {
    height: 6.5vh;
  }

  p {
    height: 16px;
    margin: 4px 0;
    color: red;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-title-desktop);
    }
    border: 1px solid white;
    padding-bottom: 25px;
  }
`;

export const StyledTextField = withStyles({
  root: {
    width: "75%",
    height: "7vh",
    minHeight: "auto",

    "& fieldset": {
      height: "90%",
    },
  },
})(TextField);
