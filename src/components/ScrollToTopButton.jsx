import { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { AiFillUpSquare } from 'react-icons/ai';
import { px700 } from '~/styles/GlobalStyles';
import { useWindowEventListener } from '~/hooks';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useWindowEventListener({
    eventName: 'scroll',
    handler: () => setIsVisible(window.scrollY > 300),
  });

  if (!isVisible) return null;

  return createPortal(
    <StyledScrollToTopButton onClick={scrollToTop}>
      <AiFillUpSquareUI />
    </StyledScrollToTopButton>,
    document.querySelector('#scroll-to-top')
  );
}

const StyledScrollToTopButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  outline: 1px solid var(--color-neutral-700);
  outline-offset: -3px;
  z-index: 100000;
  border-radius: var(--border-radius-tiny);
  animation: 0.5s cubic-bezier(0.42, 0, 0.002, 1) 0s 1 normal none running open;
  cursor: pointer;

  &:hover svg {
    fill: var(--color-orange-600);
  }

  @media only screen and (max-width: ${px700}) {
    bottom: 1.6rem;
    right: 1.6rem;
  }
`;

const AiFillUpSquareUI = styled(AiFillUpSquare)`
  display: block;
  width: 4rem;
  height: 4rem;
  fill: var(--color-orange-500);
  transition: all ease 0.2s;

  @media only screen and (max-width: ${px700}) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export default ScrollToTopButton;
