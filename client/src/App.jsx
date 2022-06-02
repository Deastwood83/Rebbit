import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Users from './screens/Users';
import Profile from './screens/Profile';
import UserDetails from './screens/UserDetails';
import NewPost from './screens/NewPost';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserStatusAsync } from './lib/store/reducers/auth';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserStatusAsync());
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<UserDetails />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/posts/new" element={<NewPost />} />
        </Routes>
    );
}

export default App;
