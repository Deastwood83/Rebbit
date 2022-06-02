import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    users: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});
export default userSlice.reducer;
