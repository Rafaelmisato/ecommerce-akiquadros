import styled from 'styled-components';

import bg from '../../assets/wall.png';

import geometric1 from '../../assets/geometric1.png';
import geometric2 from '../../assets/geometric2.png';
import geometric3 from '../../assets/geometric3.png';

export const Container = styled.section`
  display: flex;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  padding: 60px 0 30px 0;
  justify-content: space-around;
  font-family: 'Architects Daughter', cursive;
  font-size: 22px;
  cursor: default;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 300px;
    border: 10px solid black;
    box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.6);

    &:nth-of-type(1) {
      background: url(${geometric1}) no-repeat center;
      background-size: cover;
      animation: down 1.5s ease-in-out;
    }

    &:nth-of-type(2) {
      background: url(${geometric2}) no-repeat center;
      background-size: cover;
      animation: down 2s ease-in-out;
    }

    &:nth-of-type(3) {
      background: url(${geometric3}) no-repeat center;
      background-size: cover;
      animation: down 2.5s ease-in-out;
    }

    & + div {
      margin-left: 10px;
    }

    svg {
      width: 50px;
      height: 50px;
    }

    @keyframes down {
      from {
        position: relative;
        top: -400px;
      }
      to {
        position: relative;
        top: 0px;
      }
    }
  }
`;
