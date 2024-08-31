import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-black to-white-500 h-full w-full flex flex-col items-center">
      <nav className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Align the logo and text to the left side */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Rizz Motors</span>
          </Link>
          <div className="flex md:order-2 items-center">
            {/* Cart icon */}
            <Link to="/cart" className="relative flex items-center ml-4">
              <FiShoppingCart 
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 text-5xl" 
              />
            </Link>
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`} id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-900">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </Link>
                </li>
                <div className='pl-20 flex items-center'>
                <li>
                <Link to="/login" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
               
               <span className="flex-1 ms-3 whitespace-nowrap">login In</span>
            </Link>
         </li>
         <li>
         <Link
                  to="/register" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </Link>
              </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
