import { useEffect } from 'react';

export function useEscapeKey(callback) {
  useEffect(() => {
    document.addEventListener('keydown', escKeyPress, false);

    function escKeyPress(e) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    return () => {
      document.removeEventListener('keydown', escKeyPress);
    };
  }, [callback]);
}
