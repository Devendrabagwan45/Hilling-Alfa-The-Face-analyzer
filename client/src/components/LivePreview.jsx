import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const LivePreview = () => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
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

  const capturePhoto = async () => {
    if (!videoElement.current) return;
    const imageSrc = videoElement.current.getScreenshot();
    if (!imageSrc) return;

    // Convert to base64 (remove data:image/jpeg;base64,)
    const base64 = imageSrc.split(",")[1];

    setLoading(true);
    try {
      const apiUrl = import.meta.env.DEV ? "http://localhost:5000/ai/get-review" : "/api/get-review";
      const response = await axios.post(apiUrl, {
        code: base64,
      });
      // log raw axios response for debugging
      console.log("Received analysis response:", response);
      const parsed = response.data?.analysis || response.data;
      console.log("Parsed analysis:", parsed);
      setAnalysis(parsed);

      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Analysis error:", err);
      setError(
        "Failed to analyze image: " + (err.response?.data?.error || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (analysis) {
      console.log("AI Analysis (state):", analysis);
    }
  }, [analysis]);

  // Simple inline markdown -> JSX renderer (supports ## headings, lists, paragraphs, **bold**, *italic*)
  const renderInline = (text) => {
    if (!text) return null;
    // Split by bold (**text**) while keeping delimiters
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      const boldMatch = part.match(/^\*\*(.+)\*\*$/);
      if (boldMatch)
        return (
          <strong key={i} className="font-semibold">
            {boldMatch[1]}
          </strong>
        );
      // italic *text*
      const italicMatch = part.match(/^\*(.+)\*$/);
      if (italicMatch) return <em key={i}>{italicMatch[1]}</em>;
      return <span key={i}>{part}</span>;
    });
  };

  const parseAnalysisToJSX = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/);
    const nodes = [];
    let listBuffer = null;

    const flushList = () => {
      if (listBuffer) {
        nodes.push(
          <ul
            key={nodes.length}
            className="list-disc list-inside text-sm text-white/90 mb-2"
          >
            {listBuffer.map((li, idx) => (
              <li key={idx} className="mb-1">
                {renderInline(li)}
              </li>
            ))}
          </ul>
        );
        listBuffer = null;
      }
    };

    lines.forEach((raw) => {
      const line = raw.trim();
      if (!line) {
        flushList();
        return;
      }
      if (/^##\s+/.test(line)) {
        flushList();
        nodes.push(
          <h4 key={nodes.length} className="text-md font-bold mb-1">
            {renderInline(line.replace(/^##\s+/, ""))}
          </h4>
        );
        return;
      }
      if (/^###\s+/.test(line)) {
        flushList();
        nodes.push(
          <h5 key={nodes.length} className="text-sm font-semibold mb-1">
            {renderInline(line.replace(/^###\s+/, ""))}
          </h5>
        );
        return;
      }
      if (/^[-*]\s+/.test(line)) {
        const item = line.replace(/^[-*]\s+/, "");
        if (!listBuffer) listBuffer = [];
        listBuffer.push(item);
        return;
      }
      // numbered list
      if (/^\d+\.\s+/.test(line)) {
        // treat as bullet for simplicity
        const item = line.replace(/^\d+\.\s+/, "");
        if (!listBuffer) listBuffer = [];
        listBuffer.push(item);
        return;
      }
      // normal paragraph
      flushList();
      nodes.push(
        <p key={nodes.length} className="text-sm mb-2 text-white/90">
          {renderInline(line)}
        </p>
      );
    });

    flushList();
    return nodes;
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
              <button
                onClick={capturePhoto}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                disabled={!isShowVideo || loading}
              >
                {loading ? "Analyzing..." : "Capture Photo"}
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
          {analysis && (
            <div className="bg-white/10 rounded-xl p-4 text-white">
              <h4 className="text-lg font-semibold mb-2">AI Analysis:</h4>
              <div className="text-sm leading-relaxed">
                {parseAnalysisToJSX(analysis)}
              </div>
            </div>
          )}

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
