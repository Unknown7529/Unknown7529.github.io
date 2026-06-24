# Portfolio — Abeil Rafli Aldhani

Portfolio web personal dibangun dengan HTML, CSS, dan JavaScript murni.

## 📁 Struktur File

```
/
├── index.html          ← Struktur HTML (markup saja, tanpa CSS/JS inline)
├── css/
│   └── style.css       ← Semua styling & animasi
├── js/
│   ├── data.js         ← Data CV (edit file ini untuk update konten)
│   └── main.js         ← Logic: canvas, typed text, scroll reveal, nav
└── README.md
```

## ✏️ Cara Update Konten

Cukup edit **`js/data.js`** — semua teks, skill, pengalaman, pendidikan, dan sertifikat ada di sana. Tidak perlu menyentuh `index.html` atau `main.js`.

## 🚀 Deploy ke GitHub Pages

### Langkah 1 — Buat Repository
1. Login ke [github.com](https://github.com)
2. Buat repository baru dengan nama: `USERNAME.github.io`
   _(ganti `USERNAME` dengan username GitHub kamu)_
3. Set **Public** → **Create repository**

### Langkah 2 — Upload Semua File
**Via GitHub Web:**
1. Klik **"Add file > Upload files"**
2. Upload semua file & folder (`index.html`, `css/`, `js/`, `README.md`)
3. Klik **"Commit changes"**

**Via Git CLI:**
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages
1. **Settings** → **Pages**
2. Source: branch `main`, folder `/ (root)`
3. Klik **Save**
4. Akses: `https://USERNAME.github.io` (aktif dalam 1–2 menit)

## ✨ Fitur

- 🌐 Animasi jaringan komputer di background
- ⌨️ Typed text animation (5 role bergantian)
- ✨ Scroll reveal animation
- 📱 Responsive + hamburger menu mobile
- 🎨 Dark cybersecurity aesthetic
- 📦 Data terpisah di `data.js` — mudah di-update

## 📞 Kontak

**Abeil Rafli Aldhani** · abeilrfl@gmail.com · 085162741144
