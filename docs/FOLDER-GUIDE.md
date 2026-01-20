# 📁 Folder Guide - What Each Folder Does

A simple explanation of every folder and file in the root directory.

---

## 📂 Root Directory

```
opal website/
├── 📁 src/              ← YOUR CODE LIVES HERE
├── 📁 public/           ← IMAGES & STATIC FILES GO HERE
├── 📁 docs/             ← DOCUMENTATION (this file!)
├── 📁 dist/             ← Auto-generated build (don't touch)
├── 📁 node_modules/     ← Dependencies (don't touch)
├── 📄 README.md         ← Project overview
└── ⚙️ Config files      ← Settings (rarely need to edit)
```

---

## 🎯 What You'll Actually Use

### 1. `src/` - Your Source Code
**What it is:** All your React components and code

**What's inside:**
- `components/` - UI components (Hero, Portfolio, etc.)
- `constants/data.ts` - ✨ **EDIT THIS** for content changes
- `pages/` - Different pages/routes
- `App.tsx` - Main app file

**When to use:** When editing code or content

---

### 2. `public/` - Static Assets
**What it is:** Images, fonts, and files that don't need processing

**What's inside:**
- `images/portfolio/` - ✨ **PUT YOUR IMAGES HERE**

**When to use:** Adding portfolio images

---

### 3. `docs/` - Documentation
**What it is:** Guides and reference materials

**What's inside:**
- `PORTFOLIO-EDITING-GUIDE.md` - How to edit portfolio
- `QUICK-REFERENCE.md` - Quick commands & tips
- `CLEANUP-SUMMARY.md` - What was changed
- `PROJECT-AUDIT-REPORT.md` - Initial audit
- `FOLDER-GUIDE.md` - This file

**When to use:** When you need help or reference

---

## 🚫 What You Can Ignore

### 4. `dist/` - Build Output
**What it is:** Compiled/optimized code for production

**What's inside:** Auto-generated files

**When to use:** Never edit directly (deleted & recreated on build)

---

### 5. `node_modules/` - Dependencies
**What it is:** Installed npm packages

**What's inside:** React, Tailwind, and other libraries

**When to use:** Never touch (managed by npm)

---

## ⚙️ Config Files (Rarely Edit)

These files configure your development tools:

| File | What it does |
|------|-------------|
| `package.json` | Lists dependencies & scripts |
| `package-lock.json` | Locks dependency versions |
| `vite.config.ts` | Vite build tool settings |
| `tailwind.config.js` | Tailwind CSS settings |
| `tsconfig.json` | TypeScript settings |
| `tsconfig.node.json` | TypeScript Node settings |
| `postcss.config.js` | PostCSS settings |
| `index.html` | HTML entry point |
| `.gitignore` | Git exclusions |

**When to edit:** Only when changing project configuration

---

## 🎯 TL;DR - Quick Reference

### To edit content:
→ `src/constants/data.ts`

### To add images:
→ `public/images/portfolio/`

### To read documentation:
→ `docs/`

### To edit components:
→ `src/components/`

### To configure project:
→ Root config files (rarely needed)

---

## 🌳 Complete Tree View

```
opal website/
│
├── 📁 src/ (YOUR CODE)
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── constants/
│   │   └── data.ts (EDIT CONTENT HERE!)
│   ├── pages/
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ConnectPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── 📁 public/ (IMAGES)
│   └── images/
│       └── portfolio/ (PUT IMAGES HERE!)
│           └── README.md
│
├── 📁 docs/ (HELP FILES)
│   ├── PORTFOLIO-EDITING-GUIDE.md
│   ├── QUICK-REFERENCE.md
│   ├── CLEANUP-SUMMARY.md
│   ├── PROJECT-AUDIT-REPORT.md
│   └── FOLDER-GUIDE.md (this file)
│
├── 📁 dist/ (AUTO-GENERATED)
│   └── [build output]
│
├── 📁 node_modules/ (DON'T TOUCH)
│   └── [dependencies]
│
├── 📄 README.md (Project overview)
├── ⚙️ package.json
├── ⚙️ package-lock.json
├── ⚙️ vite.config.ts
├── ⚙️ tailwind.config.js
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── ⚙️ postcss.config.js
├── ⚙️ index.html
└── 🔒 .gitignore
```

---

## 💡 Summary

**Most used folders:**
1. `src/constants/data.ts` - Edit content
2. `public/images/portfolio/` - Add images
3. `docs/` - Read guides

**Ignore these:**
- `dist/` (auto-generated)
- `node_modules/` (dependencies)
- Config files (unless changing settings)

**Total root items:** 14 (much cleaner now!)
- 5 folders (src, public, docs, dist, node_modules)
- 9 files (mostly config)

---

**Still confused? Check [QUICK-REFERENCE.md](QUICK-REFERENCE.md) for common tasks!**
