import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "about",
        "skills",
        "experience",
        "work",
        "education",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#050816]/70 border-b border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="px-[8vw] lg:px-[14vw]">

        {/* Navbar Container */}
        <div className="flex items-center justify-between h-[90px]">

          {/* Logo */}
          <button
            onClick={() => handleMenuItemClick("about")}
            className="text-2xl font-extrabold tracking-wide"
          >
            <span className="text-purple-500">&lt;</span>

            <span className="text-white">
              AadityaRuhela
            </span>

            <span className="text-purple-500">/&gt;</span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition duration-300 ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* Active Underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-5">

            <a
              href="https://github.com/aadityaruhela777-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition duration-300 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/aaditya-ruhela-23b4583a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-purple-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-purple-400 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div className="md:hidden px-6 pb-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

            <ul className="flex flex-col gap-6 items-center">

              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`text-lg font-medium transition duration-300 ${
                      activeSection === item.id
                        ? "text-purple-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Social Icons */}
              <div className="flex items-center gap-6 pt-4">

                <a
                  href="https://github.com/aadityaruhela777-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition duration-300"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/aaditya-ruhela-23b4583a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;