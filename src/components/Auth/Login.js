// src/components/Auth/Login.js
import React, { useState } from 'react';
import { loginUser } from '../../services/api';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser({ username, password });
            setToken(data.token);
            localStorage.setItem('token', data.token);
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
