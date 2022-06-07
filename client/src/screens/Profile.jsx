import React from 'react';
import AppLayout from '../components/AppLayout';
import rebbitLogo from '../rebbitLogo.png';
import { getGravatarUrl } from '../lib/utils/gravatar';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user, error } = useSelector((state) => state.auth);
    return (
        <AppLayout>
            <div className="bg-gray-100 rounded">
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
                                        <h1 className="text-2xl font-bold">Profile</h1>
                                    </div>
                                <div className="flex flex-col items-center gap-2">     
                                <img
                                    className="h-15 w-15 rounded-full"
                                    src={getGravatarUrl(user?.email ?? "tas@tas.com")}
                                    alt="User's Profile Picture"
                                />
                                <h1 className="text-2xl font-bold">Username</h1>
                                </div>
                            </div> 
                        </div>
                    </div>
        </AppLayout>
    );

};

export default Profile;
