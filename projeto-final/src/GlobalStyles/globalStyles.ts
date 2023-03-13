import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }

  :root {
    --color-green-00: #52FF00;
    --color-blue-00: #4A83F6;
    --color-grey-00: #FFFFFF;
    --color-grey-01: #868E96;
    --color-grey-03: #212529;
    --color-grey-04: #1D1D2A;

    --font-nav:24px;
    --font-title:20px;
    --font-sub-title:18px;
    --font-button:20px;
    --font-label:13px;
    --font-text-default:16px;
  }
`;
