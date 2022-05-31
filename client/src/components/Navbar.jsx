import React from 'react';
import { Link } from 'react-router-dom';
import rebbitLogo from '../rebbitLogo.png';

const classNames = (...args) => {
    return args.filter(Boolean).join(' ');
};

const Navbar = () => {
    const isRouteActive = (path) => {};

    return (
        <nav className="bg-emerald-800 shadow-lg py-4">
            <div className="mx-auto container flex items-center justify-between">
                <Link className="inline-flex items-center" to="/home">
                    <img
                        className="h-20 w-auto"
                        src={
                            'https://cdn.discordapp.com/attachments/979149570992918538/981002974593703961/RebbitLogo.png'
                        }
                        alt="Rebbit Logo"
                    />
                    <span className="text-xl text-white font-bold">Rebbit</span>
                </Link>
                <div>
                    <ul className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <li>
                            <Link
                                className="text-gray-100 text-lg hover:text-white"
                                to={'/home'}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-100 text-lg hover:text-white"
                                to={'/users'}
                            >
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-100 text-lg hover:text-white"
                                to={'/profile'}
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 text-lg font-medium text-white rounded-lg shadow-lg"
                                to={'/profile'}
                            >
                                New Post
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
