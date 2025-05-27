import styled, { css } from 'styled-components';
import { bool, func } from 'prop-types';

/**
 * A button component for table row actions, typically used as a menu trigger.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Controls the active state of the button.
 * @param {Function} props.onClick - Callback function triggered on button click.
 */
function BooksTableRowButton({ active, onClick }) {
  return (
    <StyledBooksTableRowButton $active={active} onClick={onClick}>
      <img
        src="/images/table-menu-more.svg"
        alt="Table menu more icon"
        draggable={false}
      />
    </StyledBooksTableRowButton>
  );
}

const StyledBooksTableRowButton = styled.button`
  justify-self: flex-end;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all ease 0.2s;

  ${props => props.$active && css`
    outline: 2px solid var(--color-blue-600);
    outline-offset: -1px;
  `};

  &:hover {
    background-color: var(--color-neutral-200);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

BooksTableRowButton.propTypes = {
  active: bool.isRequired,
  onClick: func.isRequired,
};

export default BooksTableRowButton;
