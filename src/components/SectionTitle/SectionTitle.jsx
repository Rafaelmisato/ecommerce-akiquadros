import React from 'react';

import { Container } from './styles';

const SectionTitle = ({ title }) => {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
      </div>
    </Container>
  );
};

export default SectionTitle;
