import axios from 'axios';

const API_URL = 'http://localhost:3000/package';

const subscribePackage = async (token, packageType, deliveryDate) => {
    await axios.post(`${API_URL}/subscribe`, { token, packageType, deliveryDate });
};

export default {
    subscribePackage,
};
