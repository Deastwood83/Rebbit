import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import rebbitLogo from '../rebbitLogo.png';

const classNames = (...args) => {
    return args.filter(Boolean).join(' ');
};

const Navbar = () => {
    const location = useLocation();

    const isRouteActive = (path) => {
        return location.pathname === path;
    };
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="bg-emerald-800 shadow-lg px-4 py-4">
            <div className="mx-auto container flex flex-wrap items-center justify-between">
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
                <button
                    className="inline-block md:hidden text-lg text-white"
                    onClick={() => setToggle((t) => !t)}
                >
                    <FaBars />
                </button>
                <ul className="hidden md:flex justify-between items-center gap-4">
                    <li>
                        <Link
                            className={classNames(
                                isRouteActive('/home')
                                    ? 'text-white'
                                    : 'text-gray-300  hover:text-white',
                                'text-lg'
                            )}
                            to={'/home'}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={classNames(
                                isRouteActive('/users')
                                    ? 'text-white'
                                    : 'text-gray-300  hover:text-white',
                                'text-lg'
                            )}
                            to={'/users'}
                        >
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={classNames(
                                isRouteActive('/profile')
                                    ? 'text-white'
                                    : 'text-gray-300  hover:text-white',
                                'text-lg'
                            )}
                            to={'/profile'}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="inline-flex justify-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none"
                            to={'/posts/new'}
                        >
                            New Post
                        </Link>
                    </li>
                </ul>
            </div>
            {toggle && (
                <div className="md:hidden mt-4 mx-auto container">
                    <ul className="px-2 flex flex-col md:hidden gap-4">
                        <li>
                            <Link
                                className={classNames(
                                    isRouteActive('/home')
                                        ? 'text-white'
                                        : 'text-gray-300  hover:text-white',
                                    'text-lg'
                                )}
                                to={'/home'}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={classNames(
                                    isRouteActive('/users')
                                        ? 'text-white'
                                        : 'text-gray-300  hover:text-white',
                                    'text-lg'
                                )}
                                to={'/users'}
                            >
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={classNames(
                                    isRouteActive('/profile')
                                        ? 'text-white'
                                        : 'text-gray-300  hover:text-white',
                                    'text-lg'
                                )}
                                to={'/profile'}
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="inline-flex justify-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none"
                                to={'/posts/new'}
                            >
                                New Post
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
