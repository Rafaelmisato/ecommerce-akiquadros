import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;

  h1 {
    margin: 50px 0 10px 0;
    font-size: 30px;
    font-weight: 500;
    color: #332f33;
  }

  div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #c257c2;
      cursor: pointer;
      font-size: 14px;
    }

    p {
      color: #332f33;
      font-size: 14px;
    }

    svg {
      margin: 2px 20px 0 20px;
      width: 10px;
      height: 10px;
      color: #332f33;
    }
  }
`;
