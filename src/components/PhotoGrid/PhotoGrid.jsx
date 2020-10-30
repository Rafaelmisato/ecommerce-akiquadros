import React from 'react';

import { Container, Frame } from './styles';

const PhotoGrid = ({ children }) => {
  return (
    <Container>
      <Frame>{children}</Frame>
    </Container>
  );
};

export default PhotoGrid;
