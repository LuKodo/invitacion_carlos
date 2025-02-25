import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import downScroll from '../../img/Animations/down-scroll.json';

const ScrollArrow = () => {
  const arrowContainer = useRef(null);

  useEffect(() => {
    if (arrowContainer.current) {
      const animation = lottie.loadAnimation({
        container: arrowContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: downScroll
      });
      animation.setSpeed(0.6);

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={arrowContainer}
      className="flecha-continuar w-12 h-12 cursor-pointer"
      aria-label="Desplazar hacia abajo"
    />
  );
};

export default ScrollArrow;