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
                id="player-musica-fondo"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ed Sheeran - Perfect (Lyrics)"
                width="10"
                height="10"
                src="https://www.youtube.com/embed/?playlist=EH30RAXnRWs&amp;loop=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.invitacioncarlosykelly.com.co&amp;widgetid=1&amp;forigin=https%3A%2F%2Fwww.invitacioncarlosykelly.com.co&amp;aoriginsup=1&amp;vf=1"
            ></iframe>
        </div>
    );
};

export default BackgroundMusic;