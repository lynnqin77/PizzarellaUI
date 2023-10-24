"use client";
import React from "react";
import Countdown from "react-countdown";

const endingdate = new Date("2023-12-12");

const CountDown = () => {
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: any;
    minutes: any;
    seconds: any;
    completed: boolean;
  }) => {
    if (completed) {
      // if Countdown is over, show this text
      return <div>Expired</div>;
    } else {
      return (
        <div className="font-bold text-2xl text-primary">
          {hours} Hours {minutes} Minutes {seconds} Seconds
        </div>
      );
    }
  };

  return <Countdown renderer={renderer} date={endingdate} />;
};

export default CountDown;
