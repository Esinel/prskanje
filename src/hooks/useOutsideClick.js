import { useEffect } from 'react';

export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      // event happened outside of ref scope
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
