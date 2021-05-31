import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${props => props.theme.colors.gray900};
    color: ${props => props.theme.colors.white};
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`
