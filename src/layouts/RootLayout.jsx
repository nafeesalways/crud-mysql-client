import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;