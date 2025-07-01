import styled from 'styled-components';

/** A styled component that represents an overlay. */
const OverlayUI = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--shadow-modal);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

export default OverlayUI;
