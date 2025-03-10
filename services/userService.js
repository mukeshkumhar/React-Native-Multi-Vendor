import api from '../authentication/api';

export const userService = {
    getProfile: async () => {
        try {
            const response = await api.get('/users/profile');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateProfile: async (userData) => {
        try {
            const response = await api.put('/users/profile', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateAddress: async (addressData) => {
        try {
            const response = await api.put('/users/address', addressData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};