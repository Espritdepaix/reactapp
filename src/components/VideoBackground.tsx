import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-purple-800/90 z-10"></div>
      <iframe
        className="absolute w-full h-full scale-150 -z-10"
        src="https://www.youtube.com/embed/2Gg6Seob5Mg?controls=0&autoplay=1&mute=1&loop=1&playlist=2Gg6Seob5Mg"
        title="Background Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ pointerEvents: 'none' }}
      ></iframe>
    </div>
  );
};

export default VideoBackground;