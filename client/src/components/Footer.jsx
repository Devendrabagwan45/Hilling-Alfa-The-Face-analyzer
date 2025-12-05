import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <div className="border-b border-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Stay Beautiful, Stay Updated
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Get the latest skincare tips, beauty trends, and exclusive
                  access to new AI features.
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200"
                    type="email"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                    <i className="ri-mail-send-line mr-2"></i>Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-3 text-center">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-6 gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <i className="ri-camera-ai-line text-white text-xl"></i>
                    </div>
                    <div
                      className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                      style={{ fontFamily: "Pacifico, serif" }}
                    >
                      logo
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed max-w-sm">
                    Revolutionizing skincare with AI-powered facial analysis.
                    Transform your beauty routine with personalized insights and
                    professional-grade recommendations.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-500 transition-all duration-300 hover:bg-gray-700 hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-instagram-line text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-300 hover:bg-gray-700 hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-youtube-line text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-black transition-all duration-300 hover:bg-gray-700 hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-tiktok-line text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all duration-300 hover:bg-gray-700 hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-twitter-x-line text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all duration-300 hover:bg-gray-700 hover:scale-110 cursor-pointer"
                    >
                      <i className="ri-facebook-line text-lg"></i>
                    </a>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white">Product</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Face Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Beauty Enhancement
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Skin Tracking
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        AI Recommendations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Mobile App
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white">
                    Solutions
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Skincare Routines
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Product Finder
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Professional Treatments
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Progress Tracking
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Expert Consultation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Skin Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Beauty Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Video Tutorials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Research Papers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Case Studies
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white">Company</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Press Kit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        Partners
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">
                  Take Your Beauty Analysis Anywhere
                </h3>
                <p className="text-gray-400">
                  Download our mobile app for on-the-go skin analysis and beauty
                  tips.
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-app-store-line text-2xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-google-play-line text-2xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div className="text-gray-400 text-sm">
                  © 2025 Face Analysis AI. All rights reserved.
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
