import React from "react";

const DemoAndDetections = () => {
  return (
    <div>
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
              <i className="ri-cpu-line text-indigo-600 mr-2"></i>
              <span className="text-indigo-700 font-medium">
                Live Analysis Demo
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              See Our AI
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                In Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our advanced algorithms analyze facial features, detect
              skin issues, and provide real-time beauty enhancements.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Real-Time Analysis
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white transition-all duration-500">
                      <i className="ri-focus-3-line text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          Face Detection
                        </span>
                        <span className="text-sm text-gray-500">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 text-gray-400 transition-all duration-500">
                      <i className="ri-map-2-line text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          Skin Mapping
                        </span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 text-gray-400 transition-all duration-500">
                      <i className="ri-search-eye-line text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          Problem Analysis
                        </span>
                        <span className="text-sm text-gray-500">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 text-gray-400 transition-all duration-500">
                      <i className="ri-lightbulb-line text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          Solution Generation
                        </span>
                        <span className="text-sm text-gray-500">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <i className="ri-refresh-line mr-2"></i>Run Analysis Again
                </button>
              </div>
              <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
                <div className="flex space-x-1">
                  <button className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg">
                    Problem Detection
                  </button>
                  <button className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                    Beauty Enhancement
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl relative overflow-hidden mb-6">
                  <img
                    alt=""
                    className="w-full h-full object-cover object-top bg-black"
                  />

                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                  <div
                    className="absolute top-1/3 right-1/4 w-4 h-4 bg-orange-500 rounded-full animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-yellow-500 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-ping"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    Analysis Complete
                  </div>
                  <div className="text-gray-600">
                    23 areas analyzed, 5 concerns detected
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Detected Issues
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Acne & Blemishes
                          </div>
                          <div className="text-sm text-gray-500">Moderate</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">12</div>
                        <div className="text-xs text-gray-500">spots</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Dark Spots
                          </div>
                          <div className="text-sm text-gray-500">Mild</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">8</div>
                        <div className="text-xs text-gray-500">spots</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Fine Lines
                          </div>
                          <div className="text-sm text-gray-500">
                            Early Stage
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">5</div>
                        <div className="text-xs text-gray-500">spots</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Enlarged Pores
                          </div>
                          <div className="text-sm text-gray-500">Moderate</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">15</div>
                        <div className="text-xs text-gray-500">spots</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Uneven Tone
                          </div>
                          <div className="text-sm text-gray-500">Mild</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">3</div>
                        <div className="text-xs text-gray-500">spots</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoAndDetections;
