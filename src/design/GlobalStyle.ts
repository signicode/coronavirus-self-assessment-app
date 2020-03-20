import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  html, body, #root, #root > div, #router {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;
