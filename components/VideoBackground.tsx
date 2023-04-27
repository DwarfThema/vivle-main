import React from "react";

interface VideoBackgroundProps {
  src: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
        src={src}
        autoPlay
        muted
        loop
        controlsList="nodownload nofullscreen"
      />
    </div>
  );
};

export default VideoBackground;
