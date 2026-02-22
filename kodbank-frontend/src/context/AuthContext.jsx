import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkUserLoggedIn = async () => {
        try {
            // Try to get dashboard or a lightweight profile endpoint
            // Since we implemented dashboard, let's use that to check session
            // Or better, refresh token first
            // Actually, querying a protected route like /user/dashboard is a good check
            const { data } = await api.get('/user/dashboard');
            if (data.success) {
                setUser(data.data);
            }
        } catch (err) {
            // Not logged in or session expired
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    const login = async (username, password) => {
        const { data } = await api.post('/auth/login', { username, password });
        if (data && data.data) {
            setUser(data.data.user);
            if (data.data.accessToken) localStorage.setItem('accessToken', data.data.accessToken);
            if (data.data.refreshToken) localStorage.setItem('refreshToken', data.data.refreshToken);
        }
        return data;
    };

    const register = async (userData) => {
        const { data } = await api.post('/auth/register', userData);
        if (data && data.data) {
            setUser(data.data.user);
            if (data.data.accessToken) localStorage.setItem('accessToken', data.data.accessToken);
            if (data.data.refreshToken) localStorage.setItem('refreshToken', data.data.refreshToken);
        }
        return data;
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout', { refreshToken: localStorage.getItem('refreshToken') });
        } catch (e) { /* ignore */ }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        checkUserLoggedIn
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
