import axios from "axios";

// Register a new user
 const register = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8000', userData);
        return response.data; // Return response data
    } catch (error) {
        console.error("Error registering user:", error);
        throw error; // Re-throw the error for further handling
    }
};

// Log in an existing user
const login = async (credentials) => {
    try {
        const response = await axios.get('http://localhost:8000/login', credentials);
        return response.data; // Return response data
    } catch (error) {
        console.error("Error logging in:", error);
        throw error; // Re-throw the error for further handling
    }
};

// Request a password reset link
 const requestPasswordReset = async (email) => {
    try {
        const response = await axios.post('http://localhost:8000/reset', { email });
        return response.data; // Return response data
    } catch (error) {
        console.error("Error requesting password reset:", error);
        throw error; // Re-throw the error for further handling
    }
};

// Reset the password using the token
 const resetPassword = async (token, newPassword) => {
    try {
        const response = await axios.post(`http://localhost:8000/reset-password/${token}`, { newPassword });
        return response.data; // Return response data
    } catch (error) {
        console.error("Error resetting password:", error);
        throw error; // Re-throw the error for further handling
    }
};

export default{
    resetPassword,
    requestPasswordReset,
    login,
    register
}
