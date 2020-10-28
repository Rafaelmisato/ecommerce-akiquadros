import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f0f3fa;
    -webkit-font-smoothing: antialiased;
    padding-top: 79px;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    border: none;
  }

  button {
    cursor: pointer;
  }
`;
