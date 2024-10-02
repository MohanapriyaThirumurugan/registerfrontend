import React, { useState } from 'react';
import compo from '../../src/compontent/axios/Compo'; // Import the Axios methods

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const credentials = { email, password };
      console.log('Credentials:', credentials);
      
      const response = await compo.login(credentials); // Call the Axios login function
      setSuccessMessage(response.message); // Set success message
      setError(''); // Clear any error
      console.log('Login successful:', response);
    } catch (err) {
      setError(err.response?.data?.message || 'Error logging in'); // Handle error and display error message
      setSuccessMessage(''); // Clear success message
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Error message */}
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>} {/* Success message */}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <a href="/reset" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
