# Cloud9 VALORANT Scout

Cloud9 x JetBrains Sky’s The Limit Hackathon 2026 · Category 1: VALORANT Tactical Scouting, Utility Placement & Operator Profiler.

**SAMPLE / DEMO DATA — fictional, seeded, not real GRID data.** All handles, matches and tendencies are synthetic. No backend, authentication, API keys or runtime network calls. This scaffold intentionally contains only a placeholder UI.

## Run

Node 22. `source ~/.nvm/nvm.sh && nvm use 22`, then `npm ci`, `npm test`, `npm run build`, or `npm run dev`. Build output is `dist/`; Vite uses relative asset paths.

## UI integration contract

- `src/data/sampleData.ts`: `sampleData`, `generateSampleData(seed = 2026)`, `TEAMS`, `ROSTERS`, `DATA_SOURCE_LABEL`. 24 matches, 528 rounds, 10,560 ability casts; four teams of five fictional players. Generated only at import, deterministically.
- `src/lib/types.ts`: data interfaces, `Filters`, `Insight`, `AntiStrat`, `phaseAt`. Every match, round and event carries `dataLabel`, as does its dataset. Phase boundaries are [0,20), [20,60), [60,infinity); post-plant flag is not modeled separately.
- `src/lib/maps.ts`: `MAPS[map]` provides original schematic site/callout/spawn/lane polygons (not real layouts or Riot art); `zoneAt(map,x,y)` names a containing zone. SVG coordinate space is 0–100.
- `filterEvents(events, filters)` supports undefined/`all` selectors. `heatmapGrid(events, cols=10, rows=10)` returns cells with count/density. `clusterHotspots(events, radius=8)` greedily selects dense radius neighborhoods per map; share is percent of input events, not rounds.
- `tendencyPercentages(events, keyFn)` returns `{total, items:[{key,count,pct}]}`. Percentages are unrounded numbers; format in the UI.
- `sentinelSetupTendencies(abilityEvents, radius=8)` groups by team/map and uses Sentinel-role casts (including their damage utility), reporting the strongest cluster plus evidence counts.
- `operatorStats(sniperEvents, rounds)` returns `{players,teams}`. Weapon counts include Operator and Odin; angle, timing, pick and hold metrics refer to Operator only. Buy rate is unique buy rounds / team rounds supplied, assuming a stable five-player roster. Credit bands use the team's pre-buy credits, not remaining credits. Timing buckets are left-inclusive/right-exclusive. `deathWithoutKillRate` is a **proxy: death without a first kill**, because this telemetry has no total-kills field. Do not label it as full kill-trade efficiency.
- `generateInsights(data, team, map?)`, `generateAntiStrats(insights)`, `selfScout(data, team='Cloud9')`, and `buildScoutReport(data, opponent, map?)` are pure and deterministic. The report is JSON serializable and carries its data label. Evidence covers observed events/rounds/matches, not causal claims. Top three can contain fewer than three entries if evidence is limited.

## Import adapter

`loadData(text, 'csv'|'json', dataLabel?)` returns `{data,errors}`; valid rows are retained and invalid rows yield numbered errors. Check `errors` before replacing a workspace. Default provenance is `IMPORTED DATA — source unverified`; pass `DATA_SOURCE_LABEL` explicitly when loading the demo CSV. No automatic connection to GRID is implied. Provider exports need mapping to this documented flat schema; arbitrary native GRID formats are not supported.

CSV requires an `eventType` column (`ability`, `sniper`, `round`, `match`) and columns named exactly as the matching TypeScript interface. `dataLabel` is assigned from the loader argument, and ability `phase` is derived. Round `economy` is a CSV-escaped JSON object keyed by team; match rounds are reconstructed from the round rows. JSON accepts either an array of records with `eventType`, or a full ScoutData object. Separate match/round records are needed for economy and buy-rate denominators. A ten-row ability example is in `public/sample-grid-export.csv` (demo only, not a complete match). Malformed columns, enums, numbers, booleans, coordinates and JSON/CSV syntax are reported rather than silently guessed.

The UI should keep the data label visible on screen and in exports, and distinguish unsupported/no observations from a measured zero. No visual verification was performed for this placeholder.
