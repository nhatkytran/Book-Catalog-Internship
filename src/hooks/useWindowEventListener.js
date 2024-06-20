import { useEffect } from 'react';
import { string, func } from 'prop-types';

function useWindowEventListener({ eventName, handler }) {
  useEffect(() => {
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, [eventName, handler]);
}

useWindowEventListener.propTypes = {
  eventName: string.isRequired,
  handler: func.isRequired,
};

export default useWindowEventListener;
