# Methodology — Cloud9 VALORANT Scout

**SAMPLE / DEMO DATA — fictional, seeded, not real GRID data.** Category 1: VALORANT Tactical Scouting, Utility Placement & Operator Profiler. This document describes the implemented prototype, not a validated model of professional play.

## Approach

The preparation loop is **scope → observe → explain → counter → brief**. A coach chooses an opponent/map and narrower filters, checks counts and recurring locations, inspects sniper timing and economy, then takes a concrete rule-based suggestion into VOD review. Self-scouting applies the same method to fictional Cloud9 telemetry. No model training, LLM inference, live API, server or hidden ranking service runs in the app.

`generateSampleData(seed = 2026)` uses a deterministic seeded PRNG and Gaussian offsets: 24 fictional matches, 528 rounds, 10,560 ability casts, four five-player rosters and five maps. Map-specific zone plans vary team favorites; team-index offsets and continuous sampling prevent shared 24/50/76 coordinate anchors. Sampling rejects points outside the intended polygon and falls back to its interior label anchor after 50 attempts. Sentinel favorites are sampled approximately 74% on defense and 66% on attack, with other casts spread over sites/callouts. These are generator weights, not guaranteed observed cluster percentages.

Sova/Fade attacker casts use attacker-side lanes; smokes use named chokes/heaven; Sentinel defense casts occur before :18 and attacking setup casts occur later. Primary Operator buys are sampled with 86% probability when synthetic credits are at least 5,600; Odin buys are favored on force rounds. Aggressive holds and early first shots are deliberately common. The seed makes screenshots reproducible while planted tendencies make the workflow demonstrable. Synthetic composition, pacing, winners and economy are not intended to simulate a legal full professional match or current meta.

## Data contract

Source of truth: [`src/lib/types.ts`](../src/lib/types.ts). Every in-memory dataset, match, round and event has `dataLabel: string`. `SniperEvent` aliases `WeaponBuyEvent`; the stream can hold Operator, Odin or another weapon name, despite the historical naming. There is no kill-event stream or total-kills field.

### Shared values

| Field/type | Meaning and allowed values |
| --- | --- |
| `dataLabel: string` | Dataset provenance; generated records use `SAMPLE / DEMO DATA — fictional, seeded, not real GRID data`. |
| `matchId: string` | Stable join key across match, round, ability and buy streams. |
| `roundNumber: number` | Positive integer, scoped to a match. Absent from a match record. |
| `map: MapName` | Exactly `Ascent`, `Bind`, `Haven`, `Lotus` or `Sunset`. |
| `side: Side` | `attack` or `defense`, for the event's team. |
| `phase: Phase` | `early` for 0 ≤ t < 20; `mid` for 20 ≤ t < 60; `late` for t ≥ 60. A supplied import value is overwritten. There is no separate post-plant flag. |
| `x,y` / `holdX,holdY` | Finite normalized SVG coordinates, 0–100; x grows right, y grows down. Provider coordinates require map-specific alignment. |

### Match

| Fields | Type / interpretation |
| --- | --- |
| `dataLabel`, `matchId`, `map` | Shared fields above. |
| `date` | Parseable date string, preferably ISO 8601. |
| `teamA`, `teamB`, `winner` | Team identifiers; winner must equal one of the two teams. |
| `rounds` | `Round[]`; generated data contains it, and the loader rebuilds it from top-level round records rather than trusting nested match rounds. |

### Round and economy

| Fields | Type / interpretation |
| --- | --- |
| `dataLabel`, `matchId`, `roundNumber`, `map` | Shared fields. |
| `attackingTeam`, `defendingTeam`, `winner` | Team identifiers; winner must be one of those teams. |
| `economy` | Object keyed by team identifier, with an entry for each participating team. |
| `economy[team].credits` | Nonnegative finite pre-buy economy value. The generator uses a representative per-player-like credit value per team, not a summed five-player wallet. A real adapter must choose and document a consistent unit before reusing these bands. |
| `economy[team].buyType` | Exactly `eco`, `force`, `full`, `bonus` or `pistol`; supplied by the adapter, not inferred by this app. |

### AbilityCastEvent

| Fields | Type / interpretation |
| --- | --- |
| `dataLabel`, `matchId`, `roundNumber`, `map`, `side` | Shared fields. |
| `eventId` | Nonempty event identifier. Uniqueness is an adapter responsibility. |
| `team`, `player` | Consistent team/player identifiers. |
| `agent`, `ability` | Nonempty names; the loader does not maintain an authoritative patch-specific ability catalog. |
| `abilityType` | `smoke`, `recon`, `sentinel`, `flash`, `molly` or `other`. Sentinel-role damage casts may be `molly`. |
| `agentRole` | `Sentinel`, `Initiator`, `Controller` or `Duelist` (case-sensitive). |
| `x`, `y` | Cast/placement schematic point. A provider adapter must decide which location semantic to use consistently. |
| `roundTimeSec` | Nonnegative finite seconds since round start. |
| `phase` | Derived via `phaseAt(roundTimeSec)`. |

### WeaponBuyEvent / SniperEvent

| Fields | Type / interpretation |
| --- | --- |
| `dataLabel`, `matchId`, `roundNumber`, `map`, `side` | Shared fields. |
| `team`, `player` | Team/player identifiers. |
| `weapon` | Nonempty name; `Operator` and `Odin` are counted explicitly. |
| `credits` | Nonnegative finite credits at buy, not remaining credits after purchase. |
| `holdX`, `holdY`, `holdZone` | Schematic hold point and supplied nonempty zone name. The loader does not reconcile this name with the polygon automatically. |
| `angleType` | `aggressive` or `passive`, annotated upstream. |
| `firstShotTimeSec` | Nonnegative finite elapsed seconds. No missing-shot sentinel is modeled. |
| `gotFirstKill`, `died`, `firstPick` | Booleans; the last indicates a first-pick attempt. CSV accepts lowercase `true` / `false`, JSON uses booleans. |

### Container, filters and evidence

`ScoutData` contains `dataLabel`, `matches: Match[]`, `rounds: Round[]`, `abilityEvents: AbilityCastEvent[]`, `sniperEvents: SniperEvent[]`. Filters are optional strings: `team,map,player,agent,ability,abilityType,side,phase,matchId`; undefined, empty or `all` means unrestricted.

`Insight` contains `id,text,evidence,category` (`sentinel|operator|timing`) and optional structured `context` (`map,agent,ability,zone,x,y,phase,minCredits,aggressivePct,earlyShotPct`). `Evidence` contains `sampleSize,roundsAnalysed,matchesAnalysed,frequency:{n,total}`. `AntiStrat` contains `insightId,title,counter,supportingNumbers`; the latter preserves the insight evidence rather than embedding/repeating the insight text.

## Import format and validation

`loadData(text, 'csv' | 'json', dataLabel?)` returns `{data,errors}`. The default label is `IMPORTED DATA — source unverified`; row-provided labels cannot override it. The parser retains valid records and lists errors for bad records, but the Data panel **applies none of the new dataset if any errors are returned**. Malformed file syntax produces a file-level error. Import is local and in-memory, with no automatic save or upload.

### Exact CSV headers per record type

```text
eventType,eventId,matchId,roundNumber,map,team,player,agent,ability,abilityType,agentRole,side,x,y,roundTimeSec
```
Ability rows use `eventType=ability`. See the [ten-row demo CSV](../public/sample-grid-export.csv), which also carries an informational `dataLabel` column. It intentionally contains no economy or sniper data.

```text
eventType,matchId,roundNumber,map,team,player,weapon,credits,side,holdX,holdY,holdZone,angleType,firstShotTimeSec,gotFirstKill,died,firstPick
```
Weapon/hold rows use `eventType=sniper`.

```text
eventType,matchId,roundNumber,map,attackingTeam,defendingTeam,winner,economy
```
Round rows use `eventType=round`. `economy` is JSON inside a quoted CSV cell; embedded quotes are doubled:

```csv
eventType,matchId,roundNumber,map,attackingTeam,defendingTeam,winner,economy
round,m1,1,Ascent,Cloud9,Opponent,Opponent,"{""Cloud9"":{""credits"":5600,""buyType"":""full""},""Opponent"":{""credits"":6100,""buyType"":""full""}}"
```

```text
eventType,matchId,date,map,teamA,teamB,winner
```
Match rows use `eventType=match`. Match `rounds` is rebuilt from top-level round rows. For mixed-record CSVs, take the union of the headers above and leave irrelevant cells empty, keeping the same column count on every row. Do not add a separate `credits at buy` spelling: the column is `credits`.

### JSON forms

JSON accepts a flat array of records with `eventType` (the same fields as above, but `economy` is a native object), or an object with **all four arrays**. Here is a small fictional complete container:

```json
{
  "dataLabel": "EXAMPLE — fictional",
  "matches": [
    {"matchId":"m1","date":"2026-01-01","map":"Ascent","teamA":"Cloud9","teamB":"Opponent","winner":"Opponent","rounds":[]}
  ],
  "rounds": [
    {"matchId":"m1","roundNumber":1,"map":"Ascent","attackingTeam":"Cloud9","defendingTeam":"Opponent","winner":"Opponent","economy":{"Cloud9":{"credits":5600,"buyType":"full"},"Opponent":{"credits":6100,"buyType":"full"}}}
  ],
  "abilityEvents": [
    {"eventId":"a1","matchId":"m1","roundNumber":1,"map":"Ascent","team":"Opponent","player":"P1","agent":"Killjoy","ability":"Turret","abilityType":"sentinel","agentRole":"Sentinel","side":"defense","x":18.8,"y":22.6,"roundTimeSec":5}
  ],
  "sniperEvents": [
    {"matchId":"m1","roundNumber":1,"map":"Ascent","team":"Opponent","player":"P2","weapon":"Operator","credits":6100,"side":"defense","holdX":20.8,"holdY":49.5,"holdZone":"B Main","angleType":"aggressive","firstShotTimeSec":8,"gotFirstKill":true,"died":false,"firstPick":true}
  ]
}
```

Missing per-row `dataLabel` and `phase` in these import examples are intentional: the loader assigns them. The object-level label is not trusted or automatically propagated. Call `loadData(text, 'json', 'VERIFIED SOURCE — ...')` only after verifying provenance; the Data panel intentionally defaults to unverified.

Validation checks required values, finite number ranges, coordinate bounds, enums, boolean representation, round integer, date parseability, participating winner and both economy entries. It does **not** audit ID uniqueness, stream completeness, cross-stream team/map consistency, map geometry accuracy, patch validity or provider licensing. Do that reconciliation in an offline provider adapter. Supplying only events can leave round-based statistics unavailable; zero denominators yield zero rather than NaN, not evidence of a measured zero rate.

## Scope and spatial analysis

### Shared filters

`filterEvents` applies exact equality for every active ability filter. `scopeData` independently narrows sniper buys and round records by applicable dimensions. Agent/ability/type/phase filters do not exist on buys, so those filters join buys and economy through the **matchId + roundNumber** cohort containing matching casts. This is contextual scoping, not proof that a bought weapon used that ability. Player-scoped denominators use observed player rounds; missing participation is not reconstructed. Side denominators use the selected team's attacking/defending rounds. In all-team mode, workspace analysis separates teams before merging their output.

### Heatmap

For C columns, R rows and a finite point (x,y):

```text
col = clamp(floor(x × C / 100), 0, C−1)
row = clamp(floor(y × R / 100), 0, R−1)
count[row,col] += 1
density[cell] = count[cell] / maxCellCount  (0 if the maximum is 0)
```

UI density uses C=R=24 (576 cells); hard counts use C=R=12 (144 cells), showing numerals only for nonzero cells. Empty cells are transparent; occupied density cells interpolate cyan → yellow → red with opacity. Density is relative to **the current slice's maximum**, so equal colors across two filters do not imply equal absolute counts. This is discrete binning, not kernel smoothing. Core `heatmapGrid` defaults to 10×10 for callers that omit dimensions; it returns an empty array for invalid dimensions, ignores non-finite points and clamps finite out-of-range inputs. Valid imports are already bounded.

### Hotspots and Sentinel setups

`clusterHotspots` greedily finds the largest remaining same-map neighborhood within Euclidean radius **8 schematic units**, averages its members for a centroid, removes those members and repeats. Ties preserve input order. Each cast is assigned once; clusters are sorted by count. This is neither DBSCAN nor a game-distance model.

```text
clusterSharePct = 100 × clusterMemberCount / allInputCasts
tendencyPct(key) = 100 × count(key) / numberOfInputEvents
```

`zoneAt` checks original named polygons, with `Open lane` fallback. `sentinelSetupTendencies` selects **agentRole=Sentinel**, including molly/damage abilities, groups by team/map and takes the strongest cluster. Its sample size is all Sentinel casts in that team/map slice; round/match coverage counts distinct observed keys. Agent/ability context is the modal pair near the resulting centroid. This describes a placement neighborhood, not an independently verified round setup or exact game coordinate.

## Operator and economy formulas

Player statistics group by `(team,player)` across the supplied event stream. Timing, holds, first-pick and death-proxy percentages use **Operator only**; buy-round frequency and mean credits consider all supplied weapon-buy events, including Odin.

| Metric | Formula / denominator |
| --- | --- |
| Buy rounds | Distinct `(matchId,roundNumber)` in that player's buy stream. |
| Buy rate | `100 × buyRounds / supplied rounds involving player's team`. Assumes stable roster participation; not an Operator-only buy rate when Odin/other buys are present. |
| Mean credits | Sum of buy-event `credits` / buy-event count. |
| Operator / Odin count | Number of buy events with the exact corresponding weapon name. |
| Aggressive / passive | `100 × Operator events of angle type / Operator events`. |
| Hold-zone share | `100 × Operator events in zone / Operator events`. |
| Timing buckets | Counts and percentages in `[0,10)`, `[10,20)`, `[20,40)`, `[40,60)`, `[60,∞)` seconds. |
| First shot in 0–20s | `100 × Operator events with firstShotTimeSec < 20 / Operator events`. Exactly 20 is not early. |
| First-pick attempt rate | `100 × Operator events with firstPick / Operator events`. |
| First-pick success | `100 × Operator events with firstPick AND gotFirstKill / attempted first picks`. |
| Death w/o first kill | `100 × Operator events with died AND NOT gotFirstKill / Operator events`. **Not death without any kill.** |
| Buy-type frequency | Supplied team rounds grouped by `economy[team].buyType`. |
| Team Op buy rate by credit band | Distinct team rounds with an Operator buy in band / supplied team rounds in that band × 100. Multiple buyers in one round count once. |

Credit bands are `[0,3000)`, `[3000,5000)`, `[5000,7000)`, `[7000,∞)`, based on the team's supplied pre-buy economy value. Empty denominators produce 0; absent player streams produce no player card. Duplicate imports can inflate event counts and timings even though unique buy-round counts are deduplicated.

## Insights, thresholds and evidence

- **Sentinel:** one observation per team/map with at least **one** Sentinel cast. No minimum cluster share or cross-match requirement is enforced. It reports the top cluster's frequency over all Sentinel casts, coordinates, zone and representative ability.
- **Operator:** one observation per player with at least **one** Operator event. It reports early-shot and aggressive percentages and the modal aggressive hold zone (falling back to the overall hold zone). Evidence frequency is early Operator shots / Operator events, not aggressive holds / Operator events.
- **Timing:** `workspaceAnalysis` adds the modal ability phase when at least **one** cast exists. The core `generateInsights`/`buildScoutReport` API does not add that workspace-only timing observation.
- **Ordering:** core Sentinel/Operator insights sort by evidence frequency descending. The workspace appends timing. Reports select at most the top three applicable observations; sparse filters legitimately produce fewer than three.
- **Evidence:** `sampleSize` counts events in the relevant slice, `roundsAnalysed` counts distinct match/round keys, `matchesAnalysed` counts distinct match IDs and `frequency` preserves `n/total`. Percentages are rounded for text only.

There is **no statistical significance test, confidence interval, recency weighting or safety threshold**. A single event can generate a 100% observation; it is not a reliable habit. For real scouting, add an explicit analyst-approved minimum-event/round/match policy and compare holdout matches. The current UI exposes raw evidence rather than asserting confidence. Core empty inputs return empty collections/zero-valued aggregates without NaN.

## Anti-strat rules

`generateAntiStrats` consumes structured context, not parsed prose. Every insight gets one deterministic suggestion with unchanged `supportingNumbers`. Advice does not repeat the insight sentence, is not a learned causal conclusion and must be checked against agent availability, patch behavior, VOD, economy and timing.

| Context / threshold | Implemented suggestion |
| --- | --- |
| Killjoy setup | Scout the observed ability with Fade Prowler, use Sova Shock Bolt on Turret/Alarmbot corners and shoot exposed Nanoswarms; clear the named point before :20 on an opening hit, then take the map's alternate route. |
| Cypher setup | KAY/O ZERO/point suppression, shoot anchors, check elevated wires before Raze Boom Bot and delay the second entry by 10 seconds. |
| Deadlock setup | Walk Sonic Sensor contact, clear exposed sensors, group fire on Barrier Mesh and keep mobility until GravNet is cleared. |
| Vyse setup | Shoulder-bait Arc Rose, turn flash, wait out Razorvine and draw Shear with one player before second entry. |
| Other/missing Sentinel context | Prowler check, shoot visible devices and suppress before committing. |
| Operator earlyShotPct ≥ 50 | Before :20 jiggle from cover and flash the re-peek at the named hold. Otherwise locate the delayed shot before challenging. |
| Operator aggressivePct ≥ 50 | Add a second-lane swing. Otherwise avoid chasing the passive fallback and take free space. |
| Operator economy | Recommend a traded Operator counter-buy on their full buys; cite the minimum observed buy credits when nonzero. Odin wall pressure is conditional on a VOD-verified penetrable surface. This observed minimum is not a learned affordability model. |
| Late modal utility | Take space before :40 with recon, preserve a flash and plant after damage expires. |
| Early modal utility | Prowler bait before :15, disengage 10 seconds and re-clear with Sova Recon Bolt. |
| Mid modal utility | Low-cost fake before :20, pause through the mid window, re-hit after :60 with saved utility. |

Map-specific second routes use original named callouts; Bind includes teleporters and Lotus rotating doors as schematic annotations. Suggestions are not game-accurate lineups, guaranteed utility interactions or executable pathfinding.

## Reports, testing and limitations

The UI report uses the current shared scope and opponent/map selection. Printed output hides navigation and targets one A4 page. HTML includes inline CSS/SVG without JavaScript or remote dependencies; JSON carries scope/provenance and the structured report. Test evidence includes normal, empty and invalid analytics/import fixtures; deterministic generation and map geometry; specific counter branches; browser filter/toggle/import/export checks, single-page A4 output, console errors and mobile overflow. See [README](../README.md#browser-verification) for commands. Browser output validates software behavior, not scouting efficacy.

Known limitations:

- **Synthetic data only:** no conclusions about real Cloud9 or opponent players; planted biases make the prototype easy to demonstrate, not predictive.
- **Original schematic coordinates:** non-game-accurate polygons, arbitrary orientation, no elevation, sightline, collision, wall penetration or travel-time model. Never execute a coordinate as a lineup.
- **Event versus round frequency:** two casts in a round count twice for spatial/timing shares. Unique-round buy rates use a different denominator. Read evidence chips rather than treating all percentages as the same kind of probability.
- **Small samples and selection bias:** no confidence/coverage gate; filters, map pooling, roster changes and sparse imports can distort patterns. Missing values are not modeled comprehensively.
- **Proxy outcomes:** death without first kill is not death without any kill or trade efficiency; first-pick flags/angle classes are supplied annotations. No multikill, assist, damage, opponent skill or round-state adjustment.
- **Economy simplification:** representative team credit bands, no weapon carryover/drop model, no full inventory or individual affordability inference.
- **Importer boundary:** schema conversion is required for actual GRID exports; no licensing, provenance, deduplication or relational integrity guarantee. Imported `dataLabel` is deliberately untrusted.
- **Rule-based recommendations:** fixed thresholds (50% early/aggressive branching) and canned agent-specific actions, not tested causal strategies or current-patch guarantees.
- **Demo constraints:** in-memory data resets on reload; only five maps; no persistence, collaboration, authentication or live feed. Print behavior can vary by browser, paper size and larger real-data content.

Unofficial and unaffiliated with Riot Games, Cloud9, GRID or JetBrains. Original schematics are not Riot artwork. Code/original material: [MIT](../LICENSE).
