import styled, { css } from 'styled-components';

const HeadingUI = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 2.6rem;
      font-weight: 600;
    `}

  font-family: var(--font-poppins);
  color: var(--color-neutral-600);
`;

export default HeadingUI;
