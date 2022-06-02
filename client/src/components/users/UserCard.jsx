import React from 'react';
import { Link } from 'react-router-dom';
import { getGravatarUrl } from '../../lib/utils/gravatar';

const UserCard = ({ email, username, biography }) => {
    return (
        <Link
            to={`/users/${username}`}
            className="relative rounded-lg bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:bg-gray-100"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-12 w-12 rounded-full"
                    src={getGravatarUrl(email)}
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
