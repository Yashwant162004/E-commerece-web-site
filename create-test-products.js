const axios = require('axios');
const API_BASE = 'http://192.168.1.2:5000';

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    price: 999,
    description: 'Latest iPhone with A17 Pro chip',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    category: 'Electronics',
    countInStock: 50
  },
  {
    name: 'MacBook Air M2',
    price: 1199,
    description: 'Powerful laptop with M2 chip',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'Electronics',
    countInStock: 30
  },
  {
    name: 'AirPods Pro',
    price: 249,
    description: 'Wireless earbuds with noise cancellation',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    category: 'Electronics',
    countInStock: 100
  },
  {
    name: 'Nike Air Max',
    price: 129,
    description: 'Comfortable running shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Footwear',
    countInStock: 75
  },
  {
    name: 'Levi\'s Jeans',
    price: 79,
    description: 'Classic denim jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'Clothing',
    countInStock: 60
  },
  {
    name: 'Canon EOS R5',
    price: 3899,
    description: 'Professional mirrorless camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
    category: 'Electronics',
    countInStock: 15
  },
  {
    name: 'Dyson V15',
    price: 649,
    description: 'Powerful cordless vacuum',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2e4e?w=400',
    category: 'Home',
    countInStock: 25
  },
  {
    name: 'Yoga Mat',
    price: 35,
    description: 'Non-slip yoga mat',
    image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
    category: 'Fitness',
    countInStock: 200
  },
  {
    name: 'Coffee Maker',
    price: 89,
    description: 'Automatic drip coffee maker',
    image: 'https://images.unsplash.com/photo-1503435824048-a799a3a89158?w=400',
    category: 'Home',
    countInStock: 40
  },
  {
    name: 'Bookshelf',
    price: 159,
    description: 'Modern wooden bookshelf',
    image: 'https://images.unsplash.com/photo-1594026112284-1744e4cd30ee?w=400',
    category: 'Furniture',
    countInStock: 10
  }
];

async function createTestProducts() {
  try {
    console.log('Creating test products...');
    console.log('-----------------------------------');

    for (let i = 0; i < sampleProducts.length; i++) {
      const product = sampleProducts[i];
      try {
        const response = await axios.post(`${API_BASE}/api/products`, product);
        console.log(`✅ Product ${i + 1} created: ${response.data.name}`);
      } catch (error) {
        console.error(`❌ Error creating product ${i + 1}:`, error.response?.data || error.message);
      }
    }

    console.log('-----------------------------------');
    console.log('All test products created successfully!');
    console.log('');
    console.log('You can now view the products in the user dashboard.');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createTestProducts();