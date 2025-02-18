import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 via-gray-100 to-white text-gray-800 min-h-[85vh] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Image */}
        <div className="relative group">
          <img
            src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1732824387~exp=1732827987~hmac=f01e95f8f15274ff7a31d6e4f6feaf9b4696499962ccef2937522df618051511&w=996" // Replace with your own image
            alt="About Us"
            className="w-full max-w-7xl  rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
          />
          <div className="absolute top-2 left-2 bg-blue-600 px-3 py-1 rounded text-sm font-semibold shadow transform group-hover:scale-105 transition duration-300">
            About Us
          </div>
          <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition duration-500 rounded-lg"></div>
        </div>

        {/* Right Section: Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Who We Are
          </h1>
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            Welcome to our Web Effects Project! We’re passionate about crafting immersive, visually stunning web experiences that captivate users and deliver lasting impressions. 
            Our mission is to push the boundaries of web design and development, creating projects that blend cutting-edge visuals with seamless functionality.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            Whether it’s animations, interactive designs, or intuitive user interfaces, our goal is to innovate and inspire. Join us on this creative journey to redefine the web experience.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

