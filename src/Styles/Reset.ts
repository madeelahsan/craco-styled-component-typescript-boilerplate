import { createGlobalStyle } from 'styled-components/macro';

export const Reset = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {max-height: 1000000px;}

  body {
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base)/var(--line-height-base) var(--base-font-family);
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }
`;
