import apiClient from '.';

/**
 *
 * @param {String} username
 * @param {String} password
 * @returns {Object}
 */
const login = async (username, password) => {
    const resp = await apiClient.post('/auth/login', {
        username,
        password,
    });

    if (resp.status === 401) {
        throw new Error('Invalid credentials');
    }

    return resp.data;
};

/**
 *
 * @param {String} email
 * @param {String} username
 * @param {String} password
 * @param {Date} birthday
 * @returns {Object}
 */
const register = async (email, username, password, birthday) => {
    const resp = await apiClient.post('/auth/register', {
        email,
        username,
        password,
        birthday,
    });

    return resp.data;
};

/**
 *
 * @returns {Object}
 */
const status = async () => {
    const resp = await apiClient.get('/auth/status');

    return resp.data;
};

/**
 *
 * @returns {Boolean}
 */
const signout = async () => {
    const resp = await apiClient.post('/auth/signout');
    return resp.status === 200;
};

/**
 *
 * @param {Object} user
 * @returns
 */
const updateMe = async (user) => {
    const payload = {};

    if (user.password) {
        payload.password = user.password;
    }

    if (user.biography) {
        payload.biography = user.biography;
    }

    const resp = await apiClient.put('/auth/me', payload);

    return resp.data;
};

const authService = {
    login,
    register,
    status,
    updateMe,
    signout,
};

export default authService;
