import {
  filterEvents,
  generateInsights,
  generateAntiStrats,
  operatorStats,
  tendencyPercentages,
} from "./analytics";
import { type Filters, type ScoutData, type Insight } from "./types";

const active = (value?: string) => !!value && value !== "all";
export function scopeData(data: ScoutData, filters: Filters): ScoutData {
  const abilityEvents = filterEvents(data.abilityEvents, filters);
  const cohort = new Set(
    abilityEvents.map((e) => `${e.matchId}:${e.roundNumber}`),
  );
  const abilityRestricted = ["agent", "ability", "abilityType", "phase"].some(
    (k) => active(filters[k as keyof Filters]),
  );
  const playerCohort = new Set(
    [
      ...abilityEvents,
      ...data.sniperEvents.filter(
        (e) =>
          e.player === filters.player &&
          (!active(filters.team) || e.team === filters.team),
      ),
    ].map((e) => `${e.matchId}:${e.roundNumber}`),
  );
  const rounds = data.rounds.filter(
    (r) =>
      (!active(filters.team) ||
        [r.attackingTeam, r.defendingTeam].includes(filters.team!)) &&
      (!active(filters.map) || r.map === filters.map) &&
      (!active(filters.matchId) || r.matchId === filters.matchId) &&
      (!active(filters.player) ||
        playerCohort.has(`${r.matchId}:${r.roundNumber}`)) &&
      (!active(filters.side) ||
        !active(filters.team) ||
        (filters.side === "attack"
          ? r.attackingTeam === filters.team
          : r.defendingTeam === filters.team)) &&
      (!abilityRestricted || cohort.has(`${r.matchId}:${r.roundNumber}`)),
  );
  const sniperEvents = data.sniperEvents.filter(
    (e) =>
      (!active(filters.team) || e.team === filters.team) &&
      (!active(filters.map) || e.map === filters.map) &&
      (!active(filters.matchId) || e.matchId === filters.matchId) &&
      (!active(filters.player) || e.player === filters.player) &&
      (!active(filters.side) || e.side === filters.side) &&
      (!abilityRestricted || cohort.has(`${e.matchId}:${e.roundNumber}`)),
  );
  const matchIds = new Set(
    [...rounds, ...abilityEvents, ...sniperEvents].map((e) => e.matchId),
  );
  return {
    dataLabel: data.dataLabel,
    abilityEvents,
    sniperEvents,
    rounds,
    matches: data.matches
      .filter((m) => matchIds.has(m.matchId))
      .map((m) => ({
        ...m,
        rounds: rounds.filter((r) => r.matchId === m.matchId),
      })),
  };
}

export function workspaceAnalysis(
  data: ScoutData,
  team: string,
  map?: string,
  side?: string,
): {
  insights: Insight[];
  antiStrats: ReturnType<typeof generateAntiStrats>;
  stats: ReturnType<typeof operatorStats>;
} {
  if (team === "all") {
    const teams = [
      ...new Set([
        ...data.abilityEvents.map((e) => e.team),
        ...data.sniperEvents.map((e) => e.team),
      ]),
    ];
    const groups = teams.map((t) => ({
      team: t,
      result: workspaceAnalysis(
        scopeData(data, { team: t, side }),
        t,
        map,
        side,
      ),
    }));
    return {
      insights: groups.flatMap((g) => g.result.insights),
      antiStrats: groups.flatMap((g) => g.result.antiStrats),
      stats: {
        players: groups.flatMap((g) =>
          g.result.stats.players.filter((p) => p.team === g.team),
        ),
        teams: groups.flatMap((g) =>
          g.result.stats.teams.filter((t) => t.team === g.team),
        ),
      },
    };
  }
  const insights = generateInsights(data, team, map);
  const events = filterEvents(data.abilityEvents, { team, map });
  const timing = tendencyPercentages(events, (e) => e.phase).items[0];
  if (timing) {
    const phaseName = {
      early: "early (0–20s)",
      mid: "mid (20–60s)",
      late: "late (60s+)",
    }[timing.key];
    insights.push({
      id: `timing:${team}:${map ?? "all"}`,
      category: "timing",
      context: { phase: timing.key as "early" | "mid" | "late" },
      text: `${team} most often (${timing.pct.toFixed(0)}%) casts utility in the ${phaseName} phase${map && map !== "all" ? ` on ${map}` : ""}.`,
      evidence: {
        sampleSize: events.length,
        roundsAnalysed: new Set(
          events.map((e) => `${e.matchId}:${e.roundNumber}`),
        ).size,
        matchesAnalysed: new Set(events.map((e) => e.matchId)).size,
        frequency: { n: timing.count, total: events.length },
      },
    } satisfies Insight);
  }
  const antiStrats = generateAntiStrats(insights);
  const stats = operatorStats(
    data.sniperEvents,
    data.rounds.filter(
      (r) =>
        !active(side) ||
        (side === "attack"
          ? r.attackingTeam === team
          : r.defendingTeam === team),
    ),
  );
  return { insights, antiStrats, stats };
}
