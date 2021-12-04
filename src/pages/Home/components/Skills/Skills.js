import React from 'react';
import BootstrapLogo from './SvgLogos/BootstrapLogo';
import CssLogo from './SvgLogos/CssLogo';
import ExpressLogo from './SvgLogos/ExpressLogo';
import GitHubLogo from './SvgLogos/GitHubLogo';
import GitLogo from './SvgLogos/GitLogo';
import HtmlLogo from './SvgLogos/HtmlLogo';
import JavaScriptLogo from './SvgLogos/JavaScriptLogo';
import MongoDbLogo from './SvgLogos/MongoDbLogo';
import NextJsLogo from './SvgLogos/NextJsLogo';
import NodeJsLogo from './SvgLogos/NodeJsLogo';
import ReactLogo from './SvgLogos/ReactLogo';
import TailwindLogo from './SvgLogos/TailwindLogo';
import VsCodeLogo from './SvgLogos/VsCodeLogo';
import TypeScriptLogo from './SvgLogos/TypeScriptLogo';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
    return (
        <div className="bg-clr-primary p-x-5 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5  shadow-xl space-y-10 place-items-center">
           <div 
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
        //    data-aos-mirror="true"
           data-aos-once="false"
         
           >
                <HtmlLogo/>
           </div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ><CssLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ><TailwindLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ><BootstrapLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ><JavaScriptLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ><ReactLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><NodeJsLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><ExpressLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><MongoDbLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><NextJsLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><TypeScriptLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><VsCodeLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ><GitHubLogo/></div>
           <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          
           ><GitLogo/></div>
            {/* <CssLogo/>
            <TailwindLogo/>
            <BootstrapLogo/>
            <JavaScriptLogo/>
            <ReactLogo/>
            <NodeJsLogo/>
            <ExpressLogo/>
            <MongoDbLogo/>
            <NextJsLogo/>
            <TypeScriptLogo/>
            <VsCodeLogo/>
            <GitHubLogo/>
            <GitLogo/> */}
        </div>
    );
};

export default Skills;