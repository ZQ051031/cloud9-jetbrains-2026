# Cloud9 VALORANT Scout — project conventions

- This is a client-only TypeScript, React and Vite SPA with plain CSS and hand-rolled SVG. Do not add a backend, database, authentication, analytics trackers, external fonts, runtime API calls or secrets.
- Keep the SAMPLE / DEMO notice visible in every view and every export. Synthetic telemetry is never real GRID data. Imported provenance is unverified until a human verifies it. Never commit private telemetry.
- Data contracts are in `src/lib/types.ts`; pure analysis is in `src/lib/analytics.ts`. Use structured `Insight.context` for deterministic rules; do not parse or repeat the insight sentence in counters.
- Map polygons, callouts and corridors are original schematic geometry in `src/lib/maps.ts`. Do not use Riot artwork or represent schematic coordinates as real-world game coordinates. Keep generated casts inside their intended zones with seed reproducibility.
- Use shared filters through `scopeData` and `workspaceAnalysis`. Test empty, normal and invalid inputs. Never invent an insight to fill a card. Explain event-based versus round-based denominators.
- Follow `.editorconfig`. Reuse existing components and libraries before adding dependencies. Keep all imports at the top and keep changes focused.
- After meaningful changes, run `npm test` and `npm run build`. UI or report changes also need `npm run e2e` against a running preview server. Preserve key `data-testid` attributes. Check A4 report output, mobile overflow and console errors.
- Chrome smoke evidence defaults to `~/shots`, outside the repository. Promote only intentional, non-sensitive PNGs into `docs/screenshots/`.
- Record actual JetBrains/Junie/Air work in `docs/AI-WORKFLOW-STORY.md`; do not turn the TODO session log into fictional claims. Devin generated the initial implementation. A human must perform and document the JetBrains workflow.
