import styled from "styled-components";

interface sizeButton {
  widht: string; //props não utilizada, procurar se os buttons reds diferem o tamanho, caso ñ = deletar
}

export const StyledButton = styled.button<sizeButton>`
  background: var(--color-red);
  width: 90%auto;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-family: var(--title-font);
  font-size: large;
  color: var(--btnColor-primary);
  transition: color 150ms ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

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
`;
