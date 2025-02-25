import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../img/Animations/json_camara.json';

const Camara = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      });
      animation.setSpeed(0.6);

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="anim-galeria"
    />
  );
};

export default Camara;