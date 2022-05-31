import React from 'react';
import md5 from 'md5';
import { FaBirthdayCake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserCard = ({ email, username, biography }) => {
    const getAvatarUrl = (email) => {
        // Generate Gravatar URL
        return `https://www.gravatar.com/avatar/${md5(email)}`;
    };

    return (
        <Link
            to={`/users/${username}`}
            className="relative rounded-lg bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:bg-gray-100"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-12 w-12 rounded-full"
                    src={getAvatarUrl(email)}
                    alt=""
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{username}</p>
                <p className="text-sm text-gray-500 truncate">{biography}</p>
            </div>
        </Link>
    );
};

export default UserCard;
