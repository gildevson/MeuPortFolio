import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../contexts/LanguageContext';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
`;

const LangLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ active, theme }) => active ? theme.primary : theme.text_primary + '80'};
  transition: color 0.3s ease;
`;

const SwitchTrack = styled.div`
  width: 44px;
  height: 24px;
  background: ${({ theme }) => theme.primary};
  border-radius: 12px;
  position: relative;
  transition: background 0.3s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 8px ${({ theme }) => theme.primary + '80'};
  }
`;

const SwitchThumb = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ isEn }) => (isEn ? '22px' : '2px')};
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const isEn = language === 'en';

  return (
    <ToggleWrapper onClick={toggleLanguage}>
      <LangLabel active={!isEn}>PT</LangLabel>
      <SwitchTrack>
        <SwitchThumb isEn={isEn}>
          {isEn ? '🇺🇸' : '🇧🇷'}
        </SwitchThumb>
      </SwitchTrack>
      <LangLabel active={isEn}>EN</LangLabel>
    </ToggleWrapper>
  );
};

export default LanguageToggle;
