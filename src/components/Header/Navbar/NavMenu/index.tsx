
import React from 'react';
import { StyledUl } from './styles';
import {Gym, Coach, Student} from './MenuListTypes';

import { WindowWidthContext } from '../../../../providers/WindowWidth';

interface NavMenuProps{
  isOpen: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen })=>{
  const {windowWidth, setWindowWidth} = React.useContext(WindowWidthContext);


  let typeUser = localStorage.getItem("@typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  const getWindowWidth = ()=>{
    let windowWidth = window.innerWidth;
    return windowWidth;
  };
  
  window.addEventListener('resize', ()=>{
    setWindowWidth(getWindowWidth);
  });
  
  return(
    <StyledUl isOpen = { isOpen } windowWidth = { windowWidth }>
      <>
          {typeUser === 'academys' && <Gym />}
          {typeUser === 'coaches' && <Coach />}
          {typeUser === 'students' && <Student />}
        </>
    </StyledUl>
  );
}

export default NavMenu;