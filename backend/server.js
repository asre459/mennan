const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const donationRoutes = require('./routes/donationRoutes');
const partnerRoutes = require('./routes/partners');
const contactRoutes = require('./routes/contact'); // Only include if implemented

const app = express();

// --- CORS setup ---
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PATCH'],
  credentials: true
}));

app.use(express.json());

// --- Routes ---
app.use('/api/donations', donationRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/contact', contactRoutes); // Optional

// --- MongoDB connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
