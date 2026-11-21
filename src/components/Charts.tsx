import { heatmapGrid } from "../lib/analytics";
import { MAPS } from "../lib/maps";
import type {
  AbilityCastEvent,
  MapName,
  SniperEvent,
  Evidence,
} from "../lib/types";

export const formatPct = (n: number) => `${n.toFixed(0)}%`;
export function EvidenceChips({ evidence: e }: { evidence: Evidence }) {
  return (
    <div className="evidence">
      <span>{e.sampleSize.toLocaleString()} events</span>
      <span>{e.roundsAnalysed} rounds</span>
      <span>{e.matchesAnalysed} matches</span>
      <span>
        Frequency {e.frequency.n}/{e.frequency.total}
      </span>
    </div>
  );
}
export function Schematic({
  map,
  events = [],
  holds = [],
  counts = false,
  points = false,
  mini = false,
}: {
  map: MapName;
  events?: AbilityCastEvent[];
  holds?: SniperEvent[];
  counts?: boolean;
  points?: boolean;
  mini?: boolean;
}) {
  const geometry = MAPS[map],
    cells = heatmapGrid(events, 12, 12);
  const polygon = (p: { x: number; y: number }[]) =>
    p.map((a) => `${a.x},${a.y}`).join(" ");
  return (
    <svg
      className={`schematic ${mini ? "mini-map" : ""}`}
      viewBox="-3 -5 106 110"
      role="img"
      aria-label={`${map} original schematic ${holds.length ? "Operator holds" : "utility heatmap"}`}
    >
      <title>
        {map} · Original simplified schematic, not a game-accurate layout
      </title>
      <defs>
        <pattern
          id={`grid-${mini ? "mini" : "full"}`}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="#294458"
            strokeWidth=".15"
          />
        </pattern>
      </defs>
      <rect width="100" height="100" rx="3" fill="#0c2133" />
      <rect
        width="100"
        height="100"
        fill={`url(#grid-${mini ? "mini" : "full"})`}
      />
      {[
        ...geometry.lanes,
        ...geometry.spawns,
        ...geometry.callouts,
        ...geometry.sites,
      ].map((z) => (
        <polygon
          key={z.name}
          points={polygon(z.polygon)}
          className={geometry.sites.includes(z) ? "site-shape" : "zone-shape"}
        />
      ))}
      {cells.map((c) => (
        <g
          key={`${c.col}-${c.row}`}
          data-testid="heatmap-cell"
          data-count={c.count}
        >
          <rect
            x={c.x}
            y={c.y}
            width={100 / 12}
            height={100 / 12}
            fill={counts ? "#00aeef" : `hsl(${200 - c.density * 160} 95% 55%)`}
            opacity={c.count ? 0.15 + c.density * 0.65 : 0}
          >
            <title>
              {c.count} casts · density {c.density.toFixed(2)}
            </title>
          </rect>
        </g>
      ))}
      {[...geometry.sites, ...geometry.callouts, ...geometry.spawns].map(
        (z) => (
          <text
            key={z.name}
            x={z.polygon.reduce((s, p) => s + p.x, 0) / z.polygon.length}
            y={z.polygon.reduce((s, p) => s + p.y, 0) / z.polygon.length + 0.6}
            className={`map-label ${counts ? "subtle-label" : ""}`}
          >
            {z.name}
          </text>
        ),
      )}
      {points &&
        events.map((e) => (
          <circle
            key={e.eventId}
            cx={e.x}
            cy={e.y}
            r=".55"
            fill="white"
            stroke="#081827"
            strokeWidth=".15"
            opacity=".6"
          >
            <title>
              {e.player} · {e.ability} · {e.roundTimeSec}s
            </title>
          </circle>
        ))}
      {holds.map((e, i) => (
        <circle
          key={`${e.matchId}-${e.roundNumber}-${i}`}
          cx={e.holdX + ((i % 5) - 2) * 0.4}
          cy={e.holdY + ((i % 7) - 3) * 0.4}
          r="1.2"
          fill={e.angleType === "aggressive" ? "#ffbf69" : "#61d9ff"}
          stroke="#071727"
          strokeWidth=".3"
          opacity=".8"
        >
          <title>
            {e.player} · {e.holdZone} · {e.angleType}
          </title>
        </circle>
      ))}
      {counts &&
        cells
          .filter((c) => c.count > 0)
          .map((c) => (
            <text
              key={`count-${c.col}-${c.row}`}
              x={c.x + 4.16}
              y={c.y + 5}
              className="cell-count"
            >
              {c.count}
            </text>
          ))}
      <text x="1" y="105" className="map-caption">
        {map.toUpperCase()} / ORIGINAL SCHEMATIC / NOT TO SCALE
      </text>
    </svg>
  );
}
export function TimingChart({
  buckets,
}: {
  buckets: { key: string; count: number; pct: number }[];
}) {
  const max = Math.max(1, ...buckets.map((b) => b.count));
  return (
    <svg
      className="timing-chart"
      viewBox="0 0 330 114"
      role="img"
      aria-label="Operator first shot timing, first twenty seconds highlighted"
    >
      {buckets.map((b, i) => (
        <g key={b.key}>
          <rect
            x={i * 65 + 10}
            y={76 - (b.count / max) * 54}
            width="42"
            height={(b.count / max) * 54}
            rx="3"
            fill={i < 2 ? "#00aeef" : "#647b91"}
          />
          <text
            x={i * 65 + 31}
            y={68 - (b.count / max) * 54}
            textAnchor="middle"
          >
            {b.count} · {b.pct.toFixed(0)}%
          </text>
          <text x={i * 65 + 31} y="96" textAnchor="middle">
            {b.key}s
          </text>
        </g>
      ))}
    </svg>
  );
}
