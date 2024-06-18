import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function BooksFormRow({ children, label, message, link, errorMessage }) {
  return (
    <StyledBooksFormRow>
      {label && <label htmlFor={children.props.id}>{label}</label>}

      {children}

      {!errorMessage && message && (
        <MessageUI>
          {link ? (
            <a href={link} target="_blank">
              {message}
            </a>
          ) : (
            message
          )}
        </MessageUI>
      )}

      {errorMessage && <MessageUI $type="error">{errorMessage}</MessageUI>}
    </StyledBooksFormRow>
  );
}

const StyledBooksFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 14rem 1.2fr 1.2fr;
  gap: 2rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }

  &:has(button) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  label {
    font-weight: 500;
  }
`;

const MessageUI = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
  ${props =>
    props.$type === 'error' &&
    css`
      color: var(--color-red-500);
    `};

  a {
    text-decoration: underline;
  }
`;

const propTypeString = PropTypes.string;

BooksFormRow.propTypes = {
  children: PropTypes.node.isRequired,
  label: propTypeString,
  message: propTypeString,
  link: PropTypes.string,
  errorMessage: propTypeString,
};

export default BooksFormRow;
