import styled from 'styled-components';
import { node, string } from 'prop-types';

function AuthLoginFormRow({ children, label, errorMessage }) {
  return (
    <StyledAuthLoginFormRow>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {errorMessage && <ErrorMessageUI>{errorMessage}</ErrorMessageUI>}
    </StyledAuthLoginFormRow>
  );
}

const StyledAuthLoginFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  label {
    color: var(--color-neutral-600);
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const ErrorMessageUI = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: var(--color-red-500);
`;

AuthLoginFormRow.propTypes = {
  children: node.isRequired,
  label: string,
  errorMessage: string,
};

export default AuthLoginFormRow;
