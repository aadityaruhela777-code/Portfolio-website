import React from "react";
import { experiences } from "../../constants";
import { Briefcase, CalendarDays } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-[8vw] lg:px-[14vw] overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-[120px] rounded-full"></div>

      {/* Section Heading */}
      <div className="text-center mb-24 relative z-10">
        <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-4">
          Career Journey
        </p>

        <h2 className="text-5xl font-extrabold text-white">
          EXPERIENCE
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-8">
          My journey in web development, crafting scalable applications,
          beautiful interfaces, and modern digital experiences.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent hidden md:block"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col md:flex-row items-center mb-24 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex z-20">
              <div className="w-20 h-20 rounded-full border-4 border-purple-500 bg-[#0f172a] flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full md:w-[45%] relative group`}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-60 transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500">
                
                {/* Top */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {experience.role}
                    </h3>

                    <p className="text-purple-300 font-medium mt-1">
                      {experience.company}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                  <CalendarDays size={16} />
                  <span>{experience.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-8 text-[15px]">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={18} className="text-purple-400" />
                    <h5 className="text-white font-semibold text-lg">
                      Skills & Technologies
                    </h5>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm hover:scale-105 hover:border-pink-400 transition duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;