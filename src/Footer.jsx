import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Lama Book Shop. All rights reserved.</p>
                <div className="flex justify-center space-x-4 text-sm">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;