import api from "../authentication/api";

export const productService = {
    getAllProducts: async() => {
        try {
            const response = await api.get("/products/get-all-product");
            return response.data;
        } catch(error) {
            console.error(error);
            throw error;
        }
    },

    getProductById: async(id) => {
        try {
            const response = await api.get(`/products/get-single-product/${id}`);
            return response.data;
        } catch(error) {
            console.error(error);
            throw error;
        }
    },
}