import React from 'react';
import Navbar from './Navbar';

const AppLayout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto">
                <div className="px-2 py-4">{children}</div>
            </main>
        </div>
    );
};

export default AppLayout;
