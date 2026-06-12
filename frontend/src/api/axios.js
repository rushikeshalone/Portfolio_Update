import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'x-api-key': import.meta.env.VITE_API_KEY || 'portfolio_admin_key_2024_secure'
    }
});

export default api;
