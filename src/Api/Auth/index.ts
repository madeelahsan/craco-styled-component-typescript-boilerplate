import axios from 'axios';
import { parseCookies } from 'nookies';

const axiosInstance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_AUTH_API_URL + '/bpauth',
});

axiosInstance.interceptors.request.use(function (config) {
    const cookie: any = document.cookie;
    const cookies = parseCookies(cookie);
    const { token } = cookies;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

axiosInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export const AuthApi = {
    async signIn(payload: unknown) {
        const res = axiosInstance.post('/login', payload);
        return res;
    },
};
