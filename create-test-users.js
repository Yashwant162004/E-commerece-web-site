const axios = require('axios');
const API_BASE = 'http://192.168.1.2:5000';

async function createTestUsers() {
    try {
        console.log('Creating test user...');
        const userResponse = await axios.post(`${API_BASE}/api/auth/register`, {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            role: 'user'
        });
        console.log('✅ User created successfully:');
        console.log('   Email: john@example.com');
        console.log('   Password: password123');
        console.log('   Role: user');
        console.log();

        console.log('Creating test admin...');
        const adminResponse = await axios.post(`${API_BASE}/api/auth/register`, {
            name: 'Jane Admin',
            email: 'jane@example.com',
            password: 'admin123',
            role: 'admin'
        });
        console.log('✅ Admin created successfully:');
        console.log('   Email: jane@example.com');
        console.log('   Password: admin123');
        console.log('   Role: admin');
        console.log();

        console.log('Testing login for user...');
        const userLogin = await axios.post(`${API_BASE}/api/auth/login`, {
            email: 'john@example.com',
            password: 'password123',
            role: 'user'
        });
        console.log('✅ User login successful');
        console.log();

        console.log('Testing login for admin...');
        const adminLogin = await axios.post(`${API_BASE}/api/auth/login`, {
            email: 'jane@example.com',
            password: 'admin123',
            role: 'admin'
        });
        console.log('✅ Admin login successful');
        console.log();

        console.log('All test users created and verified!');
        console.log('-----------------------------------');
        console.log('You can now use these credentials to login from your app.');

    } catch (error) {
        if (error.response?.data?.message === 'User already exists') {
            console.log('⚠️  User already exists - skipping creation');
            console.log('   Email: john@example.com');
            console.log('   Password: password123');
            console.log('   Role: user');
            console.log();
            console.log('⚠️  Admin already exists - skipping creation');
            console.log('   Email: jane@example.com');
            console.log('   Password: admin123');
            console.log('   Role: admin');
            console.log();
        } else {
            console.error('❌ Error:', error.response?.data || error.message);
        }
    }
}

createTestUsers();