import styled from 'styled-components';
import { elementType, string, func } from 'prop-types';

/**
 * A menu button component designed for table row actions, displaying an icon and label.
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.icon - The icon component to display.
 * @param {string} props.label - The text label for the button.
 * @param {Function} props.onClick - Callback function triggered when the button is clicked.
 */
function BooksTableRowMenuButton({ icon: Icon, label, onClick: onCloseModal }) {
  return (
    <StyledBooksTableRowMenuButton onClick={onCloseModal}>
      {<Icon />}
      <span>{label}</span>
    </StyledBooksTableRowMenuButton>
  );
}

const StyledBooksTableRowMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;

  &:hover {
    background-color: var(--color-neutral-100);
  }

  svg {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    fill: var(--color-neutral-500);
  }

  span {
    display: block;
    color: var(--color-neutral-600);
  }
`;

BooksTableRowMenuButton.propTypes = {
  icon: elementType.isRequired,
  label: string.isRequired,
  onClick: func.isRequired,
};

export default BooksTableRowMenuButton;
