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

export function workspaceAnalysis(data: ScoutData, team: string, map?: string) {
  const insights = generateInsights(data, team, map);
  const events = data.abilityEvents.filter((e) => e.team === team);
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
  const antiStrats = generateAntiStrats(insights).map((a) =>
    insights.find((i) => i.id === a.insightId)?.category === "timing"
      ? {
          ...a,
          title: "Break the utility rhythm",
          counter:
            "Show an early fake with a Fade Prowler, hold your execute until the observed utility window ends, then re-clear with Sova Recon Bolt. Change the timing next round rather than repeating the same entry.",
        }
      : a,
  );
  const stats = operatorStats(data.sniperEvents, data.rounds);
  return { insights, antiStrats, stats };
}
