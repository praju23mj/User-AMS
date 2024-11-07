// src/components/Software/SoftwareList.js
import React, { useEffect, useState } from 'react';
import { getSoftwareList } from '../../services/api';

const SoftwareList = ({ token }) => {
    const [software, setSoftware] = useState([]);

    useEffect(() => {
        const fetchSoftware = async () => {
            const { data } = await getSoftwareList(token);
            setSoftware(data);
        };
        fetchSoftware();
    }, [token]);

    return (
        <div>
            <h2>Software Applications</h2>
            <ul>
                {software.map((item) => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SoftwareList;
