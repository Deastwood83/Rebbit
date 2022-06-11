import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../api/auth';
import { getErrorMessage } from '../../utils/api';

const initialState = {
    loading: 'idle',
    user: null,
    isAuthenticated: false,
    error: null,
};

export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkApi) => {
        try {
            const user = await authService.login(username, password);

            if (!user._id || !user.username || !user.email) {
                return thunkApi.rejectWithValue('Invalid user data.');
            }

            return thunkApi.fulfillWithValue(user);
        } catch (err) {
            const message = getErrorMessage(err);

            return thunkApi.rejectWithValue(message);
        }
    }
);

export const registerAsync = createAsyncThunk(
    'auth/register',
    async ({ email, username, password }, thunkApi) => {
        try {
            const user = await authService.register(
                email,
                username,
                password,
                new Date()
            );

            if (!user._id || !user.username || !user.email) {
                return thunkApi.rejectWithValue('Invalid user data.');
            }

            return thunkApi.fulfillWithValue(user);
        } catch (err) {
            const message = getErrorMessage(err);

            return thunkApi.rejectWithValue(message);
        }
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
        reset: (state) => {
            state.user = null;
            state.isAuthenticated = false;
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
                state.user = null;
                state.error = action.payload;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.isAuthenticated = !!action.payload;
                state.user = action.payload;
                state.error = null;
            });

        builder
            .addCase(registerAsync.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.user = action.payload;
                state.isAuthenticated = !!action.payload;
                state.error = null;
            });
    },
});

export const { setUser, reset } = authSlice.actions;

export default authSlice.reducer;
