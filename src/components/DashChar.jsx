import { oneOfType, elementType, string, number } from 'prop-types';

/**
 * Displays a value or a dash character if the value is falsy (except zero).
 * @param {string|number} [priorityValue] - The value to be displayed.
 * @param {React.ElementType} [UI] - Optional custom component to wrap the displayed value.
 */
function DashChar({ priorityValue, UI }) {
  if (!priorityValue && priorityValue !== 0) return <span>&mdash;</span>;
  return UI ? <UI>{priorityValue}</UI> : <div>{priorityValue}</div>;
}

DashChar.propTypes = {
  priorityValue: oneOfType([string, number]),
  UI: elementType,
};

export default DashChar;
