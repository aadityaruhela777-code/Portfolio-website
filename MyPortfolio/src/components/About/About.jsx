import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-[8vw] lg:px-[14vw] bg-black"
    >

      {/* ================= SUBTLE BLACK AESTHETIC BACKGROUND ================= */}

      {/* Purple Glow */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[150px]"></div>

      {/* Blue Glow */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[150px]"></div>

      {/* Pink Glow */}
      <div className="absolute top-[35%] left-[40%] w-[350px] h-[350px] bg-pink-600/10 rounded-full blur-[120px]"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#050816]/40 to-black"></div>

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-20 w-full">

        {/* ================= LEFT SIDE ================= */}

        <div className="lg:w-1/2 text-center lg:text-left">

          {/* Small Heading */}
          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-5">
            Full Stack Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Hi, I’m <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Aaditya Ruhela
            </span>
          </h1>

          {/* Animated Text */}
          <div className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">

            <span className="text-white">
              I build{" "}
            </span>

            <TypeAnimation
              sequence={[
                "Modern Web Apps", 2000,
                "MERN Stack Projects", 2000,
                "Responsive Interfaces", 2000,
                "Scalable Applications", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-purple-400"
            />
          </div>

          {/* Description */}
          <p className="mt-10 text-gray-400 text-lg leading-9 max-w-2xl">
            Passionate Full Stack Web Developer skilled in React.js,
            Node.js, MongoDB, and Express.js. Currently pursuing BCA
            while building scalable, high-performance, and visually
            engaging web applications with modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-12 justify-center lg:justify-start">

            {/* Download CV */}
            <a
              href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
            >
              Download CV
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-purple-500 text-purple-300 font-semibold text-lg hover:bg-purple-600 hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="lg:w-1/2 flex justify-center">

          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1500}
            gyroscope={true}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-[80px] opacity-40"></div>

            {/* Border */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full p-[5px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 shadow-[0_0_60px_rgba(168,85,247,0.5)]">

              {/* Image */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a]">
                <img
                  src={profileImage}
                  alt="Aaditya Ruhela"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;