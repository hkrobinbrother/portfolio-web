import { FaDownload } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div id="about"  className="hero text-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 ">
        <div className=" space-y-2">
          <div className="flex justify-start">
            <h1 className="py-2 px-4 bg-blue-100 text-black rounded-full font-bold shadow shadow-blue-300">
              About Me
            </h1>
          </div>
          <h1 className="text-5xl font-bold">Who is Hasan!</h1>
          <h1 className="text-2xl font-bold">
            "Helping businesses grow with creative web design and development
            solutions."
          </h1>
          <p className="">
            Hi, I’m Hasan Kabir Robin, a passionate MERN Stack Web Developer who
            thrives on turning ideas into visually stunning and functional
            digital experiences. I love combining creativity with clean code,
            and I always aim for detail-oriented, user-friendly solutions.
          </p>
          <div className="space-y-2 ">
            <h1 className="flex items-center gap-2"><MdEmail className="text-4xl text-green-400" /> <span className="text-xl font-bold">hkrobin48@gmail.com</span></h1>
            <h1 className="flex items-center gap-2"><FaPhoneAlt  className="text-3xl text-green-400" /> <span className="text-xl font-bold ml-2">01302012386</span></h1>
          </div>
          <a
            href="/Hasan-Kabir-Robin-Resume.pdf"
            download="Hasan-Kabir-Robin-Resume.pdf"
            className="btn btn-primary rounded-full px-6 py-2  shadow-blue-900 shadow-lg items-center mt-2"
          >
            Download CV <FaDownload />
          </a>
        </div>
        <img
          src="https://i.ibb.co.com/W4d2CZ3D/Whats-App-Image-2025-10-25-at-7-50-44-AM.jpg"
          className="max-w-sm rounded-lg shadow-2xl "
        />
      </div>
    </div>
  );
};

export default About;
