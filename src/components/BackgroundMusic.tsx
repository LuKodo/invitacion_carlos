const BackgroundMusic = () => {
    return (
        <>
            <iframe
                src="../media/Intro.mp3"
                style={{ display: "none" }}
                allow="autoplay"
                id="audio-player">
            </iframe>
        </>
    );
};

export default BackgroundMusic;