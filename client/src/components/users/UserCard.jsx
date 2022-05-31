import React from 'react';
import md5 from 'md5';

const UserCard = ({ email, username }) => {
    const getAvatarUrl = (email) => {
        // Generate Gravatar URL
        return `https://www.gravatar.com/avatar/${md5(email)}`;
    };

    return (
        <div className="basis-1/3 bg-gray-100 hover:bg-white rounded-lg p-4">
            <div className="container mx-auto flex gap-4">
                <div>
                    <img src={getAvatarUrl(email)} alt={'avatar'} />
                </div>
                <div>
                    <h1 className="text-lg">{username}</h1>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
