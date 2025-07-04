import { createContext, createElement, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import styled from 'styled-components';
import { node, string, func } from 'prop-types';

import { useOutsideClick } from '~/hooks';
import { OverlayUI } from '~/ui';

const ModalContext = createContext();

/**
 * Provides context and state management for creating accessible modal dialogs.
 * @example
 * <Modal>
 *   <Modal.Open openName="example">
 *     <button>Open Modal</button>
 *   </Modal.Open>
 *   <Modal.Window openName="example" renderWindow={({ onCloseModal }) => (
 *     <div>Modal Content</div>
 *   )} />
 * </Modal>
 */
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

function Open({ children, openName }) {
  const { open } = useContext(ModalContext);

  const handleOpen = () => {
    children.props.onClick?.();
    open(openName);
  };

  return createElement(children.type, {
    ...children.props,
    onClick: handleOpen,
  });
}

function Window({ openName: windowName, renderWindow }) {
  const { openName } = useContext(ModalContext);

  if (windowName !== openName) return null;

  return createPortal(
    <OverlayUI>
      <ModalPortal renderWindow={renderWindow} />
    </OverlayUI>,
    document.querySelector('#modal'),
  );
}

function ModalPortal({ renderWindow }) {
  const { close } = useContext(ModalContext);
  const ref = useOutsideClick({ handler: close, listenCapturing: true });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <StyledModal ref={ref}>
      <ButtonUI onClick={close}>
        <HiXMark />
      </ButtonUI>

      <div>{renderWindow({ onCloseModal: close })}</div>
    </StyledModal>
  );
}

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

Modal.Open = Open;
Modal.Window = Window;

const childrenProp = { children: node.isRequired };
const openNameProp = { openName: string.isRequired };
const renderWindowProp = { renderWindow: func.isRequired };

Modal.propTypes = { ...childrenProp };
Open.propTypes = { ...childrenProp, ...openNameProp };
Window.propTypes = { ...openNameProp, ...renderWindowProp };
ModalPortal.propTypes = { ...renderWindowProp };

export default Modal;
