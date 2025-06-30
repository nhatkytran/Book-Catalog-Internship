import { useEffect } from 'react';
import { string, func } from 'prop-types';

/**
 * A custom hook that adds an event listener to the window.
 * @param {Object} props - Component props.
 * @param {string} props.eventName - The name of the event to listen for.
 * @param {Function} props.handler - The handler function to call when the event is triggered.
 */
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
