import { useEffect, useState } from 'react';

const useBackgroundImageBrightness = (imageSrc) => {
  const [iconColor, setIconColor] = useState('black');

  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 1, 1);

      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      setIconColor(brightness > 125 ? 'black' : 'white');
    };
  }, [imageSrc]);

  return iconColor;
};

export default useBackgroundImageBrightness;
