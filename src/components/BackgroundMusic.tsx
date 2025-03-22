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
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dXNeYHDhqbg?si=s0GaXxoFtkctWNP9&amp;controls=0;autoplay=1;loop=1;origin=https://invitacioncarlosykelly.com.co;enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default BackgroundMusic;