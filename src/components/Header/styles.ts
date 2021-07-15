import styled from "styled-components";

interface StyledHeaderProps {
  windowWidth: number;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  width: 100%;
  padding: 10px 0;
  background-color: var(--color-black);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  align-content: center;
  flex-grow: 0;

  img {
    width: ${({ windowWidth }) => (windowWidth < 1000 ? "50px" : "75px")};
    transition: 1s ease-in-out;
  }

  img:hover {
    transform: rotate(360deg);
    transition: 1s ease-in-out;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
