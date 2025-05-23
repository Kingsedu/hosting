"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaCog,
  FaBlog,
  FaAlignJustify,
  FaNewspaper,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const LeftSide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: FaHome, text: "Home", href: "/" },
    { icon: FaInfoCircle, text: "About-us", href: "/about" },
    { icon: FaCog, text: "Services", href: "/services" },
    { icon: FaNewspaper, text: "Blog", href: "/blog" },
  ];

  return (
    <div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between gap-7">
        {menuItems.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className="flex flex-col items-center relative cursor-pointer group"
          >
            <item.icon className="text-2xl text-red-400 transition-all duration-300 group-hover:opacity-25" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:-translate-y-4">
              {item.text}
            </span>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-red-400 hover:text-red-500 transition-colors"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaAlignJustify />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-[90px] right-0 w-64 h-screen backdrop-blur-xl bg-white/30 border-l border-white/20 shadow-lg md:hidden z-50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-purple-400/10" />
            <ul className="relative flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-800 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="text-xl" />
                    <span>{item.text}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeftSide;
