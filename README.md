# Owais — Personal Mission Dossier

This repository contains the personal portfolio website for **Owais**, a student from Karnataka, India, exploring biology, medicine, artificial intelligence, software, hardware, computer vision, and interface design. The website presents those interests as a connected trajectory: from living systems to learning systems.

> **Note:** This is an original personal portfolio. Its archival, space-age visual language is inspired by scientific field notes and mission documentation; it is not affiliated with, endorsed by, or an official property of NASA.

## Project at a glance

The site uses a responsive, one-page narrative structure instead of a conventional card-first portfolio. It introduces Owais’s academic direction, logs project experiments, maps core fields of inquiry, and closes with the long-term medicine + technology trajectory.

| Area | Summary |
| --- | --- |
| **Purpose** | Present an interdisciplinary student portfolio with a research-minded, memorable point of view. |
| **Audience** | Mentors, educators, research programmes, collaborators, and future academic opportunities. |
| **Visual direction** | Mission Notebook: archival space-age modernism, scientific-field-note details, and editorial typography. |
| **Signature color** | Signal Vermilion `#FF5A3C`, used as an equipment-label accent for status, active states, and mission markers. |
| **Primary technologies** | React 19, TypeScript, Vite, Tailwind CSS 4, and Lucide icons. |

## Portfolio content

The portfolio is structured around four connected records. The **Trajectory** section describes how Owais learns by understanding mechanisms and testing ideas. The **Project Log** records experiments including the NEET Mock 2035 Engine, Cortex Vision, a JARVIS-style desktop assistant, and Niyyah. The **Fields** section connects biology and medicine with AI, software, hardware, physics, and systems thinking. The final **Forward Vector** section sets out a long-term interest in medicine + technology, including diagnostics, medical AI, computer vision, and biomedical systems.

## Design system

The interface follows a deliberately restrained visual system. Deep mission navy provides focus and contrast; paper-white and mist-blue surfaces make the document-like sections feel archival; Signal Vermilion functions as a precise marker rather than a default background. **DM Serif Display** carries the large editorial statements, while **Space Grotesk** provides compact technical labels and navigation metadata.

The layout includes a persistent mission rail on large screens, numbered dossier sections, experiment classifications, observation notes, orbit nodes, and technical-plate annotations. Motion is light and optional, with reduced-motion support built in.

## Local development

Install the project dependencies with `pnpm install`, then start the local development server with `pnpm dev`. The application will run through Vite and update automatically as source files change.

```bash
pnpm install
pnpm dev
```

Use the following command to confirm that TypeScript remains valid and that the site can be bundled for production.

```bash
pnpm check && pnpm build
```

## Project structure

| Path | Role |
| --- | --- |
| `client/src/pages/Home.tsx` | The complete one-page portfolio experience and its content model. |
| `client/src/index.css` | Mission Notebook theme tokens, typography, texture, animations, and responsive visual primitives. |
| `client/src/App.tsx` | Application routing and dark-theme initialization. |
| `client/index.html` | Page metadata, web fonts, and favicon configuration. |
| `ideas.md` | The selected visual direction, brand language, and implementation decisions. |

## Updating the portfolio

The copy and project summaries are kept near the top of `client/src/pages/Home.tsx`, making it straightforward to add new experiments, project links, achievements, or academic milestones. When adding project imagery, use externally hosted or project-managed asset URLs rather than storing large media files in the repository. This keeps the source lightweight and supports reliable static deployments.

## Live site

The current deployed portfolio is available at [owaisnasa-mujaaapq.manus.space](https://owaisnasa-mujaaapq.manus.space).

---

Built as a personal archive for an endlessly curious student who likes learning how things work—and making ideas real.
