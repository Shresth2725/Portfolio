import React from 'react';
import { DiReact, DiNodejs, DiAws } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work across the full stack — from building React frontends to deploying
      production infrastructure on AWS with CI/CD automation.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, <br />
            JavaScript, HTML, CSS, TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, <br />
            MongoDB, SQL, REST APIs, JWT
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps & Cloud</ListTitle>
          <ListParagraph>
            AWS EC2, Jenkins, Docker, <br />
            Terraform, Ansible, Linux, Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
