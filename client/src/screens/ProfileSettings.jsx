import React from "react";
import AppLayout from "../components/AppLayout";
import rebbitLogo from "../rebbitLogo.png";
import { getGravatarUrl } from "../lib/utils/gravatar";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
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
              <h1 className="text-2xl font-bold">Profile Settings</h1>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-15 w-15 rounded-full"
                src={getGravatarUrl(user?.email ?? "tas@tas.com")}
                alt="User's Profile Picture"
              />
              <h1 className="text-2xl font-bold">Username</h1>
              <h2 className="text-2 font-Arial items-center">
                This is an example of a bio, pay no attention to the nonsense
                being typed into this area.
              </h2>
              <div className="flex"></div>
            </div>
            <div className="flex p-4">
              <h2 className="text-xl font-bold">General</h2>
            </div>
            <div className="flex flex-col px-8">
              <h3 className="text-2 font-arial">Change Username</h3>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                placeholder="Current Username"
              />
              <h3 className="text-2 font-arial">Change Password</h3>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                placeholder="************"
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileSettings;
