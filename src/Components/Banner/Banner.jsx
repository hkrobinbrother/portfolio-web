

const Banner = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/W4d2CZ3D/Whats-App-Image-2025-10-25-at-7-50-44-AM.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <span className="space-y-2">
                {" "}
                Hi, I'm{" "}
                <span className="text-amber-300">Hasan kabir Robin</span>{" "}
              </span>
            </h1>
            <h1 className="text-5xl font-bold mt-2">A Web Developer</h1>
            <p className="py-6">
              I’m a passionate product designer with 2 years of learning and
              hands-on project experience. I’m now looking for opportunities to
              apply my skills and grow with a creative team.
            </p>
            <div className="space-x-2">
              

              <button
                onClick={() => {
                  document
                    .getElementById("project")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary rounded-full px-6 py-2  shadow-blue-900 shadow-lg items-center"
              >
                View Work
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary rounded-full px-6 py-2  shadow-blue-900 shadow-lg items-center"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
