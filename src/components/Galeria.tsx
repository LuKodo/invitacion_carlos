import galeria from '../img/anim_galeria.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Camara from './Animations/Camara';

export const Galeria = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section className="galeria">
            <div className="container">
                <div className="row text-center d-flex justify-content-center align-items-center">
                    <div className="content-galeria">
                        <h2 className="title">Retratos de Nuestro Amor</h2>
                        <p className="subtitle">Un minuto, un segundo, un instante que queda en la eternidad</p>
                        <Camara />
                    </div>
                </div>
            </div>


            <div className="container slider-container mt-4">
                <Slider {...settings}>
                    <div className="slick-slide">
                        <div className="polaroid">
                            <img src="images/galery/IMG_0239.jpg" width={"100%"} alt="" />
                        </div>
                    </div>

                    <div className="slick-slide">
                        <div className="polaroid">
                            <img src="images/galery/IMG_0237.jpg" width={"100%"} alt="" />
                        </div>
                    </div>

                    <div className="slick-slide">
                        <div className="polaroid">
                            <img src="images/galery/IMG_0245.jpg" width={"100%"} alt="" />
                        </div>
                    </div>

                    <div className="slick-slide">
                        <div className="polaroid">
                            <img src="images/galery/IMG_0251.jpg" width={"100%"} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}