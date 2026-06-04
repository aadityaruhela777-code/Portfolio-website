import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-[8vw] lg:px-[14vw] overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-700/20 blur-[120px] rounded-full"></div>

      {/* Section Title */}
      <div className="text-center mb-24 relative z-10">
        <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">
          Academic Journey
        </p>

        <h2 className="text-5xl font-extrabold text-white">
          EDUCATION
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
          My educational background and learning journey that shaped my
          foundation in computer science and modern web development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent hidden md:block"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col md:flex-row items-center mb-24 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex z-20">
              <div className="w-20 h-20 rounded-full border-4 border-purple-500 bg-[#0f172a] flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Card */}
            <div className="w-full md:w-[45%] relative group">
              
              {/* Glow Effect */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-60 transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500">
                
                {/* Top Section */}
                <div className="flex items-center gap-5 mb-6">

                  {/* Logo */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-lg p-2">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Degree + School */}
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>

                    <p className="text-purple-300 font-medium mt-2">
                      {edu.school}
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Grade */}
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm mb-6">
                  Grade: {edu.grade}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-8 text-[15px]">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;