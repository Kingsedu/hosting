"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Background = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isLetterComplete, setIsLetterComplete] = useState(false);

  const services = [
    {
      name: "ENGINEERING SERVICE",
      images: [
        "/images/img/service.jpg",
        "/images/img/service-2.jpg",
        "/images/img/service-3.png",
      ],
      background: "/images/img/background-3.jpg",
    },
    {
      name: "PROCUREMENT",
      images: [
        "/images/img/procument-one.jpeg",
        "/images/img/procument-2.jpeg",
        "/images/img/procument-3.gif",
      ],
      background: "/images/img/background-five.jpg",
    },
    {
      name: "TRAINING",
      images: [
        "/images/img/training-one.jpeg",
        "/images/img/training-two.jpg",
        "/images/img/training-three.jpeg",
      ],
      background: "/images/img/background-2.webp",
    },
    {
      name: "ROPE-ACCESS",
      images: [
        "/images/img/rope-access-one.jpg",
        "/images/img/rope-access-3.jpg",
        "/images/img/rope-access-2.jpg",
      ],
      background: "/images/img/background-four.avif",
    },
  ];

  useEffect(() => {
    const currentServiceName = services[currentService].name;
    setIsLetterComplete(false);
    setCurrentLetter(0);

    const letterInterval = setInterval(() => {
      setCurrentLetter((prev) => {
        if (prev >= currentServiceName.length - 1) {
          clearInterval(letterInterval);
          setIsLetterComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(letterInterval);
  }, [currentService]);

  useEffect(() => {
    if (isLetterComplete) {
      const timer = setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLetterComplete]);

  const renderServiceLetters = () => {
    const currentServiceName = services[currentService].name;
    return currentServiceName.split("").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: index <= currentLetter ? 1 : 0,
          y: index <= currentLetter ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className={`inline-block px-1 text-2xl font-bold ${
          index <= currentLetter ? "text-yellow-300" : "text-gray-400"
        }`}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentService}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(${services[currentService].background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
          }}
        />
      </AnimatePresence>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></div>
      <div className="flex flex-col min-h-screen">
        {/* Company Name Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 mt-16 relative z-20"
        >
          <h1 className="text-5xl font-bold text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">
            Welcome to ME
            <span className="text-red-400 drop-shadow-[0_0_8px_rgba(255,123,0,0.8)]">
              CN
            </span>
            OMIT Oil and Gas Services
          </h1>
          <h2 className="text-2xl mt-4 text-white relative z-20">
            Where we believe in 3T's:{" "}
            <span className="text-yellow-300 font-semibold drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">
              Trust
            </span>
            ,{" "}
            <span className="text-yellow-300 font-semibold drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">
              Talent
            </span>
            , and{" "}
            <span className="text-yellow-300 font-semibold drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">
              Technology
            </span>
          </h2>
          <h3 className="text-xl mt-2 font-bold text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">
            Our operators are forged in the field — powered by experience,
            defined by expertise.
          </h3>
        </motion.div>

        {/* Services Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-16 relative z-10">
          <div className="relative w-full max-w-6xl">
            {/* Service Name */}
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-white mb-4">
                Our Services
              </h4>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block">
                {renderServiceLetters()}
              </div>
            </div>

            {/* Service Images */}
            <div className="relative h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Left Image */}
                    <motion.img
                      src={services[currentService].images[0]}
                      alt="Service"
                      className="absolute left-[-5%] w-80 h-80 object-cover rounded-lg shadow-2xl transform -rotate-6"
                      style={{ zIndex: 1 }}
                    />
                    {/* Center Image */}
                    <motion.img
                      src={services[currentService].images[1]}
                      alt="Service"
                      className="absolute w-[500px] h-[500px] object-cover rounded-lg shadow-2xl"
                      style={{ zIndex: 2 }}
                    />
                    {/* Right Image */}
                    <motion.img
                      src={services[currentService].images[2]}
                      alt="Service"
                      className="absolute right-[-5%] w-80 h-80 object-cover rounded-lg shadow-2xl transform rotate-6"
                      style={{ zIndex: 1 }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
