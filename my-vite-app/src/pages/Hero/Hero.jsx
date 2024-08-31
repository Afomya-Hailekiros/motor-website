import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CiMenuKebab } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };
  return (
    <section className="min-h-[600px] w-full flex justify-center items-center bg-gradient-to-r from-black to-white-500">
      <div className="relative flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <aside className={`relative top-0 left-0 z-40 w-30 h-full`}>
          <div className="flex flex-col justify-between h-full p-4">
          <button
            onClick={toggleSidebar}
             className="bg-inherit hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
             >
            {sidebarOpen ? <CiMenuKebab /> : <CiMenuFries />
            }
         </button>

            {sidebarOpen && (

            <ul className="space-y-2 mt-6">
              {/* Sidebar Items */}
              <li>
                <Link to="/" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700">
                  <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
              </Link>
              </li>
              <li>
              <Link to="/" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
         </li>
         <li>
         <Link to="products"  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </Link>
         </li>
         <li>
         
         </li>
              {/* Add more sidebar items here */}
            </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-h-[600px] w-full flex justify-center items-center" id='home'>
          <div className="h-full w-full flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-3/4 max-w-screen-lg my-8">
              <div className="flex flex-col items-start space-y-4 max-w-md md:order-1 order-2">
                <h1 className="md:text-3xl">
                  <span className="text-white text-6xl"> Welcome</span> <br />
                  <span className="text-orange-600 text-7xl"> Rizz Motors</span>
                </h1>
                <p className="text-white text-lg md:text-xl">
                  Discover the thrill of the ride with Rizz Motors! Our motorcycles are crafted to deliver unparalleled performance and style. Whether you’re cruising down the highway or navigating city streets, our bikes offer a perfect blend of power, comfort, and sophistication. Explore our range and find the perfect ride for your adventures.
                </p>
              </div>
              <img
                src="/src/assets/realmotor.png"
                alt="Motors"
                className="w-full max-w-lg h-auto object-contain mb-4 md:mb-0 md:w-auto order-1 md:order-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
