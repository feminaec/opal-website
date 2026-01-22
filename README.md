# Opal Media Website

Modern portfolio website for Opal Media built with React, TypeScript, and Tailwind CSS.

## Run the Website

```bash
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

## Edit Content

All content is in: `src/constants/data.ts`

Change:
- Services (titles, descriptions, features)
- Portfolio projects (titles, categories, moods)
- About advantages
- Awards

## Add Portfolio Images

Place images in: `public/images/portfolio/`

Images should match the filenames in `data.ts`:
- `carnitapu-featured.png`
- `listening-to-films.jpg`
- `static-bloom.jpg`
- etc.

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Full page components
├── constants/      # All data (data.ts)
└── main.tsx        # App entry point

public/
└── images/
    └── portfolio/  # Your portfolio images
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router

---

© 2026 Opal Media
