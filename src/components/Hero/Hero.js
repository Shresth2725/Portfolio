import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonContainer, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm <br />
          Shresth Srivastava
        </SectionTitle>
        <SectionText>
          Full-Stack Developer & DevOps enthusiast. I build scalable web apps and production-grade CI/CD pipelines. Currently pursuing B.Tech CSE at LPU with a CGPA of 8.63.
        </SectionText>
        <ButtonContainer>
          <Button onClick={() => window.location.href = '#projects'}>View My Work</Button>
          <Button onClick={() => window.open('/ShresthCV.pdf', '_blank')}>Download CV</Button>
        </ButtonContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;