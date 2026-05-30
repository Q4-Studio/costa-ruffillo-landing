# Agent Notes

- This is a static GitHub Pages repo: no package manager, build step, test runner, linter, or CI config is present.
- Root `index.html` is the public selector page. GitHub Pages serves it automatically; it links to `landing-costa/` and `landing-ruffillo/`.
- Each landing is self-contained: `landing-*/index.html`, `style.css`, `script.js`, and local `assets/`. Keep paths relative so GitHub Pages works from a project subpath.
- `.gitignore` intentionally excludes `src/` and `docs/superpowers/`; they are source/reference material, not the hosted site.
- `.nojekyll` is present for GitHub Pages. Keep it.
- Footer credit should remain `Headshot` linking to `https://www.headshotagency.it/`.
- Facebook sections use basic `plugins/page.php` page-card iframes with no timeline tabs. Avoid Meta SDK `fb-page` widgets and timeline/post embeds here; previous versions showed blank/loading timelines.
- Do not show vacant units such as `Sfitto` in the public `Negozi` sections.
- To verify after edits, open `index.html` locally and both landing folders, or run focused searches for removed public text: `Sfitto`, `PEC`, `Q4 Studio`, `fb-page`, `connect.facebook.net`.
