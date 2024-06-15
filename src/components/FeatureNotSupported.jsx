import styled from 'styled-components';
import PropTypes from 'prop-types';

function FeatureNotSupported({ content, UI }) {
  return (
    <StyledFeatureNotSupported $UI={UI}>
      {content ? content : 'Not supported'}
    </StyledFeatureNotSupported>
  );
}

const StyledFeatureNotSupported = styled.div`
  color: var(--color-neutral-900);
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  ${props => props.$UI};
`;

FeatureNotSupported.propTypes = {
  content: PropTypes.string.isRequired,
  UI: PropTypes.array, // css``
};

export default FeatureNotSupported;
