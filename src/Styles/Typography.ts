import { createGlobalStyle } from 'styled-components/macro';

export const Typography = createGlobalStyle`
  /* Typography */

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6,
  .h {
    font-family: var(--headings-font-family);
    font-weight: bold;
    margin: 0 0 0.5em;
    color: var(--headings-color);
  }

  h1, .h1 {
    font-size: var(--h1-font-size);
  }

  h2, .h2 {
    font-size: var(--h2-font-size);
  }

  h3, .h3 {
    font-size: var(--h3-font-size);
  }

  h4, .h4 {
    font-size: var(--h4-font-size);
  }

  h5, .h5 {
    font-size: var(--h5-font-size);
  }

  h6, .h6 {
    font-size: var(--h6-font-size);
  }

  p {
    margin: 0 0 1em;
  }

  a {
    color: var(--base-link-color);
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;
