import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease;
  }

  /* Remove default focus styles */
  *:focus {
    outline: none;
  }

  /* Add focus styles only for keyboard navigation */
  *:focus-visible {
    outline: 1px solid ${({ theme }) => theme.accent};
  }

  * {
    transition: background-color 0.2s ease,
                color 0.2s ease,
                border-color 0.2s ease;
  }
`

export default GlobalStyle
