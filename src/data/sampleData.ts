import {
  DATA_SOURCE_LABEL,
  MAP_NAMES,
  phaseAt,
  type ScoutData,
  type AgentRole,
  type AbilityType,
  type BuyType,
  type Match,
} from "../lib/types";
import { MAPS, pointInZone, zoneAt } from "../lib/maps";
export { DATA_SOURCE_LABEL };
export const TEAMS = [
  "Cloud9",
  "Nova Ridge",
  "Ember Vale Esports",
  "Polar Static",
];
export const ROSTERS: Record<string, string[]> = Object.fromEntries(
  TEAMS.map((t, i) => [
    t,
    ["Lumen", "Quill", "Cipherleaf", "Glint", "Drift"].map(
      (p) => `${p}${i + 1}`,
    ),
  ]),
);
const kits: [string, AgentRole, [string, AbilityType][]][] = [
  [
    "Killjoy",
    "Sentinel",
    [
      ["Nanoswarm", "sentinel"],
      ["Alarmbot", "sentinel"],
      ["Turret", "sentinel"],
      ["Lockdown", "sentinel"],
    ],
  ],
  [
    "Cypher",
    "Sentinel",
    [
      ["Trapwire", "sentinel"],
      ["Cyber Cage", "sentinel"],
      ["Spycam", "sentinel"],
    ],
  ],
  [
    "Deadlock",
    "Sentinel",
    [
      ["GravNet", "sentinel"],
      ["Sonic Sensor", "sentinel"],
      ["Barrier Mesh", "sentinel"],
    ],
  ],
  [
    "Vyse",
    "Sentinel",
    [
      ["Razorvine", "sentinel"],
      ["Shear", "sentinel"],
      ["Arc Rose", "sentinel"],
    ],
  ],
  [
    "Sova",
    "Initiator",
    [
      ["Recon Bolt", "recon"],
      ["Owl Drone", "recon"],
      ["Shock Bolt", "molly"],
    ],
  ],
  [
    "Fade",
    "Initiator",
    [
      ["Haunt", "recon"],
      ["Seize", "other"],
      ["Prowler", "recon"],
    ],
  ],
  ["Omen", "Controller", [["Dark Cover", "smoke"]]],
  ["Brimstone", "Controller", [["Sky Smoke", "smoke"]]],
  ["Astra", "Controller", [["Nebula", "smoke"]]],
  ["Clove", "Controller", [["Ruse", "smoke"]]],
];
const placements = {
  Ascent: {
    sentinel: ["A Site", "B Site", "A Tree", "B Site"],
    recon: ["A Lobby", "B Lobby", "Mid Courtyard"],
    smoke: ["A Heaven", "A Tree", "Market", "B Main"],
    aggressive: ["A Main", "B Main", "Catwalk", "Market"],
  },
  Bind: {
    sentinel: ["B Site", "A Site", "Hookah", "A Site"],
    recon: ["A Long", "B Fountain", "B Short"],
    smoke: ["Hookah", "A Short", "Showers", "B Long"],
    aggressive: ["A Short", "B Long", "Showers", "Hookah"],
  },
  Haven: {
    sentinel: ["C Site", "A Site", "B Site", "C Site"],
    recon: ["Garden", "Mid Courtyard", "C Long"],
    smoke: ["Garage", "Mid Window", "A Short", "C Site"],
    aggressive: ["C Long", "A Long", "Garage", "A Short"],
  },
  Lotus: {
    sentinel: ["A Site", "C Site", "B Site", "A Site"],
    recon: ["A Root", "B Main", "C Mound"],
    smoke: ["Waterfall", "A Main", "C Bend", "B Site"],
    aggressive: ["A Rubble", "C Mound", "A Main", "B Main"],
  },
  Sunset: {
    sentinel: ["B Site", "A Site", "B Market", "B Site"],
    recon: ["A Alley", "Mid Tiles", "B Lobby"],
    smoke: ["B Market", "A Main", "Mid Courtyard", "B Site"],
    aggressive: ["Mid Courtyard", "A Main", "B Boba", "B Market"],
  },
} as const;
export function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function generateSampleData(seed = 2026): ScoutData {
  const random = mulberry32(seed),
    data: ScoutData = {
      dataLabel: DATA_SOURCE_LABEL,
      matches: [],
      rounds: [],
      abilityEvents: [],
      sniperEvents: [],
    };
  const gaussian = () =>
    Math.sqrt(-2 * Math.log(Math.max(random(), 0.000001))) *
    Math.cos(2 * Math.PI * random());
  const choose = <T>(items: readonly T[]) =>
    items[Math.floor(random() * items.length)];
  function position(
    map: Match["map"],
    name: string,
    teamIndex: number,
    spread = 3.4,
  ) {
    const geometry = MAPS[map],
      zone = [...geometry.sites, ...geometry.callouts, ...geometry.lanes].find(
        (z) => z.name === name,
      )!;
    const center = {
      x: zone.labelAt.x + (teamIndex - 1.5) * 0.73,
      y: zone.labelAt.y + (((teamIndex * 3) % 5) - 2) * 0.61,
    };
    for (let attempt = 0; attempt < 50; attempt++) {
      const x = center.x + gaussian() * spread,
        y = center.y + gaussian() * spread;
      if (pointInZone(zone, x, y)) return { x, y };
    }
    return { ...zone.labelAt };
  }
  for (let mi = 0; mi < 24; mi++) {
    const pairs = [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 2],
        [2, 3],
        [1, 3],
      ],
      [ai, bi] = pairs[mi % 6],
      teamA = TEAMS[ai],
      teamB = TEAMS[bi],
      map = MAP_NAMES[mi % 5],
      matchId = `demo-${mi + 1}`;
    const match: Match = {
      dataLabel: DATA_SOURCE_LABEL,
      matchId,
      date: `2026-01-${String(mi + 1).padStart(2, "0")}`,
      map,
      teamA,
      teamB,
      winner: teamA,
      rounds: [],
    };
    for (let rn = 1; rn <= 22; rn++) {
      const attackingTeam = rn <= 11 ? teamA : teamB,
        defendingTeam = rn <= 11 ? teamB : teamA;
      const round = {
        dataLabel: DATA_SOURCE_LABEL,
        matchId,
        roundNumber: rn,
        map,
        attackingTeam,
        defendingTeam,
        winner: random() < 0.5 ? teamA : teamB,
        economy: {} as Match["rounds"][number]["economy"],
      };
      for (const ti of [ai, bi]) {
        const team = TEAMS[ti],
          side =
            team === attackingTeam ? ("attack" as const) : ("defense" as const);
        const buyType: BuyType =
          rn === 1 || rn === 12
            ? "pistol"
            : (["eco", "force", "full", "full", "bonus"] as BuyType[])[
                Math.floor(random() * 5)
              ];
        const credits =
          buyType === "pistol"
            ? 800
            : buyType === "eco"
              ? 1400
              : buyType === "force"
                ? 2800
                : buyType === "bonus"
                  ? 3900
                  : 5600 + Math.floor(random() * 3000);
        round.economy[team] = { credits, buyType };
        const plan = placements[map],
          favorite = plan.sentinel[ti];
        for (let pi = 0; pi < 5; pi++) {
          const kit =
            pi === 0
              ? kits[ti]
              : pi === 1
                ? kits[4 + (ti % 2)]
                : pi === 2
                  ? kits[6 + ti]
                  : kits[4 + ((pi + mi) % 6)];
          for (let cast = 0; cast < 2; cast++) {
            const [ability, abilityType] =
              kit[2][Math.floor(random() * kit[2].length)];
            const favored =
              pi === 0 && random() < (side === "defense" ? 0.74 : 0.66);
            const zoneName =
              pi === 0
                ? favored
                  ? favorite
                  : choose([...MAPS[map].sites, ...MAPS[map].callouts]).name
                : abilityType === "smoke"
                  ? choose(plan.smoke)
                  : side === "attack"
                    ? choose(plan.recon)
                    : choose([...plan.aggressive, ...plan.recon]);
            const { x, y } = position(
              map,
              zoneName,
              ti,
              pi === 0 && favored ? 2.7 : 4.2,
            );
            const roundTimeSec =
              pi === 0
                ? side === "defense"
                  ? Math.floor(random() * 18)
                  : 62 + Math.floor(random() * 38)
                : Math.floor(random() * 100);
            data.abilityEvents.push({
              dataLabel: DATA_SOURCE_LABEL,
              eventId: `${matchId}-${rn}-${ti}-${pi}-${cast}`,
              matchId,
              roundNumber: rn,
              map,
              team,
              player: ROSTERS[team][pi],
              agent: kit[0],
              agentRole: kit[1],
              ability,
              abilityType,
              side,
              x,
              y,
              roundTimeSec,
              phase: phaseAt(roundTimeSec),
            });
          }
        }
        const weapon =
          credits >= 5600 && random() < 0.86
            ? "Operator"
            : buyType === "force" && random() < 0.7
              ? "Odin"
              : null;
        if (weapon) {
          const aggressive = random() < 0.79;
          const hold = position(
              map,
              aggressive
                ? plan.aggressive[ti]
                : MAPS[map].sites[(ti + 1) % MAPS[map].sites.length].name,
              ti,
              1.5,
            ),
            holdX = hold.x,
            holdY = hold.y;
          const firstPick = aggressive && random() < 0.85;
          data.sniperEvents.push({
            dataLabel: DATA_SOURCE_LABEL,
            matchId,
            roundNumber: rn,
            map,
            team,
            player: ROSTERS[team][4],
            weapon,
            credits,
            side,
            holdX,
            holdY,
            holdZone: zoneAt(map, holdX, holdY),
            angleType: aggressive ? "aggressive" : "passive",
            firstShotTimeSec: aggressive
              ? Math.floor(random() * 20)
              : 20 + Math.floor(random() * 65),
            firstPick,
            gotFirstKill: firstPick && random() < 0.48,
            died: random() < 0.45,
          });
        }
      }
      data.rounds.push(round);
      match.rounds.push(round);
    }
    match.winner =
      match.rounds.filter((r) => r.winner === teamA).length >= 12
        ? teamA
        : teamB;
    data.matches.push(match);
  }
  return data;
}
export const sampleData = generateSampleData();
