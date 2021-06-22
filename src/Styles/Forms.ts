import { createGlobalStyle } from 'styled-components/macro';

export const Forms = createGlobalStyle`
  /* forms */
  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }

  textarea,
  input[type='text'],
  input[type='tel'],
  input[type='email'],
  input[type='search'],
  input[type='password'] {
    box-sizing: border-box;
    border: 1px solid var(--form-element-border-color);
    padding: var(--form-element-padding);

    &::-webkit-input-placeholder {
      color: var(--placeholder-color);
    }
    &::-moz-placeholder {
      opacity: 1;
      color: var(--placeholder-color);
    }
    &:-moz-placeholder {
      color: var(--placeholder-color);
    }
    &:-ms-input-placeholder {
      color: var(--placeholder-color);
    }
    &:focus {
      border-color: var(--form-element-focus-border-color);
    }
    
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='file'],
  input[type='submit'] {
    cursor: pointer;
  }

`;
