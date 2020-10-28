import React from 'react';

import { BsHeartFill } from 'react-icons/bs';
import { Container } from './styles';

const Banner = () => {
  return (
    <Container>
      <div>Crie quadros personalizados</div>
      <div>
        <BsHeartFill />
      </div>
      <div>
        Solte a <br />
        imaginação
      </div>
    </Container>
  );
};

export default Banner;
