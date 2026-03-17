  import React from "react";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="text-center py-17">

      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Birtukan</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer | Spring Boot | React
      </motion.p>

    </section>
  );
}

export default Hero;