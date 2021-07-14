import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 300px;

  div {
    div {
      background-color: white;
      border-radius: 4px;
    }
  }

  h1 {
    font-size: 26px;
    letter-spacing: 3px;
    font-family: var(--title-font);
    margin: 5px 0 0;
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
    width: 225px;
    margin-top: 5px;
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

  h1 {
    font-family: var(--title-font);
    color: black;
  }

  .box {
    width: 90%;
    background-color: var(--color-black);
    padding: 10px;
    margin: 25px auto;
    p {
      color: white;
    }
  }

  button {
    color: var(--color-black);
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
