import React from "react";

const BeautyPlan = () => {
  return (
    <div>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
              <i className="ri-medicine-bottle-line text-emerald-600 mr-2"></i>
              <span className="text-emerald-700 font-medium">
                Personalized Solutions
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Custom
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Beauty Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get tailored recommendations based on your unique skin analysis.
              From skincare routines to professional treatments, we've got you
              covered.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105">
              <i className="ri-heart-pulse-line mr-2"></i>Skincare Routines
            </button>
            <button className="flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
              <i className="ri-shopping-bag-line mr-2"></i>Product
              Recommendations
            </button>
            <button className="flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
              <i className="ri-hospital-line mr-2"></i>Professional Treatments
            </button>
            <button className="flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
              <i className="ri-leaf-line mr-2"></i>Lifestyle Tips
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Morning Brightening Routine"
                  className="w-full h-full object-fill object-top group-hover:scale-110 transition-transform duration-500"
                  src="./MBR.jpg"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  Morning Brightening Routine
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Custom routine designed for your uneven skin tone and dark
                  spots
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      15 minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Effectiveness:</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Steps:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Gentle Cleanser
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Vitamin C Serum
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +2 more
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  <i className="ri-add-circle-line mr-2"></i>Add to My Plan
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Evening Repair Treatment"
                  className="w-full h-full object-fill object-top group-hover:scale-110 transition-transform duration-500"
                  src="./EBR.jpg"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  Evening Repair Treatment
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Night routine targeting acne and promoting skin regeneration
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      20 minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Effectiveness:</span>
                    <span className="font-semibold text-green-600">89%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Steps:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Oil Cleanser
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Salicylic Acid Toner
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +2 more
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  <i className="ri-add-circle-line mr-2"></i>Add to My Plan
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Weekly Deep Treatment"
                  className="w-full h-full object-fill object-top group-hover:scale-110 transition-transform duration-500"
                  src="./WBR.jpg"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  Weekly Deep Treatment
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intensive care for pore refinement and skin texture
                  improvement
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      45 minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Effectiveness:</span>
                    <span className="font-semibold text-green-600">91%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Steps:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Exfoliating Mask
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Clay Treatment
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +2 more
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  <i className="ri-add-circle-line mr-2"></i>Add to My Plan
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 p-12 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-3xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get your personalized beauty plan with detailed analysis, custom
              routines, and expert recommendations.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-camera-ai-line mr-3"></i>Start Your Analysis Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeautyPlan;
