import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    font-family: var(--font-roboto); //remover
    height: 6px;
    /* margin-bottom: 3px; */
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-title-desktop);
    }
    border: 1px solid white;
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
