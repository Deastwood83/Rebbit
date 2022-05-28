import { useState } from 'react';
import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Register from './screens/Register';
import { AuthProvider } from './lib/providers/auth';
import useUser from './lib/hooks/useUser';

function App() {
    const { user, isAuthenticated } = useUser();

    return (
        <AuthProvider value={{ user, isAuthenticated }}>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
