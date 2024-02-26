import React from "react";
import Hero from "../../Components/Hero/Hero";
import PackageSection from "../../Components/PackageIntroSection/PackageSection";
import SectionTwo from "../../Components/SectionTwo/SectionTwo";
import SectionThree from "../../Components/SectionThree/SectionThree";
import WeSpecialize from "../../Components/WeSpecialize/WeSpecialize";
import GetConsultant from "../../Pages/GetConsultPage/GetConsultant";
import TestimonialsCmp from "../../Components/Testimonials/TestimonialsCmp";

const Home = () => {
  console.log("shmeer ");
  return (
    <div className="overflow-x-hidden">
      <div>
        <Hero />
        <div className="relative z-[30]">
          <SectionTwo />
          <PackageSection />
          <SectionThree />
          <WeSpecialize />
          {/* <GetConsultant /> */}
          <TestimonialsCmp />
        </div>
      </div>
    </div>
  );
};

export default Home;
