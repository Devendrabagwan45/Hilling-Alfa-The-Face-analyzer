import Stats from "./Stats";
import LivePreview from "./LivePreview";

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("./background.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-purple-900/70 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <i className="ri-sparkle-2-line text-yellow-300 mr-2"></i>
                  <span className="text-sm font-medium">
                    AI-Powered Skin Analysis
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    Skin Journey
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Advanced facial analysis technology that identifies skin
                  concerns, tracks improvements, and provides personalized
                  beauty solutions for your perfect glow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer disabled:opacity-70">
                  <div className="flex items-center justify-center">
                    <i className="ri-camera-ai-line mr-3 text-xl"></i>Start Free
                    Analysis
                  </div>
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 whitespace-nowrap cursor-pointer">
                  <i className="ri-play-circle-line mr-3 text-xl"></i>Watch Demo
                </button>
              </div>
              <Stats />
            </div>
            <div className="relative">
              <LivePreview />
            </div>
          </div>
        </div>
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-pink-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-12 h-12 bg-indigo-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
