const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const donationRoutes = require('./routes/donationRoutes');
const partnerRoutes = require('./routes/partners');

const app = express();
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.use('/api/donations', donationRoutes);
app.use('/api/partners', partnerRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
