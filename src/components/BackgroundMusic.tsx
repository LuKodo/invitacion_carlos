const BackgroundMusic = () => {
    return (
        <div
            className="d-none"
            style={{
                width: "1",
                height: "1",
                pointerEvents: "none"
            }}
        >
            <audio controls autoPlay>
                <source src="https://invitacioncarlosykelly.com.co/media/Intro.mp3" type="audio/mpeg"></source>
            </audio>
        </div>
    );
};

export default BackgroundMusic;