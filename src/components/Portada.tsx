import ScrollArrow from "./Animations/ScrollArrow";
import { FlorIzqSup, FlorDerInf, FlorIzqInf } from "./Animations/Flores";

export const Portada = () => {
    return (
        <section className="portada">
            <FlorIzqSup />
            <FlorDerInf />
            <FlorIzqInf />

            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="content-portada text-center">
                        <div className="box-nombres-fecha-portada">
                            <span className="fecha">{' 31.05.2025 '}</span>
                            <h1>
                                Carlos{' '}
                                <br className="d-md-none" />
                                <span>&amp;</span>
                                <br className="d-md-none" />
                                {' '}Kelly
                            </h1>
                            <div className="line" />
                        </div>

                        <div className="box-frase-portada">
                            <p>
                                <img
                                    src="https://www.fixdate.io/modelo-invitacion/30/img/comilla-apertura.svg"
                                    alt=""
                                    className="me-2"
                                />
                                Y así empieza nuestro, <br /> <i>Felices para siempre</i>
                                <img
                                    src="https://www.fixdate.io/modelo-invitacion/30/img/comilla-cierre.svg"
                                    alt=""
                                    className="ms-2"
                                />
                            </p>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <ScrollArrow />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};