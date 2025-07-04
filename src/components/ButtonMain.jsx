import styled from 'styled-components';
import { array, node, func } from 'prop-types';

/**
 * A reusable primary button component with customizable styling.
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @param {Array} [props.UI] - Array of styled-components CSS template literals for custom styling.
 * @param {Function} [props.onClick] - Click event handler function.
 * @param {Object} [props.rest] - Additional HTML button props.
 */

function ButtonMain({ children, UI, onClick, ...props }) {
  return (
    <StyledButtonMain $UI={UI} onClick={onClick} {...props}>
      {children}
    </StyledButtonMain>
  );
}

const StyledButtonMain = styled.button`
  background-color: var(--color-blue-600);
  color: var(--color-neutral-50);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 1.6rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  transition: all ease 0.2s;

  &:not(:disabled):hover {
    background-color: var(--color-blue-700);
  }

  ${props => props.$UI};
`;

ButtonMain.propTypes = { children: node.isRequired, UI: array, onClick: func }; // UI -> css``

export default ButtonMain;
