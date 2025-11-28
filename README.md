# Kalaka South Mining SA - Fertilizers Division Website

Draft website mockup for **Kalaka South Mining SA - Fertilizers & Supply Chain Division**.

Built by **Embark Digitals** | Owner: **Ndumiso Yedwa**

## 🌐 Live Preview

**GitHub Pages URL:** [https://ndumiso-y.github.io/Kalaka-Website/](https://ndumiso-y.github.io/Kalaka-Website/)

## 📋 Project Overview

This is a single-page React website showcasing Kalaka's fertilizer division, including:

- **Hero Section** - Positioning statement and CTAs
- **About** - Company overview with content checklist
- **Fertilizer Portfolio** - Product range (Urea, Ammonium Sulphate, CAN, NPK, Phosphates, Potash, Custom)
- **Supply Chain & Footprint** - Logistics and market overview
- **Value Proposition** - Partner benefits and strategic markets
- **Leadership** - Team placeholders
- **Contact & Media Checklist** - Asset requirements for finalization
- **Footer** - Draft disclaimer

## 🛠️ Tech Stack

- **React** 19.0
- **Vite** 7.2.4
- **Tailwind CSS** with `@tailwindcss/postcss`
- **GitHub Actions** for automated deployment

## 🚀 How to Preview Locally

```bash
# Clone the repository
git clone https://github.com/Ndumiso-Y/Kalaka-Website.git
cd Kalaka-Website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📸 Image Assets

Place client-provided images in `public/assets/kalaka/` with these filenames:

- `Logo.png`
- `Hero.png`
- `TruckDroppingFertilizer.png`
- `BreakBulls.png`
- `CEO.png`
- `CFO.png`
- `Fertilizer.png`
- `FertilizerDelivery.png`
- `FertilizerHand.png`
- `FertilizerSorting.png`
- `JumboBags.png`
- `JumboBagsAtNight.png`
- `OperationsDirector.png`
- `Shipment.png`

## ✅ Next Content Steps for Kalaka

To finalize the website, Kalaka needs to provide:

1. **High-resolution logo** (PNG + vector if available)
2. **Hero and operations images** (fertilizer, trucks, ports, warehouses, fields)
3. **Final fertilizer product list** with specifications
4. **TDS/MSDS documents** where available
5. **Leadership photos and biographies**
6. **Confirmed contact details** (address, phone, email)
7. **Legal/compliance notices**
8. **Brand guidelines** (colors, fonts, tone)
9. **Company registration documents**
10. **Marketing collateral or references**

## 🎨 Key Files & Folders

```
kalaka-temp/
├── .github/workflows/deploy.yml   # GitHub Actions deployment
├── public/assets/kalaka/          # Image assets directory
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── SupplyChain.jsx
│   │   ├── Value.jsx
│   │   ├── Leadership.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                    # Main app component
│   └── index.css                  # Tailwind imports
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── vite.config.js                 # Vite config with GitHub Pages base
```

## 📝 Notes

- This is a **draft mockup** - content needs confirmation from Kalaka
- No router implemented yet (single scrolling page with anchor links)
- Images use fallback URLs if local files not found
- Fully responsive design with mobile menu
- Clean builds with no console errors

## 🤝 Contact

**Embark Digitals**
Owner: Ndumiso Yedwa

For content updates or finalization, please provide the assets listed above.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
