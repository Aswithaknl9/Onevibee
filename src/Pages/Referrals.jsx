import React from "react";
import img from "../assets/Frame.png";

const Referrals = () => {
  return (
    <div className="container mx-auto px-6 pt-[100px] pb-[20px]">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl gap-9 p-6">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-start">
          <h1 className="text-2xl md:text-[60px] font-semibold text-gray-900">
            REFER A FRIEND AND GET{" "}
            <span className="bg-gradient-to-r from-[#E27214] via-[#E20C59] to-[#402B75] text-transparent bg-clip-text">
              <i className="fa-solid fa-indian-rupee-sign"></i>100
            </span>
          </h1>
          <span className="block text-gray-600 mt-2">No limit for referrals</span>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-end">
          <img src={img} alt="frame" className="w-full max-w-xs md:max-w-max" />
        </div>
      </div>
    </div>
  );
};

export default Referrals;
