import { useEffect } from 'react';
import PropTypes from 'prop-types';

function useWindowEventListener({ eventName, handler }) {
  useEffect(() => {
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, [eventName, handler]);
}

useWindowEventListener.propTypes = {
  eventName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default useWindowEventListener;
