import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Lama Book Shop</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Discover your next favorite book. Manage your inventory efficiently with our modern CRUD system.
            </p>
            <div className="flex space-x-4">
                <Link to="/books">
                    <button className="px-8 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 transition font-semibold text-lg">
                        View All Books
                    </button>
                </Link>
                <Link to="/add">
                    <button className="px-8 py-3 bg-white text-teal-600 border border-teal-600 rounded-lg shadow hover:bg-teal-50 transition font-semibold text-lg">
                        Add New Book
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;