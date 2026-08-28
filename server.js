require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sendWelcomeEmail, isValidEmail } = require('./lib/mailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static website files from workspace root
app.use(express.static(path.join(__dirname)));

/**
 * POST /api/subscribe
 * Processes newsletter subscription and sends welcome email via SMTP
 */
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body || {};

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid professional email address.',
      });
    }

    const result = await sendWelcomeEmail(email, {
      siteUrl: `${req.protocol}://${req.get('host')}`,
    });

    return res.status(200).json({
      success: true,
      message: 'Subscription successful. Welcome email sent.',
      recipient: result.recipient,
      isEthereal: result.isEthereal,
      previewUrl: result.previewUrl,
    });
  } catch (error) {
    console.error('❌ Subscription Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'An error occurred while processing your subscription.',
    });
  }
});

// Fallback to index.html for root or unknown GET routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n=======================================================`);
    console.log(`🚀 The AI Edge Server running at http://localhost:${PORT}`);
    console.log(`📧 SMTP Subscription Endpoint: http://localhost:${PORT}/api/subscribe`);
    console.log(`=======================================================\n`);
  });
}

module.exports = app;
