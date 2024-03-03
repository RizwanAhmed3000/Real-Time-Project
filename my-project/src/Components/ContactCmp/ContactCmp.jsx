import React from "react";
import "./ContactCmp.css";
import MapLocation from "../MapLocation/MapLocation";
const ContactCmp = () => {
  return (
    <div className="flex justify-evenly w-full md-flex-row  bg-[#097969] p-[20px] sm:flex-row flex-col">
      <div className="contact  " id="contact">
        <h2 className="heading pt-[2rem] text-[#fdda0d]">Contact Us</h2>
        <form action="" className="from">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Mobile Number " />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            // className="heading"
          ></textarea>
          <input type="submit" value="Send Message" className="btn mb-[1rem] text-white text-2xl hover:bg-[#fdda0d] w-[100%] h-[10vh] rounded-lg" />
        </form>
      </div>
      <div className=" bg-[#097969] text-center  flex justify-center items-center">
        <div>
          <h2 className="text-3xl font-bold uppercase text-white mb-[2rem]">
            A <span className="text-[#fdda0d]">question</span>, a project, a job{" "}
            <span className="text-[#fdda0d]">application</span>?
          </h2>
          <p className="text-1xl font-semibold  text-white mb-[2rem] overflow-hidden">
            Please feel free to contact us and we will be happy to assist you in
            anyway we can!
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem] overflow-auto">
            Info@webdeezien.com
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem]">
            (507) 623-2311
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem] overflow-auto">
            6605 NW 121st Street Oklahoma City, Ok. 73162
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem]">
            Find Us
          </p>
          <div className=" flex justify-center  rounded-md">
            <MapLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCmp;
