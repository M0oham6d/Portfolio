# Muhammad Ayman — Cybersecurity & Systems Engineer Portfolio

A premium, interactive, single-page portfolio application built for cybersecurity professionals. Styled with a sleek "Zero Trust" visual aesthetic, high-contrast dark accents, robust responsive layouts, and motion-based interactive sections.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vite.dev/) for lightning-fast development and optimized production builds.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for fluid, modern, utility-first styling.
- **Animations**: [motion](https://github.com/motiondivision/motion) (via `motion/react`) for graceful, hardware-accelerated transitions and interactive layouts.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable system-level vector iconography.
- **Language**: [TypeScript](https://www.typescript.org/) ensuring complete compile-time safety and type definitions across all data and components.

---

## ✨ Key Features

### 💻 1. Hero Command Center
- Dynamic entry styling introducing **AYMAN.SEC**.
- Interactive terminal-style typography paired with responsive display layouts.
- Quick navigation buttons to view the interactive resume or contact directly.

### 🛡️ 2. Skills & Domains of Expertise
- Structured classification of technical proficiencies (e.g., Network Security, Threat Hunting, Scripting & Automation, Cryptography).
- Visual indicators depicting confidence levels or certification matching.

### 📁 3. Interactive Projects Sandbox
- Live simulated project environments where visitors can interact with codebase maps, terminal previews, or security architecture diagrams.
- Clean detail modals with responsive download and view parameters.

### 🏅 4. Secure Certifications Vault
- Searchable, category-filtered catalog of professional security credentials.
- Real-time search filter query matching.
- Secure simulation wrappers for previewing and downloading individual credential payloads.

### 📄 5. Interactive Resume Facsimile
- Fully responsive, pixel-perfect digital copy of a curated professional curriculum vitae.
- **Expandable Facsimile View**: Allows seamless toggle between summary and extensive detailed histories.
- **Print Optimization**: Supports native `window.print()` stylesheets for clean, high-quality offline paper layouts.
- **Direct PDF Download**: Easily download authentic, compiled resume PDFs directly from the container's public document directory.

### 📬 6. Compliant Contact Node
- Clean secure messaging interface allowing clients, recruiters, and security researchers to communicate directly or connect through external social streams (LinkedIn, GitHub).

---

## 📂 Project Structure

```text
├── public/                 # Static assets (Resume PDFs, system images)
├── src/
│   ├── components/         # Highly modular, atomic UI components
│   │   ├── Navbar.tsx      # Sticky interactive header controls
│   │   ├── Hero.tsx        # Command center display section
│   │   ├── Skills.tsx      # Expertise bento grid
│   │   ├── Projects.tsx    # Live simulation project viewer
│   │   ├── Certifications.tsx # Credentials & certificates showcase
│   │   ├── ResumeSection.tsx  # Dynamic interactive resume facsimile
│   │   ├── Contact.tsx     # Outreach form & connection links
│   │   └── Toast.tsx       # Standard notification alerts
│   ├── App.tsx             # Main entry view layout wrapping all modules
│   ├── main.tsx            # React application mounting point
│   ├── index.css           # Global CSS and Tailwind variables mapping
│   ├── portfolioData.ts    # Comprehensive data model containing personal records
│   └── types.ts            # Project-wide TypeScript interface definitions
├── package.json            # NPM script declarations & dependency versions
└── vite.config.ts          # Build configuration and environment routing
```

---

## ⚙️ Local Development & Scripts

### Installation
Restore all project dependencies:
```bash
npm install
```

### Run Development Server
Spin up the local Vite server:
```bash
npm run dev
```

### Build for Production
Bundle the production-ready static assets in the `dist/` directory:
```bash
npm run build
```

### Linter & Validation
Verify syntax accuracy and TypeScript integrity:
```bash
npm run lint
```
