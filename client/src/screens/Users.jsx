import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import UserCard from '../components/users/UserCard';
import { fetchUsersAsync } from '../lib/store/reducers/users';

const Users = () => {
    const { users } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersAsync());
    }, []);

    return (
        <AppLayout>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {users?.map((user) => (
                    <UserCard
                        key={user.id}
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
