import React, { useState } from 'react';
import BannerSvg from '../BannerSvg/BannerSvg';
import BannerText from './BannerText';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    const [writter, setWritter] = useState(false)
    setInterval(() => {
        setWritter(true);
    }, 4075);
    return (
        <div className="min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh] grid grid-cols-1 md:grid-cols-5 pt-20 w-full mx-auto px-5 sm:px-0">
            <div className="h-ful col-span-3 flex flex-col justify-center items-center md:items-start ">
                <h4 className="text-[4vh] sm:text-[6vh] lg:text-[8vh] text-clr-dark font-extrabold">
                    <BannerText /><div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="3000"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="uppercase text-clr-accent">my name is Arman</div>
                </h4>
                <div className="font-mono tracking-widest text-xl text-clr-dark"
                >
                    <span></span><span className="inline-block uppercase">{
                        writter &&
                        <Typewriter
                            options={{
                                strings: ['i am a web developer','mern stack developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    }</span>
               
                </div>

            </div>
            <div className="flex justify-right items-center col-span-2 max-w-[100%]">
                <BannerSvg />
            </div>
        </div>
    );
};

export default Banner;