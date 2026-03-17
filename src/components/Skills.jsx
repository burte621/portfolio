import React from "react";

function Skills({ darkMode }) {
  const cardBg = darkMode ? "bg-gray-800" : "bg-gray-200";
  const textColor = darkMode ? "text-gray-300" : "text-gray-800";

  return (
    <section id="skills" className="p-8">
      <h2 className={`text-3xl font-bold text-center ${darkMode ? "text-blue-400" : "text-blue-600"} mb-8`}>
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
        {/** Each rectangle */}
        <div className={`${cardBg} p-10 rounded max-w-xs mx-auto`}>
          <h3 className="font-bold mb-2">Backend</h3>
          <p className={textColor}>Java</p>
          <p className={textColor}>Spring Boot</p>
          <p className={textColor}>REST APIs</p>
          <p className={textColor}>Microservices</p>
        </div>

        <div className={`${cardBg} p-10 rounded max-w-xs mx-auto`}>
          <h3 className="font-bold mb-2">Frontend</h3>
          <p className={textColor}>React.js</p>
          <p className={textColor}>JavaScript</p>
          <p className={textColor}>HTML / CSS</p>
          <p className={textColor}>Bootstrap</p>
        </div>

        <div className={`${cardBg} p-10 rounded max-w-xs mx-auto`}>
          <h3 className="font-bold mb-2">Database</h3>
          <p className={textColor}>MySQL</p>
          <p className={textColor}>PostgreSQL</p>
          <p className={textColor}>MongoDB</p>
        </div>

        <div className={`${cardBg} p-10 rounded max-w-xs mx-auto`}>
          <h3 className="font-bold mb-2">Tools</h3>
          <p className={textColor}>Git</p>
          <p className={textColor}>Docker</p>
          <p className={textColor}>Jenkins</p>
          <p className={textColor}>Kafka</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;