import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10,   text: 'Projects Built' },
  { number: 500, text: 'LeetCode Problems Solved' },
  { number: 300, text: 'Day LeetCode Streak' },
  { number: 5,   text: 'HackerRank SQL Stars' },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider divider />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
