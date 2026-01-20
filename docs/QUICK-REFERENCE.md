# Quick Reference Card 📌

## ⚡ Most Common Tasks

### 1️⃣ Add Portfolio Images
**Location:** `public/images/portfolio/`

**Required images:**
```
carnitapu-featured.jpg
listening-to-films.jpg
static-bloom.jpg
false-memory.jpg
the-signal.jpg
artifact.jpg
light-leaks.jpg
```

---

### 2️⃣ Edit Portfolio Content
**File:** `src/constants/data.ts`

**Lines 41-49:** Featured film (Carnitapu)
**Lines 1-38:** Portfolio projects

---

### 3️⃣ Start Development Server
```bash
npm run dev
```

---

### 4️⃣ Build for Production
```bash
npm run build
```

---

### 5️⃣ Preview Production Build
```bash
npm run preview
```

---

## 📂 Key Files

| What | Where |
|------|-------|
| **All content data** | `src/constants/data.ts` |
| **Portfolio component** | `src/components/PortfolioSection.tsx` |
| **Portfolio images** | `public/images/portfolio/` |
| **Main app** | `src/App.tsx` |
| **Styling** | `src/index.css` |

---

## 🎨 Image Specs

| Type | Size | Ratio |
|------|------|-------|
| **Featured film** | 1920x823px | 21:9 |
| **Portfolio grid** | 1280x720px | 16:9 |
| **Max file size** | 500KB | - |
| **Formats** | JPG, PNG, WebP | - |

---

## 📚 Documentation

- 📖 **Full editing guide:** [PORTFOLIO-EDITING-GUIDE.md](PORTFOLIO-EDITING-GUIDE.md)
- 🔍 **Audit report:** [PROJECT-AUDIT-REPORT.md](PROJECT-AUDIT-REPORT.md)
- ✅ **Cleanup summary:** [CLEANUP-SUMMARY.md](CLEANUP-SUMMARY.md)

---

## 💡 Pro Tips

✨ **Edit content without touching code** - Everything in `src/constants/data.ts`

✨ **Images auto-display** - Just place in `public/images/portfolio/` with correct names

✨ **Changes reflect immediately** - Development server auto-refreshes

✨ **One source of truth** - All source code in `src/` folder

---

**Keep this file handy for quick reference! 🚀**
