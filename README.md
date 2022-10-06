[Project Hosted on Netlify](https://timely-figolla-c9d809.netlify.app/)

[Api from freetogame.com](https://freetogame.com)

First project using Astro with React

comments on

- HomeMain.jsx //base component of the ReactJs application
- HomeMainContent.jsx

- [slug].astro

## 🚀 Project Structure

```
/
├── public/
│   ├── css/
│   │   ├── style.css
│   │   └── style.scss
│   ├── favicon.svg
│   └── Freeness.svg
├── src/
│   ├── components/
│   │   ├── Card.astro //not used - leftover from astro
│   │   ├── Footer.astro //nothing exciting
│   │   ├── Header.astro //nothing exciting
│   │   ├── HomeMain.jsx //application starting point imports HomeMainContent and HomeMainSidebar
│   │   ├── HomeMainContent.jsx
│   │   ├── HomeMainSidebar.jsx
│   │   └── MainSidebar.astro //empty - became HomeMainSidebar.jsx
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/
│       ├── [slug].astro //game pages
│       ├── index.astro //home page
│       └── temp.astro
└── package.json
```
