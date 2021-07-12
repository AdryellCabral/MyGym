import styled from 'styled-components';

interface NavProps{
    width?: string,
    heigth?: string,
    padding?: string,
}

export const Nav = styled.nav<NavProps>`
  width: ${ props => props.width || '100%' };
  height: ${ props => props.heigth || '50px' };
  border-bottom: 0px solid #f1f1f1;
  padding: ${ props => props.padding || '0' };
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Roboto';
  font-size: var(--font-menu-mobile);

  a{
    text-decoration: none;
    color: #141414;
    transition: 1s ease;
    margin: 0;
  }

  a:hover{
    text-decoration: underline;
    transition: 1s ease;
  }
`;