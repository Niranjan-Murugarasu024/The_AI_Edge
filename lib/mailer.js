/**
 * The AI Edge — Robust SMTP Mailer Service
 * 
 * Supports:
 * - Direct SMTP (Gmail, Brevo, SendGrid, Amazon SES, Resend, Mailgun, Custom)
 * - Safe fallback & clear error diagnostics
 * - Ethereal test transporter for automated mock verification
 */

require('dotenv').config();
const nodemailer = require('nodemailer');
const { generateWelcomeEmail } = require('../templates/welcomeEmail');

/**
 * Validates email address format
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

/**
 * Creates Nodemailer Transporter based on environment variables or Ethereal fallback
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // Check if real SMTP credentials are provided
  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        // Do not fail on invalid certs in development
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
    });
  }

  return null;
}

/**
 * Sends the welcome newsletter email to the subscriber
 */
async function sendWelcomeEmail(recipientEmail, options = {}) {
  const cleanedEmail = (recipientEmail || '').trim().toLowerCase();

  if (!isValidEmail(cleanedEmail)) {
    throw new Error('Invalid email address format.');
  }

  let transporter = createTransporter();

  // If no SMTP configured, create an Ethereal test account for instant testing
  let isEthereal = false;
  if (!transporter) {
    console.warn('⚠️ [The AI Edge Mailer] No SMTP credentials found in environment (.env). Creating temporary Ethereal test account...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    isEthereal = true;
  }

  const fromName = process.env.SMTP_FROM_NAME || 'The AI Edge Editorial';
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'newsletter@theaiedge.com';
  const replyTo = process.env.SMTP_REPLY_TO || fromEmail;
  const siteUrl = options.siteUrl || process.env.SITE_URL || 'https://theaiedge.netlify.app';

  const emailContent = generateWelcomeEmail({
    recipientEmail: cleanedEmail,
    siteUrl,
  });

  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: cleanedEmail,
    replyTo: replyTo,
    subject: emailContent.subject,
    text: emailContent.text,
    html: emailContent.html,
    headers: {
      'X-Entity-Ref-ID': `sub-${Date.now()}`,
      'List-Unsubscribe': `<mailto:${replyTo}?subject=Unsubscribe%20${cleanedEmail}>`,
    },
  };

  const info = await transporter.sendMail(mailOptions);

  let previewUrl = null;
  if (isEthereal) {
    previewUrl = nodemailer.getTestMessageUrl(info);
    console.log(`✉️ [Ethereal Mock Email Sent] Preview URL: ${previewUrl}`);
  }

  return {
    success: true,
    messageId: info.messageId,
    recipient: cleanedEmail,
    isEthereal,
    previewUrl,
  };
}

module.exports = {
  isValidEmail,
  createTransporter,
  sendWelcomeEmail,
};
