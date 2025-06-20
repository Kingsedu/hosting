"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EngineeringService = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const details = [
    {
      images: "/ndt-one.jpg",
      details: {
        title: "Asset Integrity Management(AIM)",
        description:
          "We offer end-to-end AIM solutions including planning, risk-based inspection(RBI), corrosion monitoring, and fitness-for-service evaluations- ensuring assets remain safe, efficient and compliant throughout their lifecycle",
      },
    },
    {
      images: "/engineering.jpg",
      details: {
        title: "Inspection and Reliabilitty Consultancy",
        description:
          "Our team provides expert guidance on developing inspection strategies, failure analysis, reliability assessments, and maintenance optimization to reduce downtown and improve asset performance",
      },
    },
    {
      images: "/engineering_service.jpg",
      details: {
        title: "Plant and Equipment Condition Monitoring",
        description:
          "Using state-of-the-art diagnostic tools, we monitor the condition of rotating and static equipment to detect early signs of degradation and support predictive maintenance strategies",
      },
    },
    {
      images: "/integrity-two.png",
      details: {
        title: "Pipeline and Pressure Systems integrity",
        description:
          "Specialized services for the inspection, assessment, and management of pipelines and pressure-containing equipment, aligned with integrity standards and best practices",
      },
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="flex w-full">
          {details.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-[500px] flex-1"
              initial={false}
              animate={{
                width:
                  selectedService === index
                    ? "100%"
                    : selectedService === null
                    ? "25%"
                    : "0%",
                height: selectedService === index ? "500px" : "500px",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Service Image */}
              <motion.div
                className="relative w-full h-full"
                initial={false}
                animate={{
                  scale: selectedService === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={service.images}
                  alt={service.details.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  animate={{
                    background:
                      selectedService === index
                        ? "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Title and Button - Normal State */}
              <AnimatePresence>
                {selectedService !== index && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-4"
                  >
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {service.details.title}
                    </h3>
                    <button
                      onClick={() => setSelectedService(index)}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors"
                    >
                      Read More
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded State - Content in the same space */}
              <AnimatePresence>
                {selectedService === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col p-8"
                  >
                    {/* Title at the top */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      {service.details.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-gray-200 text-base max-w-2xl"
                    >
                      {service.details.description}
                    </motion.p>

                    {/* Close button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      onClick={() => setSelectedService(null)}
                      className="bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors self-start mt-4"
                    >
                      Show Less
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineeringService;
