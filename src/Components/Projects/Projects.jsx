import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import img1 from "../../../public/cv/gadget-heven.png";
import img2 from "../../../public/cv/online-movie.png";
import img3 from "../../../public/cv/free-food.png";
import img4 from "../../../public/cv/nest-mart.png";
import img5 from "../../../public/cv/cafe-ali.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "A gadget-heaven build with React and tailwind Css",
      image: img1,
      gitUrl: "https://github.com/hkrobinbrother/Gadget-heaven-8",
      liveLink: "https://gadget-heven-77.netlify.app/",
    },
    {
      id: 2,
      title: "A online-movie build with React and tailwind Css",
      image: img2,
      gitUrl: "https://github.com/hkrobinbrother/online-movie",
      liveLink: "https://online-movie-all.netlify.app/",
    },
    {
      id: 3,
      title: "A Free-food website build with React and tailwind Css",
      image: img3,
      gitUrl: "https://github.com/hkrobinbrother/Free-food-client",
      liveLink: "https://free-food-client-vm9f.vercel.app/",
    },
    {
      id: 4,
      title: "A Restaurant website build with React and tailwind Css",
      image: img4,
      gitUrl: "https://github.com/hkrobinbrother/nest-mart",
      liveLink: "https://nest-mart-kappa.vercel.app/",
    },
    {
      id: 5,
      title: "A Restaurant website build with frontend and backend based",
      image: img5,
      gitUrl: "https://github.com/hkrobinbrother/cafe-ali-client",
      liveLink: " https://cafe-ali-94d82.web.app",
    },

  ];
  return (
    <div id="project" className="container mx-auto text-white px-2">
      <div>
        <h1 className="text-6xl font-extrabold text-center mt-8">
          My <span className="text-amber-300">Projects</span>
        </h1>
      </div>
      <div className="gird grid-cols-1 md:grid-cols-2 flex gap-8 mt-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 rounded-lg">
          {projects.map((project) => (
            <div key={project.id} className="">
              <div className="group">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h1 className="text-center text-xl font-bold p-4">
                {project.title}
              </h1>
              <div className="flex gap-4 ">
                <a
                  className="bg-amber-600 text-2xl px-4 py-2 rounded-lg "
                  href={project.liveLink}
                >
                  <FaLink className=" " />
                </a>
                <a
                  className="bg-amber-600 text-2xl px-4 py-2 rounded-lg"
                  href={project.gitUrl}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
