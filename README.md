# Faisal Portfolio — React + Vite

A fully animated, dark-themed developer portfolio for **Md Faisal Alam**, built with React 18 and Vite 5.

## ✨ Features

| Animation / Feature | Implementation |
|---|---|
| Loading screen | `Loader.jsx` — CSS keyframe bar, fades out after 2.6 s |
| Custom glowing cursor + trailing ring | `useCursor.js` hook + rAF loop |
| Live particle network canvas | `ParticleCanvas.jsx` — vanilla Canvas API, mouse-repulsion |
| Hero name shimmer gradient | CSS `background-clip: text` + `shimmer` keyframe |
| 3-D floating card | CSS `perspective` + `rotateX/Y` keyframe |
| Scroll reveal (fade-up, slide-left, slide-right) | `useReveal.js` — IntersectionObserver |
| Skill bars animate on scroll | `useSkillBars.js` — IntersectionObserver + `data-width` |
| Infinite marquee | `Marquee.jsx` — doubled items + `marqueeAnim` keyframe |
| Project card top-border gradient sweep | `Projects.module.css ::before` + hover transition |
| Pulsing ripple rings on contact avatar | `Contact.module.css` — staggered `ripple` keyframes |

---

## 📁 Folder Structure

```
faisal-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── portfolioData.js       ← all CV content lives here
    ├── hooks/
    │   ├── useCursor.js
    │   ├── useReveal.js
    │   └── useSkillBars.js
    ├── styles/
    │   └── global.css             ← tokens, keyframes, reset
    └── components/
        ├── Cursor.jsx / (no CSS — uses #cursor in global)
        ├── Loader.jsx + Loader.module.css
        ├── ParticleCanvas.jsx
        ├── Navbar.jsx + Navbar.module.css
        ├── Hero.jsx + Hero.module.css
        ├── Card3D.jsx + Card3D.module.css
        ├── Marquee.jsx + Marquee.module.css
        ├── Experience.jsx + Experience.module.css
        ├── Skills.jsx + Skills.module.css
        ├── Projects.jsx + Projects.module.css
        ├── Education.jsx + Education.module.css
        ├── Contact.jsx + Contact.module.css
        └── Footer.jsx + Footer.module.css
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js ≥ 18** and **npm ≥ 9**

### Install & Run

```bash
# 1. Enter the project folder
cd faisal-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
# Output goes to dist/
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customisation

All CV data is centralised in **`src/data/portfolioData.js`**.  
Edit that one file to update your name, experience, skills, projects, education, and contact details — no other file needs to change.

To tweak colours, open **`src/styles/global.css`** and edit the `:root` CSS variables.
