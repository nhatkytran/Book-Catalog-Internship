import { createContext, createElement, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import PropTypes from 'prop-types';

import { useOutsideClick } from '~/hooks';
import { OverlayUI } from '~/ui';

// Context API //////////

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const open = openNameParam => setOpenName(openNameParam);
  const close = () => setOpenName('');

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// Components //////////

function Open({ children, openName }) {
  const { open } = useContext(ModalContext);

  const handleOpen = () => {
    // In case the children already have onClick function -> avoid overriding
    children.props.onClick?.();
    open(openName);
  };

  return createElement(children.type, {
    ...children.props,
    onClick: handleOpen,
  });
}

function Window({ openName: windowName, renderWindow }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick({ handler: close, listenCapturing: true });

  if (windowName !== openName) return null;

  return createPortal(
    <OverlayUI>
      <StyledModal ref={ref}>
        <ButtonUI onClick={close}>
          <HiXMark />
        </ButtonUI>

        <div>{renderWindow({ onCloseModal: close })}</div>
      </StyledModal>
    </OverlayUI>,
    document.querySelector('#modal')
  );
}

// Styles //////////

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-neutral-50);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const ButtonUI = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-neutral-200);
  }

  svg {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

// Compound Components //////////

Modal.Open = Open;
Modal.Window = Window;

// PropTypes //////////

const childrenProp = { children: PropTypes.node.isRequired };
const openNameProp = { openName: PropTypes.string.isRequired };
const renderWindowProp = { renderWindow: PropTypes.func.isRequired };

Modal.propTypes = { ...childrenProp };
Open.propTypes = { ...childrenProp, ...openNameProp };
Window.propTypes = { ...openNameProp, ...renderWindowProp };

export default Modal;
