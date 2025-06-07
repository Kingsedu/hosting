"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "Engineering Services",
    description: "Comprehensive engineering solutions for oil and gas projects",
    image: "/image-basket.jpg",
  },
  {
    title: "Procurement",
    description: "Strategic procurement and supply chain management",
    image: "/image-five.jpg",
  },
  {
    title: "Construction",
    description: "Expert construction and installation services",
    image: "/image-seven.jpg",
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and calibration services",
    image: "/image-six.jpg",
  },
  {
    title: "Quality Control",
    description: "Rigorous quality assurance and control processes",
    image: "/image-two.jpg",
  },
  {
    title: "Training",
    description: "Professional training and consultancy services",
    image: "/image-ten.jpg",
  },
];

const ServiceCarousel = () => {
  return (
    <div className="w-full py-8 relative">
      {/* Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-xl" />

      {/* Content Container */}
      <div className="relative z-0">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                href="/services"
                key={service.title}
                className="block relative aspect-[16/9] rounded-lg overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg group transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:border-amber-400"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />

                {/* Overlay with Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-amber-400/20 blur-sm"></div>
                  <div className="absolute inset-0 rounded-lg border-2 border-amber-400/50"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
