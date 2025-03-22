const BackgroundMusic = () => {
    return (
        <div
            className="position-absolute overflow-hidden opacity-0"
            style={{
                width: "1",
                height: "1",
                pointerEvents: "none"
            }}
        >
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dXNeYHDhqbg?autoplay=1&loop=1"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default BackgroundMusic;