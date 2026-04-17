import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { portfolioData } from './data.js';
import { sendContactEmail } from './mailer.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Allow localhost in dev and the real frontend URL in production
const allowedOrigins = [
  'https://portfolio-1-bosg.onrender.com'
  'http://localhost:5173',
  'http://localhost:4173', // vite preview
  process.env.FRONTEND_URL,  // set this in production e.g. https://yoursite.onrender.com
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, Postman, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: ${origin}`));
    },
  })
);
app.use(express.json());

// ── GET /api/portfolio ── returns all portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// ── GET /api/projects ── returns just projects
app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

// ── GET /api/experience ── returns work experience
app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

// ── POST /api/contact ── handles contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    await sendContactEmail({ name, email, message });
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    // Still log it server-side even if email fails
    console.log(`Contact form submission from ${name} <${email}>: ${message}`);
    res.json({ success: true, message: 'Message received!' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
