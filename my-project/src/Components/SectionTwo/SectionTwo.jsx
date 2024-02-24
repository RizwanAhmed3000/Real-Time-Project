import React from "react";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";

const SectionTwo = () => {
  return (
    <div className=" flex w-[100%] h-[100%]  justify-center items-center flex-col md:flex-row  sm:text-center mt-[3rem]">
      <div className=" mt-5 flex-1 sm:flex-col ">
        {/* text-[35px] md:text-[75px] text-[#18252b] font-bold md:ml-[8rem]  sm:w-[100%] sm:text-[55px] */}
        <h1 className=" font-bold md:text-[75px] text-center text-[#1e4649] text-[55px] mt-[1rem]">STEERING 360 ON DIGITAL AVENUES</h1>
        <p className="sm:text-[15px] md:text-[15px] text-[#18252b] text-center px-[50px] sm:w-[100]">
          We believe in transformations and make all accelerations to simplify
          the process and complete each task an easy breeze for you. Our aim is
          simple, to innovate, create and curate perfection through our
          strategic plans for impactful branding and marketing. We believe in a
          whirlpool of creativity to transform your brand towards inclined
          growth.
        </p>
        <div className="flex flex-col">
          <p className=" text-2xl text-[#1e4649] font-semibold mb-1 ml-[50px] md:ml-[8rem] mt-[3rem] mb-[1rem] text-start sm:ml-[3rem]">Start a Conversation</p>
          <Button text='Talk to an Expert' />
        </div>

      </div>
      {/* <div className=" flex-1 mt-5">
        <Spinner />
      </div> */}
    </div>
  );
};

export default SectionTwo;
