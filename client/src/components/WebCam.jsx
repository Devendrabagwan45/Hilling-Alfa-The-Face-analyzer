import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function WebCam() {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [error, setError] = useState(null);
  const videoElement = useRef(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const startCam = () => {
    setIsShowVideo(true);
  };

  const stopCam = () => {
    if (videoElement.current && videoElement.current.stream) {
      const stream = videoElement.current.stream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsShowVideo(false);
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div className="camView">
        {isShowVideo && (
          <Webcam
            audio={false}
            ref={videoElement}
            videoConstraints={videoConstraints}
            onUserMediaError={(err) => setError(err.message)}
          />
        )}
      </div>
      <button onClick={startCam}>Start Video</button>
      <button onClick={stopCam}>Stop Video</button>
    </div>
  );
}

export default WebCam;
