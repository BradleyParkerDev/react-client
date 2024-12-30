import axios from 'axios';

const Axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000', // Replace with your API URL
    withCredentials: true, // Ensures cookies are included with every request
});

export default Axios;
