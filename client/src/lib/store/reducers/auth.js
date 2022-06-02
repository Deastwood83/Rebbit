import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: 'idle',
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});
