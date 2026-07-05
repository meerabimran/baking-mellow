const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// SUBMIT CONTACT FORM
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await ContactMessage.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;