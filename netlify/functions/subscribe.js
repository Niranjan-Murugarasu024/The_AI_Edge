const { sendWelcomeEmail, isValidEmail } = require('../../lib/mailer');

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle browser preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'OK' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed. Use POST.' }),
    };
  }

  try {
    let body = {};
    if (event.body) {
      try {
        body = JSON.parse(event.body);
      } catch (e) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, error: 'Invalid JSON body format.' }),
        };
      }
    }

    const { email } = body;

    if (!email || !isValidEmail(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Please provide a valid professional email address.',
        }),
      };
    }

    const siteUrl = event.headers.host 
      ? `https://${event.headers.host}`
      : 'https://theaiedge.netlify.app';

    const result = await sendWelcomeEmail(email, { siteUrl });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Subscription successful. Welcome email dispatched.',
        recipient: result.recipient,
        previewUrl: result.previewUrl,
      }),
    };
  } catch (error) {
    console.error('❌ Serverless Function Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || 'An error occurred while sending the confirmation email.',
      }),
    };
  }
};
