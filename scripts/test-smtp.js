/**
 * The AI Edge — SMTP Test Verification Tool
 * 
 * Usage:
 *   node scripts/test-smtp.js [optional-recipient@example.com]
 *   or:
 *   npm run test:smtp
 */

require('dotenv').config();
const { sendWelcomeEmail, createTransporter, isValidEmail } = require('../lib/mailer');

async function runTest() {
  console.log('\n=============================================================');
  console.log('🧪 The AI Edge — SMTP Email System Diagnostics');
  console.log('=============================================================\n');

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT || '587';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromName = process.env.SMTP_FROM_NAME || 'The AI Edge Editorial';
  const fromEmail = process.env.SMTP_FROM_EMAIL || 'newsletter@theaiedge.com';

  console.log('📋 Current SMTP Configuration:');
  console.log(`   • Host:        ${host || '(Not set)'}`);
  console.log(`   • Port:        ${port}`);
  console.log(`   • User:        ${user ? user.replace(/(.{2})(.*)(@.*)/, '$1***$3') : '(Not set)'}`);
  console.log(`   • Password:    ${pass ? '******** (Provided)' : '(Not set)'}`);
  console.log(`   • From:        "${fromName}" <${fromEmail}>`);
  console.log('-------------------------------------------------------------');

  // Verify transporter if credentials provided
  const transporter = createTransporter();
  if (transporter) {
    console.log('🔌 Verifying SMTP Server connection...');
    try {
      await transporter.verify();
      console.log('✅ SMTP Connection successfully established and authenticated!');
    } catch (err) {
      console.error('❌ SMTP Connection / Authentication failed:');
      console.error(`   ${err.message}`);
      console.log('\n💡 Tip: If using Gmail, make sure 2-Step Verification is ON and you generated an "App Password" (16 characters), not your personal account password.');
      console.log('   If using Brevo or SendGrid, ensure your API key / password is correct.');
      process.exit(1);
    }
  } else {
    console.log('ℹ️  No real SMTP credentials found in .env.');
    console.log('   Running automated test with Ethereal Mock SMTP Service...');
  }

  // Determine recipient
  const argRecipient = process.argv[2];
  const targetRecipient = argRecipient || process.env.TEST_RECIPIENT_EMAIL || user || 'test.subscriber@example.com';

  if (!isValidEmail(targetRecipient)) {
    console.error(`❌ Target email "${targetRecipient}" is not a valid email address.`);
    process.exit(1);
  }

  console.log(`\n📨 Dispatching Welcome & Confirmation Email to: ${targetRecipient}...`);
  
  try {
    const result = await sendWelcomeEmail(targetRecipient, {
      siteUrl: 'https://theaiedge.netlify.app',
    });

    console.log('\n🎉 SUCCESS! Email dispatched successfully.');
    console.log(`   • Message ID: ${result.messageId}`);
    console.log(`   • Recipient:  ${result.recipient}`);

    if (result.isEthereal && result.previewUrl) {
      console.log('\n🔗 View rendered test email in your browser:');
      console.log(`   ${result.previewUrl}\n`);
    } else {
      console.log('\n📬 Check your inbox at: ' + targetRecipient);
      console.log('   (Also check the Spam/Promotions folder if it is the first dispatch)');
    }
    console.log('=============================================================\n');
  } catch (error) {
    console.error('❌ Failed to send welcome email:', error.message);
    process.exit(1);
  }
}

runTest();
