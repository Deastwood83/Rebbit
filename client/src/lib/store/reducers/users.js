import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import usersService from '../../api/users';
import { getErrorMessage } from '../../utils/api';

const initialState = {
    isLoading: false,
    users: null,
    user: null,
};

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkApi) => {
        try {
            const users = await usersService.getAll();

            return thunkApi.fulfillWithValue(users);
        } catch (err) {
            const msg = getErrorMessage(err);

            return thunkApi.rejectWithValue(msg);
        }
    }
);

export const fetchUserByUsernameAsync = createAsyncThunk(
    'users/fetchUserByUsername',
    async (username, thunkApi) => {
        try {
            const user = await usersService.getByUsername(username);

            return thunkApi.fulfillWithValue(user);
        } catch (err) {
            const msg = getErrorMessage(err);

            return thunkApi.rejectWithValue(msg);
        }
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsersAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(fetchUserByIdAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUserByIdAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(fetchUserByIdAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default userSlice.reducer;
