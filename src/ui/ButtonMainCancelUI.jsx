import { css } from 'styled-components';

const ButtonMainCancelUI = css`
  background-color: var(--color-white);
  color: var(--color-neutral-600);
  border: 1px solid var(--color-neutral-300);

  &:not(:disabled):hover {
    background-color: var(--color-neutral-100);
  }
`;

export default ButtonMainCancelUI;
