import React from "react";
import { StyledHeader, StyledWrapper } from "./styles";

import { logo } from "../../assets/images/info";
import Container from "../Container";
import Navbar from "./Navbar";

import { WindowWidthContext } from "../../providers/WindowWidth";

const Header = () => {
  const { windowWidth } = React.useContext(WindowWidthContext);

  return (
    <StyledHeader windowWidth={windowWidth}>
      <Container>
        <StyledWrapper>
          <img src={logo.img} alt={logo.alt} />
          <Navbar />
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
