import styled, { css } from 'styled-components';
import { node, string } from 'prop-types';

/**
 * A reusable form row component that provides a consistent layout for form elements.
 * It includes support for labels, form controls, help messages, and error messages.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The form control element to be rendered.
 * @param {string} [props.label] - Optional label text for the form control.
 * @param {string} [props.message] - Help or informative message to display below the control.
 * @param {string} [props.link] - Optional URL to make the message clickable.
 * @param {string} [props.errorMessage] - Error message to display when validation fails.
 */
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

    &:has(label) {
      justify-content: space-between;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 400;
      cursor: pointer;

      span {
        display: block;
        width: 2rem;
        height: 2rem;
        outline: 1px solid var(--color-neutral-300);
        outline-offset: -2px;
        box-shadow: var(--shadow-sm);

        svg {
          display: block;
          width: 100%;
          height: 100%;
          fill: var(--color-blue-600);
        }
      }

      p {
        padding: 0.2rem 0;
        position: relative;
        top: 1px;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      button:first-child {
        order: 1;
      }
    }
  }

  label {
    font-weight: 500;
  }
`;

const MessageUI = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;

  ${props => props.$type === 'error' && css`
    color: var(--color-red-500);
  `};

  a {
    text-decoration: underline;
  }
`;

BooksFormRow.propTypes = {
  children: node.isRequired,
  label: string,
  message: string,
  link: string,
  errorMessage: string,
};

export default BooksFormRow;
