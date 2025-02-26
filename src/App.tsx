import { Portada } from './components/Portada';
import { CuentaRegresiva } from './components/CuentaRegresiva';
import { Ceremonia } from './components/Ceremonia';
import { Galeria } from './components/Galeria';
import { Fiesta } from './components/Fiesta';
import { Regalos } from './components/Regalos';
import { Instagram } from './components/Instagram';
import { Footer } from './components/Footer';
import { ModalAsistencia } from './components/ModalAsistencia';
import { useState } from 'react';
import useDeviceDetect from './useDeviceDetect';
import BackgroundMusic from './components/BackgroundMusic';

const App = () => {
  const [show, setShow] = useState(false);

  const { isMobile, isDesktop } = useDeviceDetect();
  const handleClose = () => setShow(false);
  const handleShow3 = () => setShow(true);

  return (
    <>
      <BackgroundMusic />
      <ModalAsistencia show={show} handleClose={handleClose} />
      {isDesktop && (
        <div
          className="parallax-mirror"
          style={{
            visibility: "visible",
            zIndex: "-100",
            position: "fixed",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            transform: "translate3d(0px, 0px, 0px)",
            height: "776.4px",
            width: "1526px"
          }}>
          <img
            className="parallax-slider"
            alt=''
            src="images/galery/IMG_0237.png"
            style={{
              transform: "translate3d(0px, -103px, 0px)",
              position: "absolute",
              height: "858px",
              width: "1526px",
              maxWidth: "none"
            }}
          />
        </div>
      )}

      {isMobile && (
        <div
          className="parallax-mirror"
          style={{
            visibility: "visible",
            zIndex: "-100",
            position: "fixed",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            transform: "translate3d(0px, 0px, 0px)",
            height: "929.838px",
            width: "375.2px"
          }}
        >
          <img
            alt=''
            className="parallax-slider"
            src="images/galery/IMG_0237.png"
            style={{
              transform: "translate3d(-451px, 0px, 0px)",
              position: "absolute",
              height: "719px",
              width: "1278px",
              maxWidth: "none"
            }}
          />
        </div>
      )}

      <Portada />
      <CuentaRegresiva />
      <Ceremonia handleShow3={handleShow3} />
      <Galeria />
      <Fiesta />
      <Regalos />
      <Instagram />
      <Footer />
    </>
  );
};
export default App;
