import { useEffect, useRef } from 'react';

function useOutsideClick({ handler, listenCapturing = false }) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = event =>
      ref.current && !ref.current.contains(event.target) && handler();

    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutsideClick;
