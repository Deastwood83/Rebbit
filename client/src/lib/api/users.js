import apiClient from './index';

const getAll = async () => {
    const resp = await apiClient.get('/users');

    return resp.data;
};

const getByUsername = async (username) => {
    const resp = await apiClient.get(`/users/username/${username}`);

    return resp.data;
};

const usersService = {
    getAll,
    getByUsername,
};

export default usersService;
