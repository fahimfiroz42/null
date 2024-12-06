import React, { useState, useEffect } from "react";

const FlashSale = () => {
  // Function to calculate time left
  const calculateTimeLeft = (endTime) => {
    const now = new Date();
    const difference = endTime - now; // Time remaining in milliseconds
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Sale is over
  };

  // Function to set the flash sale end time for the current day
  const getSaleEndTime = () => {
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999); // Flash sale ends at 11:59:59 PM today
    return endTime;
  };

  // State to store the sale end time and time left
  const [saleEndTime, setSaleEndTime] = useState(getSaleEndTime());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(getSaleEndTime()));

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft(saleEndTime);
      setTimeLeft(remainingTime);

      // Reset sale end time for the next day when it reaches 0
      if (!remainingTime) {
        setSaleEndTime(getSaleEndTime()); // Set new sale end time for the next day
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer
  }, [saleEndTime]);

  return (
    <div className="w-11/12 mx-auto my-10">

<div className="p-5  rounded-md shadow-md">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold border-l-8 border-primary p-2">
          Today's
        </h1>
      </div>
      <div className="text-3xl font-bold my-5 flex flex-col md:flex-row justify-between items-center">
        <h1>Flash Sales</h1>
        {timeLeft ? (
        <div className="text-2xl font-semibold text-red-600">
          Ends in:{" "}
          <span>
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      ) : (
        <div className="text-xl font-semibold text-green-600">
          Flash Sale Ended! Resetting...
        </div>
      )}
      </div>

      {/* Countdown Timer */}
     

      {/* Current Date/Time */}
     
    </div>
    </div>
  );
};

export default FlashSale;
