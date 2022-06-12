import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import rebbitLogo from '../rebbitLogo.png';
import { getGravatarUrl } from '../lib/utils/gravatar';
import { useDispatch, useSelector } from 'react-redux';
import { updateMeAsync } from '../lib/store/reducers/auth';

const ProfileSettings = () => {
    const { user, error } = useSelector((state) => state.auth);

    const [password, setPassword] = useState('');
    const [biography, setBiography] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            updateMeAsync({
                password,
                biography,
            })
        );
    };

    return (
        <AppLayout>
            <div className="bg-gray-200 rounded">
                <div className="container mx-auto p-4">
                    <div className="flex-shrink-0">
                        <div className="flex justify-between items-center px-6 py-2">
                            <div className="flex items-center">
                                <img
                                    className="h-16 w-auto"
                                    src={rebbitLogo}
                                    alt="Rebbit Logo"
                                />
                            </div>
                            <h1 className="text-2xl font-bold">
                                Profile Settings
                            </h1>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img
                                className="h-15 w-15 rounded-full"
                                src={getGravatarUrl(
                                    user?.email ?? 'tas@tas.com'
                                )}
                                alt="User's Profile Picture"
                            />
                            <h1 className="text-2xl font-bold">
                                {user?.username}
                            </h1>
                            <h2 className="text-2 font-Arial items-center">
                                {user?.biography}
                            </h2>
                            <div className="flex"></div>
                        </div>
                        <div className="flex p-4">
                            <h2 className="text-xl font-bold">General</h2>
                        </div>
                        {error && (
                            <div>
                                <p className="text-red-500 text-center">
                                    {error}
                                </p>
                            </div>
                        )}
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col px-8">
                                <h3 className="text-2 font-arial">
                                    Change Password
                                </h3>
                                <input
                                    type="password"
                                    className="bg-gray-100 px-4 py-2 outline-none rounded-md w-full"
                                    placeholder="************"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <h3 className="text-2 font-arial">
                                    Change Bio
                                </h3>
                                <input
                                    type="text"
                                    className="bg-gray-100 px-4 py-2 outline-none rounded-md w-full"
                                    placeholder="My Bio"
                                    value={biography}
                                    onChange={(e) =>
                                        setBiography(e.target.value)
                                    }
                                />
                                <div className="mt-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ProfileSettings;
