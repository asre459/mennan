const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const ArifPay = require('arifpay-express-plugin'); // ✅ Import plugin
const axios = require('axios');
const router = express.Router();
const Donation = require('../models/Donation');
//  POST  method 

router.post('/met', async(req, res) => {
  const { name, amount, contact} = req.body;

  if (!name || !amount) {
    return res.status(400).json({ message: 'Name , amount and method are required.' });
  }
   try {
    const newDonation = new Donation({
      name,
      amount,
      contact: contact || null,
      method:'pending'
    });

    await newDonation.save();
    res.status(201).json({ message: 'Donation recorded successfully.',  donationId: newDonation._id 
    });
  } catch (err) {
    console.error('Error saving donation:', err);
    res.status(500).json({ message: 'Server error. Try again later.' });
  }
});
// Add a new endpoint to update the payment method
router.patch('/:id/method', async (req, res) => {
  try {
      // Add validation for the ID
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid donation ID' });
    }
    const { method } = req.body;
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { method },
      { new: true }
    );
    
    if (!updatedDonation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    
    res.json(updatedDonation);
  } catch (err) {
    console.error('Error updating donation method:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/pay', async (req, res) => {
  const { amount, account, method, name, contact } = req.body;

  if (!amount || !account || !method || !name) {
    return res.status(400).json({ error: 'name, amount, account, and method are required' });
  }

  try {
    // Replace with your actual HarifPay credentials if required
    const harifPayApiUrl = 'https://api.harifpay.et/payment'; // Example endpoint

    const payload = {
      cancelUrl: "https://example.com",
      phone: contact || "251943753120",
      email: "asre45900@gmail.com",
      nonce: "AAAa123asds",
      errorUrl: "http://error.com",
      notifyUrl: "https://example.com",
      successUrl: "http://example.com",
      paymentMethods: [method],
      expireDate: "2025-02-01T03:45:27",
      items: [
        {
          name: "ሙዝ",
          quantity: 1,
          price: amount,
          description: "Fresh Corner preimuim Banana.",
          image: "https://4.imimg.com/data4/KK/KK/GLADMIN-/product-8789_bananas_golden-500x500.jpg"
        }
      ],
      beneficiaries: [
        {
          accountNumber: account,
          bank: "Commercial bank of ethiopia",
          amount: amount
        }
      ],
      lang: "EN"
    };

    const response = await axios.post(harifPayApiUrl, payload, {
      headers: {
        Authorization: `Bearer ${process.env.HARIFPAY_API_KEY}`, // if required
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json({
      message: 'Redirect to complete payment',
      redirectUrl: response.data?.redirectUrl || null,
      data: response.data
    });

  } catch (err) {
    console.error('HarifPay Error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Failed to initiate payment with HarifPay' });
  }
});
// Add a new endpoint to update the payment method
router.patch('/:id/method', async (req, res) => {
  try {
    const { method } = req.body;
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { method },
      { new: true }
    );
    
    if (!updatedDonation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    
    res.json(updatedDonation);
  } catch (err) {
    console.error('Error updating donation method:', err);
    res.status(500).json({ message: 'Server error' });
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
