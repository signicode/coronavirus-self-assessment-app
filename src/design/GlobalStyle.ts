import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  html, body, #root, #root > div, #router {
    min-height: 100%;
    height: 100%;
  }
  body{
    font-family: 'Helvetica', sans-serif;
    background: ${props => props.theme.colors.primary};
  }
`;
