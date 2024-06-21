import { css } from 'styled-components';

const ButtonErrorUI = css`
  background-color: var(--color-red-500);
  padding: 1rem 1.8rem;

  &:not(:disabled):hover {
    background-color: var(--color-red-600);
  }
`;

export default ButtonErrorUI;
