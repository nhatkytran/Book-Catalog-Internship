import { useEffect } from 'react';

function useResize(handler) {
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [handler]);
}

export default useResize;
