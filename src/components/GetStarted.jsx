import React from "react";
// import arrow from '../assets/arrow-up.svg';
import arrowUp from "../assets/arrow-up.svg";

const GetStarted = () => {
  return (
    <div className="ring-1 p-3 rounded-full">
      <div className="flex items-start justify-start">
        <span>Get </span>
        <img src={arrowUp} alt="arrow" />
      </div>
      <span>Started</span>
    </div>
  );
};

export default GetStarted;
