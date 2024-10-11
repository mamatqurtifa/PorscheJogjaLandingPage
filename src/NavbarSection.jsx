// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-white sticky top-0 z-50">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center px-14 navbarSection">
        <div className="flex items-center sm:justify-between justify-around">
          <a href="">
            <img
              className="w-auto h-6 sm:h-7 pointer-events-none"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Porsche_Schriftzug.svg/1200px-Porsche_Schriftzug.svg.png?20150315093357"
              alt="Logo"
            />
          </a>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
            <a
              className="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-porsche"
              href="#"
            >
              Home
            </a>
            <a
              className="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-porsche"
              href="#About"
            >
              About
            </a>
            <a
              className="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-porsche"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-porsche"
              href="#"
            >
              Dealer
            </a>
          </div>

          <a
            className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-porsche rounded-lg lg:mt-0 hover:bg-red-600 lg:w-auto"
            href="#contactSection"
          >
            Contact
          </a>
        </div>
      </nav>
    </section>
  );
};

export default NavbarSection;
