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
                id="youtube-player"
                width="560" 
                height="315" 
                src="https://www.youtube.com/watch?v=dXNeYHDhqbg&list=RDdXNeYHDhqbg&start_radio=1&ab_channel=reikVEVO?autoplay=1&mute=1&loop=1" 
                frameBorder={0} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default BackgroundMusic;