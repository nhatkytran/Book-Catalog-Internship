import { oneOfType, elementType, string, number } from 'prop-types';

function DashChar({ priorityValue, UI }) {
  if (!priorityValue && priorityValue !== 0) return <span>&mdash;</span>;

  return UI ? <UI>{priorityValue}</UI> : <div>{priorityValue}</div>;
}

DashChar.propTypes = {
  priorityValue: oneOfType([string, number]),
  UI: elementType,
};

export default DashChar;
