import { useState } from 'react';
import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import { AuthProvider } from './lib/providers/auth';
import useUser from './lib/hooks/useUser';
import Users from './screens/Users';
import Profile from './screens/Profile';
import UserDetails from './screens/UserDetails';

function App() {
    const { user, isAuthenticated } = useUser();

    return (
        <AuthProvider value={{ user, isAuthenticated }}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:username" element={<UserDetails />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
