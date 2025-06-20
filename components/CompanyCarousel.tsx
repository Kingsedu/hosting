"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  // {
  //   name: "NNPC",
  //   logo: "/images/companies/nnpc.png",
  // },
  {
    name: "Shell",
    logo: "/images/companies/shell.png",
  },
  {
    name: "ExxonMobil",
    logo: "/images/companies/exxonmobil.png",
  },
  // {
  //   name: "Chevron",
  //   logo: "/images/companies/chevron.png",
  // },
  {
    name: "Total",
    logo: "/images/companies/total.png",
  },
  {
    name: "AGFC",
    logo: "/images/companies/companylogo-one.png",
  },
  {
    name: "Aradel",
    logo: "/images/companies/companylogothree.png",
  },
  {
    name: "NLNG",
    logo: "/images/companies/companylogotwo.png",
  },
  // {
  //   name: "Agip",
  //   logo: "/images/companies/agip.png",
  // },
  // {
  //   name: "Addax",
  //   logo: "/images/companies/addax.png",
  // },
  // {
  //   name: "Seplat",
  //   logo: "/images/companies/seplat.jpg",
  // },
];

const CompanyCarousel = () => {
  const [width, setWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      setWidth(trackRef.current.scrollWidth / 2); // since we duplicate the logos
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-900 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Our Trusted Clients
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

        {/* Scrolling container */}
        <motion.div
          className="flex space-x-16"
          ref={trackRef}
          animate={{
            x: width ? [0, -width] : 0,
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: width ? width / 50 : 20, // speed: 50px/sec
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {/* First set of logos */}
          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-1-${index}`}
              className="group relative w-32 h-32 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-24 h-24">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  sizes="(max-width: 96px) 100vw, 96px"
                  className="object-contain z-10"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          ))}

          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-2-${index}`}
              className="group relative w-32 h-32 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-24 h-24">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  sizes="(max-width: 96px) 100vw, 96px"
                  className="object-contain z-10"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
