const axios = require('axios');
const API_BASE = 'http://192.168.1.2:5000';

async function createUsers() {
    try {
        const user = await axios.post(`${API_BASE}/api/auth/register`, {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            role: 'user'
        });
        console.log('User created:', user.data.email);
    } catch (error) {
        if (error.response?.data?.message === 'User already exists') {
            console.log('User already exists');
        } else {
            console.error('User error:', error.response?.data);
        }
    }

    try {
        const admin = await axios.post(`${API_BASE}/api/auth/register`, {
            name: 'Jane Admin',
            email: 'jane@example.com',
            password: 'admin123',
            role: 'admin'
        });
        console.log('Admin created:', admin.data.email);
    } catch (error) {
        if (error.response?.data?.message === 'User already exists') {
            console.log('Admin already exists');
        } else {
            console.error('Admin error:', error.response?.data);
        }
    }
}

createUsers();