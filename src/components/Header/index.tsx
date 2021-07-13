import React from "react";
import { StyledHeader, StyledWrapper } from "./styles";

import { logo } from "../../assets/images/info";
import Container from "../Container";
import Navbar from "./Navbar";

import { WindowWidthContext } from "../../providers/WindowWidth";

const Header = () => {
  const { windowWidth } = React.useContext(WindowWidthContext);

  console.log(`Largura: ${windowWidth}`);

<<<<<<< HEAD
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
=======
	return (
		<StyledHeader windowWidth = { windowWidth }>
			<Container>
				<StyledWrapper>
					<img src={ logo.img } alt={ logo.alt } />
					<Navbar/>
				</StyledWrapper>
			</Container>
		</StyledHeader>
	);
}

export default Header;
>>>>>>> 5ab03d8ef9c425ce38e4baadbe1ffa49fcc66e65
