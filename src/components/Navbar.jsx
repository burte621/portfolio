import React from "react";
function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <h1 className="text-xl font-bold text-blue-500">
        Birtukan.dev
      </h1>

      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 bg-blue-500 rounded"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;