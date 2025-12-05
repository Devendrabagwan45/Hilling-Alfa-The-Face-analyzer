import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 pt-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">500K+</div>
          <div className="text-gray-300 text-sm">Analyses Done</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">98%</div>
          <div className="text-gray-300 text-sm">Accuracy Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">4.9★</div>
          <div className="text-gray-300 text-sm">User Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
