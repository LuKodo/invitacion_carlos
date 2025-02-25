import { useEffect, useState } from 'react';
import Corazon from './Animations/Corazon';

export const CuentaRegresiva = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-31T17:30:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Actualizar el tiempo inicialmente
    setTimeLeft(calculateTimeLeft());

    // Actualizar cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cuenta-regresiva">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="box-aros d-flex justify-content-center align-items-center">
            <div className="box-circulo text-center">
              <span className="falta">Falta</span>
              <div id="reloj" className="reloj">
                <div id="dias" className="reloj-col">
                  <span className="number">{timeLeft.days}</span>
                  <span className="time">días</span>
                </div>

                <div id="horas" className="reloj-col">
                  <span className="number">{timeLeft.hours}</span>
                  <span className="time">hs</span>
                </div>

                <div id="minutos" className="reloj-col">
                  <span className="number">{timeLeft.minutes}</span>
                  <span className="time">min</span>
                </div>

                <div id="segundos" className="reloj-col no-border">
                  <span className="number">{timeLeft.seconds}</span>
                  <span className="time">seg</span>
                </div>

                <div className="clearfix"/>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <Corazon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
