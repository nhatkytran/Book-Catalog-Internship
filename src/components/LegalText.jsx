import { elementType, string } from 'prop-types';

function LegalText({ UI, textContent = '© 2024 by Saritasa.' }) {
  return <UI>{textContent}</UI>;
}

LegalText.propTypes = { UI: elementType.isRequired, textContent: string };

export default LegalText;
