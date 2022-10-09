import React from "react";
import arrow from '../assets/arrow-up.svg';

const GetStarted = () => {
  return (
    <div className={`flex w-[140px] h-[140px] bg-gradient-to-r from-cyan-500 via-slate-50 to-cyan-300 rounded-full p-[2px] cursor-pointer`}>
      <div className="w-full h-full bg-slate-600 rounded-full flex flex-col items-center justify-center">
      <div className="flex justify-center text-xl leading-9">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-50 to-cyan-200">Get</p>
          <img src={arrow} alt='arrow' className="" />
        </div>
        <div className="flex flex-col items-center text-xl leading-9">
          <p>Started</p>
        </div>
        </div>
    </div>
  );
};

export default GetStarted;
