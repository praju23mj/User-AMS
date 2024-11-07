// src/components/Dashboard/AdminDashboard.js
import React, { useState } from 'react';
import SoftwareList from '../Software/SoftwareList';
import { addSoftware } from '../../services/api';

const AdminDashboard = ({ token }) => {
    const [softwareName, setSoftwareName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddSoftware = async (e) => {
        e.preventDefault();
        await addSoftware({ name: softwareName, description }, token);
        setSoftwareName('');
        setDescription('');
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleAddSoftware}>
                <input
                    type="text"
                    value={softwareName}
                    onChange={(e) => setSoftwareName(e.target.value)}
                    placeholder="Software Name"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Add Software</button>
            </form>
            <SoftwareList token={token} />
        </div>
    );
};

export default AdminDashboard;
