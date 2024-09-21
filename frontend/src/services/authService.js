import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

const register = async (username, password) => {
    await axios.post(`${API_URL}/register`, { username, password });
};

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data.token;
};

export default {
    register,
    login,
};
