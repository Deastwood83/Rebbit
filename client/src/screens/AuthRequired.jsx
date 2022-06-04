import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const AuthRequired = () => {
    return (
        <div className="container mx-auto">
            <div className="max-w-sm mx-auto px-8 py-8">
                <h2 className="text-center text-2xl">
                    You need to be logged in to view this page.
                </h2>

                <div className="text-center">
                    <Link
                        className="inline-flex justify-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none"
                        to={'/login'}
                    >
                        Login
                    </Link>

                    <Link
                        className="inline-flex justify-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none"
                        to={'/register'}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuthRequired;
