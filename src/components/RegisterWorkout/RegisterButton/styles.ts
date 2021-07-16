import styled, { css } from "styled-components";

interface sizeButton {
  small?: boolean;
  backgroundColor?: string;
}

export const StyledButton = styled.button<sizeButton>`
  /* background: var(--ligth-purple); */
  background-color: ${(props) =>
    props.backgroundColor || "var(--light-purple)"};
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: none;
  font-family: var(--title-font);
  font-size: var(--font-button-purple-mobile);
  color: var(--btnColor-primary);
  transition: color 150ms ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  span {
    font-family: "Bill";
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
    background: #000037;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    width: 110%;
  }
  ${(props) =>
    props.small &&
    css`
      width: 75%;
    `};

  @media (min-width: 768px) {
    font-size: var(--font-button-purple-desktop);
  }
`;
