// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import ManagerDashboard from './components/Dashboard/ManagerDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/employee" element={token ? <EmployeeDashboard token={token} /> : <Navigate to="/" />} />
                <Route path="/manager" element={token ? <ManagerDashboard /> : <Navigate to="/" />} />
                <Route path="/admin" element={token ? <AdminDashboard token={token} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
