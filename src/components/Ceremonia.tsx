import { CeremoniaFiesta } from './Animations/Flores';
import { Anillos, Fiesta } from './Animations/AnillosFiesta';
import { Modals } from './Modal';
import { type FC, useState } from 'react';

interface Props {
    handleShow3: () => void;
}

export const Ceremonia: FC<Props> = ({ handleShow3 }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <section className="ceremonia-fiesta">
            <Modals event='Ceremonia' show={show} handleClose={handleClose}>
                <a
                target='_blank'
                rel='noreferrer'
                href='https://www.google.com/maps/place/Parroquia+Mar%C3%ADa+Reina+de+la+Paz/data=!4m2!3m1!1s0x0:0x3d534c0f4b6c568c?sa=X&ved=1t:2428&ictx=111'>
                    <img
                        src='images/ceremonia.png'
                        className='w-100'
                        aria-label='Ceremonia'
                    />
                </a>
            </Modals>
            <Modals event='Fiesta' show={show1} handleClose={handleClose1}>
                <a
                target='_blank'
                rel='noreferrer'
                href='https://www.google.com/maps/place/Hacienda+Botero+Casa+de+Eventos/data=!4m2!3m1!1s0x0:0x6de020a3497e0ada?sa=X&ved=1t:2428&ictx=111'>
                    <img
                        src='images/fiesta.png'
                        className='w-100'
                        aria-label='Fiesta'
                    />
                </a>
            </Modals>
            <CeremoniaFiesta />

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-ceremonia text-center">
                        <Anillos />
                        <br />

                        <h3>Ceremonia</h3>
                        <div className="info-col">
                            <div className="info-box">
                                <h6>Día</h6>
                                <p>Sábado 31 de Mayo - 05:00 PM</p>
                            </div>

                            <div className="info-box">
                                <h6>Lugar</h6>
                                <p>Parroquia Maria Reina de la Paz</p>
                                <button type='button' onClick={handleShow3} className="boton confirmar-asistencia border-0">Confirmar asistencia</button>
                            </div>

                            <div className="info-box">
                                <h6>Dirección</h6>
                                <p>Barrio El Rodeo</p>
                                <button type='button' onClick={handleShow} className="boton modal-como-llegar border-0">¿Cómo llegar?</button>
                            </div>
                        </div>
                    </div>

                    <div className=" col-md-6 col-fiesta text-center">
                        <Fiesta />

                        <br />
                        <h3>Fiesta</h3>
                        <div className="info-col">
                            <div className="info-box">
                                <h6>Día</h6>
                                <p>Sábado 31 de Mayo  - 07:00 PM</p>
                            </div>

                            <div className="info-box">
                                <h6>Lugar</h6>
                                <p>Hacienda Botero</p>
                                <button type='button' onClick={handleShow3} className="boton confirmar-asistencia border-0">Confirmar asistencia</button>
                            </div>

                            <div className="info-box">
                                <h6>Dirección</h6>
                                <p>Carrera 32# 19 - 124, Turbaco | Plan parejo</p>
                                <button type='button' onClick={handleShow1} className="boton modal-como-llegar border-0">¿Cómo llegar?</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}