import React, { useState } from "react";
import { Link } from "react-router"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-teal-400 transition">
            LamaShop
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link
            to="/"
            className="hover:text-teal-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="hover:text-teal-400 transition duration-300"
          >
            Books
          </Link>
          <Link
            to="/add"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Add Book
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2 font-medium">
            <Link
              to="/"
              className="block hover:text-teal-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/books"
              className="block hover:text-teal-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Books
            </Link>
            <Link
              to="/add"
              className="block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Add Book
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
