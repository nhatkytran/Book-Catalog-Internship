import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    &, &.light-mode {
    --color-black: #000;
    --color-white: #fff;

    --color-neutral-50: #fafafa;
    --color-neutral-100: #f5f5f5;
    --color-neutral-200: #e5e5e5;
    --color-neutral-300: #d4d4d4;
    --color-neutral-400: #a3a3a3;
    --color-neutral-500: #737373;
    --color-neutral-600: #525252;
    --color-neutral-700: #404040;
    --color-neutral-800: #262626;
    --color-neutral-900: #171717;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    }

    --width-main-layout: 110rem;

    --font-sono: Sono, monospace, sans-serif;
    --font-poppins: Poppins, monospace, sans-serif;
    
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: background-color 0.3s, border 0.3s; /* Creating animations for dark mode */
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    background-color: var(--color-neutral-100);
    color: var(--color-grey-800);
    font-family: var(--font-poppins);
    font-size: 1.6rem;
    line-height: 1.5;
    transition: color 0.3s, background-color 0.3s;
  }

  *:disabled {
    cursor: not-allowed;
  }

  button, input {
    outline: none;
    border: none;
    background-color: transparent;
  }

  img {
    max-width: 100%;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;

export default GlobalStyles;