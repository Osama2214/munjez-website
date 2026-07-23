# Munjez Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fmunjez-website.vercel.app%2F)](https://munjez-website.vercel.app/)
[![Vercel Deployment](https://img.shields.io/badge/deployed%20on-vercel-black?logo=vercel)](https://vercel.com)
[![Language Support](https://img.shields.io/badge/languages-English%20%7C%20Arabic-purple)](#localization)

The official codebase for the landing and download website of **Munjez** — a beautiful, offline-first, free productivity suite for Windows, Linux, and Android.

---

## 🚀 About the Website

This website serves as the landing page, documentation hub, and download gateway for the Munjez app. It is built using vanilla web technologies (**HTML5, CSS3, Vanilla JS**) to ensure lightning-fast loading speeds, responsiveness, and zero dependency overhead.

### Key Features
* 🌐 **Bilingual (EN/AR) Support**: Seamless translation toggling between English and Arabic, persisting the user's preference in `localStorage` and automatically adjusting document layouts (RTL/LTR).
* ⚡ **Performance Optimized**: Inline styling, lazy image loading, asynchronous script execution, and offscreen rendering containment (`content-visibility: auto`) for high Core Web Vitals scores.
* 🌌 **Modern Aesthetics**: Dark-themed cyberpunk design featuring a custom interactive HTML5 canvas particle background, mouse-hover glow effects, and glassmorphism.
* 📁 **Platform-Specific Guides**: Dedicated guides for installing on Windows (with SmartScreen bypass instructions) and Linux (with AppImage, deb, and rpm package setup).
* 🔧 **Vercel Hosting Ready**: Includes pre-configured routing in `vercel.json` for clean, extension-free URLs.
* 🔍 **SEO & Schema Markup**: Optimized with semantic tags, sitemap.xml, robots.txt, and complete JSON-LD Structured Data for software applications.

---

## 📁 Codebase Structure

### Directory Tree
```text
munjez-website/
├── changelog/                  # Update history and release logs
│   └── index.html
├── icons/                      # Website UI icons & logos
├── linux-install/              # Linux installation instructions
│   └── index.html
├── privacy-policy/             # Privacy disclosure policy page
│   └── index.html
├── screenshots/                # Application feature screenshots
├── support/                    # Help center & FAQ directory
│   └── index.html
├── terms/                      # Terms of Service page
│   └── index.html
├── uninstall-feedback/         # Post-uninstall feedback survey
│   └── index.html
├── warning/                    # App installation warning steps
│   └── index.html
├── windows-install/            # Windows installation guide
│   └── index.html
├── 404.html                    # Custom page-not-found handler
├── google0ef36164341f145b.html # Google site verification file
├── index.html                  # Main website landing page
├── lang.js                     # Global translation dictionary (EN/AR)
├── robots.txt                  # Search engine crawl directives
├── site.webmanifest            # Progressive Web App configuration
├── sitemap.xml                 # Search engine site index map
└── vercel.json                 # Vercel deployment routes
```

### Key Files Reference
* 📄 [index.html](file:///D:/munjez/munjez-website/index.html) — Main website landing page markup, styles, and animation logic.
* 📄 [lang.js](file:///D:/munjez/munjez-website/lang.js) — Client-side translation dictionary containing English and Arabic texts.
* 📄 [404.html](file:///D:/munjez/munjez-website/404.html) — Page shown when a requested URL is not found.
* 📄 [vercel.json](file:///D:/munjez/munjez-website/vercel.json) — Vercel routing configuration for clean URLs and headers.
* 📂 [changelog/index.html](file:///D:/munjez/munjez-website/changelog/index.html) — Application updates history and release logs.
* 📂 [windows-install/index.html](file:///D:/munjez/munjez-website/windows-install/index.html) & [linux-install/index.html](file:///D:/munjez/munjez-website/linux-install/index.html) — OS-specific setup guides.
* 📂 [support/index.html](file:///D:/munjez/munjez-website/support/index.html) — Support center and FAQ page.
* 📂 [privacy-policy/index.html](file:///D:/munjez/munjez-website/privacy-policy/index.html) & [terms/index.html](file:///D:/munjez/munjez-website/terms/index.html) — Legal terms and disclosures.
* 📂 [uninstall-feedback/index.html](file:///D:/munjez/munjez-website/uninstall-feedback/index.html) — Feedback page shown after app deletion.

---

## 🌐 Localization

The website uses a custom, lightweight client-side localization system defined in [lang.js](file:///D:/munjez/munjez-website/lang.js).

1. **Storage**: The chosen language is persisted in `localStorage` under the key `munjez-lang` (`en` or `ar`).
2. **Preventing Flash of Unlocalized Content (FOUC)**: An inline script in `<head>` runs immediately to apply `dir="rtl"` and `lang="ar"` to `<html>` if the saved language is Arabic, preventing any visual layout shifting during page loading.
3. **Interactive Binding**: DOM nodes with the `data-t` attribute are automatically localized using values from the dictionary when the language toggles:
   ```html
   <span data-t="nav-features">Features</span>
   ```

---

## ⚙️ Hosting & Deployment

This project is deployed directly on **Vercel** for optimal speed and global availability.

* **Clean URLs**: Vercel configuration redirects `/filename.html` routes to `/filename` automatically to provide modern, extension-free URLs.
* **Cache Control**: Configured custom HTTP headers inside [vercel.json](file:///D:/munjez/munjez-website/vercel.json) to set correct headers and cache-control rules for assets.

---

## ✍️ Author & Maintainer

* **Osama Ahmed** (Osama2214)
* GitHub Profile: [@Osama2214](https://github.com/Osama2214)
* Main Application Repository: [munjez-releases](https://github.com/Osama2214/munjez-releases)
