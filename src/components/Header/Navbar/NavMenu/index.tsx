
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

  //Esta variável é provisória e foi utilizada apenas para testar a funcionalidade do menu e seus diferentes tipos de renderização
  // typeUser = 'academys';
  // typeUser = 'coaches'; 
  typeUser = 'students'; 
  
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