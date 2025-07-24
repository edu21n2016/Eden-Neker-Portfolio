# 🧑‍💻 # Eden-Neker-Portfolio Template

A clean, beautiful, and responsive personal portfolio template!

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/864734303433523200/914555903133495336/unknown.png" alt="Portfolio Preview" width="80%" />
</p>

Easily customize `src/portfolio.js` to display your own details. You can also change the global color scheme via `src/_globalColor.scss`.

---

> **Made BY ❤️ Eden Neker**

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [⚙️ How to Use](#️-how-to-use)
- [🔗 Link GitHub & Medium](#-link-github--medium)
- [🖌️ Customization](#%EF%B8%8F-customization)
- [☁️ Deployment](#%EF%B8%8F-deployment)
- [🧰 Technologies Used](#-technologies-used)
- [🎨 Illustrations](#-illustrations)
- [🧠 For the Future](#-for-the-future)

---

## ✨ Features

✔️ Summary & About Me  
✔️ Skills  
✔️ Education  
✔️ Work Experience  
✔️ Open Source Projects (GitHub)  
✔️ Big Projects  
✔️ Achievements & Certifications 🏆  
✔️ Blogs  
✔️ Talks  
✔️ Podcast  
✔️ Contact Me  
✔️ Twitter Timeline  
✔️ GitHub Profile

Live Demo: [developerfolio.js.org](https://developerfolio.js.org/)

---

## 🚀 Getting Started

### Requirements

- Node.js
- npm
- Git
- Docker (optional)

### Docker Users

```bash
docker build -t developerfolio:latest .
docker run -t -p 3000:3000 developerfolio:latest
```

---

## ⚙️ How to Use

```bash
git clone https://github.com/NotSaksh/Developer-Portfolio-Template.git
cd Developer-Portfolio-Template
cp env.example .env        # Linux
copy env.example .env      # Windows
npm install
npm start
```

---

## 🔗 Link GitHub & Medium

### GitHub Projects

Create a `.env` file and add:

```env
REACT_APP_GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
```

Set `showGithubProfile: true` in `portfolio.js`.

### Medium Blogs

```env
MEDIUM_USERNAME=your_medium_username
```

Set `displayMediumBlogs: true` in `portfolio.js`.

---

## 🖌️ Customization

Edit `src/portfolio.js` to update:

- Greeting
- Resume Link
- Social Links
- Skills
- Projects
- Achievements
- Contact Info

Example:

```js
const greeting = {
  title: "Hi, I'm Sakshyam 👋",
  subTitle: emoji("A passionate Full Stack Developer 🚀"),
  resumeLink: "https://your-resume-link"
};
```

Use `emoji("Your text 😎")` for emoji compatibility.

---

## ☁️ Deployment

### GitHub Pages

In `package.json`:

```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```

Follow: https://create-react-app.dev/docs/deployment/#github-pages

---

### Netlify

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NotSaksh/Developer-Portfolio-Template)

---

## 🧰 Technologies Used

- React
- GraphQL
- Apollo Boost
- react-twitter-embed
- react-easy-emoji
- react-headroom
- color-thief

---

## 🎨 Illustrations

- UnDraw (https://undraw.co/illustrations)
- LottieFiles (https://lottiefiles.com/oblikweare)

---

## 🧠 For the Future

- Auto-fetch from LinkedIn
- Move to Gatsby
- Add more themes and layouts
