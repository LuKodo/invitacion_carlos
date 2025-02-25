import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData1 from '../../img/Animations/json_hojas01.json';
import animationData2 from '../../img/Animations/json_hojas02.json';
import animationData3 from '../../img/Animations/json_hojas03.json';
import animationData4 from '../../img/Animations/json_hojas04.json';

const useIntersectionObserver = (callback, options = {}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [callback, options]);

  return targetRef;
};

const FlorIzqSup = () => {
  const animationRef = useRef(null);
  const containerRef = useIntersectionObserver(() => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current.play();
    }
  });

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData1,
      });
      animationRef.current.setSpeed(0.6);

      return () => animationRef.current?.destroy();
    }
  }, []);

  return <div ref={containerRef} className="portada-flor-izq-sup" />;
};
const FlorDerInf = () => {
    const animationRef = useRef(null);
    const containerRef = useIntersectionObserver(() => {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current.play();
      }
    });
  
    useEffect(() => {
      if (containerRef.current) {
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: animationData2,
        });
        animationRef.current.setSpeed(0.6);
  
        return () => animationRef.current?.destroy();
      }
    }, []);
  
    return <div ref={containerRef} className="portada-flor-der-inf" />;
  };
  
  const FlorIzqInf = () => {
    const animationRef = useRef(null);
    const containerRef = useIntersectionObserver(() => {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current.play();
      }
    });
  
    useEffect(() => {
      if (containerRef.current) {
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: animationData3,
        });
        animationRef.current.setSpeed(0.6);
  
        return () => animationRef.current?.destroy();
      }
    }, []);
  
    return <div ref={containerRef} className="portada-flor-izq-inf" />;
  };
  
  const CeremoniaFiesta = () => {
    const animationRef = useRef(null);
    const containerRef = useIntersectionObserver(() => {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current.play();
      }
    });
  
    useEffect(() => {
      if (containerRef.current) {
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: animationData4,
        });
        animationRef.current.setSpeed(0.6);
  
        return () => animationRef.current?.destroy();
      }
    }, []);
  
    return <div ref={containerRef} className="ceremonia-fiesta-flor-der" />;
  };
  
  const RegalosFlorDer = () => {
    const animationRef = useRef(null);
    const containerRef = useIntersectionObserver(() => {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current.play();
      }
    });
  
    useEffect(() => {
      if (containerRef.current) {
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: animationData4,
        });
        animationRef.current.setSpeed(0.6);
  
        return () => animationRef.current?.destroy();
      }
    }, []);
  
    return <div ref={containerRef} className="regalos-flor-der" />;
  };
  
  export { FlorDerInf, FlorIzqSup, FlorIzqInf, CeremoniaFiesta, RegalosFlorDer };