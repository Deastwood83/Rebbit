import React, { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import UserCard from '../components/users/UserCard';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            setUsers([
                {
                    username: 'AnomolyAvery',
                    email: 'ashawsolutions@gmail.csm',
                    biography: 'This is just a test',
                    birthday: new Date('2003-02-26'),
                },
                {
                    username: 'AnomolyAvery',
                    email: 'ashawsolutions@gmail.csm',
                    biography: 'This is just a test',
                    birthday: new Date('2003-02-26'),
                },
                {
                    username: 'AnomolyAvery',
                    email: 'ashawsolutions@gmail.csm',
                    biography: 'This is just a test',
                    birthday: new Date('2003-02-26'),
                },
                {
                    username: 'AnomolyAvery',
                    email: 'ashawsolutions@gmail.csm',
                    biography: 'This is just a test',
                    birthday: new Date('2003-02-26'),
                },
                {
                    username: 'AnomolyAvery',
                    email: 'ashawsolutions@gmail.csm',
                    biography:
                        'This is just a test sdfssdfsfsdfsfsdfsfsfddsfdfsf',
                    birthday: new Date('2003-02-26'),
                },
            ]);
        };

        fetchUsers();
    }, []);

    return (
        <AppLayout>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {users.map((user) => (
                    <UserCard
                        key={user.email}
                        email={user.email}
                        username={user.username}
                        biography={user.biography}
                    />
                ))}
            </div>
        </AppLayout>
    );
};

export default Users;
