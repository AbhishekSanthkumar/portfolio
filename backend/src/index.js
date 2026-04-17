import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { portfolioData } from './data.js';
import { sendContactEmail } from './mailer.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ── Allowed origins (frontend URLs) ──
const allowedOrigins = [
  process.env.FRONTEND_URL, // set in Render/Vercel env
  'http://localhost:3000',  // local dev
].filter(Boolean);

// ── CORS CONFIG ──
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server or Postman requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error(`CORS blocked request from: ${origin}`);
      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true, // optional (only needed if using cookies/auth)
  })
);

// ── Middleware ──
app.use(express.json());

// ── Routes ──

// GET full portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// GET projects
app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

// GET experience
app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

// Contact form API
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    await sendContactEmail({ name, email, message });

    return res.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (err) {
    console.error('Email error:', err);

    // fallback (still accept message even if email fails)
    console.log(`Contact form: ${name} <${email}> - ${message}`);

    return res.json({
      success: true,
      message: 'Message received!',
    });
  }
});

// ── Start server ──
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
