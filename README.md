Here is a professionally formatted `README.md` for your project. I have structured it to be clean, scannable, and standard for modern web development repositories, incorporating your specific tech stack and deployment workflows.

---

# Satsang Vihar Delhi - Official Website

A modern, high-performance, and responsive website built for **Satsang Vihar New Delhi**. This platform is dedicated to spreading the ideology of **Sree Sree Thakur Anukulchandra**, featuring real-time prayer schedules, event management, and a comprehensive educational portal.

---

## 🚀 Tech Stack

| Category | Technology |
| --- | --- |
| **Frontend** | React 18, Vite |
| **Styling** | Tailwind CSS v4 (Custom Amber Theme) |
| **Routing** | React Router DOM v6 (HashRouter) |
| **Animations** | React Fast Marquee, Swiper.js, React Scroll |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages (gh-pages) |

---

## 📁 Project Structure

```text
satsang-vihar-delhi/
├── public/                 # Static assets
│   └── assets/Photos/      # Local image fallbacks (Carousel, Logos)
├── src/
│   ├── components/         # Reusable UI (Navbar, Footer, Modals)
│   ├── sections/           # SPA Sections (Hero, Mission, Events, Contact)
│   ├── pages/              # Main Route Views (Home, History, Conference)
│   ├── App.jsx             # Router config & Global Layout
│   ├── index.css           # Tailwind v4 Theme & Custom CSS Variables
│   └── main.jsx            # React Entry Point
├── vite.config.js          # Build tool configuration
└── package.json            # Scripts & Dependencies

```

---

## 🎨 Design System

This project uses a custom-tuned **Amber-based Design System** defined in `index.css`.

* **Responsive:** Mobile-first architecture.
* **Adaptive:** Automatic Light/Dark mode switching based on system preference.
* **Theming:** Centralized CSS variables for Primary (`#f59e0b`) and Hover (`#fbbf24`) states to ensure UI consistency.
* **Optimization:** Hybrid image loading using **Cloudinary CDN** with automatic local failovers.

---

## 🛠️ Development & Installation

### Prerequisites

* **Node.js** (v18 or higher)
* **npm** or **yarn**

### 1. Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd satsang-vihar-delhi

# Install dependencies
npm install

```

### 2. Available Scripts

* `npm run dev`: Launch development server at `localhost:5173`.
* `npm run build`: Generate optimized production build in `/dist`.
* `npm run deploy`: Build and deploy the site to the `gh-pages` branch.

---

## 📦 Deployment (GitHub Pages)

The project is optimized for deployment via **GitHub Pages**.

1. **Routing:** Uses `HashRouter` to prevent 404 errors on sub-page refreshes.
2. **Base Path:** Configured as `base: "/"` in `vite.config.js` for custom domain support.
3. **Custom Domain:** Deployment automatically respects the `CNAME` file pointing to `satsangvihardelhi.org`.

---

## 🔧 Troubleshooting

| Issue | Solution |
| --- | --- |
| **Tailwind Styles Missing** | Run `npm install` to ensure v4 engine is correctly initialized. |
| **Red Buttons in Dark Mode** | Ensure `index.css` variables are updated to use Amber brand colors (`brand-500`). |
| **Broken Routes on Refresh** | Confirm the project is using `HashRouter` instead of `BrowserRouter`. |
| **Images Not Showing** | Check the `onError` handler in the `img` tags; ensure local fallback exists in `/public/assets/Photos/`. |

---

## 📱 Key Features

* **Prayer Times:** Dynamic modal displaying monthly schedules.
* **Event Portal:** Swiper-based carousel for upcoming conferences.
* **SPA Navigation:** Smooth-scroll integration with ScrollSpy.
* **Global Access:** Multipage support for History and specialized Conference details.

---

## 📄 License & Acknowledgments

**License:** All rights reserved © 2026 Satsang Vihar New Delhi.

**Built with dedication to the Satsang community and the ideology of Sree Sree Thakur Anukulchandra.**

---

### 🌐 Official Preview

*(Visit: [www.satsangvihardelhi.org](https://www.satsangvihardelhi.org))*

---

**Maintained by:** Satsang Vihar New Delhi Technical Team