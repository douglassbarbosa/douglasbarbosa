# douglasbarbosa.com

> Software is just the medium. What I'm really building is outcomes.

Personal website — portfolio, freelance services, blog and professional CV.  
Built mobile-first with vanilla HTML, CSS and JavaScript. No frameworks, no build step, no dependencies.

🌐 **[douglasbarbosa.com](https://douglasbarbosa.com)**

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, tagline and navigation links |
| `skills.html` | My Skills — tech stack, stats and soft skills |
| `services.html` | How can I help you? — freelance services |
| `portfolio.html` | What I did. — projects and case studies |
| `posts.html` | Posts — listing with category and format filters |
| `posts/*.html` | Individual post pages |

---

## Project Structure

```
.
├── index.html
├── skills.html
├── services.html
├── portfolio.html
├── posts.html
├── posts/
│   ├── post-template.html
│   └── *.html
└── assets/
    ├── main.css       # Shared design system and styles
    └── i18n.js        # EN / PT-BR translations and language toggle logic
```

---

## Bilingual — EN / PT-BR

Language toggle lives in the nav bar and persists via `localStorage`.  
All strings are managed in `assets/i18n.js` under `en` and `pt` objects.

To add a new translatable string:
1. Add the key in both `en` and `pt` blocks inside `i18n.js`
2. Use `data-i18n="your.key"` on the HTML element

---

## Adding a New Post

1. Duplicate `posts/post-template.html`
2. Rename it — e.g. `posts/my-new-post.html`
3. Edit the content
4. Add a card in `posts.html`:

```html
<a class="db-card" href="posts/my-new-post.html" data-cat="tech" data-format="article">
  <div class="db-card-meta">
    <span class="db-card-cat tech">Technical</span>
    <span class="db-card-format">Article</span>
  </div>
  <div class="db-card-title">Your post title</div>
  <div class="db-card-desc">Short description.</div>
  <div class="db-card-footer">
    <span class="db-card-date">Jun 2026</span>
    <span class="db-card-arrow">↗</span>
  </div>
</a>
```

`data-cat`: `tech` · `career` · `general`  
`data-format`: `article` · `note`

---

## Adding a Portfolio Project

Add a card inside `<div class="db-grid" id="grid">` in `portfolio.html`:

```html
<a class="db-card" href="https://your-project.com" target="_blank" data-type="app">
  <div class="db-card-top">
    <span class="db-card-type">App</span>
    <span class="db-card-arrow">↗</span>
  </div>
  <div class="db-card-title">Project Name</div>
  <div class="db-card-desc">Short description.</div>
  <div class="db-card-tags">
    <span class="db-card-tag">Next.js</span>
    <span class="db-card-tag gray">Live</span>
  </div>
</a>
```

`data-type`: `app` · `website` · `doc` · `api`

---

## Design System

| Token | Value |
|-------|-------|
| Navy (bg dark) | `#0F172A` |
| Blue (accent) | `#2563EB` |
| Cyan (accent 2) | `#06B6D4` |
| Background | `#F8FAFC` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono font | JetBrains Mono |

All tokens are available as CSS variables in `assets/main.css`.

---

## Deployment

Static site — no build step required. Open `index.html` locally or deploy to:

- **Hostinger** — connect this repo and deploy automatically on every push to `main`

---

## License

© 2026 Douglas Barbosa. All rights reserved.