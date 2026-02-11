const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config();


connectDB();

const app = express();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: 'E-commerce API is running' });
});

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Protected routes examples (without role-based middleware)
const { protect } = require('./middleware/authMiddleware');

// Admin dashboard route
app.get('/api/admin/dashboard', protect, (req, res) => {
    res.json({ 
        message: 'Admin dashboard accessed successfully', 
        user: req.user 
    });
});

// User dashboard route
app.get('/api/user/dashboard', protect, (req, res) => {
    res.json({ 
        message: 'User dashboard accessed successfully', 
        user: req.user 
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

