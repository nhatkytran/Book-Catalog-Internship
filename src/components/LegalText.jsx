import { elementType, string } from 'prop-types';

const PLACEHOLDER_TEXT_CONTENT = '© 2024 by Saritasa.';

/**
 * Legal text component.
 * @param {Object} props - Component props.
 * @param {elementType} props.UI - Styled component for the legal text.
 * @param {string} props.textContent - Text content of the legal text.
 */
function LegalText({ UI, textContent = PLACEHOLDER_TEXT_CONTENT }) {
  return <UI>{textContent}</UI>;
}

LegalText.propTypes = { UI: elementType.isRequired, textContent: string };

export default LegalText;
