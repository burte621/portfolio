import React from "react";
import { motion } from "framer-motion";

function Projects({ darkMode }) {
  const cardBg = darkMode ? "bg-gray-900" : "bg-gray-200";
  const textColor = darkMode ? "text-blue-200" : "text-gray-800";

  return (
    <section id="projects" className="p-8">
      <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <motion.div
          className={`${cardBg} p-6 rounded-lg max-w-md mx-auto shadow-md`}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className={`text-xl font-bold ${textColor}`}>Kispay Payment Gateway</h3>
          <p className={`${textColor} mt-2`}>
            KisPay Payment Gateway,backend developer
            Microservices system using Spring Boot and Kafka.
          </p>
        </motion.div>

        <motion.div
          className={`${cardBg} p-6 rounded-lg max-w-md mx-auto shadow-md`}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className={`text-xl font-bold ${textColor}`}>University Platform</h3>
          <p className={`${textColor} mt-2`}>
            intern at AtlasComputer Technology
            Platform for Ethiopian universities.
            
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;