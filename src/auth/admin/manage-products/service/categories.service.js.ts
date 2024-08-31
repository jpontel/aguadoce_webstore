import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export async function getCategories() {
    try {
        const response = await axios.get(`${API_URL}/get-category`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.response?.data?.error || 'Failed to fetch categories');
    }
}