import styled, { css } from "styled-components";

interface sizeButton {
  small?: boolean;
}

export const StyledButton = styled.button<sizeButton>`
  background: var(--color-green);
  width: 90%;
  height: 40px;
  border-radius: 3px;
  border: none;
  /* font-family: "Bill"; */
  font-size: var(--font-button-green-mobile);
  color: var(--btnColor-primary);
  transition: color 150ms ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 22px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  span {
    font-family: "Bill", "Big Shoulders Stencil Text", "Roboto";
    /* font-weight: bold; */
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #00000037;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    width: 110%;
  }
  /* 
  ${(props) =>
    props.small &&
    css`
      color: var(--color-black);
      border: black solid 1px;
    `}; */

  @media (min-width: 768px) {
    font-size: var(--font-button-purple-desktop);
  }
`;
