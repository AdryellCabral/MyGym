import styled from 'styled-components';

interface StyledUlProps{
    isOpen: boolean,
    windowWidth: number,
}

export const StyledUl = styled.ul<StyledUlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  margin: 0;
  padding: 0;

  li{
    color: var(--light-gray);
    padding: 8px 5px;
    margin: 0 5px;
    font-size: ${ ({ windowWidth })=> windowWidth >= 1000 ? 'var(--font-menu-desktop)' : 'var(--font-menu-mobile)' };
    text-align: left;
    text-transform: capitalize;
    transition: .5s ease-in-out;
  }

  li:hover{
    color: var(--color-black);
    background-color: var(--light-gray);
    border-radius: 5px;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  
  @media(max-width: 1024px){
    flex-flow: column nowrap;
    background-color: var(--color-black);
    position: fixed;
    transform: ${ ({ isOpen })=> isOpen ? 'translateX(0)' : 'translateX(-100%)' };
    top: 0;
    left: 0;
    height: 100vh;
    width: 320px;
    padding-top: 40px;
    transition: transform 0.5s ease-in-out;

    li{
      color: white;
      padding: 18px 10px;
      text-align: left;
      text-transform: capitalize;
    }

    li:first-child{
      margin-top: 25px;
    }
  }
`;