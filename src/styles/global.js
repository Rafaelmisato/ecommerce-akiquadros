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
    padding-top: 59px;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    border: none;
  }

  ul, li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }
`;
