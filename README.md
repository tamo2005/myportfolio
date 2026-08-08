<div align="center">

<img src="frontend/public/assets/prf-pic.png" alt="Tamagno Roy" width="120" style="border-radius: 50%;" />

# Tamagno Roy — Portfolio

**Computer Science Engineer · IIT Ropar Research Intern · Builder**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-E8673A?style=flat-square)](LICENSE)

[**Live Site →**](https://tamagno-portfolio.vercel.app) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/tamagno-roy-2ab072290/) &nbsp;·&nbsp; [GitHub](https://github.com/tamo2005)

</div>

---

## About

My personal engineering portfolio — a static single-page application built with **React + Vite** and styled with **Tailwind CSS**. No database, no server — just fast, static, deploy-anywhere front-end code.

The portfolio showcases:

- **IIT Ropar Research Internship** (NPTEL Summer Research, under Prof. Sudarshan Iyengar)
- **Projects** — Yaksha (FAQ Chat Engine), AI Website Generator (10-module pipeline), email marketing platform
- **NPTEL Elite certifications** — 5 courses from IIT Madras, Kanpur, and Kharagpur
- **GitHub activity** — live stats pulled from the GitHub public API
- **Learning journal** — ongoing notes on Linear Algebra, NLP, AI systems
- **Contact form** — wired to EmailJS (no backend required)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 7 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Icons | Lucide React |
| Animations | CSS keyframes (`float`, `marquee`, `typewriter`) |
| Email | EmailJS (client-side, no server) |
| GitHub Data | GitHub REST API v3 (public, no token) |
| Deployment | Vercel |

---

## Project Structure

```
myportfolio/
├── frontend/                    # The entire app — this is what gets deployed
│   ├── public/
│   │   └── assets/
│   │       ├── prf-pic.png      # Profile photo
│   │       └── Tamagno_Roy.pdf  # Resume (downloadable)
│   └── src/
│       ├── components/          # One file per section
│       │   ├── Header.jsx
│       │   ├── HeroSection.jsx
│       │   ├── MarqueeTicker.jsx
│       │   ├── AboutSection.jsx
│       │   ├── SkillsSection.jsx
│       │   ├── ProjectsSection.jsx
│       │   ├── ExperienceSection.jsx
│       │   ├── GitHubSection.jsx
│       │   ├── BlogSection.jsx
│       │   ├── ContactSection.jsx
│       │   ├── Footer.jsx
│       │   └── Layout.jsx
│       ├── data/                # Static content — edit here to update portfolio
│       │   ├── projects.js
│       │   ├── skills.js
│       │   ├── experience.js
│       │   ├── certificates.js
│       │   └── blog.js
│       ├── utils/
│       │   └── constants.js     # RESUME_PATH, social links, calendar link
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css            # Design tokens + utilities
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/tamo2005/myportfolio.git
cd myportfolio/frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173`.

### Build for production

```bash
npm run build
# Output in frontend/dist/
```

---

## EmailJS Setup (Contact Form)

The contact form sends emails directly from the browser via [EmailJS](https://www.emailjs.com/) — no backend needed.

1. Sign up at [emailjs.com](https://www.emailjs.com/) (free tier: 200 emails/month)
2. **Email Services** → Connect your Gmail
3. **Email Templates** → Create a template using these variables:
   ```
   {{from_name}}   — sender's name
   {{from_email}}  — sender's email
   {{message}}     — the message body
   {{to_name}}     — your name (pre-filled as "Tamagno")
   ```
4. **Account → API Keys** → Copy your Public Key
5. Create `frontend/.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
6. Restart the dev server — the form will send real emails.

> Without credentials the form still works in demo mode (simulates a 1.2s send delay).

---

## Updating Your Content

All portfolio content lives in `frontend/src/data/`. No component logic to touch.

| File | What to edit |
|---|---|
| `projects.js` | Add / update projects |
| `skills.js` | Add / remove skills and categories |
| `experience.js` | Work experience timeline |
| `certificates.js` | NPTEL and other certifications |
| `blog.js` | Learning journal entries |
| `utils/constants.js` | Resume path, calendar link, social URLs |

**To update your resume:** Replace `frontend/public/assets/Tamagno_Roy.pdf` with the new file (keep the same filename), or update `RESUME_PATH` in `constants.js`.

---

## Deployment (Vercel)

The simplest way to deploy:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Set **Root Directory** → `frontend`
4. Add environment variables (`VITE_EMAILJS_*`) in Vercel's project settings
5. Deploy — done.

Vercel will automatically redeploy on every push to `main`.

---

## Design System

The design uses a set of CSS custom properties defined in `index.css`:

```css
:root {
  --bg:       #09090B;   /* zinc-950 — page background */
  --bg-1:     #111113;   /* elevated surface */
  --bg-2:     #1C1C1F;   /* overlay / card bg */
  --accent:   #E8673A;   /* terracotta — primary brand */
  --accent-2: #D4521E;   /* darker variant */
  --txt:      #FAFAFA;   /* primary text */
  --txt-2:    #A1A1AA;   /* secondary text */
  --txt-3:    #52525B;   /* muted text */
  --border:   rgba(255,255,255,0.07);   /* default border */
  --border-a: rgba(232,103,58,0.20);   /* accent border */
}
```

Key utility classes: `.card`, `.btn-primary`, `.btn-outline`, `.field`, `.tag`, `.section-container`, `.section-heading`, `.section-label`.

---

## License

MIT — feel free to fork and adapt for your own portfolio.

---

<div align="center">
  Built by <strong>Tamagno Roy</strong> &nbsp;·&nbsp;
  <a href="mailto:tamagnoroy.roy2005@gmail.com">tamagnoroy.roy2005@gmail.com</a>
</div>
