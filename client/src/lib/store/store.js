import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';
import auth from './reducers/auth';

const store = configureStore({
    reducer: {
        users,
        auth,
    },
});

export default store;
