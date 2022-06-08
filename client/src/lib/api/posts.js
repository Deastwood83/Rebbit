import apiClient from '.';

const getPosts = async () => {
    const resp = await apiClient.get('/posts');

    return resp.data;
};

const getPostById = async (id) => {
    const resp = await apiClient.get(`/posts/${id}`);

    return resp.data;
};

const createPost = async (title, content) => {
    const resp = await apiClient.post('/posts', {
        title,
        content,
    });

    return resp.data;
};

const updatePost = async (id, title, content) => {
    const resp = await apiClient.put(`/posts/${id}`, {
        title,
        content,
    });

    return resp.data;
};

const deletePost = async (id) => {
    const resp = await apiClient.delete(`/posts/${id}`);

    return resp.data;
};

const postsService = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};

export default postsService;
