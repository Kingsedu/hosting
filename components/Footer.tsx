"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="min-h-[40vh] bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              Mecnomit is a leading provider of comprehensive engineering and
              technical services. We specialize in delivering innovative
              solutions across various industries, ensuring quality, safety, and
              efficiency in every project we undertake.
            </p>
            <Link
              href="/about"
              className="text-blue-400 hover:text-blue-300 text-sm inline-block mt-2"
            >
              Learn More →
            </Link>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                Engineering, Procurement, Construction and Installation (EPCI)
              </li>
              <li>Asset Integrity Management Services</li>
              <li>Quality Assurance and Quality Control (QA/QC) Services</li>
              <li>Maintenance and Calibration Services</li>
              <li>Welding and Fabrication Services</li>
              <li>Engineering Design and Upgrade Services</li>
              <li>Procurement and Logistics Services</li>
              <li>Training and Consultancy Services</li>
            </ul>
            <Link
              href="/services"
              className="text-blue-400 hover:text-blue-300 text-sm inline-block mt-2"
            >
              View All Services →
            </Link>
          </div>

          {/* Company Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/team"
                  className="hover:text-blue-400 transition-colors"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/news"
                  className="hover:text-blue-400 transition-colors"
                >
                  News & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/case-studies"
                  className="hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form and Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
              >
                Send Message
              </button>
            </form>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mecnomit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
