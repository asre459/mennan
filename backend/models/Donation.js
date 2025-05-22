const mongoose = require('mongoose');
const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  contact: { type: String }, 
  method:{type:String,require:true},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', donationSchema);
