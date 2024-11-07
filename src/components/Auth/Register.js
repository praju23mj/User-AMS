// src/components/Auth/Register.js
import React, { useState } from 'react';
import { registerUser } from '../../services/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Employee');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, password, role });
            alert('User registered successfully');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
