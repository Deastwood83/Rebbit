import apiClient from './index';

const getAll = async () => {
    const resp = await apiClient.get('/users');

    return resp.data;
};

const getById = async (id) => {
    const resp = await apiClient.get(`/users/${id}`);

    return resp.data;
};

const usersService = {
    getAll,
    getById,
};

export default usersService;
