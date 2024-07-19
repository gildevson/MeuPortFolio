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
  margin-top: 20px;
  text-align: center;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

const ContactLink = styled.a`
  color: grey;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
  margin-left: 8px;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  margin-right: 8px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contatos</Title>
        <Desc>Para qualquer oportunidade de contato, as principais opções estão listadas abaixo. Basta clicar no link.</Desc>
        <ContactInfo>
          <ContactTitle></ContactTitle>
          <ContactText>
            <SocialMediaIcon href="mailto:gildevson@gmail.com" target="_blank">
              <EmailIcon />
            </SocialMediaIcon>
            <ContactLink href="mailto:gildevson@gmail.com">gildevson@gmail.com</ContactLink>
          </ContactText>
          <ContactText>
            <SocialMediaIcon href="https://www.linkedin.com/in/gilson-fonseca-78b6b4138/" target="_blank">
              <LinkedInIcon />
            </SocialMediaIcon>
            <ContactLink href="https://www.linkedin.com/in/gilson-fonseca-78b6b4138/">Linkedin</ContactLink>
          </ContactText>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
