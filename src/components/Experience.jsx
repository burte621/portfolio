import React from "react";

function Experience({ darkMode }) {
  const cardBg = darkMode ? "bg-gray-900" : "bg-gray-200";
  const textColor = darkMode ? "text-blue-200" : "text-gray-800";

  return (
    <section className="p-8">
      <h2 className={`text-3xl font-bold text-center ${darkMode ? "text-blue-400" : "text-blue-600"} mb-8`}>
        Experience
      </h2>

      <div className={`${cardBg} p-4 rounded-lg max-w-xl mx-auto shadow-md`}>
        <h3 className={`text-xl font-bold ${textColor}`}>Backend Developer Intern</h3>
        <p className={`${textColor} mt-1`}>KisPay Payment Gateway</p>

        <ul className={`mt-3 list-disc list-inside ${textColor}`}>
          <li>Built microservices for payment processing</li>
          <li>Integrated bank APIs</li>
          <li>Implemented Kafka messaging</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;