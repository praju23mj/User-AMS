// src/components/Dashboard/EmployeeDashboard.js
import React from 'react';
import SoftwareList from '../Software/SoftwareList';

const EmployeeDashboard = ({ token }) => (
    <div>
        <h1>Employee Dashboard</h1>
        <SoftwareList token={token} />
    </div>
);

export default EmployeeDashboard;
