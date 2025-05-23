import InstagramMov from './Animations/InstagramMov';

export const Instagram = () => {
  return (
    <section className="instagram">
      <div className="container">
        <div className="row text-center d-flex justify-content-center align-items-center">
          <h2 className="title">Compartimos este día junto a tí</h2>
          <p className="subtitle">
            Comparte tus fotos y videos de ese hermoso día
          </p>

          <div className="w-50">
            <InstagramMov />
          </div>

          <div className="w-100">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://web.dotstheapp.com/a?groupId=1737644&code=Wap330GB&dlBy=carlosportoperez"
              className="title"
            >
              #LovebaCK
            </a>
          </div>
          <br />

          <div className="col mt-4">
            <img src="images/ig.jpg" alt="" className="w-25" />
          </div>
        </div>
      </div>
    </section>
  );
};
