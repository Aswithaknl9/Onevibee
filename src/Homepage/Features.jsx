import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Near By Shopping",
  "Find Local Deals",
  "Direct Retail Shopping",
  "Pay with our App",
  "Earn Loyalty points",
  "Pay with Loyalty points",
  "Win Exclusive Prizes Every month",
  "Expense tracker",
  "Get Free insurance",
];

const Features = () => {
  return (
    <div className="pb-12">
      <div className="container mx-auto bg-white/80 rounded-md p-6">
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center px-4 py-2 rounded-lg">
              <FaCheckCircle className="text-[#85c1e9] text-lg mr-2" />
              <span className="text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
