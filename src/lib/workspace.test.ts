import { it, expect } from "vitest";
import { sampleData } from "../data/sampleData";
import { scopeData, workspaceAnalysis } from "./workspace";
import { DATA_SOURCE_LABEL, type ScoutData } from "./types";
const empty: ScoutData = {
  dataLabel: DATA_SOURCE_LABEL,
  matches: [],
  rounds: [],
  abilityEvents: [],
  sniperEvents: [],
};
it("scopes every dataset collection to team, map and match", () => {
  const data = scopeData(sampleData, {
    team: "Nova Ridge",
    map: "Ascent",
    matchId: "demo-1",
  });
  expect(data.abilityEvents.length).toBeGreaterThan(0);
  expect(
    data.abilityEvents.every(
      (e) =>
        e.team === "Nova Ridge" && e.map === "Ascent" && e.matchId === "demo-1",
    ),
  ).toBe(true);
  expect(
    data.sniperEvents.every(
      (e) =>
        e.team === "Nova Ridge" && e.map === "Ascent" && e.matchId === "demo-1",
    ),
  ).toBe(true);
  expect(data.matches).toHaveLength(1);
  expect(data.rounds).toHaveLength(22);
});
it("ability filters restrict sniper buys and economy to matching cast rounds", () => {
  const data = scopeData(sampleData, {
    team: "Nova Ridge",
    abilityType: "sentinel",
    phase: "early",
  });
  const keys = new Set(
    data.abilityEvents.map((e) => `${e.matchId}:${e.roundNumber}`),
  );
  expect(
    data.sniperEvents.every((e) => keys.has(`${e.matchId}:${e.roundNumber}`)),
  ).toBe(true);
  expect(
    data.rounds.every((e) => keys.has(`${e.matchId}:${e.roundNumber}`)),
  ).toBe(true);
});
it("side filter uses the selected team side for denominators", () => {
  const data = scopeData(sampleData, { team: "Nova Ridge", side: "defense" });
  expect(data.rounds.length).toBeGreaterThan(0);
  expect(data.rounds.every((r) => r.defendingTeam === "Nova Ridge")).toBe(true);
  expect(data.sniperEvents.every((e) => e.side === "defense")).toBe(true);
});
it("player filter restricts both event streams", () => {
  const data = scopeData(sampleData, { team: "Nova Ridge", player: "Drift2" });
  expect(data.abilityEvents.every((e) => e.player === "Drift2")).toBe(true);
  expect(data.sniperEvents.every((e) => e.player === "Drift2")).toBe(true);
});
it("empty and unmatched filters produce no invented data", () => {
  expect(scopeData(empty, { team: "Cloud9" })).toEqual(empty);
  const data = scopeData(sampleData, {
    team: "Nova Ridge",
    abilityType: "flash",
  });
  expect(data.rounds).toEqual([]);
  expect(data.sniperEvents).toEqual([]);
  expect(workspaceAnalysis(data, "Nova Ridge").insights).toEqual([]);
});
it("map-scoped dashboard has at least three observations with matched counters", () => {
  const data = scopeData(sampleData, { team: "Nova Ridge", map: "Bind" });
  const analysis = workspaceAnalysis(data, "Nova Ridge", "Bind");
  expect(analysis.insights.length).toBeGreaterThanOrEqual(3);
  expect(analysis.antiStrats.map((a) => a.insightId)).toEqual(
    analysis.insights.map((i) => i.id),
  );
  expect(
    analysis.insights.every(
      (i) => i.evidence.frequency.total >= i.evidence.frequency.n,
    ),
  ).toBe(true);
  expect(
    analysis.antiStrats.find((a) => a.insightId.startsWith("timing:"))?.counter,
  ).toContain("utility window");
});
it("empty analysis returns empty results", () =>
  expect(workspaceAnalysis(empty, "Cloud9")).toEqual({
    insights: [],
    antiStrats: [],
    stats: { players: [], teams: [] },
  }));
