import React from "react";
import groupusers from "../assets/groupusers.png"; 

const UserCounter = () => {
  const userCount = "247";
  const countArray = userCount.padStart(6, "0").split(""); 

  return (
    <div className="w-full flex flex-col items-center space-y-3 ml-[-100px]">

      <img
        src={groupusers}
        alt="users"
        className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 object-contain"
      />
      
      {/* User Count Display */}
      <div className="flex space-x-1">
        {countArray.map((digit, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center text-lg sm:text-xl md:text-2xl font-bold border border-gray-300 rounded-lg bg-white w-7 h-10 sm:w-8 sm:h-12 md:w-10 md:h-14 shadow-md"
          >
            {digit}
          </div>
        ))}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm md:text-lg font-semibold text-gray-700">Users</div>
    </div>
  );
};

export default UserCounter;
