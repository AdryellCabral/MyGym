import styled from "styled-components";
import FigFeed from "../../../assets/images/FigFeed.svg";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core";
import "../../../styles/animations.css"

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 110px);

  h1 {
    height: 5%;
    margin-top: 100px;
    font-weight: bold;
    margin-left: 5%;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .container {
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    margin: 0 auto;

    @media (min-width: 1200px) {
      flex-direction: row;
      margin-top: 50px;
    }

    .student--feed {
      height: 40%;
      width: 100%;
      animation: scaleUp 0.5s ease-in-out;
      background-color: #f8f8f8;
      border-radius: 3px;

      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;

      @media (min-width: 1200px) {
        height: 70%;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2%;

        width: 90%;
        height: 5%;

        > div {
          font-weight: bold;

          @media (min-width: 768px) {
            font-size: 1.3rem;
          }

          span {
            font-weight: 400;
          }
        }
      }

      ul {
        list-style: none;
        align-self: flex-start;
        margin: 5%;
        width: 90%;
        overflow: auto;

        @media (min-width: 1200px) {
          height: 70%;
        }

        li {
          margin-bottom: 1px;

          @media (min-width: 768px) {
            font-size: 1.4rem;
          }
          span {
            font-weight: bold;
          }
        }
      }

      p {
        font-weight: bold;
        font-size: 1.1rem;
        text-align: center;
        width: 70%;

        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
      }

      button {
        width: 70%;
        border: none;
        background-color: var(--light-purple);
        color: white;
        border-radius: 3px;
        padding: 3px;
        font-family: "Bill", "Roboto", sans-serif;
        font-size: 1.1rem;
        max-width: 300px;

        @media (min-width: 768px) {
          font-size: 1.3rem;
          max-width: 340px;
        }
      }
    }

    .figure {
      background-image: url(${FigFeed});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 40%;

      @media (min-width: 768px) {
        background-position: center bottom;
      }

      @media (min-width: 1200px) {
        height: 70%;
      }
    }
  }
`;

export const Icon = withStyles({
  root: {
    cursor: "pointer",
  },
  "@media (min-width: 768px)": {
    root: {},
  },
})(DeleteIcon);
