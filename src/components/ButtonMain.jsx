import styled from 'styled-components';
import PropTypes from 'prop-types';

function ButtonMain({ children, UI, onClick }) {
  return (
    <StyledButtonMain $UI={UI} onClick={onClick}>
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
  ${props => props.$UI};
`;

ButtonMain.propTypes = {
  children: PropTypes.node.isRequired,
  UI: PropTypes.array, // css``
  onClick: PropTypes.func.isRequired,
};

export default ButtonMain;
