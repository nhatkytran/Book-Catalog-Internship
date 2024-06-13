import PropTypes from 'prop-types';

function DashChar({ priorityValue, UI }) {
  if (!priorityValue) return <span>&mdash;</span>;

  return UI ? <UI>{priorityValue}</UI> : <div>{priorityValue}</div>;
}

DashChar.propTypes = {
  priorityValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  UI: PropTypes.elementType,
};

export default DashChar;
