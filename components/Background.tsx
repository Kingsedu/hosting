"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Background = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
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
      description:
        "Comprehensive engineering solutions for the oil and gas industry, including design, maintenance, and optimization services.",
    },
    {
      name: "PROCUREMENT",
      images: [
        "/images/img/procument-one.jpeg",
        "/images/img/procument-2.jpeg",
        "/images/img/procument-3.gif",
      ],
      background: "/images/img/background-five.jpg",
      description:
        "End-to-end procurement services ensuring quality equipment and materials for your operations.",
    },
    {
      name: "TRAINING",
      images: [
        "/images/img/training-one.jpeg",
        "/images/img/training-two.jpg",
        "/images/img/training-three.jpeg",
      ],
      background: "/images/img/background-2.webp",
      description:
        "Professional training programs designed to enhance skills and safety in the oil and gas sector.",
    },
    {
      name: "ROPE-ACCESS",
      images: [
        "/images/img/rope-access-one.jpg",
        "/images/img/rope-access-3.jpg",
        "/images/img/rope-access-2.jpg",
      ],
      background: "/images/img/background-four.avif",
      description:
        "Specialized rope access services for maintenance, inspection, and construction in challenging environments.",
    },
  ];

  // Handle letter animation
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

  // Handle image carousel
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [currentService]);

  // Handle service change
  useEffect(() => {
    if (isLetterComplete) {
      const timer = setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setCurrentImage(0); // Reset image index when service changes
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

      {/* Split Screen Layout - Modified for responsiveness */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] mb-8">
              Welcome to ME
              <span className="text-red-400 drop-shadow-[0_0_8px_rgba(255,123,0,0.8)]">
                CN
              </span>
              OMIT
            </h1>
            <h2 className="text-xl lg:text-2xl text-white mb-6">
              Where we believe in 3T's:{" "}
              <span className="text-yellow-300 font-semibold">Trust</span>,{" "}
              <span className="text-yellow-300 font-semibold">Talent</span>, and{" "}
              <span className="text-yellow-300 font-semibold">Technology</span>
            </h2>

            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] mb-4">
              What MECNOMIT is All About
            </h2>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
              {renderServiceLetters()}
            </div>
            <p className="text-white text-base lg:text-lg mt-4">
              {services[currentService].description}
            </p>
          </motion.div>
        </div>

        {/* Right Side - Image Carousel - Modified for responsiveness */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 lg:pt-32 order-last">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentService}-${currentImage}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[300px] lg:max-w-none h-[200px] lg:h-[600px] mx-auto"
            >
              <img
                src={services[currentService].images[currentImage]}
                alt={`${services[currentService].name} - Image ${
                  currentImage + 1
                }`}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Background;
