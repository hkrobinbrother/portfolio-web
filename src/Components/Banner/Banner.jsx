import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";


const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/W4d2CZ3D/Whats-App-Image-2025-10-25-at-7-50-44-AM.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <span className=""> Hi, I'm <span className="text-amber-300">Hasan kabir Robin</span> </span>
              <br />A Web Developer
            </h1>
            <p className="py-6">
              I’m a passionate product designer with 2 years of learning and
              hands-on project experience. I’m now looking for opportunities to
              apply my skills and grow with a creative team.
            </p>
            <div className="space-x-2">
             
              <a href="/Hasan-Kabir-Resume (1).pdf.pdf" download="Hasan-Kabir-Resume.pdf.pdf" className="btn btn-primary rounded-full px-6 py-2  shadow-blue-900 shadow-lg items-center">
                Download CV <FontAwesomeIcon icon={faCircleDown} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
