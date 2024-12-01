// apiClient.ts
import axios from 'axios';
import config from '../config'; // Your config file with the API port

const apiClient = axios.create({
    baseURL: `http://localhost:${config.apiPort}`, // Set the base URL with the port
    headers: {
        'Content-Type': 'application/json' // Optional: Set default headers
    }
});

export default apiClient;
