/**
 * The AI Edge — Luxury Editorial Welcome & Confirmation Email Template
 * 
 * Styled following the "Warm Editorial Dark Theme":
 * - Base background: #1A1714 / #0A0503
 * - Brand Accent: #B83200
 * - Warm Gold: #C8A880
 * - Warm Cream text: #F0E8DC
 * - Font stacks: Georgia/Playfair Display, Lora/serif, Courier/monospace
 */

function generateWelcomeEmail({ recipientEmail, siteUrl = 'https://theaiedge.netlify.app' }) {
  const subject = `Welcome to The AI Edge — Subscription Confirmed`;

  const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>${subject}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    /* Reset & Base Styles */
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background-color: #0A0503;
      color: #F0E8DC;
      font-family: 'Lora', Georgia, 'Times New Roman', serif;
      -webkit-font-smoothing: antialiased;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    div[style*="margin: 16px 0"] { margin: 0 !important; }
    table, td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
      border-collapse: collapse !important;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    a {
      color: #C8A880;
      text-decoration: underline;
    }
    /* Mobile responsive */
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .mobile-padding {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
      .issue-card-td {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0503; color: #F0E8DC;">

  <!-- Outer Canvas Container -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0A0503; table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 40px 15px 50px 15px;">
        
        <!-- Main Email Container Box -->
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 600px; background-color: #1A1714; border: 1px solid #3A2416; border-radius: 4px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.6);">
          
          <!-- Top Accent Trim Line -->
          <tr>
            <td style="background-color: #B83200; height: 4px; line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>

          <!-- Editorial Header / Masthead -->
          <tr>
            <td align="center" class="mobile-padding" style="padding: 35px 35px 25px 35px; border-bottom: 1px solid #2E1B10; background-color: #15120F;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="font-family: 'Space Mono', 'Courier New', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #C8A880; margin-bottom: 8px;">
                      MONTHLY APPLIED AI JOURNAL & STRATEGY DISPATCH
                    </div>
                    <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: 700; color: #F0E8DC; letter-spacing: 1px; line-height: 1.1;">
                      The <span style="color: #B83200;">AI</span> Edge
                    </div>
                    <div style="font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 13px; color: #A09080; margin-top: 6px;">
                      Where AI Strategy Meets the Future
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Confirmation Hero Message -->
          <tr>
            <td class="mobile-padding" style="padding: 35px 35px 25px 35px;">
              <div style="font-family: 'Space Mono', 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #B83200; font-weight: bold; margin-bottom: 10px;">
                CONFIRMATION OF SUBSCRIPTION
              </div>
              <h1 style="margin: 0 0 16px 0; font-family: 'Playfair Display', Georgia, serif; font-size: 24px; font-weight: 600; color: #F0E8DC; line-height: 1.3;">
                Your strategic seat is secured.
              </h1>
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.65; color: #D8CEBE;">
                Thank you for subscribing to <strong>The AI Edge</strong>. Your email (<span style="color: #C8A880; word-break: break-all;">${recipientEmail}</span>) has been verified and added to our executive dispatches ledger.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.65; color: #D8CEBE;">
                Once every month, you will receive our evidence-based, deep-dive intelligence analyses directly in your inbox. No commercial hype, no generic summaries—just rigorous architectural breakdowns, economic realities, and implementation frameworks.
              </p>
            </td>
          </tr>

          <!-- Four Guiding Editorial Standards -->
          <tr>
            <td class="mobile-padding" style="padding: 0 35px 30px 35px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #120E0C; border: 1px solid #2A1A10; border-radius: 4px; padding: 20px;">
                <tr>
                  <td>
                    <div style="font-family: 'Space Mono', 'Courier New', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #C8A880; margin-bottom: 12px; font-weight: bold;">
                      OUR EDITORIAL COMMITMENT TO YOU
                    </div>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #C4B9AA; line-height: 1.4;">
                          <strong style="color: #F0E8DC;">✦ Zero Commercial Bias</strong> — Independent, empirical evaluation.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #C4B9AA; line-height: 1.4;">
                          <strong style="color: #F0E8DC;">✦ Signal Over Noise</strong> — 100+ research papers distilled per edition.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #C4B9AA; line-height: 1.4;">
                          <strong style="color: #F0E8DC;">✦ Architectural Rigor</strong> — Production architectures and true cost models.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #C4B9AA; line-height: 1.4;">
                          <strong style="color: #F0E8DC;">✦ Actionable Frameworks</strong> — Ready-to-implement matrices and checklists.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Featured Archive Issues -->
          <tr>
            <td class="mobile-padding" style="padding: 0 35px 25px 35px;">
              <div style="font-family: 'Space Mono', 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #C8A880; margin-bottom: 14px; font-weight: bold;">
                LATEST PUBLISHED ISSUES (START READING)
              </div>

              <!-- Issue #03 -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px; border-bottom: 1px solid #26160E; padding-bottom: 12px;">
                <tr>
                  <td valign="top" style="width: 70px; font-family: 'Space Mono', monospace; font-size: 11px; color: #B83200; font-weight: bold; padding-top: 2px;">
                    ISSUE #03
                  </td>
                  <td valign="top">
                    <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 16px; font-weight: 600; color: #F0E8DC; line-height: 1.3;">
                      <a href="${siteUrl}/the_ai_edge_issue03.html" style="color: #F0E8DC; text-decoration: none;">The Last Profession to Fall: AI in Legal & Compliance</a>
                    </div>
                    <div style="font-size: 13px; color: #9A8C7C; margin-top: 4px; line-height: 1.4;">
                      August 2026 · 14 Min Read · Analysis of cognitive automation in high-stakes legal contracts.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Issue #02 -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px; border-bottom: 1px solid #26160E; padding-bottom: 12px;">
                <tr>
                  <td valign="top" style="width: 70px; font-family: 'Space Mono', monospace; font-size: 11px; color: #B83200; font-weight: bold; padding-top: 2px;">
                    ISSUE #02
                  </td>
                  <td valign="top">
                    <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 16px; font-weight: 600; color: #F0E8DC; line-height: 1.3;">
                      <a href="${siteUrl}/the_ai_edge_issue02.html" style="color: #F0E8DC; text-decoration: none;">Small But Lethal: The Rise of Small Language Models</a>
                    </div>
                    <div style="font-size: 13px; color: #9A8C7C; margin-top: 4px; line-height: 1.4;">
                      July 2026 · 12 Min Read · Why enterprise economics are shifting toward focused edge SLMs.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Issue #01 -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                <tr>
                  <td valign="top" style="width: 70px; font-family: 'Space Mono', monospace; font-size: 11px; color: #B83200; font-weight: bold; padding-top: 2px;">
                    ISSUE #01
                  </td>
                  <td valign="top">
                    <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 16px; font-weight: 600; color: #F0E8DC; line-height: 1.3;">
                      <a href="${siteUrl}/the_ai_edge_issue01.html" style="color: #F0E8DC; text-decoration: none;">AI Agents: The End of Traditional Workflows</a>
                    </div>
                    <div style="font-size: 13px; color: #9A8C7C; margin-top: 4px; line-height: 1.4;">
                      June 2026 · 10 Min Read · Autonomous agent swarms transforming enterprise operations.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Primary CTA Button -->
          <tr>
            <td align="center" class="mobile-padding" style="padding: 10px 35px 35px 35px;">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="background-color: #B83200; border-radius: 3px; box-shadow: 0 4px 12px rgba(184, 50, 0, 0.4);">
                    <a href="${siteUrl}/index.html" target="_blank" style="display: inline-block; padding: 14px 28px; font-family: 'Space Mono', 'Courier New', monospace; font-size: 13px; font-weight: bold; color: #FFFFFF; text-decoration: none; text-transform: uppercase; letter-spacing: 1px;">
                      Explore The AI Edge Library ➔
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer / Colophon -->
          <tr>
            <td align="center" class="mobile-padding" style="padding: 25px 35px 30px 35px; background-color: #100C0A; border-top: 1px solid #2E1B10; font-family: 'Lora', Georgia, serif; font-size: 12px; color: #7A6C5C; line-height: 1.6;">
              <div style="font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 1px; color: #A09080; text-transform: uppercase; margin-bottom: 6px;">
                THE AI EDGE · ESTABLISHED 2026
              </div>
              <div>
                Independent Strategic Intelligence · All Rights Reserved
              </div>
              <div style="margin-top: 8px; font-size: 11px; color: #645648;">
                You are receiving this confirmation because <strong style="color: #8C7B6B;">${recipientEmail}</strong> was registered for dispatches.<br>
                To adjust preferences or unsubscribe, you can reply directly to this email with "Unsubscribe".
              </div>
            </td>
          </tr>

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>`;

  const text = `=======================================================
THE AI EDGE — EXECUTIVE INTELLIGENCE DISPATCH
Where AI Strategy Meets the Future
=======================================================

CONFIRMATION OF SUBSCRIPTION
Your strategic seat is secured.

Thank you for subscribing to The AI Edge. Your email (${recipientEmail}) has been verified and added to our executive dispatches ledger.

Once every month, you will receive our evidence-based, deep-dive intelligence analyses directly in your inbox. No commercial hype, no generic summaries—just rigorous architectural breakdowns, economic realities, and implementation frameworks.

-------------------------------------------------------
OUR EDITORIAL COMMITMENT TO YOU
-------------------------------------------------------
• Zero Commercial Bias — Independent, empirical evaluation.
• Signal Over Noise — 100+ research papers distilled per edition.
• Architectural Rigor — Production architectures and true cost models.
• Actionable Frameworks — Ready-to-implement matrices and checklists.

-------------------------------------------------------
LATEST PUBLISHED ISSUES (START READING)
-------------------------------------------------------
1. Issue #03: The Last Profession to Fall — AI in Legal & Compliance (August 2026)
   Link: ${siteUrl}/the_ai_edge_issue03.html

2. Issue #02: Small But Lethal — The Rise of Small Language Models (July 2026)
   Link: ${siteUrl}/the_ai_edge_issue02.html

3. Issue #01: AI Agents — The End of Traditional Workflows (June 2026)
   Link: ${siteUrl}/the_ai_edge_issue01.html

Explore the complete journal archive:
${siteUrl}/index.html

=======================================================
The AI Edge · Established 2026 · Monthly Applied AI Journal
Independent Technical Analysis · All Rights Reserved
To unsubscribe at any time, reply to this email with "Unsubscribe".
=======================================================`;

  return { subject, html, text };
}

module.exports = {
  generateWelcomeEmail,
};
