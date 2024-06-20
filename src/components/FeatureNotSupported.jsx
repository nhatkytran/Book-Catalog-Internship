import styled from 'styled-components';
import { array, string } from 'prop-types';

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

FeatureNotSupported.propTypes = { content: string.isRequired, UI: array }; // css``

export default FeatureNotSupported;
