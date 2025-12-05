import React from "react";

const AdvanceFeatures = () => {
  return (
    <div>
      {" "}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
              <i className="ri-flashlight-line text-pink-600 mr-2"></i>
              <span className="text-pink-700 font-medium">
                Advanced Features
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Skin Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of skincare with our cutting-edge AI
              technology that provides professional-grade analysis and
              personalized beauty solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-ai-generate text-2xl bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                AI Skin Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Advanced machine learning algorithms analyze your skin in
                real-time, detecting issues invisible to the naked eye.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mr-2">
                  Learn More
                </span>
                <i className="ri-arrow-right-line bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-eye-line text-2xl bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                Problem Detection
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Identify acne, dark spots, wrinkles, pores, and other skin
                concerns with 98% accuracy using computer vision.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent mr-2">
                  Learn More
                </span>
                <i className="ri-arrow-right-line bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-magic-line text-2xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                Beauty Enhancement
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Virtual makeup try-on, skin smoothing, and beauty filters
                powered by augmented reality technology.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mr-2">
                  Learn More
                </span>
                <i className="ri-arrow-right-line bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-line-chart-line text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                Progress Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Monitor your skin improvement journey with detailed analytics,
                progress photos, and trend analysis.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mr-2">
                  Learn More
                </span>
                <i className="ri-arrow-right-line bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-heart-pulse-line text-2xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                Personalized Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get customized skincare routines, product recommendations, and
                treatment plans based on your analysis.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mr-2">
                  Learn More
                </span>
                <i className="ri-arrow-right-line bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-2xl bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                Expert Validation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                All recommendations are validated by dermatologists and skincare
                professionals for safety and efficacy.
              </p>
              <div className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent mr-2">
                  Learn More
                </span>
                <i className="ri-arrow-right-line bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-sky-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-rocket-line mr-3"></i>Try All Features Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvanceFeatures;
