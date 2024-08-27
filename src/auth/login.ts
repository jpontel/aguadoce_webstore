import {AGUADOCE_LOCAL, AGUADOCE_URL} from "../utils/util.ts";

interface LoginResponse {
    access_token: string;
}

const loginService = async (username: string, password: string): Promise<void> => {
    try {
        const response = await fetch(`${AGUADOCE_LOCAL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data: LoginResponse = await response.json();
        localStorage.setItem('token', data.access_token);
    } catch (error) {
        console.error('Error during login:', error);
    }
};

export default loginService;