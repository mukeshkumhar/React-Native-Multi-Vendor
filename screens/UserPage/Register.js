import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { authService } from '../../services/authService';
import { useAuth } from '../../authentication/useAuth';

const Register = () => {
    const navigation = useNavigation();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        address: {
            street: 'Lalpur',
            city: 'Ranchi',
            state: 'Jharkhand',
            country: 'India',
            postalCode: '834001'
        }
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        // Validate full name
        if (!formData.fullName) {
            newErrors.fullName = 'Full name is required';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }

        // Validate password
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Validate confirm password
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async () => {
        if (validateForm()) {
            setLoading(true);
            try {
                const registerData = {
                    name: formData.name,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    password: formData.password,
                    address: formData.address
                };

                const response = await authService.register(registerData);

                if (response.success) {
                    await login(response);
                    Alert.alert('Success', 'Registration successful!');
                    navigation.navigate('Login');
                }
            } catch (error) {
                const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
                Alert.alert('Error', errorMessage);
                console.error('Registration error:', error);
            } finally {
                setLoading(false);
            }
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Sign up to get started!</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                        />
                        {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                        />
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            secureTextEntry
                            value={formData.password}
                            onChangeText={(text) => setFormData({ ...formData, password: text })}
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm your password"
                            secureTextEntry
                            value={formData.confirmPassword}
                            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                        />
                        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                    </View>

                    <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handleRegister}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Registering...' : 'Register'}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginLink}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    formContainer: {
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#DDD',
        fontSize: 16,
    },
    errorText: {
        color: '#e32f45',
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#e32f45',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#666',
        fontSize: 16,
    },
    loginLink: {
        color: '#e32f45',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    buttonDisabled: {
        backgroundColor: '#cccccc',
    },
})