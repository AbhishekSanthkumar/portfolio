import nodemailer from 'nodemailer';

// Configure with your Gmail credentials via environment variables
// In production, set EMAIL_USER and EMAIL_PASS in your .env or hosting dashboard
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'abhishek.santha1802@gmail.com',
    pass: process.env.EMAIL_PASS || 'YOUR_APP_PASSWORD_HERE',
    // Use a Gmail App Password (not your main password):
    // Google Account > Security > 2-Step Verification > App Passwords
  },
});

export async function sendContactEmail({ name, email, message }) {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: 'abhishek.santha1802@gmail.com',
    replyTo: email,
    subject: `New message from ${name} via portfolio`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
        <h2 style="color: #7c6af7; margin-bottom: 4px;">New Portfolio Message</h2>
        <p style="color: #888; font-size: 14px; margin-bottom: 24px;">Someone reached out via your portfolio contact form.</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #888; width: 80px; font-size: 14px;">Name</td>
            <td style="padding: 8px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7c6af7;">${email}</a></td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #fff; border-left: 3px solid #7c6af7; border-radius: 4px;">
          <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #bbb;">Sent from abhisheksanthakumar.dev</p>
      </div>
    `,
  });
}
