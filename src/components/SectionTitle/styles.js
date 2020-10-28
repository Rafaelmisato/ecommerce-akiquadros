import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;

  div {
    margin: 0 auto;
    width: 80%;
    height: 1px;
    background: #ccc;
  }

  h2 {
    background: #f0f3fa;
    font-size: 30px;
    font-weight: 700;
    padding: 5px 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -51%);
  }
`;
