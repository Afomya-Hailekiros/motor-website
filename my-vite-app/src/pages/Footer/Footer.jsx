// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-orange-400 py-8" id="Contact">
      <div className="container mx-auto px-4 h-30">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Company Name</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Street Name, City, State, 12345</p>
            <p className="text-sm">Email: info@company.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className=" text-center h-3  py-4 mt-8">
        <p className="text-sm py-0 my-0">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
