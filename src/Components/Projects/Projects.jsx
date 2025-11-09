import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "A gadget-heaven build with React and tailwind Css",
      image: "/public/projectsImg/gadget-heven.png",
      gitUrl:"https://github.com/hkrobinbrother/Gadget-heaven-8",
      liveLink:"https://gadget-heven-77.netlify.app/"
    },
    {
      id: 1,
      title: "A online-movie build with React and tailwind Css",
      image: "/public/projectsImg/online-movie.png",
       gitUrl:"https://github.com/hkrobinbrother/online-movie",
      liveLink:"https://online-movie-all.netlify.app/"
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-6xl font-extrabold text-center mt-8">
          My <span className="text-amber-300">Projects</span>
        </h1>
      </div>
      <div className="gird grid-cols-1 md:grid-cols-2 flex gap-8 mt-8 rounded-lg">
        {projects.map((project) => (
          <div className="">
            <div className="group">
              <img src={project.image} alt="" className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h1 className="text-center text-xl font-bold p-4">{project.title}</h1>
            <div className="flex gap-4 ">
                <a className="bg-amber-600 text-2xl px-4 py-2 rounded-lg " href={project.liveLink}>
                    <FaLink className=" " />

                </a>
                <a className="bg-amber-600 text-2xl px-4 py-2 rounded-lg" href={project.gitUrl}>
                    <FaGithub />
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
