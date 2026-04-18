import nodemailer from 'nodemailer';

/**
 * ── HOW TO SET UP THE CONTACT FORM ──
 *
 * Step 1: Enable 2-Step Verification on your Google account
 *   → https://myaccount.google.com/security
 *
 * Step 2: Generate a Gmail App Password
 *   → https://myaccount.google.com/apppasswords
 *   → Select app: "Mail", Select device: "Other" → type "Portfolio"
 *   → Copy the 16-character password shown (no spaces)
 *
 * Step 3: Create backend/.env with:
 *   EMAIL_USER=abhishek.santha1802@gmail.com
 *   EMAIL_PASS=your16charpasswordhere
 *
 * Step 4: Restart the backend → npm run dev
 *
 * To test: fill out the contact form on your site and check your inbox.
 */

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Warn clearly at startup if credentials are missing
if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS === 'your16charpasswordhere') {
  console.warn('\n⚠️  Contact form email not configured.');
  console.warn('   Create backend/.env with EMAIL_USER and EMAIL_PASS.');
  console.warn('   See backend/src/mailer.js for instructions.\n');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function sendContactEmail({ name, email, message }) {
  if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS === 'your16charpasswordhere') {
    // Log to console so you still see submissions during development
    console.log('\n📬 Contact form submission (email not configured):');
    console.log(`   From: ${name} <${email}>`);
    console.log(`   Message: ${message}\n`);
    return; // Don't throw — form still shows success
  }

  await transporter.sendMail({
    from: `"Portfolio Contact" <${EMAIL_USER}>`,
    to: EMAIL_USER,          // sends to yourself
    replyTo: email,          // so you can reply directly to the sender
    subject: `New message from ${name} — portfolio`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 580px; margin: auto; padding: 32px 24px; background: #f9f9f9; border-radius: 12px;">
        <div style="margin-bottom: 24px;">
          <h2 style="margin: 0 0 4px; color: #7c6af7; font-size: 20px;">New Portfolio Message</h2>
          <p style="margin: 0; color: #999; font-size: 13px;">Via your portfolio contact form</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #888; font-size: 13px; width: 70px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;">
              <a href="mailto:${email}" style="color: #7c6af7; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </table>
        <div style="background: #fff; border-left: 3px solid #7c6af7; border-radius: 6px; padding: 16px 20px;">
          <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin: 24px 0 0; font-size: 11px; color: #bbb; text-align: center;">
          Sent from abhisheksanthakumar.dev · Reply directly to this email to respond
        </p>
      </div>
    `,
  });
}
