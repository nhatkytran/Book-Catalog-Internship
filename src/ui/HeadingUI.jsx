import styled, { css } from 'styled-components';

const HeadingUI = styled.h1`
  font-family: var(--font-poppins);

  ${props =>
    props.as === 'h1' &&
    css`
      color: var(--color-neutral-600);
      font-size: 2.6rem;
      font-weight: 600;
    `}

  ${props =>
    props.as === 'h2' &&
    css`
      color: var(--color-neutral-900);
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.2;
      margin: 2rem 0 2.4rem;
    `}
`;

export default HeadingUI;
