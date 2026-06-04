import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="relative py-28 px-[8vw] lg:px-[12vw] overflow-hidden bg-black"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-700/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-700/20 blur-[120px] rounded-full"></div>

      {/* Section Title */}
      <div className="text-center mb-24 relative z-10">
        <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-4">
          My Recent Work
        </p>

        <h2 className="text-5xl font-extrabold text-white">
          PROJECTS
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
          A showcase of the projects I have worked on, highlighting my
          skills, creativity, and experience in building modern full-stack
          applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative cursor-pointer"
          >
            {/* Glow Border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-70 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition-all duration-500">
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full shadow-[0_0_50px_rgba(168,85,247,0.4)] animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-white text-4xl hover:text-pink-400 z-50"
            >
              &times;
            </button>

            {/* Image */}
            <div className="w-full h-[320px] overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-4xl font-bold text-white mb-5">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 py-4 rounded-2xl border border-purple-500 text-purple-300 text-center font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center font-semibold hover:opacity-90 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;