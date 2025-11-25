import React from "react";

const About = () => {
  return (
    <div
    id="about"
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/34410058/pexels-photo-34410058.jpeg)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="w-10/12 mx-auto ">
        <h1 className="text-center text-6xl font-bold mb-4">
          About <span className="text-amber-400">Me</span>
        </h1>
        <div className="flex  justify-around space-x-6">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl">PERSONAL INFOS</h1>
            <div className="flex space-x-8">
              <div className=" text-2xl space-y-4">
                <h1>
                  <span className="text-gray-400">First Name</span> : Hasan
                </h1>
                <h1>
                  <span className="text-gray-400">Last Name</span> : Robin
                </h1>
                <h1>
                  {" "}
                  <span className="text-gray-400">Age</span> : 20 Years
                </h1>
                <h1>
                  {" "}
                  <span className="text-gray-400">Nationality</span> :
                  Bangladesh
                </h1>
              </div>
              <div className="text-2xl space-y-4">
                <h1>
                  <span className="text-gray-400">Address</span> : Dhaka
                </h1>
                <h1>
                  <span className="text-gray-400">phone</span> : 01302012386
                </h1>
                <h1>
                  <span className="text-gray-400">Email</span> :
                  hkrobin48@gmail.com
                </h1>

                <h1>
                  <span className="text-gray-400">Language</span> : Bangla,
                  English
                </h1>
              </div>
            </div>
          </div>
          {/* second */}
          <div>
            <div className="space-x-2 space-y-4">
              <span className="text-6xl font-bold text-amber-300">2</span>
              <span className="text-2xl text-amber-300">+</span>
              <span className="flex text-xl">
                <hr className="w-12" />
                YEARS OF <br />
                EXPERIENCE
              </span>
            </div>
            <div className="space-x-2 space-y-4">
              <span className="text-6xl font-bold text-amber-300">10</span>
              <span className="text-2xl text-amber-300">+</span>
              <span className="flex text-xl">
                <hr className="w-12" />
               COMPLETED <br />
PROJECTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
