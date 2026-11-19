# Can I Get Home Now Bebe?

A personal relationship memory website built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide. It is a static site: there is no server, database, authentication, analytics, or visitor comment form.

## Development

- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm test` runs the focused date calculation tests.
- `npm run typecheck` checks the TypeScript project.
- `npm run build` type-checks and creates the production site in `dist/`.
- `npm run preview` serves the production build locally.

## Story content

- `src/data/relationship.ts` is the source of truth for the important dates.
- `src/data/timeline.ts` contains the three known milestones.
- `public/photos/` contains the relationship photos. The first four date photos are featured; `photo 1.JPG` and `photo 2.jpg` replace the default images in the hero and first-date sections and remain in the shared-moments gallery; other JPG, JPEG, PNG, and WebP files are included as shared moments.
- `src/data/gallery.ts` contains the featured captions and gallery descriptions. The photo manifest is regenerated automatically before development and production builds.
- `src/data/reflections.ts` contains the short reflections.
- The first-date narrative, reflection, and closing letter are already written in their respective components.

The site has no text-entry fields or unfinished prompts. It uses only the supplied dates and general reflections rather than inventing private memories.

The final section has optional Yes/No links that open different prefilled WhatsApp messages. Nothing is sent until the visitor chooses to send it.

The player uses `public/music/background.mp3`, converted locally from the supplied WebM/Opus file; the original is preserved alongside it. It attempts to autoplay and loops automatically; browser autoplay restrictions may require the visitor to press Play. The visitor can pause it at any time. Only publish music you have permission to use.

## GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` runs tests and builds on pushes to `main`, then deploys `dist/` to GitHub Pages. Vite reads the repository name from `GITHUB_REPOSITORY` to set the project-page base path. Enable GitHub Pages with **GitHub Actions** as the build and deployment source in repository settings.

The workflow has been added but cannot be verified as deployed until this project is pushed to a GitHub repository and Pages is enabled there.
