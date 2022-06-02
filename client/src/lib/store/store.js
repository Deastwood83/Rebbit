import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';

const store = configureStore({
    reducer: {
        users,
    },
});

export default store;
