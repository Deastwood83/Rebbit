import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';
import auth from './reducers/auth';
import posts from './reducers/posts';

const store = configureStore({
    reducer: {
        users,
        auth,
        posts,
    },
});

export default store;
