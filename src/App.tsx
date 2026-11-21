import { useMemo, useRef, useState } from "react";
import { sampleData } from "./data/sampleData";
import {
  MAP_NAMES,
  type Filters,
  type MapName,
  type ScoutData,
} from "./lib/types";
import { clusterHotspots, filterEvents } from "./lib/analytics";
import { scopeData, workspaceAnalysis } from "./lib/workspace";
import { loadData } from "./lib/dataLoader";
import { Schematic, formatPct } from "./components/Charts";
import { OperatorCards, EconomyTable } from "./components/Profiles";
import { InsightCards } from "./components/Insights";
import "./styles.css";
import { downloadFile, reportHTML } from "./lib/export";

const VIEWS = [
  "Coach Dashboard",
  "Utility Heatmap",
  "Operator Profiler",
  "Anti-Strat Generator",
  "Self-Scout",
  "Scout Report",
] as const;
type View = (typeof VIEWS)[number];
const defaults: Filters = { team: "Nova Ridge", map: "all" };
const allLabels: Record<keyof Filters, string> = {
  team: "All teams",
  map: "All maps",
  player: "All players",
  agent: "All agents",
  ability: "All abilities",
  abilityType: "All utility types",
  side: "All sides",
  phase: "All phases",
  matchId: "All matches",
};
const unique = (values: string[]) => [...new Set(values)].sort();
const roundCount = (data: ScoutData) =>
  new Set(
    [...data.rounds, ...data.abilityEvents, ...data.sniperEvents].map(
      (e) => `${e.matchId}:${e.roundNumber}`,
    ),
  ).size;

export default function App() {
  const [data, setData] = useState(sampleData),
    [filters, setFilters] = useState<Filters>(defaults),
    [view, setView] = useState<View>("Coach Dashboard");
  const [showData, setShowData] = useState(false),
    [errors, setErrors] = useState<string[]>([]),
    [notice, setNotice] = useState("");
  const [counts, setCounts] = useState(false),
    [points, setPoints] = useState(false),
    [reportMap, setReportMap] = useState<MapName>("Ascent");
  const [lastOpponent, setLastOpponent] = useState("Nova Ridge");
  const [reportTeam, setReportTeam] = useState("Nova Ridge");
  const reportRef = useRef<HTMLDivElement>(null);
  const scoped = useMemo(() => scopeData(data, filters), [data, filters]);
  const teams = unique([
    ...data.abilityEvents.map((e) => e.team),
    ...data.sniperEvents.map((e) => e.team),
    ...data.rounds.flatMap((r) => [r.attackingTeam, r.defendingTeam]),
  ]);
  const team = filters.team ?? teams[0] ?? "Unknown team";
  const optionsBase = useMemo(
    () =>
      filterEvents(data.abilityEvents, {
        team: filters.team,
        map: filters.map,
      }),
    [data, filters.team, filters.map],
  );
  const analysis = useMemo(
    () => workspaceAnalysis(scoped, team, filters.map, filters.side),
    [scoped, team, filters.map],
  );
  const stats = {
    players: analysis.stats.players.filter(
      (p) => team === "all" || p.team === team,
    ),
    teams: analysis.stats.teams.filter(
      (t) => team === "all" || t.team === team,
    ),
  };
  const mapsInScope = MAP_NAMES.filter(
    (m) =>
      scoped.abilityEvents.some((e) => e.map === m) ||
      scoped.sniperEvents.some((e) => e.map === m),
  );
  const shownMap = (
    filters.map !== "all" && filters.map
      ? filters.map
      : (mapsInScope[0] ?? "Ascent")
  ) as MapName;
  const mapEvents = scoped.abilityEvents.filter((e) => e.map === shownMap);
  const hotspots = useMemo(
    () => clusterHotspots(mapEvents).slice(0, 5),
    [scoped, shownMap],
  );
  const reportMapName =
    filters.map && filters.map !== "all" ? (filters.map as MapName) : reportMap;
  const reportOpponent =
    team === "all"
      ? teams.includes(reportTeam)
        ? reportTeam
        : (teams[0] ?? "Unknown team")
      : team;
  const reportData = useMemo(
    () =>
      scopeData(data, { ...filters, team: reportOpponent, map: reportMapName }),
    [data, filters, reportMapName, reportOpponent],
  );
  const reportAnalysis = useMemo(
    () =>
      workspaceAnalysis(
        reportData,
        reportOpponent,
        reportMapName,
        filters.side,
      ),
    [reportData, reportOpponent, reportMapName],
  );
  const report = {
    opponent: reportOpponent,
    map: reportMapName,
    filters: { ...filters, team: reportOpponent, map: reportMapName },
    top3Tendencies: reportAnalysis.insights.slice(0, 3),
    operatorProfile: {
      players: reportAnalysis.stats.players.filter(
        (p) => p.team === reportOpponent,
      ),
      teams: reportAnalysis.stats.teams.filter(
        (t) => t.team === reportOpponent,
      ),
    },
    antiStrats: reportAnalysis.antiStrats.filter((a) =>
      reportAnalysis.insights.slice(0, 3).some((i) => i.id === a.insightId),
    ),
    dataLabel: data.dataLabel,
    demoDisclaimer: "SAMPLE / DEMO DATA — fictional, seeded",
    abilityEventsAnalysed: reportData.abilityEvents.length,
  };

  function changeFilter(key: keyof Filters, value: string) {
    setFilters((old) => {
      const next = { ...old, [key]: value };
      if (key === "team" || key === "map") {
        next.player = "all";
        next.agent = "all";
        next.ability = "all";
        next.matchId = "all";
      }
      if (key === "agent") next.ability = "all";
      return next;
    });
  }
  function navigate(next: View) {
    if (next === "Self-Scout" && team !== "Cloud9") {
      setLastOpponent(team);
      setFilters((f) => ({
        ...f,
        team: "Cloud9",
        player: "all",
        agent: "all",
        ability: "all",
        matchId: "all",
      }));
    }
    if (view === "Self-Scout" && next !== "Self-Scout" && team === "Cloud9")
      setFilters((f) => ({
        ...f,
        team:
          lastOpponent === "all" || teams.includes(lastOpponent)
            ? lastOpponent
            : teams[0],
        player: "all",
        agent: "all",
        ability: "all",
        matchId: "all",
      }));
    setView(next);
  }
  async function importFile(file?: File) {
    if (!file) return;
    try {
      const result = loadData(
        await file.text(),
        file.name.toLowerCase().endsWith(".csv") ? "csv" : "json",
      );
      setErrors(result.errors);
      if (result.errors.length) {
        setNotice(
          "Import not applied. Correct the errors and try again; your current dataset is unchanged.",
        );
        return;
      }
      if (
        !result.data.abilityEvents.length &&
        !result.data.sniperEvents.length &&
        !result.data.rounds.length
      ) {
        setNotice("Import not applied: no telemetry records found.");
        return;
      }
      setData(result.data);
      setFilters({
        team:
          result.data.abilityEvents[0]?.team ??
          result.data.sniperEvents[0]?.team ??
          result.data.rounds[0]?.attackingTeam,
        map: "all",
      });
      setNotice(
        `Loaded ${file.name}. Source is unverified; check provenance before making decisions.`,
      );
    } catch {
      setNotice(
        "Could not read this file. Please choose a readable CSV or JSON export.",
      );
    }
  }
  const filterSelect = (
    key: keyof Filters,
    label: string,
    values: string[],
    labels?: Record<string, string>,
    allowAll = true,
  ) => (
    <label className={`filter-field filter-${key}`} key={key}>
      <span>{label}</span>
      <select
        data-testid={`filter-${key}`}
        value={filters[key] ?? "all"}
        onChange={(e) => changeFilter(key, e.target.value)}
      >
        {allowAll && <option value="all">{allLabels[key]}</option>}
        {values.map((v) => (
          <option key={v} value={v}>
            {labels?.[v] ?? v}
          </option>
        ))}
      </select>
    </label>
  );
  const quickFilter = (
    name: string,
    patch: Partial<Filters>,
    selected: boolean,
  ) => (
    <button
      className={`chip ${selected ? "selected" : ""}`}
      onClick={() =>
        setFilters((f) => ({
          ...f,
          agent: "all",
          ability: "all",
          abilityType: "all",
          ...patch,
        }))
      }
    >
      {name}
    </button>
  );
  function resetFilters() {
    setFilters({
      map: "all",
      team:
        view === "Self-Scout"
          ? "Cloud9"
          : teams.includes("Nova Ridge")
            ? "Nova Ridge"
            : (teams[0] ?? "Cloud9"),
    });
  }
  return (
    <div className="app-shell">
      <header className="app-header">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("Coach Dashboard");
          }}
        >
          <svg viewBox="0 0 48 38" aria-hidden="true">
            <path
              d="M12 30a9 9 0 0 1-1-18 13 13 0 0 1 25-1 10 10 0 1 1 1 20H12"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M17 24h15M21 18h8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>
            Cloud9 <b>VALORANT SCOUT</b>
            <small>THE COACH’S INTELLIGENCE DESK</small>
          </span>
        </a>
        <div className="header-meta">
          <span className="live-dot" /> LOCAL WORKSPACE{" "}
          <button
            className="button quiet"
            onClick={() => setShowData(!showData)}
            aria-expanded={showData}
          >
            ▤ Data <span>{showData ? "−" : "+"}</span>
          </button>
        </div>
      </header>
      <div className="sample-banner" role="note">
        <span className="sample-pill">DEMO ENVIRONMENT</span>
        <strong>SAMPLE / DEMO DATA — fictional, seeded</strong>
        <span className="banner-detail">
          {data === sampleData
            ? "Not real GRID data. Built for the Sky’s The Limit Hackathon 2026."
            : `Active source: ${data.dataLabel}`}
        </span>
      </div>
      {showData && (
        <section className="data-panel panel" aria-label="Data management">
          <div>
            <p className="eyebrow">DATA WORKSPACE / NO NETWORK CALLS</p>
            <h2>Bring your own telemetry</h2>
            <p>{data.dataLabel}</p>
            <p className="small">
              {data.matches.length} matches · {data.rounds.length} rounds ·{" "}
              {data.abilityEvents.length.toLocaleString()} casts ·{" "}
              {data.sniperEvents.length} weapon buys
            </p>
            <p className="small">
              CSV/JSON must follow the adapter schema in README.md. Imports with
              errors are not applied.
            </p>
          </div>
          <div>
            <label className="upload-label">
              Load CSV or JSON
              <input
                type="file"
                accept=".csv,.json,application/json,text/csv"
                data-testid="data-file"
                onChange={(e) => {
                  void importFile(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
            </label>
            <button
              className="button"
              onClick={() => {
                setData(sampleData);
                setFilters(
                  view === "Self-Scout"
                    ? { ...defaults, team: "Cloud9" }
                    : defaults,
                );
                setErrors([]);
                setNotice("Sample dataset restored.");
              }}
            >
              Reset to sample data
            </button>
            <p role="status">{notice}</p>
            {errors.length > 0 && (
              <ul className="import-errors" role="alert">
                {errors.slice(0, 20).map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
                {errors.length > 20 && (
                  <li>…and {errors.length - 20} more errors.</li>
                )}
              </ul>
            )}
          </div>
        </section>
      )}
      <nav className="view-nav" aria-label="Scouting views">
        {VIEWS.map((v, i) => (
          <button
            key={v}
            aria-current={view === v ? "page" : undefined}
            className={view === v ? "active" : ""}
            onClick={() => navigate(v)}
            data-testid={`nav-${i}`}
          >
            <span>0{i + 1}</span>
            {v}
          </button>
        ))}
      </nav>
      <section className="filter-panel" aria-label="Global filters">
        <div className="filter-title">
          <span className="eyebrow">SCOUTING SCOPE</span>
          <button className="text-button" onClick={resetFilters}>
            ↺ Reset filters
          </button>
        </div>
        <div className="filters">
          {filterSelect(
            "team",
            "Team",
            teams.includes(team) || team === "all"
              ? teams
              : unique([...teams, team]),
            undefined,
            true,
          )}
          {filterSelect("map", "Map", [...MAP_NAMES])}
          {filterSelect(
            "player",
            "Player",
            unique([
              ...optionsBase.map((e) => e.player),
              ...data.sniperEvents
                .filter(
                  (e) =>
                    (team === "all" || e.team === team) &&
                    (!filters.map ||
                      filters.map === "all" ||
                      e.map === filters.map),
                )
                .map((e) => e.player),
            ]),
          )}
          {filterSelect(
            "agent",
            "Agent",
            unique(optionsBase.map((e) => e.agent)),
          )}
          {filterSelect(
            "ability",
            "Ability",
            unique(
              optionsBase
                .filter(
                  (e) =>
                    !filters.agent ||
                    filters.agent === "all" ||
                    e.agent === filters.agent,
                )
                .map((e) => e.ability),
            ),
          )}
          {filterSelect("abilityType", "Utility type", [
            "sentinel",
            "recon",
            "smoke",
            "flash",
            "molly",
            "other",
          ])}
          {filterSelect("side", "Side", ["attack", "defense"])}
          {filterSelect("phase", "Round phase", ["early", "mid", "late"], {
            early: "Early · 0–20s",
            mid: "Mid · 20–60s",
            late: "Late · 60s+",
          })}
          {filterSelect(
            "matchId",
            "Match",
            unique([
              ...optionsBase.map((e) => e.matchId),
              ...data.sniperEvents
                .filter(
                  (e) =>
                    (team === "all" || e.team === team) &&
                    (!filters.map ||
                      filters.map === "all" ||
                      e.map === filters.map),
                )
                .map((e) => e.matchId),
            ]),
          )}
        </div>
        <p className="scope-note">
          Shared across all views. Utility-only selectors scope sniper buys and
          economy to matching cast rounds. Buy rates use supplied team rounds;
          empty data is not a measured zero.
        </p>
      </section>
      <main id="main-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">
              {view === "Self-Scout"
                ? "TURN THE LENS INWARD"
                : "PREPARE WITH PURPOSE"}{" "}
              /{" "}
              {filters.map === "all" || !filters.map
                ? "ALL MAPS"
                : filters.map.toUpperCase()}
            </p>
            <h1>{view}</h1>
            <p>
              {view === "Coach Dashboard"
                ? `Your next advantage against ${team === "all" ? "the field" : team}. Patterns first. Evidence always.`
                : view === "Utility Heatmap"
                  ? "See the setup. Find the space. Plan the clear."
                  : view === "Operator Profiler"
                    ? "Know who’s holding the angle — and when to challenge it."
                    : view === "Anti-Strat Generator"
                      ? "Turn recurring patterns into a concrete plan for the next round."
                      : view === "Self-Scout"
                        ? "If they scouted us, what would they exploit?"
                        : "The essentials, ready for the team room."}
            </p>
          </div>
          <span className="context-tag">
            <i className="dot blue" /> {team === "all" ? "All teams" : team}
          </span>
        </div>
        {(view === "Coach Dashboard" || view === "Self-Scout") && (
          <>
            <div className="kpi-grid">
              {[
                [
                  new Set(
                    [
                      ...scoped.rounds,
                      ...scoped.abilityEvents,
                      ...scoped.sniperEvents,
                    ].map((e) => e.matchId),
                  ).size,
                  "MATCHES ANALYSED",
                ],
                [roundCount(scoped), "ROUNDS ANALYSED"],
                [scoped.abilityEvents.length, "UTILITY EVENTS"],
                [scoped.sniperEvents.length, "SNIPER BUYS"],
              ].map(([n, label]) => (
                <div className="kpi panel" key={label}>
                  <span>{label}</span>
                  <strong>{Number(n).toLocaleString()}</strong>
                  <small>Current filter scope</small>
                </div>
              ))}
            </div>
            {view === "Self-Scout" && (
              <div className="callout">
                <b>SELF-SCOUT MODE</b> · The same evidence, seen from the other
                side. Cloud9 is selected in the shared team filter. Change it to
                compare another team.
              </div>
            )}
            <div className="section-heading">
              <h2>
                {view === "Self-Scout"
                  ? "Our exploitable patterns"
                  : "The scouting brief"}
              </h2>
              <span>
                {analysis.insights.length} evidence-backed observations
              </span>
            </div>
            <InsightCards
              insights={analysis.insights}
              counters={analysis.antiStrats}
              numbered
            />
            <div className="method-note">
              READ THE SAMPLE · These are descriptive patterns, not
              win-probability predictions. Frequency is based on events, not
              unique rounds. Confirm against VOD before calling a counter.
            </div>
          </>
        )}
        {view === "Utility Heatmap" && (
          <>
            <div className="toolbar">
              <div className="quick-filters">
                <span>FOCUS</span>
                {quickFilter(
                  "All utility",
                  {},
                  !filters.abilityType || filters.abilityType === "all",
                )}
                {quickFilter(
                  "Sentinel setups",
                  { abilityType: "sentinel" },
                  filters.abilityType === "sentinel",
                )}
                {quickFilter(
                  "Sova / Fade recon",
                  { abilityType: "recon" },
                  filters.abilityType === "recon",
                )}
                {quickFilter(
                  "Smokes",
                  { abilityType: "smoke" },
                  filters.abilityType === "smoke",
                )}
              </div>
              <div className="map-controls">
                <button
                  className={!counts ? "selected" : ""}
                  onClick={() => setCounts(false)}
                  aria-pressed={!counts}
                >
                  Density
                </button>
                <button
                  className={counts ? "selected" : ""}
                  onClick={() => setCounts(true)}
                  aria-pressed={counts}
                >
                  Hard counts
                </button>
                <label>
                  <input
                    type="checkbox"
                    checked={points}
                    onChange={(e) => setPoints(e.target.checked)}
                  />{" "}
                  Cast points
                </label>
              </div>
            </div>
            <div className="map-layout">
              <section className="panel map-panel">
                <div className="card-top">
                  <h2>{shownMap}</h2>
                  <span className="tag">
                    {mapEvents.length.toLocaleString()} CASTS
                  </span>
                </div>
                {(!filters.map || filters.map === "all") && (
                  <p className="small">
                    Showing {shownMap}, the first map in scope. Select a map
                    above for a dedicated scouting slice.
                  </p>
                )}
                <Schematic
                  map={shownMap}
                  events={mapEvents}
                  counts={counts}
                  points={points}
                />
                <div className="legend">
                  <span>LOW</span>
                  <i className="gradient" />
                  <span>HIGH DENSITY</span>
                  <span>· Relative to busiest cell</span>
                </div>
              </section>
              <aside>
                <section className="panel hotspots">
                  <p className="eyebrow">REPEATED UTILITY</p>
                  <h2>Hotspots</h2>
                  <p className="small">
                    8-unit radius clusters · share of {shownMap} casts
                  </p>
                  {hotspots.length ? (
                    hotspots.map((h, i) => (
                      <div className="hotspot" key={i}>
                        <span className="rank">0{i + 1}</span>
                        <div>
                          <h3>{h.zone}</h3>
                          <p>
                            Point ({h.x.toFixed(0)}, {h.y.toFixed(0)}) ·{" "}
                            {h.count} casts
                          </p>
                        </div>
                        <strong>{formatPct(h.share)}</strong>
                      </div>
                    ))
                  ) : (
                    <p className="empty">No utility in this slice.</p>
                  )}
                  <p className="method-note">
                    Original schematic, not game-accurate placement guidance.
                    Use clusters to spot patterns, then validate in-game.
                  </p>
                </section>
                <section className="panel blue-panel">
                  <p className="eyebrow">COACH’S CHECKLIST</p>
                  <h3>Clear before you commit.</h3>
                  <p>
                    Use recon to verify the setup. Remove sentinel utility.
                    Change the timing of the hit.
                  </p>
                </section>
              </aside>
            </div>
          </>
        )}
        {view === "Operator Profiler" && (
          <>
            <OperatorCards players={stats.players} />
            <div className="section-heading">
              <h2>The economy behind the angle</h2>
              <span>Observed buys, not predicted purchases</span>
            </div>
            <EconomyTable teams={stats.teams} />
            <div className="map-layout operator-map">
              <section className="panel map-panel">
                <div className="card-top">
                  <h2>{shownMap} / hold positions</h2>
                  <span className="tag">OPERATOR + ODIN</span>
                </div>
                <Schematic
                  map={shownMap}
                  holds={scoped.sniperEvents.filter((e) => e.map === shownMap)}
                />
                <div className="bar-key">
                  <span>
                    <i className="dot amber" /> Aggressive
                  </span>
                  <span>
                    <i className="dot blue" /> Passive
                  </span>
                </div>
              </section>
              <aside className="panel">
                <p className="eyebrow">HOW TO READ THIS</p>
                <h2>Pressure, not certainty.</h2>
                <p>
                  Timing, angle and first-pick metrics describe Operator buys
                  only. The hold plot includes both Operator and Odin; hover for
                  details.
                </p>
                <p>
                  Death w/o first kill is not the same as death without any
                  kill. No total-kill metric is available in this export.
                </p>
                <p className="small">
                  Buy rate denominator: team rounds in the current scope,
                  assuming a stable roster. Credit bands use team credits at
                  buy.
                </p>
              </aside>
            </div>
          </>
        )}
        {view === "Anti-Strat Generator" && (
          <>
            <div className="callout">
              <b>RULE-BASED PLAYBOOK</b> · Deterministic suggestions tied to
              observed frequencies. Discuss with the team, then validate with
              VOD.
            </div>
            <InsightCards
              insights={analysis.insights}
              counters={analysis.antiStrats}
              numbered
            />
          </>
        )}
        {view === "Scout Report" && (
          <>
            <div className="report-actions">
              <div>
                {team === "all" && (
                  <label>
                    Report opponent
                    <select
                      data-testid="report-team"
                      value={reportOpponent}
                      onChange={(e) => setReportTeam(e.target.value)}
                    >
                      {teams.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                )}
                {(!filters.map || filters.map === "all") && (
                  <label>
                    Report map{" "}
                    <select
                      data-testid="report-map"
                      value={reportMap}
                      onChange={(e) => setReportMap(e.target.value as MapName)}
                    >
                      {MAP_NAMES.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </label>
                )}
              </div>
              <div>
                <button
                  className="button"
                  data-testid="export-print"
                  onClick={() => window.print()}
                >
                  Print / Save as PDF
                </button>
                <button
                  className="button"
                  data-testid="export-html"
                  onClick={() =>
                    downloadFile(
                      reportHTML(
                        reportRef.current?.innerHTML ?? "",
                        reportOpponent,
                      ),
                      "cloud9-scout-report.html",
                      "text/html",
                    )
                  }
                >
                  Download HTML
                </button>
                <button
                  className="button primary"
                  data-testid="export-json"
                  onClick={() =>
                    downloadFile(
                      JSON.stringify(report, null, 2),
                      "cloud9-scout-report.json",
                      "application/json",
                    )
                  }
                >
                  Download JSON ↓
                </button>
              </div>
            </div>
            <div
              className="report-paper"
              ref={reportRef}
              data-testid="scout-report"
            >
              <div className="report-masthead">
                <div>
                  <p className="eyebrow">CLOUD9 / MATCH PREPARATION</p>
                  <h2>
                    {reportOpponent} <span>on {reportMapName}</span>
                  </h2>
                  <p>
                    SCOUT REPORT · {roundCount(reportData)} rounds ·{" "}
                    {reportData.abilityEvents.length.toLocaleString()} casts
                  </p>
                </div>
                <span className="tag">COACH’S COPY</span>
              </div>
              <div className="report-label">
                SAMPLE / DEMO DATA — fictional, seeded
                <br />
                <small>Active source: {data.dataLabel}</small>
              </div>
              <p className="report-scope">
                Scope:{" "}
                {Object.entries({
                  ...filters,
                  team: reportOpponent,
                  map: reportMapName,
                })
                  .filter(([, v]) => v && v !== "all")
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(" · ")}
              </p>
              <div className="report-body">
                <section className="report-main">
                  <h3 className="report-section-title">
                    01 / TOP TENDENCIES & COUNTERS
                  </h3>
                  <InsightCards
                    insights={report.top3Tendencies}
                    counters={report.antiStrats}
                    numbered
                  />
                </section>
                <aside className="report-aside">
                  <h3 className="report-section-title">
                    02 / UTILITY FOOTPRINT
                  </h3>
                  <Schematic
                    map={reportMapName}
                    events={reportData.abilityEvents}
                    mini
                  />
                  <p className="small">Relative density · original schematic</p>
                  <h3 className="report-section-title">
                    03 / OPERATOR PROFILE
                  </h3>
                  <OperatorCards
                    players={report.operatorProfile.players}
                    compact
                  />
                </aside>
              </div>
              <div className="report-footnote">
                Descriptive sample patterns, not predictions. Validate with VOD.
                Death w/o first kill is a first-kill proxy, not total kills.
                <br />
                Unofficial hackathon project. Not affiliated with Riot Games.
                VALORANT map schematics are original simplified diagrams.
              </div>
            </div>
          </>
        )}
      </main>
      <footer>
        <span>CLOUD9 / SKY’S THE LIMIT 2026</span>
        <p>
          Unofficial hackathon project. Not affiliated with Riot Games. VALORANT
          map schematics are original simplified diagrams.
        </p>
      </footer>
    </div>
  );
}
