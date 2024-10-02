import React, { useState } from 'react';
import compo from '../../src/compontent/axios/Compo'; // Import the Axios methods
const Reset = () => {
    const [email, setEmail] = useState(''); // State to hold the email input
    const [message, setMessage] = useState(''); // State for feedback messages

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // Use the requestPasswordReset function from your axios module
            const response = await compo.requestPasswordReset(email);
            setMessage('Reset link sent! Check your email.'); // Success message
        } catch (error) {
            setMessage('Failed to send reset link. Please try again.'); // Error message
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form 
                onSubmit={handleSubmit} // Handle form submission
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Reset Link
                    </button>
                </div>

                {/* Display feedback message */}
                {message && <p className="mt-4 text-center text-gray-600 text-sm">{message}</p>}

                <p className="mt-4 text-center text-gray-600 text-sm">
                    Remembered your password? <a href="/login" className="text-blue-500">Login here</a>
                </p>
            </form>
        </div>
    );
};

export default Reset;
