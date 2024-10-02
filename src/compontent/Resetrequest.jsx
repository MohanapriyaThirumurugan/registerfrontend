import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get token from URL
import compo from '../../src/compontent/axios/Compo'; // Import the resetPassword function

const Resetrequest = () => {
    const { token } = useParams(); // Get the token from the URL
    const [newPassword, setNewPassword] = useState(''); // State for new password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirming password
    const [message, setMessage] = useState(''); // State for feedback message

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Ensure both passwords match
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            // Call resetPassword function from your Axios module
            await compo.resetPassword(token, newPassword); 
            setMessage('Password reset successful!');
        } catch (error) {
            setMessage('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form 
                onSubmit={handleSubmit} // Handle form submission
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                        New Password
                    </label>
                    <input
                        type="password"
                        id="newPassword"
                        placeholder="New Password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} // Update newPassword state
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Reset Password
                    </button>
                </div>

                {/* Feedback Message */}
                {message && <p className="mt-4 text-center text-gray-600 text-sm">{message}</p>}
            </form>
        </div>
    );
};

export default Resetrequest;
