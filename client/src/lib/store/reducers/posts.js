import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsService from '../../api/posts';
import { getErrorMessage } from '../../utils/api';

const initialState = {
    loading: 'idle',
    posts: null,
    post: null,
    createdPostId: null,
    error: null,
    message: null,
};

export const fetchPostsAsync = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkApi) => {
        try {
            const posts = await postsService.getPosts();

            return thunkApi.fulfillWithValue(posts);
        } catch (err) {
            const msg = getErrorMessage(err);

            return thunkApi.rejectWithValue(msg);
        }
    }
);

export const fetchPostByIdAsync = createAsyncThunk(
    'posts/fetchPostById',
    async (id, thunkApi) => {
        try {
            const post = await postsService.getPostById(id);

            return thunkApi.fulfillWithValue(post);
        } catch (err) {
            const msg = getErrorMessage(err);

            return thunkApi.rejectWithValue(msg);
        }
    }
);

export const createPostAsync = createAsyncThunk(
    'posts/createPost',
    async (post, thunkApi) => {
        try {
            const newPost = await postsService.createPost(
                post.title,
                post.content
            );

            return thunkApi.fulfillWithValue(newPost);
        } catch (err) {
            const msg = getErrorMessage(err);

            return thunkApi.rejectWithValue(msg);
        }
    }
);

export const deletePostAsync = createAsyncThunk(
    'posts/deletePost',
    async (id, thunkApi) => {
        try {
            const msg = await postsService.deletePost(id);

            return thunkApi.fulfillWithValue(msg.message);
        } catch (err) {
            const msg = getErrorMessage(err);

            return thunkApi.rejectWithValue(msg);
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        resetPost: (state) => {
            state.post = null;
        },
        resetCreatePostId: (state) => {
            state.createdPostId = null;
        },
        resetError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.posts = action.payload;
            })
            .addCase(fetchPostsAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            });

        builder
            .addCase(fetchPostByIdAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPostByIdAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.post = action.payload;
            })
            .addCase(fetchPostByIdAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            });

        builder
            .addCase(createPostAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(createPostAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.createdPostId = action.payload._id;
                state.posts = [...state.posts, action.payload];
            })
            .addCase(createPostAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            });

        builder
            .addCase(deletePostAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(deletePostAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.message = action.payload;
            })
            .addCase(deletePostAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            });
    },
});

export const { resetPost, resetError, resetCreatePostId } = postsSlice.actions;

export default postsSlice.reducer;
