import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Camara from './Animations/Camara';
export const Galeria = () => {
  const images = [
    {
      original: 'images/galery/IMG_0239.jpg',
      thumbnail: 'images/galery/IMG_0239.jpg',
      alt: 'img1',
    },
    {
      original: 'images/galery/IMG_0237.jpg',
      thumbnail: 'images/galery/IMG_0237.jpg',
      alt: 'img2',
    },
    {
      original: 'images/galery/IMG_0245.jpg',
      thumbnail: 'images/galery/IMG_0245.jpg',
      alt: 'img3',
    },
    {
      original: 'images/galery/IMG_0251.jpg',
      thumbnail: 'images/galery/IMG_0251.jpg',
      alt: 'img4',
    },
  ];
  return (
    <section className="galeria">
      <div className="container">
        <div className="row text-center d-flex justify-content-center align-items-center">
          <div className="content-galeria">
            <h2 className="title">Retratos de Nuestro Amor</h2>
            <p className="subtitle">
              Un minuto, un segundo, un instante que queda en la eternidad
            </p>
            <Camara />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 offset-md-2 col-sm-12">
          <ImageGallery items={images} />
        </div>
      </div>
    </section>
  );
};
