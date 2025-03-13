import React from "react";
import CountdownTimer from "../Homepage/counter";
import UserCounter from "../Homepage/UserCounter";
import CardSlider from "../Homepage/CardSlider";
import Features from "../Homepage/Features";
import Cardd from "../Productspage/Card";

const Home = () => {
  return (
    <div className="relative">
      
      {/* Content */}
      <div className="relative flex text-white text-start lg:top-[152px] top-[260px]">
        {/* Register Now Button */}
        <div className="flex justify-center pt-6">
          <button className="relative flex items-center overflow-hidden animate-fadeLeft">
            {/* Hurry Up Overlay */}
            <span className="absolute left-0 top-0 h-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-400 text-white px-10 py-4 rounded-r-full text-xl  z-10">
              Hurry Up!
            </span>

            {/* Register Now Section */}
            <div className="relative animate-slideBg flex-col bg-white/50 text-purple-600 text-xl font-semibold rounded-r-full shadow-lg px-6 py-4 pl-18 flex items-center ml-28">
              <span className="text-lg font-medium">Register Now</span>
              <span className="text-[10px] text-gray-700 ml-2">Before Closing</span>
            </div>
          </button>
        </div>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />
      
      <CardSlider />
    
    </div>
  );
};

export default Home;
