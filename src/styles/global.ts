import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
  }

  button, a {

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`