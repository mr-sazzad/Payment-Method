import React from "react";
import discount from "../assets/Discount.svg";
import robot from "../assets/robot.png";
import GetStarted from "./GetStarted";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 md:mt-8 mx-5">
      <div className="flex-1 justify-center content-around h-[85vh]">
        <div className="rounded-md inline-flex bg-gradient-to-l from-gray-900 to-slate-700 px-2 md:mt-10 mt-5">
          <img src={discount} alt="discount" className="w-[32px] h-[32] pr-1 " />
          <p className="text-slate-300">
            {" "}
            <span className="text-white">20% </span> Discount For{" "}
            <span className="text-white"> 1 Month </span> Account{" "}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="md:mt-14 mt-5">
            {" "}
            <h1 className="dark:text-white text-black text-[52px] font-medium leading-[70px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-100 to-cyan-300">
                Generation
              </span>{" "}
              <br className="sm:block hidden" />
              Payment Method
            </h1>
            <p className="text-medium leading-8 md:mt-8 mt-4">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div>
            <GetStarted />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={robot} alt="robotImage" />
      </div>
    </div>
  );
};

export default Header;
