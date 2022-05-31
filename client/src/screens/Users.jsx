import React from 'react';
import AppLayout from '../components/AppLayout';
import UserCard from '../components/users/UserCard';

const Users = () => {
    const users = [
        {
            username: 'AnomolyAvery',
            email: 'ashawsolutions@gmail.com',
            biography: 'This is just a test',
            birthday: new Date('2003-02-26'),
        },
    ];
    return (
        <AppLayout>
            <div className="flex flex-wrap">
                {users.map((user) => (
                    <UserCard email={user.email} username={user.username} />
                ))}
            </div>
        </AppLayout>
    );
};

export default Users;
