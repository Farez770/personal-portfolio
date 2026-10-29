# Asfaqur Rahman — Developer Portfolio

A responsive, dark-themed developer portfolio built with React, Vite, Tailwind CSS v4, React Router, Framer Motion, and Lucide icons.

## Features

- Responsive navbar with mobile menu
- Hero section with animated floating technology badges, glowing particles, and light trails
- About, skills, education, experience, projects, and contact sections
- Dedicated project-detail routes for FitLog, BazarDor, and TaskPad
- Download-resume button
- Responsive project cards with live demo links
- Motion-reduction support
- Easy-to-edit project and skills data files
- Custom SVG project preview images included

## Getting started

Requirements: Node.js 20.19+ or 22.12+ recommended, and npm.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. Replace placeholder GitHub, LinkedIn, and email links in:
   - `src/components/sections/Hero.jsx`
   - `src/components/sections/Contact.jsx`
   - `src/components/layout/Footer.jsx`
2. Add your portrait image to `public/images/` and update the hero card in `src/components/sections/Hero.jsx`. The initials avatar is currently a placeholder.
3. Add your actual education details in `src/components/sections/EducationExperience.jsx`.
4. Add your client repository URLs in `src/data/projects.js` (`repoUrl`).
5. Replace `public/resume.pdf` with your final resume PDF. Until you add it, the download button points to a file that does not exist.
6. Update skills and their status in `src/data/skills.js`.
7. Add real development challenges and outcomes to each project case study; current challenge text is a starting draft, not a claim of exact personal history.
8. Update hobbies in `src/components/sections/About.jsx` with your real interests.
9. If you want a phone or WhatsApp contact, add it in `src/components/sections/Contact.jsx`.

## Project routes

- `/` — Portfolio homepage
- `/projects/fitlog`
- `/projects/bazardor`
- `/projects/taskpad`

## Tech background animation

`src/components/visuals/TechBackground.jsx` contains the floating technology badges, ambient glow, particles, and light trails. It uses CSS keyframes and Framer Motion. `src/index.css` includes a `prefers-reduced-motion` media query.

## Notes

- FitLog and BazarDor link to the live URLs supplied by the project owner.
- TaskPad is marked as in development; add a live URL after deployment.
- Social links and contact details are placeholders and must be replaced before public launch.
- The education section is editable because the institution and qualification details have not yet been provided.


### Background artwork
The hero section uses `public/images/tech-portfolio-background.webp` as its neon technology background. To adjust how visible it is, edit the `opacity-45 sm:opacity-55` classes in `src/components/sections/Hero.jsx`. The dark overlays are intentional to keep the hero text readable.
