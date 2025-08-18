import React, { useRef, useState } from 'react'

function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);
    const handelClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (nextIsPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    return (
        <>
            <div style={{ display: "flex", alignItems: "centers", justifyContent: 'center', height: "80vh" }}>
                <video ref={ref}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}>
                    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                        type="video/mp4" />
                </video>
            </div>
            <button onClick={handelClick}> {isPlaying ? 'Pause' : 'Play'}</button>
        </>
    )
}

export default VideoPlayer