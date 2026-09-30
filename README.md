# The AI Edge — Project Repository & Design Theme

Welcome to the repository for **The AI Edge**. This repository holds the published newsletter issues and serves as the foundation for developing the upcoming website.

---

## 📂 Newsletter Issues

*   **[Issue #01: AI Agents — The End of Traditional Workflows](file:///d:/Ai-edge/the_ai_edge_issue01.html)** (June 2026)
*   **[Issue #02: Small But Lethal — The Rise of Small Language Models](file:///d:/Ai-edge/the_ai_edge_issue02.html)** (July 2026)
*   **[Issue #03: The Last Profession to Fall — AI in Legal & Compliance](file:///d:/Ai-edge/the_ai_edge_issue03.html)** (August 2026)
*   **[Issue #04: The AI Safety Debate Has a Timing Problem](file:///d:/Ai-edge/the_ai_edge_issue04.html)** (October 2026)

---

## 🎨 Design Theme & Style Guidelines

This design system and visual guidelines were extracted from the Issue #02 template to maintain consistency across the entire website development.

### 1. Color Palette (Warm Editorial Dark Theme)

| Color Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Primary Dark** | `#1A1714` | Body background / base page container layer |
| **Deep Shadow** | `#0A0503` | Dark sections / text blocks / absolute shadows |
| **Brand Accent** | `#B83200` | Bright burnt vermillion for active/highlight elements and primary actions |
| **Dim Accent** | `#8A2200` | Muted red for borders, hover states, and secondary details |
| **Warm Cream** | `#F0E8DC` | Highlights, body text contrast, and illuminated components |
| **Warm Gold** | `#C8A880` | Subtitle accents, read-time labels, and secondary highlight elements |
| **Mid Shadow** | `#5A3820` | Subtle shadows, dividing borders, and overlay layers |
| **Floor Tone** | `#2A1208` | Background offsets and visual panels |

### 2. Core Theme Rules

*   **Background and Base Tones:**
    *   Base color must be deep espresso black/dark brown `#1A1714`.
    *   All dark tones must carry warm brown/red undertones. **Never use cold blue-black or slate grey.**
*   **Accent Usage:**
    *   Burnt vermillion `#B83200` is the single brand accent.
    *   It should be used strategically as a single focal source of light/emphasis, never scattered across the page.
*   **Typography Contrast:**
    *   Use warm cream `#F0E8DC` for text, headings, and details. **Avoid pure, high-contrast white.**
*   **Absolute Exclusions:**
    *   No neon highlights, electric blue, purple, or teal.
    *   Every shadow and shade must remain warm.

### 3. Typography Specs

*   **Primary Serif Font:** `'Playfair Display', Georgia, serif` (For headings, masthead, pull quotes)
*   **Body Font:** `'Lora', Georgia, serif` (For editorial content, paragraphs, stories)
*   **Monospace Font:** `'Space Mono', 'Courier New', monospace` (For tags, stats, metadata, technical values)

### 4. Visual & Image Generation Prompt Style Guide

To generate visual assets for the site, use the following guidelines:

*   **Style Reference:** Editorial, high-end dark photography (reminiscent of *MIT Technology Review*, *Wired*, *The Economist*). High print-quality feel, avoiding typical "AI-generated" or overly-glossy aesthetics.
*   **Subject Matter:** Minimalist, perfectly-formed geometric objects (e.g., polished dark matte cubes) resting on vast flat planes.
*   **Lighting:** Single warm amber-orange practical light source positioned low (approx. 15 degrees above the surface plane). No fill, bounce, or ambient lighting.
*   **Shadow:** Long, sharp, defined shadow stretching 12–15 times the size of the object, acting as the hero of the composition (occupying 55%+ of the frame).
*   **Camera Composition:** Medium format look, 85mm equivalent lens, shallow depth of field (f/2.8), eye-level perspective, slight upward tilt (~3 degrees).

---

## 🚀 How to Add New Issues & Update the Website

Follow these steps to write new issues, update the homepage, and upload the changes to Netlify.

### 📝 Step 1: Create a New Issue Page
1. Duplicate one of the existing issue files (e.g., `the_ai_edge_issue02.html`) and rename it (e.g., `the_ai_edge_issue03.html`).
2. Open the file and update:
   - The `<title>` tag.
   - The issue metadata in the `.top-strip` (Issue No., Month, and Year).
   - The `.article-header` details (Title, Deck, Byline, and Read Time).
   - The main text contents inside the `<div class="article-body">` wrapper.
   - The teaser at the bottom (`.next-issue`) to point to the next month's topic.
   - The month and issue number in the footer (`.footer-info`).
3. Keep the header back-navigation link pointing to `index.html`:
   ```html
   <span><a href="index.html" style="color:#E8C88A;text-decoration:none;">← Back to Home</a></span>
   ```

### 🗂️ Step 2: Update the Homepage (`index.html`)
1. Open `index.html`.
2. Locate the `<main class="feed">` section.
3. Update the total count indicator (e.g., `3 Issues Available`).
4. Copy one of the `<a href="..." class="issue-card">` HTML blocks and paste it at the top of the feed list (issues should be in reverse chronological order, latest first).
5. Update the link path, issue tag, publication date, title, deck, and read time for the new issue.

### ☁️ Step 3: Deploy Updates to Netlify

#### **Do I need to re-upload all documents simultaneously?**
**Yes, if you are using the Drag & Drop upload method.** 

Netlify replaces the entire site deployment package. If you only upload the new issue HTML file, the rest of your pages (like the homepage and old issues) will disappear.
* **How to upload:** Always drag and drop the **entire `Ai-edge` folder** containing *all* of your HTML files, styles, folders, and resources. 
* Netlify will instantly calculate the differences and replace the old site with the new complete folder.

#### **Alternative (Automatic Incremental Updates via Git):**
If you want to avoid dragging the folder every time:
1. Initialize a Git repository in your workspace and push your files to a GitHub repository.
2. Link your Netlify site to that GitHub repository under **Site Configuration -> Build & Deploy -> Continuous Deployment**.
3. Every time you save a new file and run `git push`, Netlify will automatically detect the changes and rebuild only the modified files.

---

## 📧 Newsletter Subscription & SMTP Setup Guide

The website includes a production-ready **SMTP Newsletter Subscription System** that automatically validates subscriber emails and delivers a responsive, luxury editorial welcome email to their inbox.

### ⚙️ Architecture Overview
* **Frontend (`index.html`):** Async AJAX form submission (`POST /api/subscribe`) with dynamic loading, success confirmations, and error diagnostics.
* **Serverless Function (`netlify/functions/subscribe.js`):** Production serverless endpoint on Netlify.
* **Local Express Server (`server.js`):** For local development and Node.js VPS hosting.
* **Email Engine (`lib/mailer.js` & `templates/welcomeEmail.js`):** Nodemailer SMTP transport with custom Warm Dark Editorial HTML email template and plain-text fallback.

---

### 🔑 Step 1: Configure Your SMTP Credentials

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Open `.env` and configure your preferred email provider:

#### Option A: Gmail (Recommended for Quick Testing)
1. Go to your **[Google Account](https://myaccount.google.com/)** ➔ **Security**.
2. Enable **2-Step Verification** (if not already enabled).
3. Search for **"App Passwords"** (or visit `https://myaccount.google.com/apppasswords`).
4. Name the App Password (e.g. `The AI Edge Newsletter`) and click **Create**.
5. Copy the 16-character generated password (e.g., `abcd efgh ijkl mnop`).
6. Update `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_gmail_address@gmail.com
   SMTP_PASS=your_16_character_app_password
   SMTP_FROM_NAME="The AI Edge Editorial"
   SMTP_FROM_EMAIL="your_gmail_address@gmail.com"
   ```

#### Option B: Brevo / Sendinblue (Free 300 emails/day)
1. Sign up at [Brevo.com](https://www.brevo.com/).
2. Go to **SMTP & API** ➔ **SMTP**.
3. Copy your SMTP Login, Master Password/Key, and set:
   ```env
   SMTP_HOST=smtp-relay.brevo.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_brevo_login
   SMTP_PASS=your_brevo_smtp_key
   SMTP_FROM_NAME="The AI Edge Editorial"
   SMTP_FROM_EMAIL="verified_sender@yourdomain.com"
   ```

#### Option C: SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.your_sendgrid_api_key
SMTP_FROM_NAME="The AI Edge Editorial"
SMTP_FROM_EMAIL="verified_sender@yourdomain.com"
```

#### Option D: Resend
```env
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=resend
SMTP_PASS=re_your_resend_api_key
SMTP_FROM_NAME="The AI Edge Editorial"
SMTP_FROM_EMAIL="onboarding@resend.dev"
```

---

### 🧪 Step 2: Test & Verify Your SMTP Setup

Run the built-in diagnostic test tool:
```bash
# Test with your configured credentials or auto-generated Ethereal preview
npm run test:smtp

# Or test sending directly to your personal email:
npm run test:smtp your.email@example.com
```

---

### 💻 Step 3: Run Locally

Start the local server:
```bash
npm start
```
Open **`http://localhost:3000`** in your browser, enter an email in the subscription box, and click **"Subscribe Free ➔"**.

---

### ☁️ Step 4: Configure Netlify for Production

When deploying to Netlify:
1. In your **Netlify Dashboard**, select your site.
2. Navigate to **Site configuration** ➔ **Environment variables** ➔ **Add a variable**.
3. Add the following variables matching your `.env`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM_NAME`
   - `SMTP_FROM_EMAIL`
   - `SMTP_REPLY_TO`
4. Netlify will automatically build `netlify/functions/subscribe.js` and route all `/api/subscribe` form requests directly to your secure SMTP function!

