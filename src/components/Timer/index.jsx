import React, { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    let difference = +new Date("2024-08-20T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="w-full flex-col sm:w-[295px] p-4 h-[234px] bg-lightGrey rounded-xl">
      <h2 className="text-dimWhite font-light">Auction ends in</h2>

      <div className="flex justify-stretch">
        <div className="flex flex-col flex-1">
          <h2 className="text-[48px] text-white font-bold">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </h2>
          <h2 className="text-dimWhite">Hours</h2>
        </div>
        <div className="text-[44px] px-2 text-white font-bold">:</div>
        <div className="flex flex-col flex-1">
          <h2 className="text-[48px] text-white font-bold">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </h2>
          <h2 className="text-dimWhite">Minutes</h2>
        </div>
        <div className="text-[44px] px-2 text-white font-bold">:</div>
        <div className="flex flex-col flex-1">
          <h2 className="text-[48px] text-white font-bold">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </h2>
          <h2 className="text-dimWhite">Seconds</h2>
        </div>
      </div>
      <div className="w-full mt-2 py-3 flex justify-center bg-secondary rounded-xl text-white font-bold cursor-pointer">
        Place Bid
      </div>
    </div>
  );
};

export default Timer;
