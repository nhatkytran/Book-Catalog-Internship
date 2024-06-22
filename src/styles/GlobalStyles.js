import { createGlobalStyle } from 'styled-components';

export const px1200 = '75em';
export const px1000 = '62.5em';
export const px900 = '56.25em';
export const px800 = '50em';
export const px700 = '43.75em';
export const px600 = '37.5em';
export const px500 = '31.25em';
export const px400 = '25em';

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
    --color-neutral-950: #0a0a0a;

    --color-orange-50: #fff7ed;
    --color-orange-100: #ffedd5;
    --color-orange-200: #fed7aa;
    --color-orange-300: #fdba74;
    --color-orange-400: #fb923c;
    --color-orange-500: #f97316;
    --color-orange-600: #ea580c;
    --color-orange-700: #c2410c;
    --color-orange-800: #9a3412;
    --color-orange-900: #7c2d12;
    --color-orange-950: #431407;

    --color-red-50: #fef2f2;
    --color-red-100: #fee2e2;
    --color-red-200: #fecaca;
    --color-red-300: #fca5a5;
    --color-red-400: #f87171;
    --color-red-500: #ef4444;
    --color-red-600: #dc2626;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
    --color-red-900: #7f1d1d;

    --color-blue-50: #eff6ff;
    --color-blue-100: #dbeafe;
    --color-blue-200: #bfdbfe;
    --color-blue-300: #93c5fd;
    --color-blue-400: #60a5fa;
    --color-blue-500: #3b82f6;
    --color-blue-600: #2563eb;
    --color-blue-700: #1d4ed8;
    --color-blue-800: #1e40af;
    --color-blue-900: #1e3a8a;
    --color-blue-950: #172554;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.17);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.3);
    }

    --width-main-layout: 120rem;
    --width-sub-layout: 60rem;

    --font-open-sans: 'Open Sans', monospace, sans-serif;
    --font-sono: Sono, monospace, sans-serif;
    --font-poppins: Poppins, monospace, sans-serif;
    
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --line: 1px solid var(--color-neutral-100);

    --shadow-modal: rgba(0, 0, 0, 0.6);
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
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-orange-500);
    background-image: linear-gradient(to right bottom, var(--color-orange-500), var(--color-blue-600));
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--color-neutral-800);
    font-family: var(--font-open-sans);
    font-size: 1.6rem;
    line-height: 1.5;
    transition: color 0.3s, background-color 0.3s;
    overflow-x: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  *:disabled {
    cursor: not-allowed;
  }

  button {
    cursor: pointer;
    font-family: var(--font-poppins);
  }

  button, input, select {
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

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
