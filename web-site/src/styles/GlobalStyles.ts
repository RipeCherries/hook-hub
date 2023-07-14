import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bgColor: #F0F2F5;
    --textColor: #03484D;
  }

  body {
    min-height: 100vh;
    width: 100%;
    font-family: 'Montserrat Variable', sans-serif;
    font-size: 20px;
    color: var(--textColor);
    background: var(--bgColor);
  }

  a {
    text-decoration: none;
    color: var(--textColor);
  }

  img, svg {
    height: 100%;
    width: 100%;
  }

  li, ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;