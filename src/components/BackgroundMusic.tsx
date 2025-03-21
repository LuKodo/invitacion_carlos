import Play from '../../src/img/play.svg'

const BackgroundMusic = () => {
    return (
        <>
            <div id="controlador-musica">
                <div id="play-pause-music" data-estado-music="pause" className="music-anim-icon">
                    <img src={Play} alt="" />
                </div>
            </div>

            <audio
                src="../media/Intro.mp3"
                autoPlay={true}
                loop={true}
            />
        </>
    );
};

export default BackgroundMusic;