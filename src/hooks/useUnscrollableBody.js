import { useEffect } from 'react';

export function useUnscrollableBody() {
  useEffect(() => {
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
          get: function () {
            return (supportsPassive = true);
          },
        })
      );
    } catch (e) {
      console.log(e);
    }

    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent =
      'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener('DOMMouseScroll', stopScroll, false); // older FF
    window.addEventListener(wheelEvent, stopScroll, wheelOpt); // modern desktop
    window.addEventListener('touchmove', stopScroll, wheelOpt); // mobile
    return () => {
      window.removeEventListener('DOMMouseScroll', stopScroll, false);
      window.removeEventListener(wheelEvent, stopScroll, wheelOpt);
      window.removeEventListener('touchmove', stopScroll, wheelOpt);
    };
  }, []);

  function stopScroll(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}
