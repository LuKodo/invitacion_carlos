import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../img/Animations/tips.json';

const Tips = () => {
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
      animation.setSpeed(0.8);

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="anim-tips"
    />
  );
};

export default Tips;