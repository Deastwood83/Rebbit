import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import RebbitLogo from '../rebbitLogo.png';
import AuthRequired from '../screens/AuthRequired';
import Navbar from './Navbar';

const AppLayout = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const creators = ['Avery', 'Austin', 'Daniel', 'Moses', 'Tyler'];

    return isAuthenticated ? (
        <div className="relative">
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto">
                <div className="px-2 py-4">{children}</div>
            </main>
            <footer className="fixed bottom-0 w-full">
                <div className="bg-emerald-800 px-4 py-5">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <Link to={'/'}>
                                <img src={RebbitLogo} alt="Footer logo" />
                            </Link>
                            <div className="flex-shrink">
                                <p className="text-white text-xl">
                                    Created with{' '}
                                    <FaHeart className="inline-block self-center h-5 w-5 text-red-500 mx-1" />{' '}
                                    by {creators.join(', ') + '.'}{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    ) : (
        <AuthRequired />
    );
};

export default AppLayout;
