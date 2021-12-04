import React from 'react';
import { ContactMe } from '../ContactMe/ConatctMe';
import Banner from './components/Banner/Banner';
import SvgLetters from './components/Banner/SvgLetters/SvgLetters';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

const Home = () => {
    return (
        <div className="">
            <header>
                <Navbar />
                <Banner />
            </header>
            <main>
                <section id="skills" classname="">
                    <h1 className="text-clr-dark font-bold text-[6vh] uppercase mx-5 sm:mx-0 mt-10 md:mt-20 mb-10">
                        My Skills <span className="text-[10vh]  text-clr-secondary">.</span>
                    </h1>
                    <Skills />
                </section>
                <section id="projects">
                    <h1 className="text-clr-dark font-bold text-[6vh] uppercase mx-5 sm:mx-0 mt-10 md:mt-20 mb-10">
                        My Projects <span className="text-[10vh]  text-clr-secondary">.</span>
                    </h1>
                    <MyProjects
                    />
                </section>
                <section id="contact-me">
                <h1 className="text-clr-dark font-bold text-[6vh] uppercase mx-5 sm:mx-0 mt-10 md:mt-20">
                        CONTACT ME <span className="text-[10vh]  text-clr-secondary">.</span>
                    </h1>
                    <ContactMe/>
                </section>
            </main>

        </div>
    );
};

export default Home;