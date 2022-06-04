import React from 'react';
import { useSelector } from 'react-redux';
import AuthRequired from '../screens/AuthRequired';
import Navbar from './Navbar';

const AppLayout = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated ? (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto">
                <div className="px-2 py-4">{children}</div>
            </main>
        </div>
    ) : (
        <AuthRequired />
    );
};

export default AppLayout;
