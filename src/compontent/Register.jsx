import React, { useState } from 'react';
import compo from '../../src/compontent/axios/Compo'; // Import the register function

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[phone,setPhone]=useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const userData = { name, email, password,phone };
            console.log(userData);
            
            const response = await compo.register(userData); // Call the register function
            setSuccessMessage(response.message); // Display success message
            setError(''); // Clear any previous error
            // Optionally, reset the form
            setName('');
            setEmail('');
            setPassword('');
        } catch (err) {
            setError(err.message); // Handle error
            setSuccessMessage(''); // Clear success message
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Error message */}
                {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>} {/* Success message */}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Your Phone Number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <p className="mt-4 text-center text-gray-600 text-sm">
                    Already have an account? <a href="/login" className="text-blue-500">Login here</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
