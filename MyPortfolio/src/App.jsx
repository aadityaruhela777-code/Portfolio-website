import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= PROJECT STYLE AESTHETIC BACKGROUND ================= */}

      {/* Purple Gradient Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-700/20 rounded-full blur-[180px]"></div>

      {/* Blue Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-700/20 rounded-full blur-[180px]"></div>

      {/* Pink Glow */}
      <div className="absolute top-[30%] left-[35%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px]"></div>

      {/* Violet Glow */}
      <div className="absolute top-[60%] left-[10%] w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[140px]"></div>

      {/* Cyan Glow */}
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]"></div>

      {/* ================= GRID EFFECT ================= */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      ></div>

      {/* ================= RADIAL FADE ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]"></div>

      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050816]/40 to-black"></div>

      {/* ================= WEBSITE CONTENT ================= */}

      <main className="relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Work />

        {/* Education */}
        <Education />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />

      </main>
    </div>
  );
};

export default App;