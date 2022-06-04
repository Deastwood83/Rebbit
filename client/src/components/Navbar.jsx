import React, { useState, Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Popover, Transition } from '@headlessui/react';
import authService from '../lib/api/auth';
import { reset } from '../lib/store/reducers/auth';
import rebbitLogo from '../rebbitLogo.png';
import { getGravatarUrl } from '../lib/utils/gravatar';

const classNames = (...args) => {
    return args.filter(Boolean).join(' ');
};

const UserDropdown = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <Menu as="div" className="flex-shrink-0 relative">
            <div>
                <Menu.Button className="bg-emerald-700 rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-10 w-10 rounded-full"
                        src={getGravatarUrl(user.email)}
                        alt=""
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to={'/signout'}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-base text-gray-700'
                                )}
                            >
                                Profile
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to={'/signout'}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-base text-gray-700'
                                )}
                            >
                                Signout
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

const Navbar = () => {
    const location = useLocation();

    const isRouteActive = (path) => {
        return location.pathname === path;
    };
    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();

    const onSignout = async () => {
        await authService.signout();

        dispatch(reset());
    };

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
                        <UserDropdown />
                    </li>
                    <li>
                        <button
                            onClick={onSignout}
                            className={
                                'text-lg text-gray-300  hover:text-white'
                            }
                            to={'/profile'}
                        >
                            Sign out
                        </button>
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
