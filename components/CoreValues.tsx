"use client";
import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      title: "Mutual Respect",
      description:
        "We value and respecting each individual's contributions and perpectives",
      icon: "🛡️",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, maintaining the highest standards of quality and professionalism.",
      icon: "⭐",
    },
    {
      title: "Commitment",
      description:
        "We demonstrate dedication in our mission, clients and community",
      icon: "📚",
    },

    {
      title: "Nuturing",
      description:
        "We support the personal and professional growth of our team members",
      icon: "💡",
    },
    {
      title: "Openness",
      description: "We encourage open-mindedness and receptivity to new idea",
      icon: "🤝",
    },
    {
      title: "Meritocracy",
      description: "We reward talent and hardwork",
      icon: "⚖️",
    },
    {
      title: "Integrity",
      description:
        "We uphold honersty, ethics and transparancy in all our dealings",
      icon: "⚖️",
    },
    {
      title: "Trust",
      description:
        "We build and mainntain trust through reliability and consistent performance",
      icon: "⚖️",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#00000080]"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] mb-4">
            Our Core Values
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            At MECNOMIT, our values are the foundation of everything we do. They
            guide our decisions, shape our culture, and drive our success.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                {value.title}
              </h3>
              <p className="text-white/90">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Our Commitment to Growth
            </h3>
            <p className="text-white text-lg">
              We are committed to creating an environment where every team
              member can thrive. Through continuous learning, professional
              development, and a supportive culture, we empower our people to
              reach their full potential while delivering exceptional results
              for our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoreValues;
