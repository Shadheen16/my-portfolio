import React from 'react';
import bannerImg from "../../../../Images/Group 26.png"

const Banner = () => {
    return (
        <div className="min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh] grid grid-cols-1 md:grid-cols-2 pt-20 sm:mx-10 md:mx-20">
            <div className="h-ful flex flex-col justify-center items-start ">
                <h4 className="text-[10vh] text-clr-dark font-extrabold">
                    Hi, my <br />
                    name is Arman
                </h4>
                <h1 className="text-[3vh] text-clr-dark font-bold font-mont">I am a web developer from Joypurhat, Bangladesh</h1>
            </div>
            <div>
               <img src={bannerImg} className="my-auto" alt="" />
            </div>
        </div>
    );
};

export default Banner;