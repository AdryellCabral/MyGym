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
  width: 70%;
  max-width: 260px;

  @media (min-width: 768px) {
    padding: 26px;
    max-width: 300px;
    margin: 0;
    border-radius: 3px;
  }

  @media (min-width: 1200px) {
    padding: 55px 20px;
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
    margin-bottom: 15px;
    color: white;
    align-self: flex-start;
  }

  p {
    font-family: var(--font-roboto); //remover
    height: 16px;
    color: white;
    margin: 3px 0;
  }

  button {
    margin: 0 auto;
    width: 100%;
    margin-top: 20px;
    span {
      font-family: var(--title-font);
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
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

export const SelectStyled = withStyles({
  root: {
    width: "100%",
  },
})(Select);
