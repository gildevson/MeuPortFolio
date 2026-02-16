import React from 'react';
import { Nav, NavLink, NavbarContainer, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, MobileMenuBackdrop, MobileLanguageContainer } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import LanguageToggle from '../LanguageToggle';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const { language } = useLanguage();
  const t = translations[language].nav;
  
  return (
    <Nav>
      <NavbarContainer>
        <MobileLanguageContainer>
          <LanguageToggle />
        </MobileLanguageContainer>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{t.home}</NavLink>
          <NavLink href='#skills'>{t.skills}</NavLink>
          <NavLink href='#experience'>{t.experience}</NavLink>
          <NavLink href='#projects'>{t.projects}</NavLink>
          <NavLink href='#education'>{t.certifications}</NavLink>
        </NavItems>
        <ButtonContainer>
          <LanguageToggle />
          <GitHubButton href={Bio.github} target="_blank">{t.github}</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <>
            <MobileMenuBackdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
            <MobileMenu isOpen={isOpen}>
              <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>{t.home}</MobileLink>
              <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>{t.skills}</MobileLink>
              <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>{t.experience}</MobileLink>
              <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>{t.projects}</MobileLink>
              <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>{t.certifications}</MobileLink>
              <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">{t.github}</GitHubButton>
            </MobileMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
