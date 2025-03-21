import { RegalosFlorDer } from './Animations/Flores';
import Regalo from './Animations/Regalo';
export const Regalos = () => {
  return (
    <section className="regalos">
      <RegalosFlorDer />

      <div className="container">
        <div className="row text-center d-flex justify-content-center align-items-center">
          <h2 className="title">Lluvia de Sobres</h2>
          <p className="subtitle">
            Si deseas regalarnos algo más que tu hermosa presencia...
          </p>

          <div className="w-100">
            <Regalo />
          </div>
        </div>
      </div>
    </section>
  );
};
