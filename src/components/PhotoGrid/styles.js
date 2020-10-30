import styled from 'styled-components';

import bg from '../../assets/wallbg.png';

export const Container = styled.div`
  background: url(${bg}) center no-repeat;
  background-size: cover;
  width: 60%;
  max-width: 1280px;
  padding: 50px 0;
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border: 18px solid #fff;
    max-width: 400px;
    max-height: 400px;
  }
`;
