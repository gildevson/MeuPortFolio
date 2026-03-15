import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 40};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(23, 92, 230, 0.10) 0px 4px 16px;
  min-width: 220px;
  justify-content: center;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: rgba(133, 76, 230, 0.25) 0px 4px 24px;
    transform: translateY(-2px);
  }
  @media (max-width: 500px) {
    width: 260px;
    font-size: 14px;
    padding: 12px 20px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contatos</Title>
        <Desc>Para qualquer oportunidade de contato, as principais opções estão listadas abaixo. Basta clicar no link.</Desc>
        <ContactInfo>
          <ContactButton href="mailto:gildevson@gmail.com" target="_blank">
            <EmailIcon style={{ fontSize: '22px', color: '#854CE6' }} />
            gildevson@gmail.com
          </ContactButton>
          <ContactButton href="https://www.linkedin.com/in/gilson-fonseca-78b6b4138/" target="_blank">
            <LinkedInIcon style={{ fontSize: '22px', color: '#0A66C2' }} />
            LinkedIn
          </ContactButton>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
