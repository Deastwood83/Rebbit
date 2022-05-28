import { useState } from 'react';
import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Register from './screens/Register';

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
