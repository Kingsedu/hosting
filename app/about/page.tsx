"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    {
      title: "Company Overview",
      content:
        "Mecnomit is a leading independent operator in the energy sector, established in 2023 with a vision to transform the industry through innovation and sustainable practices. We've quickly established ourselves as a trusted partner in the oil & gas sector, combining cutting-edge technology with deep industry expertise.",
      icon: "🏢",
    },
    {
      title: "Mission Statement",
      content:
        "Our mission is to deliver sustainable energy solutions while maintaining the highest standards of safety and environmental responsibility. We are committed to meeting global energy needs through innovative approaches that balance economic growth with environmental stewardship.",
      icon: "🎯",
    },
    {
      title: "Vision and Values",
      content:
        "We envision a future where energy production and environmental sustainability go hand in hand. Our core values include innovation, safety, environmental responsibility, and integrity. These principles guide every decision we make and every project we undertake.",
      icon: "🌟",
    },
    {
      title: "Expertise and Services",
      content:
        "Our expertise spans across exploration, drilling, refining, and logistics. We specialize in offshore operations and ESG consulting, offering unique solutions that combine traditional industry knowledge with modern technological advancements.",
      icon: "⚡",
    },
    {
      title: "Leadership and Team",
      content:
        "Our leadership team brings together decades of combined experience in engineering, operations, and management. Each member holds relevant certifications and has a proven track record of success in the industry.",
      icon: "👥",
    },
    // {
    //   title: "Geographic Presence",
    //   content:
    //     "We operate globally, serving clients across multiple continents. Our strategic locations allow us to provide efficient and reliable services to both domestic and international markets.",
    //   icon: "🌍",
    // },
    // {
    //   title: "HSE and Sustainability",
    //   content:
    //     "Health, Safety, and Environment (HSE) are at the core of our operations. We maintain rigorous safety protocols and actively pursue ESG initiatives, including carbon reduction programs and sustainable energy transitions.",
    //   icon: "🌱",
    // },
    // {
    //   title: "Accreditations",
    //   content:
    //     "We maintain ISO certifications and comply with all relevant regulatory standards. Our partnerships with industry leaders and participation in key industry organizations demonstrate our commitment to excellence.",
    //   icon: "🏆",
    // },
    // {
    //   title: "Why Choose Us",
    //   content:
    //     "What sets us apart is our unique combination of technical expertise, innovative solutions, and unwavering commitment to safety and sustainability. We deliver reliable results while maintaining the highest standards of environmental responsibility.",
    //   icon: "💡",
    // },
  ];

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
            About Mecnomit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of energy through innovation, sustainability,
            and excellence
          </p>
        </motion.div>

        {/* Company Overview Section with Background Image */}
        <div className="w-full h-[40vh] relative mb-20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/img/company.webp"
              alt="Company Overview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="w-1/2 ml-auto pr-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
                <p className="text-lg leading-relaxed">
                  Mecnomit is a leading independent operator in the energy
                  sector with a vision to transform the industry through
                  innovation and sustainable practices. We've quickly
                  established ourselves as a trusted partner in the oil & gas
                  sector, combining cutting-edge technology with deep industry
                  expertise.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="w-full mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 h-[500px] relative rounded-2xl overflow-hidden">
              <Image
                src="/mecnomit.png"
                alt="Mission and Vision"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side - Mission and Vision */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Mission Statement
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to deliver sustainable energy solutions while
                  maintaining the highest standards of safety and environmental
                  responsibility. We are committed to meeting global energy
                  needs through innovative approaches that balance economic
                  growth with environmental stewardship.
                </p>
              </motion.div>

              {/* Vision and Values */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-4xl mb-4">🌟</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Vision and Values
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where energy production and environmental
                  sustainability go hand in hand. Our core values include
                  innovation, safety, environmental responsibility, and
                  integrity. These principles guide every decision we make and
                  every project we undertake.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Geographic Presence Section */}
        <div className="w-full mb-20">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 h-[500px] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/img/global-presence.jpg"
                alt="Geographic Presence"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Left Side - Geographic Presence Content */}
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-4xl mb-4">🌍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Geographic Presence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We operate globally, serving clients across multiple
                  continents. Our strategic locations allow us to provide
                  efficient and reliable services to both domestic and
                  international markets.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600">
                      Strategic presence in key energy markets
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600">
                      Global network of partners and suppliers
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600">
                      Local expertise with international standards
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Leadership Section */}
        <div className="w-full h-[40vh] relative mb-20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/img/meeting.jpg"
              alt="Team Leadership"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="w-1/2 pl-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h2 className="text-3xl font-bold mb-4">Leadership and Team</h2>
                <p className="text-lg leading-relaxed">
                  Our leadership team brings together decades of combined
                  experience in engineering, operations, and management. Each
                  member holds relevant certifications and has a proven track
                  record of success in the industry.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* HSE Section */}
        <div className="w-full h-[40vh] relative mb-20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/img/safety.jpg"
              alt="HSE and Sustainability"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="w-2/3 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h2 className="text-3xl font-bold mb-4">
                  HSE and Sustainability
                </h2>
                <p className="text-lg leading-relaxed">
                  Health, Safety, and Environment (HSE) are at the core of our
                  operations. We maintain rigorous safety protocols and actively
                  pursue ESG initiatives, including carbon reduction programs
                  and sustainable energy transitions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Accreditations Section */}
        <div className="w-full mb-20">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            {/* Right Side - Image */}
            {/* <div className="w-full md:w-1/2 h-[500px] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/img/accredition.jpeg"
                alt="Accreditations"
                fill
                className="object-cover"
                priority
              />
            </div> */}

            {/* Left Side - Accreditations Content */}
            <div className="w-full md:w-1/2">
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-4xl mb-4">🏆</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Accreditations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We maintain ISO certifications and comply with all relevant
                  regulatory standards. Our partnerships with industry leaders
                  and participation in key industry organizations demonstrate
                  our commitment to excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600">
                      ISO 9001:2015 Quality Management
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600">
                      ISO 14001:2015 Environmental Management
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600">
                      OHSAS 18001:2007 Occupational Health and Safety
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              What sets us apart is our unique combination of technical
              expertise, innovative solutions, and unwavering commitment to
              safety and sustainability. We deliver reliable results while
              maintaining the highest standards of environmental responsibility.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sections.slice(5).map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">100%</h3>
            <p className="text-lg">Safety Record</p>
          </div>
          <div className="bg-green-600 text-white rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-lg">Global Projects</p>
          </div>
          <div className="bg-purple-600 text-white rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">24/7</h3>
            <p className="text-lg">Support Available</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
