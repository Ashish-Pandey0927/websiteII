import { useEffect, useState } from 'react';

const useIconColorByBackground = () => {
  const [iconColor, setIconColor] = useState('black');

  useEffect(() => {
    const calculateBrightness = () => {
      const bg = getComputedStyle(document.body).backgroundColor;
      const rgb = bg.match(/\d+/g)?.map(Number);

      if (!rgb || rgb.length < 3) return;

      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      setIconColor(brightness > 125 ? 'black' : 'white');
    };

    calculateBrightness();
    window.addEventListener('resize', calculateBrightness);

    return () => {
      window.removeEventListener('resize', calculateBrightness);
    };
  }, []);

  return iconColor;
};

export default useIconColorByBackground;
