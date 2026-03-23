import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { 
  ContactSection, 
  ContactContent, 
  ContactInfo, 
  InfoItem, 
  IconContainer,
  InfoText 
} from './ContactStyles';

const Contact = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section id="contact">
      <SectionDivider divider />
      <SectionTitle main>Contact Me</SectionTitle>
      <ContactSection>
        <ContactContent>
          <ContactInfo>
            <InfoItem onClick={() => window.location.href = 'mailto:2725shresth@gmail.com'}>
              <IconContainer>
                <AiOutlineMail size="3.5rem" />
              </IconContainer>
              <InfoText>
                <h4>Email</h4>
                <p>2725shresth@gmail.com</p>
              </InfoText>
            </InfoItem>
            <InfoItem onClick={() => window.location.href = 'tel:+917309692044'}>
              <IconContainer>
                <AiOutlinePhone size="3.5rem" />
              </IconContainer>
              <InfoText>
                <h4>Phone</h4>
                <p>+91-7309692044</p>
              </InfoText>
            </InfoItem>
            <InfoItem onClick={() => openLink('https://www.google.com/maps/place/Phagwara,+Punjab,+India')}>
              <IconContainer>
                <BiMap size="3.5rem" />
              </IconContainer>
              <InfoText>
                <h4>Location</h4>
                <p>Phagwara, Punjab, India</p>
              </InfoText>
            </InfoItem>
          </ContactInfo>
        </ContactContent>
      </ContactSection>
    </Section>
  );
};

export default Contact;
