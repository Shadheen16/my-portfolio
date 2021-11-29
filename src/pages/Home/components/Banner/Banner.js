import React from 'react';
import BannerSvg from '../BannerSvg/BannerSvg';
import BannerText from './BannerText';

const Banner = () => {
    return (
        <div className="min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh] grid grid-cols-1 md:grid-cols-2 pt-20 w-full mx-auto px-5 sm:px-0">
            <div className="h-ful flex flex-col justify-center items-center md:items-start ">
                <h4 className="text-[4vh] sm:text-[6vh] lg:text-[8vh] text-clr-dark font-extrabold">
                <BannerText/><span>my name is Arman</span>
                </h4>
                
                <h1 className="text-[3vh] text-clr-accent font-bold hidden md:inline-block font-mont">I am a web developer from Joypurhat, Bangladesh</h1>
            </div>
            <div className="flex justify-right items-center max-w-[100%]">
                <BannerSvg/>  
            </div>
        </div>
    );
};

export default Banner;