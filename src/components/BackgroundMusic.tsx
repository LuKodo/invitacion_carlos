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
            <iframe src="https://invitacioncarlosykelly.com.co/media/Intro.mp3" width="640" height="480" allow="autoplay"></iframe>
        </div>
    );
};

export default BackgroundMusic;