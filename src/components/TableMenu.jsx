import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { arrayOf, shape, elementType, node, string, func } from 'prop-types';

import { useOutsideClick, useWindowEventListener } from '~/hooks';

const TableMenuContext = createContext();

/**
 * A compound component that provides a context menu for table rows.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Child components (Toggle and List).
 * @example
 * <TableMenu>
 *   <TableMenu.Toggle id="menu-1" renderButton={renderButton} />
 *   <TableMenu.List id="menu-1" buttons={menuItems} renderButton={renderButton} />
 * </TableMenu>
 */
function TableMenu({ children }) {
  const [openID, setOpenID] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenID('');
  const open = tabledID => setOpenID(tabledID);

  return (
    <TableMenuContext.Provider
      value={{ openID, close, open, position, setPosition }}
    >
      {children}
    </TableMenuContext.Provider>
  );
}

function Toggle({ id, renderButton }) {
  const { openID, open, close, setPosition } = useContext(TableMenuContext);

  function handleClick(event) {
    const rect = event.target.closest('button').getBoundingClientRect();

    const x = window.innerWidth - rect.x - rect.width - 16.5;
    const y = rect.y + rect.height + 8;

    setPosition({ x, y });
    openID === '' || openID !== id ? open(id) : close();
  }

  return renderButton({ active: !!openID, onClick: handleClick });
}

function List({ id, buttons, renderButton }) {
  const { openID } = useContext(TableMenuContext);

  if (openID !== id) return null;

  return createPortal(
    <ListOfItems buttons={buttons} renderButton={renderButton} />,
    document.querySelector('#miscellaneous-item'),
  );
}

/**
 * Separate list of items component for performance.
 * If we use useEffect in a List component, it will run immediately.
 * But in this case, we only would like to run useEffect when a list is mounted to the DOM.
 */
function ListOfItems({ buttons, renderButton }) {
  const { position, close } = useContext(TableMenuContext);
  const ref = useOutsideClick({ handler: close, listenCapturing: true });

  useWindowEventListener({ eventName: 'resize', handler: close });
  useWindowEventListener({ eventName: 'scroll', handler: close });

  return (
    <StyledList ref={ref} $position={position}>
      {buttons.map(({ icon, label, value }, index) => (
        <li key={index}>
          {renderButton({ icon, label, value, onCloseModal: close })}
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  position: fixed;
  right: ${props => props.$position.x}px;
  top: ${props => props.$position.y}px;
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
`;

TableMenu.Toggle = Toggle;
TableMenu.List = List;

const buttonShape = shape({ icon: elementType, label: string });
const childrenProp = { children: node.isRequired };
const idProp = { id: string.isRequired };
const renderButtonProp = { renderButton: func.isRequired };
const buttonsProp = { buttons: arrayOf(buttonShape).isRequired };

TableMenu.propTypes = { ...childrenProp };
List.propTypes = { ...idProp, ...buttonsProp, ...renderButtonProp };
ListOfItems.propTypes = { ...buttonsProp, ...renderButtonProp };
Toggle.propTypes = { ...idProp, ...renderButtonProp };

export default TableMenu;
