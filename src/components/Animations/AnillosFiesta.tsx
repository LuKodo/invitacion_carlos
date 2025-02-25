import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData1 from '../../img/Animations/img_ceremonia.json';
import animationData2 from '../../img/Animations/img_fiesta.json';

const Anillos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData1,
      });
      animation.setSpeed(0.6);

      return () => animation.destroy();
    }
  }, []);

  return <div ref={containerRef} className="anim-anillos" />;
};

const Fiesta = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData2,
      });
      animation.setSpeed(0.6);

      return () => animation.destroy();
    }
  }, []);

  return <div ref={containerRef} className="anim-fiesta" />;
};

export { Fiesta, Anillos };
