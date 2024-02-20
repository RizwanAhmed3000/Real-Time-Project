import React from 'react'
import { XMarkIcon } from "@heroicons/react/20/solid";

// interface Props {
//   nav: boolean;
//   closeNav: () => void;
// }

// :Props
const MobileNav = ({nav , closeNav}) => {
    // const navAnimated = nav? 'block' : 'hidden'
    const navAnimated = nav? 'translate-x-0' : 'translate-x-[-100%]'
    // console.log(nav);
    // console.log(navAnimated);
  return (
    <div className={`fixed ${navAnimated}  transform transition-all duration-300 top-0 bottom-0 left-0 right-0 z-[1000000] bg-[#09101a]`}>
      <div className="flex z-[1000000] flex-col w-[100vw] h-[100vh] justify-center items-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">SERVICES</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">BLOG</div>
        <div className="nav-link-mobile">CONTACT</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 "
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
