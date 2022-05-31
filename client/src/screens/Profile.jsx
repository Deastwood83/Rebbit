import React from 'react';
import AppLayout from '../components/AppLayout';
import rebbitLogo from '../rebbitLogo.png';

const Profile = () => {
    return (
        <AppLayout>
            <div className="bg-gray-200 rounded">
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Profile</h1>
                        <div className="flex items-center">
                            <img
                                className="h-16 w-auto"
                                src={rebbitLogo}
                                alt="Rebbit Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Profile;
