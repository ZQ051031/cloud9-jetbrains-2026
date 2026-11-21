import {
  type AbilityCastEvent,
  type Filters,
  type ScoutData,
  type SniperEvent,
  type Round,
  type Insight,
  type AntiStrat,
} from "./types";
import { MAPS, zoneAt } from "./maps";
const pct = (n: number, total: number) => (total ? (100 * n) / total : 0);
export function filterEvents<T extends AbilityCastEvent>(
  events: T[],
  filters: Filters,
): T[] {
  return events.filter((e) =>
    Object.entries(filters).every(
      ([key, value]) =>
        !value || value === "all" || e[key as keyof T] === value,
    ),
  );
}
export function tendencyPercentages<T>(
  events: T[],
  keyFn: (event: T) => string,
) {
  const counts = new Map<string, number>();
  events.forEach((e) => {
    const key = keyFn(e);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  return {
    total: events.length,
    items: [...counts]
      .map(([key, count]) => ({ key, count, pct: pct(count, events.length) }))
      .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key)),
  };
}
export function heatmapGrid(
  events: { x: number; y: number }[],
  cols = 10,
  rows = 10,
) {
  if (
    !Number.isInteger(cols) ||
    !Number.isInteger(rows) ||
    cols < 1 ||
    rows < 1
  )
    return [];
  const cells = Array.from({ length: cols * rows }, (_, i) => ({
    col: i % cols,
    row: Math.floor(i / cols),
    x: ((i % cols) * 100) / cols,
    y: (Math.floor(i / cols) * 100) / rows,
    count: 0,
    density: 0,
  }));
  events.forEach((e) => {
    if (Number.isFinite(e.x) && Number.isFinite(e.y))
      cells[
        Math.max(0, Math.min(rows - 1, Math.floor((e.y * rows) / 100))) * cols +
          Math.max(0, Math.min(cols - 1, Math.floor((e.x * cols) / 100)))
      ].count++;
  });
  const max = Math.max(0, ...cells.map((c) => c.count));
  return cells.map((c) => ({ ...c, density: max ? c.count / max : 0 }));
}
export function clusterHotspots(
  events: Pick<AbilityCastEvent, "x" | "y" | "map">[],
  radius = 8,
) {
  if (!Number.isFinite(radius) || radius <= 0) return [];
  let remaining = [...events];
  const clusters = [];
  while (remaining.length) {
    let members: typeof remaining = [];
    for (const center of remaining) {
      const nearby = remaining.filter(
        (e) =>
          e.map === center.map &&
          Math.hypot(e.x - center.x, e.y - center.y) <= radius,
      );
      if (nearby.length > members.length) members = nearby;
    }
    if (!members.length) break;
    const x = members.reduce((s, e) => s + e.x, 0) / members.length,
      y = members.reduce((s, e) => s + e.y, 0) / members.length,
      map = members[0].map;
    clusters.push({
      x,
      y,
      map,
      count: members.length,
      share: pct(members.length, events.length),
      zone: zoneAt(map, x, y),
    });
    const used = new Set(members);
    remaining = remaining.filter((e) => !used.has(e));
  }
  return clusters.sort((a, b) => b.count - a.count);
}
const coverage = (events: { matchId: string; roundNumber: number }[]) => ({
  roundsAnalysed: new Set(events.map((e) => `${e.matchId}:${e.roundNumber}`))
    .size,
  matchesAnalysed: new Set(events.map((e) => e.matchId)).size,
});
export function sentinelSetupTendencies(
  events: AbilityCastEvent[],
  radius = 8,
) {
  const sentinels = events.filter((e) => e.agentRole === "Sentinel");
  return [...new Set(sentinels.map((e) => `${e.team}|${e.map}`))].flatMap(
    (key) => {
      const group = sentinels.filter((e) => `${e.team}|${e.map}` === key),
        hot = clusterHotspots(group, radius)[0];
      return hot
        ? [
            {
              team: group[0].team,
              ...hot,
              pct: hot.share,
              sampleSize: group.length,
              ...coverage(group),
            },
          ]
        : [];
    },
  );
}
export function operatorStats(events: SniperEvent[], rounds: Round[]) {
  const players = [...new Set(events.map((e) => `${e.team}|${e.player}`))].map(
    (key) => {
      const buys = events.filter((e) => `${e.team}|${e.player}` === key),
        { team, player } = buys[0];
      const played = rounds.filter(
        (r) => r.attackingTeam === team || r.defendingTeam === team,
      );
      const buyRounds = new Set(
        buys.map((e) => `${e.matchId}:${e.roundNumber}`),
      ).size;
      const op = buys.filter((e) => e.weapon === "Operator"),
        odin = buys.filter((e) => e.weapon === "Odin");
      const timings = [
        [0, 10],
        [10, 20],
        [20, 40],
        [40, 60],
        [60, Infinity],
      ].map(([min, max]) => {
        const count = op.filter(
          (e) => e.firstShotTimeSec >= min && e.firstShotTimeSec < max,
        ).length;
        return {
          key: max === Infinity ? "60+" : `${min}-${max}`,
          count,
          pct: pct(count, op.length),
        };
      });
      const attempts = op.filter((e) => e.firstPick).length;
      return {
        team,
        player,
        buyRounds,
        roundsPlayed: played.length,
        buyRate: pct(buyRounds, played.length),
        avgCreditsAtBuy: buys.reduce((s, e) => s + e.credits, 0) / buys.length,
        operatorCount: op.length,
        odinCount: odin.length,
        aggressivePct: pct(
          op.filter((e) => e.angleType === "aggressive").length,
          op.length,
        ),
        passivePct: pct(
          op.filter((e) => e.angleType === "passive").length,
          op.length,
        ),
        topHoldZones: tendencyPercentages(op, (e) => e.holdZone).items,
        timingBuckets: timings,
        earlyShotPct: pct(
          op.filter((e) => e.firstShotTimeSec < 20).length,
          op.length,
        ),
        firstPickAttemptRate: pct(attempts, op.length),
        firstPickSuccessPct: pct(
          op.filter((e) => e.firstPick && e.gotFirstKill).length,
          attempts,
        ),
        deathWithoutKillRate: pct(
          op.filter((e) => e.died && !e.gotFirstKill).length,
          op.length,
        ),
      };
    },
  );
  const teams = [
    ...new Set([
      ...events.map((e) => e.team),
      ...rounds.flatMap((r) => [r.attackingTeam, r.defendingTeam]),
    ]),
  ].map((team) => {
    const played = rounds.filter((r) => r.economy[team]);
    return {
      team,
      roundsByBuyType: tendencyPercentages(
        played,
        (r) => r.economy[team].buyType,
      ).items,
      opBuyRateByCreditBand: [
        [0, 3000],
        [3000, 5000],
        [5000, 7000],
        [7000, Infinity],
      ].map(([min, max]) => {
        const band = played.filter(
            (r) =>
              r.economy[team].credits >= min && r.economy[team].credits < max,
          ),
          keys = new Set(band.map((r) => `${r.matchId}:${r.roundNumber}`));
        const count = new Set(
          events
            .filter(
              (e) =>
                e.team === team &&
                e.weapon === "Operator" &&
                keys.has(`${e.matchId}:${e.roundNumber}`),
            )
            .map((e) => `${e.matchId}:${e.roundNumber}`),
        ).size;
        return {
          band: max === Infinity ? `${min}+` : `${min}-${max}`,
          rounds: band.length,
          count,
          pct: pct(count, band.length),
        };
      }),
    };
  });
  return { players, teams };
}
export function generateInsights(
  data: ScoutData,
  team: string,
  map?: string,
): Insight[] {
  const events = filterEvents(data.abilityEvents, { team, map });
  const insights: Insight[] = sentinelSetupTendencies(events).map((t) => {
    const nearby = events.filter(
      (e) =>
        e.map === t.map &&
        e.agentRole === "Sentinel" &&
        Math.hypot(e.x - t.x, e.y - t.y) <= 8,
    );
    const ability = tendencyPercentages(
      nearby,
      (e) => `${e.agent}|${e.ability}`,
    ).items[0]?.key.split("|");
    return {
      id: `sentinel:${team}:${t.map}`,
      category: "sentinel",
      context: {
        map: t.map,
        agent: ability?.[0],
        ability: ability?.[1],
        zone: t.zone,
        x: t.x,
        y: t.y,
      },
      text: `${team} most often (${t.pct.toFixed(0)}%) uses their Sentinel utility at Point (${t.x.toFixed(1)}, ${t.y.toFixed(1)}) — ${t.zone} on ${t.map}${ability ? ` (${ability[0]} ${ability[1]})` : ""}`,
      evidence: {
        sampleSize: t.sampleSize,
        roundsAnalysed: t.roundsAnalysed,
        matchesAnalysed: t.matchesAnalysed,
        frequency: { n: t.count, total: t.sampleSize },
      },
    };
  });
  const snipers = data.sniperEvents.filter(
    (e) =>
      e.team === team &&
      (!map || map === "all" || e.map === map) &&
      e.weapon === "Operator",
  );
  for (const player of operatorStats(snipers, data.rounds).players) {
    const buys = snipers.filter((e) => e.player === player.player),
      early = buys.filter((e) => e.firstShotTimeSec < 20).length;
    const aggressive = buys.filter((e) => e.angleType === "aggressive"),
      zone =
        tendencyPercentages(aggressive, (e) => e.holdZone).items[0]?.key ??
        player.topHoldZones[0]?.key;
    insights.push({
      id: `operator:${team}:${player.player}:${map ?? "all"}`,
      category: "operator",
      context: {
        map: map && map !== "all" ? buys[0].map : undefined,
        zone,
        minCredits: Math.min(...buys.map((e) => e.credits)),
        aggressivePct: player.aggressivePct,
        earlyShotPct: player.earlyShotPct,
      },
      text: `${player.player} fires the Operator within 20s in ${player.earlyShotPct.toFixed(0)}% of buys; ${player.aggressivePct.toFixed(0)}% aggressive holds, most often ${zone ?? "unknown"}.`,
      evidence: {
        sampleSize: buys.length,
        ...coverage(buys),
        frequency: { n: early, total: buys.length },
      },
    });
  }
  return insights.sort(
    (a, b) =>
      pct(b.evidence.frequency.n, b.evidence.frequency.total) -
      pct(a.evidence.frequency.n, a.evidence.frequency.total),
  );
}
export function generateAntiStrats(insights: Insight[]): AntiStrat[] {
  return insights.map((i) => {
    const c = i.context ?? {},
      location = `${c.zone ?? "the observed choke"}${c.x !== undefined && c.y !== undefined ? ` at (${c.x.toFixed(1)}, ${c.y.toFixed(1)})` : ""}`;
    const route = c.map
      ? MAPS[c.map].alternateRoute
      : "split through a second lane";
    let title = "Clear the setup before entry",
      counter = "";
    if (i.category === "timing") {
      title = "Change the utility window";
      counter =
        c.phase === "late"
          ? "Take space before :40 with a recon-led contact, keep one flash for the late utility window, and delay the plant until revealed damage utility expires. Do not spend all your clearing utility on the opener."
          : c.phase === "early"
            ? "Bait the first utility window with a Fade Prowler before :15, disengage for 10 seconds, then re-clear with Sova Recon Bolt and hit from a second lane."
            : "Show a low-cost fake before :20, pause the execute through the mid-round utility window, and re-hit after :60 with a saved flash. Vary the contact timing next round.";
    } else if (i.category === "operator") {
      title = "Displace the sniper, then trade";
      const opener =
        (c.earlyShotPct ?? 0) >= 50
          ? "Before :20, jiggle for the shot from cover and flash the re-peek"
          : "Hold the first contact, use recon to locate the delayed shot and flash the re-peek";
      counter = `${opener} at ${location}; smoke the escape sightline and trade in pairs. ${(c.aggressivePct ?? 0) >= 50 ? "Punish the forward angle with a second-lane swing." : "Avoid chasing the passive fallback; take uncontested space first."} On their full-buy rounds${c.minCredits ? ` (observed credits ≥ ${c.minCredits})` : ""}, budget an Operator counter-buy only with a trade partner; use Odin wall pressure only on a VOD-verified penetrable surface.`;
    } else {
      title = `Dismantle ${c.agent ?? "Sentinel"} utility`;
      const clear =
        c.agent === "Cypher"
          ? "Use KAY/O ZERO/point to suppress Trapwire coverage, then shoot the revealed anchors. Check elevated wires before sending Raze Boom Bot; delay the second entry by 10s"
          : c.agent === "Killjoy"
            ? `Scout ${c.ability ?? "the setup"} with Fade Prowler; send Sova Shock Bolt into the Turret/Alarmbot corner and shoot revealed Nanoswarms before planting`
            : c.agent === "Deadlock"
              ? "Walk the Sonic Sensor contact, shoot exposed sensors from cover and break Barrier Mesh with grouped fire; save a dash until GravNet is cleared"
              : c.agent === "Vyse"
                ? "Bait Arc Rose with a shoulder contact, turn the flash and wait out Razorvine; send one player to draw Shear before the second entry"
                : "Check the setup with Fade Prowler, shoot exposed devices and use KAY/O suppression before committing";
      counter = `At ${location}, ${clear.charAt(0).toLowerCase() + clear.slice(1)}. Start the clear before :20 on an opening hit, then ${route}. For a late retake, clear again before crossing the plant line.`;
    }
    return { insightId: i.id, title, counter, supportingNumbers: i.evidence };
  });
}
export function selfScout(data: ScoutData, team = "Cloud9") {
  const insights = generateInsights(data, team);
  return { team, insights, antiStrats: generateAntiStrats(insights) };
}
export function buildScoutReport(
  data: ScoutData,
  opponent: string,
  map?: string,
) {
  const top3Tendencies = generateInsights(data, opponent, map).slice(0, 3);
  return {
    opponent,
    map: map ?? "all",
    top3Tendencies,
    operatorProfile: operatorStats(
      data.sniperEvents.filter(
        (e) => e.team === opponent && (!map || map === "all" || e.map === map),
      ),
      data.rounds.filter(
        (r) =>
          (r.attackingTeam === opponent || r.defendingTeam === opponent) &&
          (!map || map === "all" || r.map === map),
      ),
    ),
    antiStrats: generateAntiStrats(top3Tendencies),
    dataLabel: data.dataLabel,
  };
}
