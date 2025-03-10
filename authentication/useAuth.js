import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check authentication status when app starts
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            const storedUserData = await AsyncStorage.getItem('userData');

            if (token && storedUserData) {
                setUserData(JSON.parse(storedUserData));
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Auth status check error:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (response) => {
        try {
            const { data } = response;
            // Store tokens
            await AsyncStorage.setItem('accessToken', data.tokens.AccessToken);
            await AsyncStorage.setItem('refreshToken', data.tokens.RefreshToken);
            // Store user data
            await AsyncStorage.setItem('userData', JSON.stringify(data.user));

            setUserData(data.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Auth storage error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            // Clear all stored data
            await AsyncStorage.multiRemove([
                'accessToken',
                'refreshToken',
                'userData'
            ]);

            // Reset auth state
            setUserData(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            userData,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};