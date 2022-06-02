import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../api/auth';

const initialState = {
    loading: 'idle',
    user: null,
    isAuthenticated: false,
};

const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkApi) => {
        try {
            const resp = await authService.login(username, password);

            return resp;
        } catch (err) {
            thunkApi.rejectWithValue('Failed to login');
        }
    }
);

const registerAsync = createAsyncThunk(
    'auth/register',
    async ({ email, username, password }, thunkApi) => {
        try {
            const resp = await authService.register(
                email,
                username,
                password,
                new Date()
            );

            return resp;
        } catch (err) {
            thunkApi.rejectWithValue('Failed to register');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.user = action.payload;
            });

        builder
            .addCase(registerAsync.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.user = action.payload;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
