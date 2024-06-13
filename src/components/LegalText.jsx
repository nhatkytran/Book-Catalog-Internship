import PropTypes from 'prop-types';

function LegalText({ UI, textContent = '© 2024 by Saritasa.' }) {
  return <UI>{textContent}</UI>;
}

LegalText.propTypes = {
  UI: PropTypes.elementType.isRequired,
  textContent: PropTypes.string,
};

export default LegalText;
