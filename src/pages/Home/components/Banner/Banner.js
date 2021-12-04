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
        <div className="min-h-[100vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh] grid grid-cols-1 md:grid-cols-2 pt-20 w-full mx-auto px-5 sm:px-0">
            <div className="h-ful flex flex-col justify-center items-center md:items-start ">
                <h4 className="text-[7vw] sm:text-[3vw] text-clr-dark font-extrabold">
                    <BannerText /><div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="3000"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="uppercase text-clr-accent"><h1 className="pt-7">my name is Arman</h1></div>
                </h4>
                <div className="font-mono tracking-widest text-sm sm:text-xl text-clr-dark"
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
            <div className="flex  items-center sm:max-w-[100%] sm:justify-right">
                <BannerSvg />
            </div>
        </div>
    );
};

export default Banner;