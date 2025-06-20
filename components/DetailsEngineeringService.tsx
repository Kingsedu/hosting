import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Procurement Services",
    icon: "📦",
    description:
      "At Mecnomit Limited, we provide efficient and reliable local and international procurement services to support engineering, industrial, and infrastructure projects. Our procurement team ensures the timely sourcing and delivery of high-quality materials, equipment, and components from trusted global and local suppliers. We manage the entire procurement process — from vendor selection and negotiation to logistics and quality assurance — ensuring cost-effectiveness, compliance, and timely execution. Whether for routine maintenance needs or large-scale project supply, Mecnomit Limited delivers with precision, transparency, and speed.",
  },
  {
    title: "Conventional Inspection Services",
    icon: "🔍",
    description:
      "At Mecnomit Limited, we offer a full range of conventional inspection services to support asset reliability, regulatory compliance, and operational safety. Our certified inspectors apply proven methods such as Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Inspection (MPI), Liquid Penetrant Testing (LPT), and Visual Inspection (VT) across various industries. These services are carried out in accordance with international standards, ensuring accurate defect detection and thorough assessment of materials, welds, and components. With a strong emphasis on quality, safety, and efficiency, Mecnomit Limited delivers inspection solutions that clients can trust.",
  },
  {
    title: "Advanced NDT Inspection Services",
    icon: "🧪",
    description:
      "Mecnomit Limited delivers cutting-edge Advanced Non-Destructive Testing (NDT) solutions designed for complex inspection challenges where conventional methods may not suffice. Our advanced NDT techniques enable high-precision detection, accurate defect characterization, and in-depth asset evaluation without compromising operational integrity. We offer specialized services such as Phased Array Ultrasonic Testing (PAUT), Time-of-Flight Diffraction (TOFD), Eddy Current Testing (ECT), Digital Radiography (DR), and Acoustic Emission Testing (AET) — tailored to meet the stringent requirements of critical industries. With state-of-the-art equipment and highly trained personnel, Mecnomit Limited ensures reliable results that support proactive maintenance and informed decision-making.",
  },
  {
    title: "Rope Access Services",
    icon: "🧗‍♂️",
    description:
      "At Mecnomit Limited, we offer safe, efficient, and cost-effective rope access services for inspection, maintenance, and repair activities in difficult-to-reach areas. Our certified rope access technicians (IRATA/SPRAT) deliver high-quality work while minimizing downtime, access costs, and safety risks. Whether it's at height, in confined spaces, or offshore environments, we apply rope access methods for tasks such as NDT inspection, structural surveys, welding and fabrication, standby rescue and protective coating applications. With a strong commitment to safety and performance, Mecnomit Limited provides rope access solutions that meet the highest industry standards — wherever access is a challenge.",
  },
  {
    title: "Training Services",
    icon: "🎓",
    description:
      "At Mecnomit Limited, we provide flexible and client-focused training solutions tailored to meet a wide range of organizational needs. Whether it's technical training, safety compliance, operational efficiency, or soft skills development, our programs are designed to enhance workforce performance at every level. We offer both virtual and in-person training, delivered either at our facility or your location—whichever best suits your team's schedule and preferences.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const DetailsEngineeringService = () => {
  return (
    <section className="relative py-20 px-4 md:px-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 tracking-tight drop-shadow-sm">
          Our Engineering Services
        </h2>
        <div className="space-y-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row items-start gap-6 group transition-transform hover:scale-[1.025] hover:shadow-2xl hover:border-blue-200 duration-300"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Animated Icon */}
              <motion.div
                className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-blue-100 to-yellow-100 text-3xl md:text-4xl shadow-md border-2 border-blue-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                whileHover={{ rotate: 12, scale: 1.15 }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                  {service.title}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full mb-4" />
                <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-100 rounded-full opacity-20 blur-2xl -z-10" />
    </section>
  );
};

export default DetailsEngineeringService;
