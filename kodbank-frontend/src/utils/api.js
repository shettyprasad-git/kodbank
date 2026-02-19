import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    withCredentials: true, // Send cookies with requests
    headers: {
        'Content-Type': 'application/json'
    }
});

// Response interceptor for refreshing tokens
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) { // Access token expired?
            // If refresh endpoint itself fails (403), don't retry loop
            if (originalRequest.url === '/auth/refresh') {
                return Promise.reject(error);
            }

            originalRequest._retry = true;

            try {
                await api.post('/auth/refresh');
                return api(originalRequest); // Retry original request
            } catch (err) {
                // Refresh failed - user needs to login again
                // Ideally redirect to login or clear auth state
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
