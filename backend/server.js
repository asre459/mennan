const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const donationRoutes = require('./routes/donationRoutes');
const partnerRoutes = require('./routes/partners');
const contactRoutes = require('./routes/contact'); // Uncomment if you have a contact route

const app = express();
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.use('/api/donations', donationRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/contact', contactRoutes); // Uncomment if you have a contact route



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
