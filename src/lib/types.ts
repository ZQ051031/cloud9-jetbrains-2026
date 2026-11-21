export const DATA_SOURCE_LABEL =
  "SAMPLE / DEMO DATA — fictional, seeded, not real GRID data" as const;
export interface Labeled {
  dataLabel: string;
}
export const MAP_NAMES = [
  "Ascent",
  "Bind",
  "Haven",
  "Lotus",
  "Sunset",
] as const;
export type MapName = (typeof MAP_NAMES)[number];
export type Side = "attack" | "defense";
export type Phase = "early" | "mid" | "late";
export type BuyType = "eco" | "force" | "full" | "bonus" | "pistol";
export type AbilityType =
  | "smoke"
  | "recon"
  | "sentinel"
  | "flash"
  | "molly"
  | "other";
export type AgentRole = "Sentinel" | "Initiator" | "Controller" | "Duelist";
export interface Economy {
  credits: number;
  buyType: BuyType;
}
export interface Round extends Labeled {
  matchId: string;
  roundNumber: number;
  map: MapName;
  attackingTeam: string;
  defendingTeam: string;
  winner: string;
  economy: Record<string, Economy>;
}
export interface Match extends Labeled {
  matchId: string;
  date: string;
  map: MapName;
  teamA: string;
  teamB: string;
  winner: string;
  rounds: Round[];
}
export interface AbilityCastEvent extends Labeled {
  eventId: string;
  matchId: string;
  roundNumber: number;
  map: MapName;
  team: string;
  player: string;
  agent: string;
  ability: string;
  abilityType: AbilityType;
  agentRole: AgentRole;
  side: Side;
  x: number;
  y: number;
  roundTimeSec: number;
  phase: Phase;
}
export interface WeaponBuyEvent extends Labeled {
  matchId: string;
  roundNumber: number;
  map: MapName;
  team: string;
  player: string;
  weapon: string;
  credits: number;
  side: Side;
  holdX: number;
  holdY: number;
  holdZone: string;
  angleType: "aggressive" | "passive";
  firstShotTimeSec: number;
  gotFirstKill: boolean;
  died: boolean;
  firstPick: boolean;
}
export type SniperEvent = WeaponBuyEvent;
export interface ScoutData extends Labeled {
  matches: Match[];
  rounds: Round[];
  abilityEvents: AbilityCastEvent[];
  sniperEvents: SniperEvent[];
}
export interface Filters {
  team?: string;
  map?: string;
  player?: string;
  agent?: string;
  ability?: string;
  abilityType?: string;
  side?: string;
  phase?: string;
  matchId?: string;
}
export interface Evidence {
  sampleSize: number;
  roundsAnalysed: number;
  matchesAnalysed: number;
  frequency: { n: number; total: number };
}
export interface InsightContext {
  map?: MapName;
  agent?: string;
  ability?: string;
  zone?: string;
  x?: number;
  y?: number;
  phase?: Phase;
  minCredits?: number;
  aggressivePct?: number;
  earlyShotPct?: number;
}
export interface Insight {
  id: string;
  text: string;
  evidence: Evidence;
  category: "sentinel" | "operator" | "timing";
  context?: InsightContext;
}
export interface AntiStrat {
  insightId: string;
  title: string;
  counter: string;
  supportingNumbers: Evidence;
}
export const phaseAt = (seconds: number): Phase =>
  seconds < 20 ? "early" : seconds < 60 ? "mid" : "late";
