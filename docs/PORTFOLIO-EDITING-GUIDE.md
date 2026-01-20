# Portfolio Section - Quick Editing Guide

## How to Add/Edit Images

All portfolio content is in one file: **`constants/data.ts`**

### 1. Featured Film (Carnitapu)

To edit the featured film section, find the `featuredFilm` object around **line 41**:

```typescript
export const featuredFilm = {
  title: 'Carnitapu',
  year: '2021',
  category: 'Short Film',
  mood: 'Hazy, Melancholic',
  tagline: '"For the light leaks and long silences"',
  description: 'A dreamlike exploration of memory and loss...',
  image: '/images/portfolio/carnitapu-featured.jpg' // ← Change this path
};
```

**To change the Carnitapu image:** Replace the `image` path with your actual image location.

---

### 2. Portfolio Grid Projects

To edit any of the 6 portfolio projects, find `portfolioProjects` array starting at **line 1**:

```typescript
export const portfolioProjects = [
  {
    title: 'Listening to Films That Drift',
    category: 'Documentary',
    mood: 'Contemplative',
    image: '/images/portfolio/listening-to-films.jpg' // ← Change this
  },
  // ... more projects
];
```

**To change any project image:** Simply update the `image` path for that project.

---

## Where to Put Your Images

### Option 1: Public Folder (Recommended)
1. Create folder: `public/images/portfolio/`
2. Put your images there
3. Reference them as: `/images/portfolio/your-image.jpg`

### Option 2: External URL
Use any hosted image URL:
```typescript
image: 'https://your-website.com/images/film.jpg'
```

### Option 3: Assets Folder
1. Create folder: `src/assets/images/portfolio/`
2. Import images in your component
3. Use imported references

---

## Quick Tips

✅ **All text content** (titles, descriptions, moods) is in `constants/data.ts`
✅ **All images** are controlled by the `image` property
✅ **No need to touch** `PortfolioSection.tsx` - it reads from the data file
✅ **Supported formats**: JPG, PNG, WebP, GIF

---

## File Locations

- **Data (edit here):** `constants/data.ts`
- **Component (don't need to edit):** `components/PortfolioSection.tsx`
- **Images (create this):** `public/images/portfolio/`

---

## Example: Adding a New Project

In `constants/data.ts`, add to the `portfolioProjects` array:

```typescript
{
  title: 'My New Film',
  category: 'Documentary',
  mood: 'Cinematic',
  image: '/images/portfolio/my-new-film.jpg'
}
```

That's it! The component will automatically display it.
