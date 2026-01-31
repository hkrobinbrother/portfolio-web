import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container text-white mx-auto space-y-6 mt-8">
      <h1 className=" text-center text-6xl text-amber-300 font-semibold">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 space-y-4">
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
            className="w-44 h-44"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
          <h1 className="text-2xl font-semibold">HTML</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg  p-6 rounded-lg ">
          <img
        

            className="w-44 h-44"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />
          <h1 className="text-2xl font-semibold">
            CSS
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
        
            className="w-44 h-44"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <h1 className="text-2xl font-semibold">JAVA SCRIPT</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
            className="w-44 h-44"
            

            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
          <h1 className="text-2xl font-semibold">TAILWIND CSS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
            className="w-44 h-44"
            


            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <h1 className="text-2xl font-semibold">REACT</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
            className="w-44 h-44"
            


            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" 
          />
          <h1 className="text-2xl font-semibold">REACT ROUTER</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
            className="w-44 h-44 bg-white"
            



           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
          <h1 className="text-2xl font-semibold">GITHUB</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  shadow-lg shadow-black-100  p-6 rounded-lg ">
          <img
            className="w-44 h-44 "
            




            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" 
          />
          <h1 className="text-2xl font-semibold">FIREBASE</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
