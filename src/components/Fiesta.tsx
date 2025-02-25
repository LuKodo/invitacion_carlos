import animTips from "../img/anim_tips.svg";
import animMusica from "../img/anim_music.svg";
import animVestuario from "../img/anim_vestuario.svg";
import Vestuario from "./Animations/Vestuario";
import Tips from "./Animations/Tips";

export const Fiesta = () => {
    return (
        <section className="fiesta">
            <div className="container">
                <div className="row text-center d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                        <h2 className="title">Fiesta</h2>
                        <p className="subtitle">Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.</p>
                    </div>

                    <div className="col-md-4 item-fiesta">
                        <div className="w-100 content-item-fiesta d-flex flex-column justify-content-between align-items-center">
                            <h3>Código de Vestimenta</h3>
                            <div className="d-flex justify-content-center align-items-center content-anim-fiesta">
                                <Vestuario />
                            </div>

                            <p>Formal </p>
                        </div>
                    </div>

                    <div className="col-md-4 item-fiesta">
                        <div className="w-100 content-item-fiesta d-flex flex-column justify-content-between align-items-center">
                            <h3>Sugerencias</h3>
                            <div className=" d-flex justify-content-center align-items-center content-anim-fiesta">
                                <Tips />
                            </div>

                            <p>Por favor, ser puntual en el horario establecido</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}