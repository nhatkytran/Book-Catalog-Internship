import styled from 'styled-components';
import { px1200 } from '~/styles/GlobalStyles';

/** A styled component that represents a layout. */
const LayoutUI = styled.div`
  max-width: var(--width-main-layout);
  min-height: var(--width-sub-layout);
  background-color: var(--color-neutral-100);
  margin: 8rem auto;
  box-shadow: var(--shadow-lg);

  @media only screen and (max-width: ${px1200}) {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
`;

export default LayoutUI;
