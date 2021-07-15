import styled from "styled-components";
import {
  createStyles,
  makeStyles,
  Theme,
  Select,
  withStyles,
} from "@material-ui/core";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  width: 300px;

  max-width: 260px;

  @media (min-width: 768px) {
    padding: 28px 16px;
    margin: 0;
    border-radius: 3px;
  }

  @media (min-width: 1200px) {
    padding: 28px 16px;
    margin: 0;
  }

  div {
    div {
      background-color: white;
      border-radius: 4px;
    }
  }

  h1 {
    font-size: 2rem;
    letter-spacing: 3px;
    font-family: var(--title-font);
    margin-bottom: 5%;
    align-self: flex-start;
    color: white;
  }

  p {
    font-family: var(--font-roboto); //remover
    height: 16px;
    margin: 3px 0;
    color: white;
  }

  button {
    margin: 0 auto;
    width: 100%;
    margin-top: 10%;
    span {
      font-family: var(--title-font);
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-title-desktop);
    }
    background-color: var(--color-black);
    padding-bottom: 25px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem;
  font-family: sans-serif;
  color: white;
  text-align: center;
  min-width: 185px;
  letter-spacing: 1px;
  border-radius: 3px;

  h1 {
    font-family: var(--title-font);
    color: black;
  }

  .box {
    width: 90%;
    background-color: var(--color-black);
    padding: 10px;
    margin: 25px auto;
    border-radius: 3px;
    p {
      color: white;
    }
  }

  button {
    color: var(--color-black);
    /* background-color: var; */

    span {
      font-family: var(--title-font);
    }
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: "25ch",
      margin: "8px auto",
      textAlign: "left",
    },
  })
);

export const SelectStyled = withStyles({
  root: {
    width: "100%",
  },
})(Select);
