# Anirudh BK — Portfolio

A premium, dark-themed developer portfolio built with React, Framer Motion, and Tailwind CSS. Features smooth animations, glassmorphism UI, an interactive AI chatbot powered by Google Gemini, and a fully mobile-responsive layout.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue)](https://anirudh-porfolio.netlify.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://anirudh-porfolio.netlify.app/)

---

## Features

- **Glassmorphism UI** — elegant glass-effect cards with mouse-following glow
- **Smooth Animations** — scroll-triggered reveals, typing effect, and parallax via Framer Motion
- **AI Chatbot** — personal recruiter agent powered by Google Gemini API
- **Space Canvas** — interactive particle background
- **Fully Mobile Responsive** — optimized layout, solid navbar, and touch-friendly interactions
- **Scroll Progress Bar** — visual indicator of page scroll position
- **Tech Marquee** — infinite scrolling skills banner
- **Dark Theme** — minimal, high-contrast design on a near-black background

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 18 |
| Styling | Tailwind CSS (CDN) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Particles | react-tsparticles |
| AI | Google Gemini API |
| Hosting | Netlify |

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/AnirudhNBUA/anirudh-portfolio.git
   cd anirudh-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the project root:
   ```env
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   > Get a free API key from [Google AI Studio](https://aistudio.google.com/apikey)

4. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── App.js                     # Root component & global styles
├── index.js                   # Entry point
└── components/
    ├── Header.js              # Fixed navbar with mobile hamburger menu
    ├── Hero.js                # Landing section with typing effect
    ├── Stats.js               # Animated counter cards
    ├── Experience.js          # Timeline-based work history
    ├── Skills.js              # Skill categories + tech marquee
    ├── Projects.js            # Project showcase grid
    ├── EducationAndMore.js    # Education & certifications
    ├── Contact.js             # Contact CTA + social links + footer
    ├── AIChatbot.js           # Gemini-powered floating chatbot
    ├── GlowCard.js            # Reusable mouse-glow card wrapper
    ├── SpaceCanvas.js         # Particle background
    ├── ScrollProgress.js      # Top scroll progress bar
    ├── AnimatedSection.js     # Scroll-triggered section wrapper
    ├── SectionTitle.js        # Reusable section heading
    └── CursorGlow.js          # Custom cursor glow effect
```

## Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repo in [Netlify Dashboard](https://app.netlify.com)
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Add environment variable in **Site Settings > Environment Variables:**
   - `REACT_APP_GEMINI_API_KEY` = your API key
5. Deploy — the included `netlify.toml` handles SPA routing

## License

This project is open source and available for personal use and customization.
