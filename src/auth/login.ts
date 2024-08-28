import { AGUADOCE_LOCAL } from "../utils/util.ts";
import axios from 'axios';

interface LoginResponse {
    access_token: string;
    username: string;
    role: string;
}

const loginService = async (username: string, password: string): Promise<number> => {
    try {
        const response = await axios.post<LoginResponse>(`${AGUADOCE_LOCAL}/login`, {
            username,
            password
        });

        const data = response.data;
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('role', data.role);
        console.log(localStorage)
        return response.status;
    } catch (error) {
        console.error('Error during login:', error);
        alert('error');
        return 401; // Return 401 for unauthorized
    }
};

export default loginService;