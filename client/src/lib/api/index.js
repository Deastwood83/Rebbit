import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://rebbit.xyz/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
