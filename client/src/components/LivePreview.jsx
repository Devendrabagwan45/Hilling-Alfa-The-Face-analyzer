import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const LivePreview = () => {
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
      {" "}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-semibold">
              Live Analysis Preview
            </h3>
            <div className="flex items-center text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm">Active</span>
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="camView">
              {isShowVideo ? (
                <Webcam
                  audio={false}
                  ref={videoElement}
                  videoConstraints={videoConstraints}
                  onUserMediaError={(err) => setError(err.message)}
                />
              ) : (
                <div className="text-center text-white/70">
                  <i className="ri-user-smile-line text-6xl mb-4"></i>
                  <p className="text-lg">Position your face here</p>
                  <p className="text-sm text-gray-400 mt-2">
                    AI analysis will begin automatically
                  </p>
                </div>
              )}
              {error && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                  Error: {error}
                </div>
              )}
              <button
                onClick={startCam}
                className="absolute bottom-0 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
              >
                Start Capture
              </button>
              <button
                onClick={stopCam}
                className="absolute bottom-0 right-4 bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
              >
                Stop
              </button>
            </div>

            <div className="absolute inset-4 border-2 border-pink-400 rounded-xl animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
            <div
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">85%</div>
              <div className="text-white/70 text-sm">Skin Health</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">12</div>
              <div className="text-white/70 text-sm">Areas Detected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
