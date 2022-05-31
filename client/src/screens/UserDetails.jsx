import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import md5 from 'md5';
import AppLayout from '../components/AppLayout';
import { FaMailBulk, FaPhone } from 'react-icons/fa';

const UserDetails = () => {
    const params = useParams();

    const user = {
        username: 'AnomolyAvery',
        email: 'ashawsolutions@gmail.csm',
        biography: 'This is just a test',
        birthday: new Date('2003-02-26'),
    };

    const username = params.username;

    const getGravatarUrl = (email) => {
        // Generate Gravatar URL
        return `https://www.gravatar.com/avatar/${md5(email)}`;
    };

    useEffect(() => {
        console.log('UserDetails: ', username);
    }, [username]);

    return (
        <AppLayout>
            <div>
                <div>
                    <div
                        className="h-32 w-full rounded-lg object-cover lg:h-48 bg-gradient-to-r from-emerald-500 to-green-400"
                        alt=""
                    />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                            <img
                                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                src={getGravatarUrl(user.email)}
                                alt=""
                            />
                        </div>
                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="sm:hidden md:block mt-4 min-w-0 flex-1">
                                <h1 className="text-2xl font-bold text-gray-900 truncate">
                                    {user.username}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block md:hidden mt-4 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                            {user.username}
                        </h1>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default UserDetails;
