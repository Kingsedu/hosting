"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCarousel from "@/components/ServiceCarousel";
import EngineeringService from "@/components/EngineeringService";
import DetailsEngineeringService from "@/components/DetailsEngineeringService";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[120px] pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering and technical solutions for the energy
            sector
          </p>
        </motion.div>

        {/* Service Carousel */}
        <ServiceCarousel />
        <h1 className="text-center font-semibold text-5xl my-8 mt-[30px]">
          Engineering Services
        </h1>

        <p className="text-center text-2xl text-gray-500">
          At{" "}
          <span className="text-black">
            Me<span className="text-red-500">cn</span>omit
          </span>{" "}
          Limited, we provide innovative, reliable, specialized and
          cost-effective engineering solutions tailored to meet the evolving
          needs of clients.Leverage a blend of technical expertise and advanced
          technologies, our multidisciplinary team of skilled engineers and
          techical experts deliver services that promotes operationa;
          reliability, regulatory compliance, and extended asset life across
          critical infrastructure and industrial facilities
        </p>
        {/* Detailed Services Section */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center mt-8">
          Our Core Service Include
        </h1>
        <EngineeringService />
        <DetailsEngineeringService />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Engineering Services",
              description:
                "Comprehensive engineering solutions for oil and gas projects",
              icon: "⚙️",
              image: "/images/img/service.jpg",
            },
            {
              title: "Procurement",
              description: "Strategic procurement and supply chain management",
              icon: "📦",
              image: "/procurementthree.jpg",
            },
            {
              title: "NDT Testing",
              description: "Expert in installation services and NDT testing",
              icon: "🏗️",
              image: "/images/img/service-2.jpg",
            },
            {
              title: "Maintenance",
              description: "Regular maintenance and calibration services",
              icon: "🔧",
              image: "/images/img/service-3.png",
            },
            {
              title: "Training",
              description:
                "Rigorous quality assurance and control processes training",
              icon: "✅",
              image: "/images/img/training-one.jpeg",
            },
            {
              title: "Training II",
              description: "Professional training and consultancy services",
              icon: "📚",
              image: "/images/img/training-two.jpg",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
