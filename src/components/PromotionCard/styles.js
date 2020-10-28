import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 250px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  background: pink;

  svg {
    color: white;
    width: 50px;
    height: 50px;
  }
`;

export const TextCard = styled.h2`
  margin-bottom: 6px;
  text-align: center;
`;
export const TextCardObs = styled.span`
  font-size: 14px;
  max-width: 130px;
  text-align: center;
`;
