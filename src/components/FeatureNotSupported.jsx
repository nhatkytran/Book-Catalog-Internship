import styled from 'styled-components';
import { array, string } from 'prop-types';

const DEFAULT_FEATURE_NOT_SUPPORTED_CONTENT = 'Not supported';

/**
 * A reusable component that displays a "Not Supported" message.
 * @param {string} content - The custom message to display. If not provided, defaults to DEFAULT_FEATURE_NOT_SUPPORTED_CONTENT.
 * @param {Array<CSS>} [UI] - Optional array of styled-components CSS template literals for custom styling.
 */
function FeatureNotSupported({ content, UI }) {
  return (
    <StyledFeatureNotSupported $UI={UI}>
      {content ? content : DEFAULT_FEATURE_NOT_SUPPORTED_CONTENT}
    </StyledFeatureNotSupported>
  );
}

const StyledFeatureNotSupported = styled.div`
  color: var(--color-neutral-900);
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 2rem;
  ${props => props.$UI}
`;

FeatureNotSupported.propTypes = { content: string.isRequired, UI: array }; // css``

export default FeatureNotSupported;
