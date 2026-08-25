import React, { useEffect, useState } from "react";
import { experiences } from "../../constants";
import {
  Briefcase,
  CalendarDays,
  X,
  Award,
  ExternalLink,
} from "lucide-react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Close certificate with ESC key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedExperience]);

  return (
    <>
      <section
        id="experience"
        className="relative py-28 px-[8vw] lg:px-[14vw] overflow-hidden bg-black"
      >
        {/* ================= BACKGROUND GLOW ================= */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-[120px] rounded-full"></div>

        {/* ================= SECTION HEADING ================= */}

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

          <div className="flex items-center justify-center gap-2 mt-5 text-purple-300/70 text-sm">
            <Award size={16} />
            <span>Click an experience to view certificate</span>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}

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
              {/* ================= TIMELINE DOT ================= */}

              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex z-20">
                <div className="w-20 h-20 rounded-full border-4 border-purple-500 bg-[#0f172a] flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-12 h-12 object-contain rounded-full"
                  />
                </div>
              </div>

              {/* ================= EXPERIENCE CARD ================= */}

              <button
                type="button"
                onClick={() => {
                  if (experience.certificate) {
                    setSelectedExperience(experience);
                  }
                }}
                disabled={!experience.certificate}
                className={`w-full md:w-[45%] relative group text-left ${
                  experience.certificate
                    ? "cursor-pointer"
                    : "cursor-default"
                }`}
              >
                {/* Glow Effect */}

                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-70 transition duration-500"></div>

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:-translate-y-2 group-hover:border-purple-500/40 transition-all duration-500">

                  {/* Certificate Badge */}

                  {experience.certificate && (
                    <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs opacity-70 group-hover:opacity-100 transition">
                      <Award size={14} />
                      <span>Certificate</span>
                    </div>
                  )}

                  {/* ================= TOP ================= */}

                  <div className="flex items-center gap-5 mb-6 pr-24">

                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-contain"
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

                  {/* ================= DATE ================= */}

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                    <CalendarDays size={16} />
                    <span>{experience.date}</span>
                  </div>

                  {/* ================= DESCRIPTION ================= */}

                  <p className="text-gray-300 leading-8 text-[15px]">
                    {experience.desc}
                  </p>

                  {/* ================= SKILLS ================= */}

                  <div className="mt-8">

                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase
                        size={18}
                        className="text-purple-400"
                      />

                      <h5 className="text-white font-semibold text-lg">
                        Skills & Technologies
                      </h5>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm hover:scale-105 hover:border-pink-400 transition duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ================= VIEW CERTIFICATE ================= */}

                  {experience.certificate && (
                    <div className="mt-7 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm group-hover:bg-purple-500/20 group-hover:text-purple-200 transition">
                      <Award size={17} />

                      <span>Click to View Certificate</span>

                      <ExternalLink size={15} />
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CERTIFICATE MODAL
      ===================================================== */}

      {selectedExperience && selectedExperience.certificate && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedExperience(null)}
        >
          {/* ================= BACKDROP ================= */}

          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-certificate-fade"></div>

          {/* ================= MODAL ================= */}

          <div
            className="relative z-10 w-full max-w-6xl max-h-[95vh] bg-[#08080d] border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(168,85,247,0.35)] animate-certificate-popup"
            onClick={(event) => event.stopPropagation()}
          >
            {/* ================= MODAL HEADER ================= */}

            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-white/5">

              <div>
                <div className="flex items-center gap-2">
                  <Award
                    size={18}
                    className="text-purple-400"
                  />

                  <p className="text-white font-bold text-lg">
                    Certificate
                  </p>
                </div>

                <p className="text-purple-300 text-sm mt-1">
                  {selectedExperience.company} •{" "}
                  {selectedExperience.role}
                </p>
              </div>

              {/* Close */}

              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-gray-300 hover:bg-red-500/20 hover:border-red-500/30 hover:text-white transition duration-300"
                aria-label="Close certificate"
              >
                <X size={22} />
              </button>
            </div>

            {/* ================= CERTIFICATE IMAGE ================= */}

            <div className="p-3 sm:p-6 overflow-auto max-h-[calc(95vh-90px)] flex justify-center items-center bg-black/50">

              <img
                src={selectedExperience.certificate}
                alt={`${selectedExperience.company} certificate`}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes certificateFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes certificatePopup {
          0% {
            opacity: 0;
            transform: scale(0.82) translateY(40px);
          }

          60% {
            opacity: 1;
            transform: scale(1.02) translateY(-5px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-certificate-fade {
          animation: certificateFade 0.3s ease-out forwards;
        }

        .animate-certificate-popup {
          animation: certificatePopup 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default Experience;
