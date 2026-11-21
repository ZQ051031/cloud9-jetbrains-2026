import { expect, it } from "vitest";
import { MAPS, pointInZone, zoneAt } from "./maps";
import { sampleData } from "../data/sampleData";
import {
  generateAntiStrats,
  generateInsights,
  heatmapGrid,
  sentinelSetupTendencies,
} from "./analytics";
import { densityColor } from "../components/Charts";
import { scopeData, workspaceAnalysis } from "./workspace";
import { type Insight, MAP_NAMES } from "./types";

it("all map polygons have interior label anchors and unique site layouts", () => {
  expect(
    new Set(
      Object.values(MAPS).map((m) =>
        JSON.stringify(m.sites.map((s) => s.polygon)),
      ),
    ).size,
  ).toBe(5);
  for (const m of Object.values(MAPS)) {
    expect(m.corridors.length).toBeGreaterThanOrEqual(3);
    for (const z of [...m.sites, ...m.callouts, ...m.spawns, ...m.lanes])
      expect(
        pointInZone(z, z.labelAt.x, z.labelAt.y),
        `${m.name}: ${z.name}`,
      ).toBe(true);
  }
});
it("Bind has two teleporters and no mid, Lotus has rotating doors", () => {
  expect(
    MAPS.Bind.features.filter((f) => f.kind === "teleporter"),
  ).toHaveLength(2);
  expect(MAPS.Bind.callouts.some((z) => z.name.startsWith("Mid"))).toBe(false);
  expect(MAPS.Lotus.features.filter((f) => f.kind === "door")).toHaveLength(2);
});
it("sample tendencies vary by map and by team", () => {
  const tendencies = sentinelSetupTendencies(sampleData.abilityEvents);
  const nova = tendencies.filter((t) => t.team === "Nova Ridge");
  expect(nova).toHaveLength(5);
  expect(
    new Set(nova.map((t) => `${t.x.toFixed(0)},${t.y.toFixed(0)}`)).size,
  ).toBe(5);
  for (const map of MAP_NAMES)
    expect(
      new Set(
        tendencies
          .filter((t) => t.map === map)
          .map((t) => `${t.x.toFixed(1)},${t.y.toFixed(1)}`),
      ).size,
    ).toBe(4);
});
it("telemetry has continuous coordinates, varied coverage and sensible sentinel timings", () => {
  expect(
    sampleData.abilityEvents.filter(
      (e) => !Number.isInteger(e.x) && !Number.isInteger(e.y),
    ).length,
  ).toBeGreaterThan(10000);
  for (const map of MAP_NAMES) {
    const events = sampleData.abilityEvents.filter((e) => e.map === map);
    expect(
      heatmapGrid(events, 24, 24).filter((c) => c.count).length,
    ).toBeGreaterThan(35);
  }
  const defense = sampleData.abilityEvents.filter(
    (e) => e.agentRole === "Sentinel" && e.side === "defense",
  );
  expect(defense.every((e) => e.roundTimeSec < 20)).toBe(true);
  expect(
    sampleData.sniperEvents.every(
      (e) => zoneAt(e.map, e.holdX, e.holdY) === e.holdZone,
    ),
  ).toBe(true);
});
it("density palette interpolates cyan, yellow and red and clamps invalid input", () => {
  expect(densityColor(0)).toBe("rgb(0, 174, 239)");
  expect(densityColor(0.5)).toBe("rgb(255, 218, 68)");
  expect(densityColor(1)).toBe("rgb(248, 75, 65)");
  expect(densityColor(-1)).toBe(densityColor(0));
  expect(densityColor(NaN)).toBe(densityColor(0));
});
const fixture: Insight = {
  id: "fixture",
  text: "This sentence must not be repeated.",
  category: "sentinel",
  evidence: {
    sampleSize: 80,
    roundsAnalysed: 40,
    matchesAnalysed: 3,
    frequency: { n: 52, total: 80 },
  },
  context: {
    agent: "Killjoy",
    ability: "Nanoswarm",
    zone: "B Main",
    map: "Bind",
    x: 24.6,
    y: 32.7,
  },
};
it("Killjoy counter references coordinates, clear utility, timing and map-specific route without echoing insight", () => {
  const counter = generateAntiStrats([fixture])[0];
  for (const phrase of [
    "(24.6, 32.7)",
    "Nanoswarm",
    "Sova Shock Bolt",
    "Fade Prowler",
    ":20",
    "Hookah",
  ])
    expect(counter.counter).toContain(phrase);
  expect(counter.counter).not.toContain(fixture.text);
  expect(counter.supportingNumbers).toEqual(fixture.evidence);
});
it("Cypher and Vyse produce different device-specific counters", () => {
  expect(
    generateAntiStrats([
      { ...fixture, context: { agent: "Cypher", ability: "Trapwire" } },
    ])[0].counter,
  ).toContain("KAY/O ZERO/point");
  expect(
    generateAntiStrats([{ ...fixture, context: { agent: "Cypher" } }])[0]
      .counter,
  ).toContain("10s");
  expect(
    generateAntiStrats([{ ...fixture, context: { agent: "Vyse" } }])[0].counter,
  ).toContain("Shear");
  expect(
    generateAntiStrats([{ ...fixture, context: { agent: "Deadlock" } }])[0]
      .counter,
  ).toContain("Sonic Sensor");
});
it("Operator counter uses hold zone, opener, aggression and observed credit threshold", () => {
  const counter = generateAntiStrats([
    {
      ...fixture,
      category: "operator",
      context: {
        zone: "A Short",
        minCredits: 6000,
        earlyShotPct: 80,
        aggressivePct: 79,
      },
    },
  ])[0];
  for (const phrase of [
    "A Short",
    "Before :20",
    "jiggle",
    "flash",
    "6000",
    "Operator counter-buy",
    "Odin",
  ])
    expect(counter.counter).toContain(phrase);
});
it("late utility counter saves resources instead of waiting until round end", () => {
  expect(
    generateAntiStrats([
      { ...fixture, category: "timing", context: { phase: "late" } },
    ])[0].counter,
  ).toContain("before :40");
});
it("real insights carry structured context for rules", () => {
  const insights = generateInsights(sampleData, "Nova Ridge", "Bind");
  expect(insights.every((i) => !!i.context)).toBe(true);
  expect(insights.find((i) => i.category === "sentinel")?.context?.agent).toBe(
    "Cypher",
  );
  expect(
    insights.find((i) => i.category === "operator")?.context?.minCredits,
  ).toBeGreaterThanOrEqual(5600);
});
it("all-teams analysis contains independent team evidence and no duplicate economy rows", () => {
  const data = scopeData(sampleData, {
    team: "all",
    map: "Bind",
    side: "attack",
  });
  const result = workspaceAnalysis(data, "all", "Bind", "attack");
  expect(new Set(result.stats.players.map((p) => p.team)).size).toBe(4);
  expect(new Set(result.stats.teams.map((t) => t.team)).size).toBe(4);
  for (const p of result.stats.players)
    expect(p.roundsPlayed).toBe(
      data.rounds.filter((r) => r.attackingTeam === p.team).length,
    );
});
