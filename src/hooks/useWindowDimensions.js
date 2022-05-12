import { useEffect, useState } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 1640,
    height: 1000,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth > 1640 ? 1640 : window.innerWidth,
    });

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;

      return {
        width,
        height,
      };
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
