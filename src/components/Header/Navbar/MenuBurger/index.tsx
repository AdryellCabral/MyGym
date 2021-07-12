import React from 'react';
import NavMenu from '../NavMenu';
import { StyledBurger } from './styles';
import Backdrop from '@material-ui/core/Backdrop';

const MenuBurger = ()=>{
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <StyledBurger isOpen = { isOpen } onClick = { ()=> setIsOpen(!isOpen) }>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavMenu isOpen = { isOpen }/>
      <Backdrop open = { isOpen } onClick = { ()=>setIsOpen(!isOpen) }/>
    </>
  );
}

export default MenuBurger;