const BackgroundVideo = () =>  {
    return (
        <div className="absolute inset-0 min-w-full h-full overflowx-x-hidden -z-10  w-max-full">
            <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            >
                <source src="videos/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        </div>

    );

}

export default BackgroundVideo;