import { createGlobalStyle } from 'styled-components/macro';

export const Variables = createGlobalStyle`
  html {
    --gray: #999;
    --black: #333;
    --white: #fff;
    --light-blue: #39f;

    --base-font-sans-serif: 'Segoe UI','Arial', 'Helvetica Neue', 'Helvetica', sans-serif;
    --base-font-sans-serif-2: 'Caviar Dreams','Arial', 'Helvetica Neue', 'Helvetica', sans-serif;
    --base-font-serif: 'Goldoni','Times New Roman', 'Times', 'Baskerville', 'Georgia', serif;

    /* This is the default html and body font-size for the base rem value. */
    --rem-base: 16px;

    /* Body */
    --base-text-color: var(--black);
    --base-background-color: var(--white);
    --font-size-base: 16px;
    --line-height-base: 1.2;
    --base-font-family: var(--base-font-sans-serif);

    --vertical-rhythm: (var(--line-height-base) * 1em);

    --base-min-width: 320px;

    /*  Links */
    --base-link-color: var(--light-blue);

     /* Buttons  */
    --btn-color: var(--white);
    --btn-background: var(--black);
    --btn-padding: 0.4em 0.7em;
    --btn-font-size: inherit;

    /*  Forms */
    --form-element-padding: var(--btn-padding);
    --form-element-border-color: var(--gray);
    --form-element-focus-border-color: var(--black);
    --placeholder-color: var(--gray);

    /* Headers */
    --h1-font-size: 30px;
    --h2-font-size: 27px;
    --h3-font-size: 24px;
    --h4-font-size: 21px;
    --h5-font-size: 17px;
    --h6-font-size: 15px;

    --headings-font-family: inherit;
    --headings-color: inherit;


    --animation-speed: 0.3s;
  }
`;
