import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-[8vw] lg:px-[14vw] overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center mb-24">
        <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">
          Technical Expertise
        </p>

        <h2 className="text-5xl font-extrabold text-white">
          SKILLS
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
          A collection of my technical skills and expertise gained through
          projects and hands-on experience.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {SkillsInfo.map((category, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Glow Border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-60 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500">

              {/* Category Title */}
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 border border-purple-500/20 hover:border-pink-400 hover:scale-105 transition duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />

                    <span className="text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;