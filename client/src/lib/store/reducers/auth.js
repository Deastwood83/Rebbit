import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../api/auth';

const initialState = {
    loading: 'idle',
    user: null,
    isAuthenticated: false,
};

export const loginAsync = createAsyncThunk(
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

export const registerAsync = createAsyncThunk(
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

export const fetchUserStatusAsync = createAsyncThunk(
    'auth/fetchUserStatus',
    async (dispatch) => {
        const user = await authService.status();
        dispatch(setUser(user));
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            if (action.payload) {
                state.isAuthenticated = true;
            } else {
                state.isAuthenticated = false;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.isAuthenticated = false;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.user = action.payload;
                state.isAuthenticated = true;
            });

        builder
            .addCase(registerAsync.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
                state.isAuthenticated = false;
            });
    },
});

export default authSlice.reducer;
