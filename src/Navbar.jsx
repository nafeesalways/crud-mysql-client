import React from 'react';
import { Link } from 'react-router'; // react-router-dom v6 import might be 'react-router-dom' usually, but following your setup

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wide">
                    <Link to="/" className="hover:text-teal-400 transition">LamaShop</Link>
                </div>
                <div className="flex space-x-6 font-medium">
                    <Link to="/" className="hover:text-teal-400 transition duration-300">Home</Link>
                    <Link to="/books" className="hover:text-teal-400 transition duration-300">Books</Link>
                    <Link to="/add" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition duration-300">Add Book</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;