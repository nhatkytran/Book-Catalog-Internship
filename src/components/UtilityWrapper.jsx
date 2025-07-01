import { useEffect } from 'react';
import chalk from 'chalk';
import PropTypes from 'prop-types';

/**
 * Utility wrapper component.
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - Child elements to render.
 */
function UtilityWrapper({ children }) {
  useEffect(() => {
    const chalkBlue = chalk.hex('#3b82f6');
    const chalkOrange = chalk.hex('#f97316');
    console.log(chalkBlue('Welcome to', chalkOrange('Saritasa | Book catalog')));
  }, []);

  return <>{children}</>;
}

UtilityWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UtilityWrapper;
