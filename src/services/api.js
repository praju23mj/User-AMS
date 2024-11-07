// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const getSoftwareList = (token) => axios.get(`${API_URL}/software`, {
    headers: { Authorization: `Bearer ${token}` },
});
export const addSoftware = (data, token) => axios.post(`${API_URL}/software`, data, {
    headers: { Authorization: `Bearer ${token}` },
});
