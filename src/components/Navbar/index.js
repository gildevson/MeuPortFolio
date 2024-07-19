import React from 'react';
import { Nav, NavLink, NavbarContainer, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Início</NavLink>
          <NavLink href='#skills'>Competências</NavLink>
          <NavLink href='#experience'>Experiência</NavLink>
          <NavLink href='#projects'>Projetos</NavLink>
          <NavLink href='#education'>Certificações</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>Início</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Competências</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experiência</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projetos</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Certificações</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
