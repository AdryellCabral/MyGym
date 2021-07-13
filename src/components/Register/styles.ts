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
    font-size: 22px;
    letter-spacing: 3px;
    font-family: var(--title-font);
    margin: 5px 0 0;
    color: white;
  }

  p {
    font-family: var(--font-roboto); //remover
    height: 6px;
    color: white;
  }

  button {
    margin: 0 auto;
    width: 225px;
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-title-desktop);
    }
    background-color: var(--color-black);
    padding-bottom: 25px;
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
