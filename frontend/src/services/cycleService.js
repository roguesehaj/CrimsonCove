import axios from 'axios';

const API_URL = 'http://localhost:3000/cycle';

const logCycle = async (token, startDate, endDate) => {
    await axios.post(`${API_URL}/log`, { token, startDate, endDate });
};

export default {
    logCycle,
};
