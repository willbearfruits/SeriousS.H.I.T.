# Serious S.H.I.T. Portfolio

> **Noise, Art & Instruments** - The official portfolio website for Serious S.H.I.T., showcasing experimental music devices, performances, and creative work.

[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-success)](https://willbearfruits.github.io/SeriousS.H.I.T./)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## About

Serious S.H.I.T. is an interdisciplinary artist, noise-maker, and teacher building open-source instruments, performances, and tools for breaking sound and images. This repository contains two versions of the portfolio:

- **Preview** (`/preview/`) - Traditional portfolio layout
- **v2 OS Theme** (`/v2/`) - Windows 98-inspired interactive desktop experience

## Philosophy

> "NOTHING IS HOLY."

We build experimental music devices—mostly guitar pedals and noise boxes—for people who think sound equipment should BLEED, not behave. Everything happens at home: circuit design, graphics, enclosures, testing, R&D. Solo operation, no factory, no compromise.

Limited runs of 13 units per design. Once they're gone, they're gone.

## Tech Stack

- **React 19** with TypeScript
- **Vite** (rolldown-vite) for blazing-fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** with HashRouter (GitHub Pages compatible)
- **React Draggable** for the OS theme window system

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Open http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

This site is deployed to GitHub Pages. To deploy:

```bash
# Deploy to gh-pages branch
npm run deploy
```

The deployment script builds the site and pushes the `/dist` folder to the `gh-pages` branch.

## Project Structure

```
SeriousSHIT/
├── src/
│   ├── components/      # Reusable components
│   │   ├── os/         # Windows 98 OS theme components
│   │   └── ...
│   ├── pages/          # Route pages
│   ├── context/        # React contexts (OS state)
│   ├── data/           # Content data (instruments, works, etc.)
│   └── index.css       # Global styles
├── public/             # Static assets
│   └── images/         # Project images
├── dist/              # Build output (generated)
└── vite.config.ts     # Vite configuration
```

## Features

### v2 OS Theme Highlights

- **Boot Sequence** - Authentic Windows 98 startup animation
- **Draggable Windows** - Fully interactive window system
- **Desktop Icons** - Double-click to open applications
- **Taskbar** - Start menu and active window management
- **Easter Eggs** - Konami Code support, playable DOOM
- **Content Showcase** - Instruments, Works, Lab projects

### Security

- All external iframes sandboxed with security attributes
- No hardcoded credentials or sensitive data
- Referrer policy set to `no-referrer` for privacy
- TypeScript strict mode enabled

## Contributing

This is a personal portfolio project, but feel free to fork it for your own use under the MIT license.

## Contact

- **Email**: yaniv.schonfeld@gmail.com
- **Studio**: Jerusalem, Israel
- **Website**: [Serious S.H.I.T.](https://willbearfruits.github.io/SeriousS.H.I.T./)

## License

MIT License - see [LICENSE](LICENSE) file for details.

The portfolio code is open source. Individual instrument designs and artistic works may have separate licensing.

---

**Build one. Break one. Make it yours.**
