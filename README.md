# Abhishek Santhakumar — Portfolio

A full-stack portfolio with a **React + Vite + Tailwind** frontend and an **Express** backend serving portfolio data via REST API, plus a contact form with email delivery.

---

## Project Structure

```
portfolio/
├── frontend/          # React + Vite + Tailwind
│   └── src/
│       ├── components/    # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
│       ├── hooks/         # usePortfolio.js (fetches from backend)
│       └── App.jsx
├── backend/           # Express REST API
│   └── src/
│       ├── index.js   # Routes: GET /api/portfolio, POST /api/contact
│       ├── data.js    # All portfolio content (edit this!)
│       └── mailer.js  # Nodemailer contact form handler
└── package.json       # Root scripts (runs both together)
```

---

## ── STEP 1: Install & Run Locally ──

### Prerequisites
- Node.js 18+ (you have v22 ✓)
- npm 9+

### Install all dependencies
```bash
cd portfolio
npm run install:all
```

### Start both frontend + backend together
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001/api/portfolio

---

## ── STEP 2: Set Up the Contact Form Email ──

The contact form posts to `/api/contact` and emails you via Gmail.

1. Go to your Google Account → Security → 2-Step Verification → **App Passwords**
2. Generate a new App Password (select "Mail")
3. Create a `.env` file inside `/backend`:

```
# backend/.env
EMAIL_USER=abhishek.santha1802@gmail.com
EMAIL_PASS=your_16_char_app_password
```

4. Install dotenv in backend:
```bash
cd backend && npm install dotenv
```

5. Add this to the **top** of `backend/src/index.js`:
```js
import 'dotenv/config';
```

---

## ── STEP 3: Update Your Content ──

All portfolio content lives in one file: `backend/src/data.js`

- Update `resumeUrl` in `hero` to link to your actual resume PDF
- Add real GitHub links to projects (replace `"#"` with your URLs)
- Change anything else — it all flows through the API to the frontend

---

## ── STEP 4: Build for Production ──

```bash
npm run build --prefix frontend
```

This creates `frontend/dist/` — the static site ready to deploy.

---

## ── STEP 5: Hosting Options ──

### Option A — Render.com (Recommended, Free, Full Stack)

Render can host both your backend (Node service) and frontend (static site) for free.

**Backend (Web Service):**
1. Push your project to GitHub
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Settings:
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `node src/index.js`
5. Add environment variables: `EMAIL_USER`, `EMAIL_PASS`
6. Deploy → copy your backend URL (e.g. `https://portfolio-api.onrender.com`)

**Frontend (Static Site):**
1. Render → New → Static Site
2. Same repo, root directory: `frontend`
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Add environment variable:
   - `VITE_API_URL=https://portfolio-api.onrender.com`
6. In `frontend/src/hooks/usePortfolio.js`, update the fetch URL:
```js
fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`)
```

**Update CORS in backend** for your live frontend URL:
```js
// backend/src/index.js
app.use(cors({ origin: 'https://your-frontend.onrender.com' }));
```

---

### Option B — Vercel (Frontend) + Railway (Backend)

**Frontend → Vercel:**
```bash
npm install -g vercel
cd frontend
vercel
```
Follow prompts. Your site goes live at `yourname.vercel.app`.

**Backend → Railway:**
1. Go to https://railway.app → New Project → Deploy from GitHub
2. Select repo, set root to `backend`
3. Add env vars: `EMAIL_USER`, `EMAIL_PASS`
4. Copy the Railway URL and set as `VITE_API_URL` in Vercel dashboard

---

### Option C — GitHub Pages (Frontend only, no contact form)

If you just want a fast static deploy without the backend:

```bash
cd frontend
npm install gh-pages --save-dev
```

Add to `frontend/package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then:
```bash
npm run deploy
```

> Note: With GitHub Pages, the contact form won't work (no backend). Use Render or Railway to keep it functional.

---

## ── STEP 6: Custom Domain (Optional) ──

Once deployed, you can point a domain like `abhisheksanthakumar.dev` to your site:

1. Buy a domain at Namecheap (~$10/yr) or Google Domains
2. In your hosting dashboard (Render/Vercel), add a custom domain
3. Update your DNS records as instructed (usually a CNAME pointing to the host)
4. HTTPS is provisioned automatically

---

## Recruiter Checklist ✓

- [ ] Live URL working
- [ ] Resume PDF linked
- [ ] GitHub links added to projects
- [ ] Contact form tested (send yourself a message)
- [ ] LinkedIn URL correct
- [ ] Mobile responsive (check on your phone)
- [ ] Share the URL in your LinkedIn bio and resume header
