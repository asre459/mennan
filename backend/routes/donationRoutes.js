const express = require('express');
const axios = require('axios');
const router = express.Router();
const Donation = require('../models/Donation');

//  POST  method 

router.post('/met', async (req, res) => {
  const { name, amount, contact,method ,account} = req.body;

  if (!name || !amount||!method) {
    return res.status(400).json({ message: 'Name , amount and method are required.' });
  }
   try {
    const newDonation = new Donation({
      name,
      amount,
      contact: contact || null,
      method
    });

    await newDonation.save();
    res.status(201).json({ message: 'Donation recorded successfully.' });
  } catch (err) {
    console.error('Error saving donation:', err);
    res.status(500).json({ message: 'Server error. Try again later.' });
  }
});

// @route   POST /api/donations/pay

router.post('/pay', async (req, res) => {
  const { amount, account, method } = req.body;
  if (!amount || !account || !method) {
    return res.status(400).json({ error: 'amount, account, and method are required' });
  }
 try {
  const appId = process.env.SANTIMPAY_APP_ID;
  const appKey = process.env.SANTIMPAY_APP_KEY;
    const merchantId = process.env.SANTIMPAY_MERCHANT_ID;
    const secret = process.env.SANTIMPAY_SECRET;
 if (!merchantId || !secret) {
      return res.status(500).json({ error: 'SANTIMPay credentials not configured in environment' });
    }
 const response = await axios.post('https://api.santimpay.et/pay', {
      merchantId,
      secret,
      appkey,
      appId,
      amount,
      account,
      method,
      callbackUrl: 'https://yourapp.com/api/donations/verify', // Update to your deployed backend
    });

    res.status(200).json({
      message: 'Redirect to complete payment',
      redirectUrl: response.data.redirectUrl || null,
    });
  } catch (err) {
    console.error('SANTIMPay Error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Failed to initiate payment with SANTIMPay' });
  }
});
// get method
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.status(200).json(donations);
  } catch (err) {
    console.error('Error fetching donations:', err);
    res.status(500).json({ error: 'Failed to retrieve donations' });
  }
});

module.exports = router;
