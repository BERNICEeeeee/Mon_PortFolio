// src/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.highlight || '#4a90e2'};
    color: white;
  }
      html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;


export default GlobalStyle;
