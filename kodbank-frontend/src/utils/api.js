import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    withCredentials: true, // Send cookies with requests
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor for attaching the access token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor for refreshing tokens
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) { // Access token expired?
            // If refresh endpoint itself fails or it's a login/register request, don't retry
            if (originalRequest.url === '/auth/refresh' || originalRequest.url === '/auth/login' || originalRequest.url === '/auth/register') {
                return Promise.reject(error);
            }

            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                // Even if cookie exists, we'll try sending the localized one if available
                const { data } = await api.post('/auth/refresh', { refreshToken });

                if (data && data.data && data.data.accessToken) {
                    localStorage.setItem('accessToken', data.data.accessToken);
                    originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
                }

                return api(originalRequest); // Retry original request
            } catch (err) {
                // Refresh failed - user needs to login again
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                // Ideally redirect to login or clear auth state
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
