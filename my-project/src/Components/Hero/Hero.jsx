import React from 'react'
// import Particle from './Particle'
// import TextEffect from './TextEffect'
// import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
// import  Particle  from '../Particles/Particles';

const Hero = () => {
    return (
        // bg-[url("/images/banner.jpg")]
        <div className='h-[88vh] bg-[url("/images/banner.jpg")]  mt-[10vh] bg-cover bg-center bg-[#18252b] '>
            {/* <Particle /> */}
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ' >
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-light ' >
                        WE ARE A RESULT-DRIVEN <span className='text-[#34afa9]' > WEBSITE</span> COMPANY!
                    </h1>
                    {/* <TextEffect /> */}
                    <p className='mt-[1.5rem] text-[20px] text-[#ffffff]'>Ready to hand over your new project to our masterminds?</p>
                    <div className='mt-[2rem] flex-col space-y-0 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero