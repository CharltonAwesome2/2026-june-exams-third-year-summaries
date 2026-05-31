# Third Year Module Summaries

A comprehensive, modular study application for third-year university modules, starting with **ITS Information Systems 3: Database Systems**.

## Features

- **Module Landing Page** – Select from available third-year modules
- **Chapter-by-Chapter Navigation** – Tab interface for easy access
- **Rich Learning Content** per chapter:
  - Context & Prerequisites
  - Real-World Analogies
  - Common Misconceptions
  - Exam Tips & High-Yield Insights
  - Key Takeaways
  - Chapter Objectives & Key Concepts
  - Additional Deep-Dive Points
  - Comparison Tables (Chen vs Crow's Foot, etc.)
  - Interactive Practice Questions with Model Answers (bullet-point format)
- **Dark / Light Theme Toggle** – Dark mode default, persists via localStorage
- **Fully Responsive** – Works on desktop, tablet, and mobile
- **Modular Architecture** – Easily add more modules

## Current Modules

| Module | Chapters | Description |
|--------|----------|-------------|
| ITS Information Systems 3 | 6 | Database Systems: Design, Implementation, and Management (10th Edition) – Chapters 1–6 |

## Tech Stack

- **React 19** – UI framework
- **Vite 7** – Build tool and dev server
- **CSS Modules** – Component-scoped styling with global CSS variables
- **No external UI libraries** – All components built from scratch

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone or download the project
cd 2026-june-exams-third-year-summaries

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173` (or next available port).

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.module.css          # App-specific styles
├── main.jsx                # Entry point
├── components/             # Reusable UI components
│   ├── Button/             # Tab button component
│   ├── Card/               # Card layout components
│   ├── ComparisonTable/    # Reusable comparison table component
│   ├── PageShell/          # Page layout wrapper
│   ├── Table/              # Table and TableRow components
│   └── ThemeToggle/        # Dark/light theme switcher
├── data/                   # All content lives here
│   ├── index.js            # Module registry
│   └── its-information-systems-3/
│       ├── index.js        # Module definition
│       ├── welcome.js      # Module welcome content
│       └── chapter1-6.js   # Individual chapter data
└── styles/
    ├── global.css          # Global resets and base styles
    └── theme.css           # Dark/light CSS variables
```

## Adding a New Module

1. Create a new folder under `src/data/` (e.g., `src/data/web-development-3/`)
2. Create `index.js` exporting your module object with:
   - `id`, `name`, `description`, `icon`, `color`
   - `welcome` object
   - `chapters` array
3. Import and add your module to the `modules` array in `src/data/index.js`

See `src/data/its-information-systems-3/` for a complete example.

## Content Format

Chapter data files are **pure JavaScript objects** – no HTML, no markdown. Each chapter includes:

```javascript
{
  id: "unique-id",
  title: "Chapter X",
  subtitle: "Subtopic",
  badge: "Label",
  contextAndPrerequisites: [...],
  realWorldAnalogy: "...",
  commonMisconceptions: [...],
  examTips: [...],
  keyTakeaway: "...",
  furtherConnections: [...],
  objectives: [...],
  keyConcepts: [...],
  additionalKeyPoints: [...],
  content: "...",
  comparisonTable: { ... }, // optional
  exercises: [
    { q: "...", a: ["bullet", "points"] }
  ]
}
```

Answers are stored as **arrays** for automatic bullet-point rendering.

## Styling

- **CSS Variables** for theming – defined in `src/styles/theme.css`
- **Dark theme default** – light theme available via toggle
- **All components use `.module.css`** – no style leakage
- **Global variables** for colors, spacing, radius, shadows

### Theme Variables

| Variable | Dark Theme | Light Theme |
|----------|------------|-------------|
| `--bg-primary` | `#0f172a` | `#f8fafc` |
| `--bg-secondary` | `#1e2937` | `#ffffff` |
| `--text-primary` | `#e2e8f0` | `#0f172a` |
| `--accent` | `#60a5fa` | `#3b82f6` |

## Browser Support

Tested and working on:
- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Known Issues

None currently. Theme toggle, responsive layout, and all interactive features function as expected.

## Future Plans

- Additional third-year modules (Web Development, Software Engineering, Networking)
- Search functionality across chapters
- Progress tracking and quiz mode
- Print-friendly study guides

## License

Private – for educational use only.

## Credits

- Built with React 19 and Vite 7
- Content based on Database Systems: Design, Implementation, and Management (10th Edition)
- Icons via emoji (no external icon libraries)
- **DeepSeek** – Architecture design, component implementation, content extraction, and patient assistance throughout development