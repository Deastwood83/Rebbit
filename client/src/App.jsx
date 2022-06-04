import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Users from './screens/Users';
import Profile from './screens/Profile';
import UserDetails from './screens/UserDetails';
import NewPost from './screens/NewPost';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './lib/api/auth';
import { setUser } from './lib/store/reducers/auth';
import { getErrorMessage } from './lib/utils/api';

function App() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await authService.status();
                dispatch(setUser(user));
            } catch (err) {
                const message = getErrorMessage(err);

                if (message === 'Unauthorized') {
                    dispatch(setUser(null));
                    if (location.pathname !== '/login') {
                        navigate('/login');
                    }
                }
            }
        };

        fetchUser();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<UserDetails />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/posts/new" element={<NewPost />} />
        </Routes>
    );
}

export default App;
