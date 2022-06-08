import apiClient from '.';

const getComments = async (postId) => {
    const resp = await apiClient.get(`/posts/${postId}/comments`);
    return resp.data;
};

const getCommentById = async (postId, comment) => {
    const resp = await apiClient.post(`/posts/${postId}/comments/${comment}`);

    return resp.data;
};

const createComment = async (postId, content) => {
    const resp = await apiClient.post(`/posts/${postId}/comments`, {
        content,
    });

    return resp.data;
};

const deleteComment = async (postId, comment) => {
    const resp = await apiClient.delete(`/posts/${postId}/comments/${comment}`);

    return resp.data;
};

const commentsService = {
    getComments,
    getCommentById,
    createComment,
    deleteComment,
};

export default commentsService;
