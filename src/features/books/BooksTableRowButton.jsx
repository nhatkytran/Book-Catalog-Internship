import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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

BooksTableRowButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledBooksTableRowButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all ease 0.2s;
  ${props =>
    props.$active &&
    css`
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

export default BooksTableRowButton;
