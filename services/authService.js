import api from '../authentication/api';

export const authService = {
    login: async (credentials) => {
        try {
            const response = await api.post('/users/login', credentials);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    register: async (userData) => {
        try {
            const response = await api.post('/users/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: async () => {
        try {
            const response = await api.post('/users/logout');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    refreshToken: async (refreshToken) => {
        try {
            const response = await api.post('/auth/refresh-token', { refreshToken });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};