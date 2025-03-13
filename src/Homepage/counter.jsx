import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-01T00:00:00").getTime(); // Set your deadline
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center lg:space-x-10 space-x-6 mt-10 pt-8 text-gray-700 font-bold ">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl bg-white border border-gray-300 rounded-lg w-20 h-20 flex items-center justify-center shadow-md">
            {timeLeft[unit]}
          </div>
          <div className="text-xs md:text-sm text-gray-600 mt-2 uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
