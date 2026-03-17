import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <About />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact />
    </div>
  );
}

export default App;