import styled from 'styled-components';
import PropTypes from 'prop-types';

function BooksTableRowMenuButton({ icon: Icon, label, onClick }) {
  return (
    <StyledBooksTableRowMenuButton onClick={onClick}>
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
  transition: all 0.2s;

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
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BooksTableRowMenuButton;
