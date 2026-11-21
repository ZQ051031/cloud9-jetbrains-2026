import { type MapName } from "./types";
export interface Point {
  x: number;
  y: number;
}
export interface Zone {
  name: string;
  polygon: Point[];
  labelAt: Point;
}
export interface MapFeature extends Point {
  kind: "teleporter" | "door";
  label: string;
}
export interface MapGeometry {
  name: MapName;
  sites: Zone[];
  callouts: Zone[];
  spawns: Zone[];
  lanes: Zone[];
  corridors: Point[][];
  features: MapFeature[];
  alternateRoute: string;
}
const points = (pairs: number[][]): Point[] =>
  pairs.map(([x, y]) => ({ x, y }));
const zone = (name: string, label: number[], polygon: number[][]): Zone => ({
  name,
  labelAt: { x: label[0], y: label[1] },
  polygon: points(polygon),
});
const spawn = (name: string, x: number, y: number): Zone =>
  zone(
    name,
    [x, y],
    [
      [x - 9, y - 4],
      [x + 7, y - 4],
      [x + 10, y],
      [x + 6, y + 5],
      [x - 8, y + 5],
    ],
  );
const paths = (...lines: number[][][]): Point[][] => lines.map(points);

export const MAPS: Record<MapName, MapGeometry> = {
  Ascent: {
    name: "Ascent",
    alternateRoute: "split through Market and Catwalk",
    sites: [
      zone(
        "B Site",
        [18, 23],
        [
          [7, 13],
          [26, 13],
          [31, 22],
          [27, 34],
          [11, 34],
          [7, 27],
        ],
      ),
      zone(
        "A Site",
        [82, 23],
        [
          [71, 12],
          [90, 12],
          [95, 24],
          [87, 35],
          [73, 31],
        ],
      ),
    ],
    callouts: [
      zone(
        "B Main",
        [21, 50],
        [
          [13, 43],
          [25, 39],
          [32, 49],
          [27, 62],
          [17, 62],
        ],
      ),
      zone(
        "A Main",
        [85, 49],
        [
          [77, 42],
          [91, 39],
          [94, 55],
          [84, 64],
          [75, 57],
        ],
      ),
      zone(
        "Mid Courtyard",
        [49, 47],
        [
          [38, 35],
          [53, 31],
          [64, 41],
          [60, 58],
          [42, 63],
          [34, 49],
        ],
      ),
      zone(
        "Market",
        [34, 32],
        [
          [28, 26],
          [39, 26],
          [42, 34],
          [34, 41],
          [28, 36],
        ],
      ),
      zone(
        "Catwalk",
        [60, 29],
        [
          [55, 24],
          [65, 22],
          [68, 34],
          [61, 41],
          [54, 34],
        ],
      ),
      zone(
        "A Tree",
        [68, 23],
        [
          [65, 16],
          [73, 16],
          [75, 29],
          [68, 35],
          [62, 28],
        ],
      ),
      zone(
        "A Heaven",
        [84, 7],
        [
          [77, 3],
          [92, 3],
          [92, 10],
          [77, 10],
        ],
      ),
    ],
    spawns: [spawn("Defender Spawn", 47, 9), spawn("Attacker Spawn", 51, 90)],
    lanes: [
      zone(
        "B Lobby",
        [25, 73],
        [
          [16, 66],
          [30, 64],
          [38, 76],
          [30, 82],
          [21, 80],
        ],
      ),
      zone(
        "A Lobby",
        [75, 75],
        [
          [67, 68],
          [82, 67],
          [87, 77],
          [76, 84],
          [66, 78],
        ],
      ),
    ],
    corridors: paths(
      [
        [18, 23],
        [21, 50],
        [25, 73],
        [51, 90],
        [75, 75],
        [85, 49],
        [82, 23],
      ],
      [
        [25, 73],
        [49, 47],
        [34, 32],
        [18, 23],
      ],
      [
        [49, 47],
        [60, 29],
        [68, 23],
        [82, 23],
        [84, 7],
        [47, 9],
        [18, 23],
      ],
      [
        [47, 9],
        [68, 23],
      ],
      [
        [51, 90],
        [49, 47],
      ],
    ),
    features: [],
  },
  Bind: {
    name: "Bind",
    alternateRoute:
      "split via Hookah and B Long, using the teleporter only after a fake",
    sites: [
      zone(
        "B Site",
        [24, 23],
        [
          [9, 15],
          [29, 10],
          [39, 20],
          [35, 35],
          [16, 37],
          [9, 29],
        ],
      ),
      zone(
        "A Site",
        [77, 32],
        [
          [65, 20],
          [85, 18],
          [94, 30],
          [88, 43],
          [73, 46],
          [62, 36],
        ],
      ),
    ],
    callouts: [
      zone(
        "Hookah",
        [35, 47],
        [
          [27, 39],
          [39, 38],
          [43, 50],
          [37, 57],
          [27, 53],
        ],
      ),
      zone(
        "B Long",
        [12, 57],
        [
          [6, 43],
          [15, 41],
          [20, 60],
          [16, 74],
          [6, 69],
        ],
      ),
      zone(
        "B Short",
        [31, 69],
        [
          [25, 61],
          [35, 59],
          [42, 69],
          [34, 79],
          [24, 75],
        ],
      ),
      zone(
        "A Short",
        [61, 56],
        [
          [54, 46],
          [64, 44],
          [69, 57],
          [65, 67],
          [55, 64],
        ],
      ),
      zone(
        "A Long",
        [78, 77],
        [
          [68, 69],
          [80, 68],
          [87, 81],
          [76, 86],
          [68, 81],
        ],
      ),
      zone(
        "Showers",
        [90, 57],
        [
          [84, 47],
          [95, 45],
          [97, 61],
          [90, 68],
          [83, 62],
        ],
      ),
    ],
    spawns: [spawn("Defender Spawn", 51, 7), spawn("Attacker Spawn", 51, 89)],
    lanes: [
      zone(
        "B Fountain",
        [17, 81],
        [
          [8, 77],
          [24, 75],
          [29, 83],
          [20, 89],
          [10, 87],
        ],
      ),
    ],
    corridors: paths(
      [
        [51, 7],
        [24, 23],
        [12, 57],
        [17, 81],
        [51, 89],
        [78, 77],
        [90, 57],
        [77, 32],
        [51, 7],
      ],
      [
        [51, 89],
        [31, 69],
        [35, 47],
        [24, 23],
      ],
      [
        [51, 89],
        [61, 56],
        [77, 32],
      ],
    ),
    features: [
      { kind: "teleporter", x: 47, y: 42, label: "TP A → B" },
      { kind: "teleporter", x: 9, y: 91, label: "TP B → A" },
    ],
  },
  Haven: {
    name: "Haven",
    alternateRoute: "split C Long with Garage pressure",
    sites: [
      zone(
        "A Site",
        [15, 30],
        [
          [5, 20],
          [20, 17],
          [29, 27],
          [24, 40],
          [9, 43],
          [4, 35],
        ],
      ),
      zone(
        "B Site",
        [49, 24],
        [
          [39, 13],
          [57, 13],
          [62, 25],
          [56, 35],
          [40, 34],
          [36, 25],
        ],
      ),
      zone(
        "C Site",
        [84, 18],
        [
          [73, 7],
          [92, 9],
          [96, 22],
          [89, 32],
          [74, 29],
          [70, 19],
        ],
      ),
    ],
    callouts: [
      zone(
        "A Long",
        [10, 61],
        [
          [4, 47],
          [13, 44],
          [19, 63],
          [14, 77],
          [5, 73],
        ],
      ),
      zone(
        "A Short",
        [29, 51],
        [
          [23, 42],
          [33, 39],
          [38, 53],
          [31, 63],
          [23, 59],
        ],
      ),
      zone(
        "Mid Courtyard",
        [48, 65],
        [
          [37, 55],
          [51, 51],
          [60, 62],
          [54, 76],
          [40, 77],
          [34, 66],
        ],
      ),
      zone(
        "Mid Window",
        [46, 44],
        [
          [38, 38],
          [52, 37],
          [55, 47],
          [43, 51],
          [37, 47],
        ],
      ),
      zone(
        "Garage",
        [67, 45],
        [
          [59, 37],
          [72, 34],
          [77, 47],
          [70, 56],
          [60, 54],
        ],
      ),
      zone(
        "C Long",
        [88, 58],
        [
          [82, 37],
          [92, 36],
          [96, 66],
          [89, 78],
          [81, 72],
        ],
      ),
    ],
    spawns: [spawn("Defender Spawn", 53, 5), spawn("Attacker Spawn", 47, 91)],
    lanes: [
      zone(
        "Garden",
        [25, 79],
        [
          [18, 74],
          [29, 70],
          [34, 82],
          [24, 88],
          [18, 84],
        ],
      ),
    ],
    corridors: paths(
      [
        [53, 5],
        [15, 30],
        [10, 61],
        [25, 79],
        [47, 91],
        [88, 58],
        [84, 18],
        [53, 5],
      ],
      [
        [47, 91],
        [48, 65],
        [46, 44],
        [49, 24],
      ],
      [
        [48, 65],
        [29, 51],
        [15, 30],
      ],
      [
        [48, 65],
        [67, 45],
        [84, 18],
      ],
    ),
    features: [],
  },
  Lotus: {
    name: "Lotus",
    alternateRoute: "rotate through B Main after drawing the A door",
    sites: [
      zone(
        "A Site",
        [18, 18],
        [
          [7, 8],
          [23, 6],
          [32, 17],
          [27, 30],
          [13, 32],
          [5, 22],
        ],
      ),
      zone(
        "B Site",
        [49, 36],
        [
          [41, 26],
          [53, 23],
          [61, 34],
          [55, 46],
          [42, 48],
          [36, 38],
        ],
      ),
      zone(
        "C Site",
        [85, 39],
        [
          [77, 25],
          [91, 25],
          [98, 40],
          [90, 53],
          [77, 51],
          [71, 40],
        ],
      ),
    ],
    callouts: [
      zone(
        "A Main",
        [16, 46],
        [
          [7, 36],
          [21, 34],
          [27, 44],
          [22, 56],
          [11, 58],
          [5, 49],
        ],
      ),
      zone(
        "A Root",
        [17, 74],
        [
          [8, 65],
          [24, 62],
          [31, 73],
          [25, 84],
          [12, 86],
          [6, 76],
        ],
      ),
      zone(
        "A Rubble",
        [33, 61],
        [
          [27, 52],
          [38, 50],
          [43, 60],
          [38, 69],
          [28, 70],
          [24, 62],
        ],
      ),
      zone(
        "B Main",
        [51, 66],
        [
          [44, 55],
          [57, 53],
          [63, 65],
          [56, 76],
          [44, 74],
          [40, 65],
        ],
      ),
      zone(
        "C Mound",
        [82, 76],
        [
          [74, 64],
          [88, 62],
          [96, 74],
          [91, 86],
          [78, 88],
          [70, 78],
        ],
      ),
      zone(
        "Waterfall",
        [69, 19],
        [
          [60, 11],
          [72, 10],
          [78, 20],
          [72, 29],
          [61, 28],
          [56, 20],
        ],
      ),
    ],
    spawns: [spawn("Defender Spawn", 47, 8), spawn("Attacker Spawn", 51, 93)],
    lanes: [
      zone(
        "C Bend",
        [69, 58],
        [
          [64, 48],
          [73, 47],
          [78, 59],
          [71, 67],
          [64, 62],
        ],
      ),
    ],
    corridors: paths(
      [
        [47, 8],
        [18, 18],
        [16, 46],
        [17, 74],
        [51, 93],
        [82, 76],
        [85, 39],
        [69, 19],
        [47, 8],
      ],
      [
        [17, 74],
        [33, 61],
        [49, 36],
        [69, 19],
      ],
      [
        [51, 93],
        [51, 66],
        [49, 36],
      ],
      [
        [51, 66],
        [69, 58],
        [85, 39],
      ],
    ),
    features: [
      { kind: "door", x: 29, y: 39, label: "A rotating door" },
      { kind: "door", x: 70, y: 70, label: "C rotating door" },
    ],
  },
  Sunset: {
    name: "Sunset",
    alternateRoute: "split Mid Tiles into B Market",
    sites: [
      zone(
        "A Site",
        [20, 38],
        [
          [7, 29],
          [22, 24],
          [32, 32],
          [31, 46],
          [18, 51],
          [7, 43],
        ],
      ),
      zone(
        "B Site",
        [80, 20],
        [
          [69, 9],
          [86, 8],
          [95, 20],
          [89, 32],
          [73, 33],
          [65, 23],
        ],
      ),
    ],
    callouts: [
      zone(
        "A Main",
        [22, 66],
        [
          [13, 56],
          [26, 53],
          [33, 64],
          [27, 76],
          [16, 79],
          [10, 69],
        ],
      ),
      zone(
        "A Alley",
        [8, 84],
        [
          [3, 77],
          [12, 76],
          [18, 86],
          [12, 94],
          [3, 92],
        ],
      ),
      zone(
        "Mid Courtyard",
        [47, 45],
        [
          [36, 36],
          [50, 31],
          [61, 41],
          [58, 54],
          [45, 60],
          [33, 49],
        ],
      ),
      zone(
        "Mid Tiles",
        [48, 71],
        [
          [38, 62],
          [52, 60],
          [59, 71],
          [53, 82],
          [40, 82],
          [34, 73],
        ],
      ),
      zone(
        "B Market",
        [67, 43],
        [
          [61, 34],
          [72, 33],
          [78, 43],
          [73, 54],
          [62, 53],
          [57, 44],
        ],
      ),
      zone(
        "B Boba",
        [85, 62],
        [
          [78, 53],
          [91, 51],
          [97, 63],
          [90, 74],
          [77, 71],
          [73, 62],
        ],
      ),
    ],
    spawns: [spawn("Defender Spawn", 46, 10), spawn("Attacker Spawn", 47, 93)],
    lanes: [
      zone(
        "B Lobby",
        [72, 83],
        [
          [64, 75],
          [77, 74],
          [84, 84],
          [75, 92],
          [63, 88],
        ],
      ),
    ],
    corridors: paths(
      [
        [46, 10],
        [20, 38],
        [22, 66],
        [8, 84],
        [47, 93],
        [72, 83],
        [85, 62],
        [80, 20],
        [46, 10],
      ],
      [
        [47, 93],
        [48, 71],
        [47, 45],
        [67, 43],
        [80, 20],
      ],
      [
        [22, 66],
        [47, 45],
        [46, 10],
      ],
    ),
    features: [],
  },
};
export function pointInZone(zone: Zone, x: number, y: number): boolean {
  const polygon = zone.polygon;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i],
      b = polygon[j];
    if (
      a.y > y !== b.y > y &&
      x < ((b.x - a.x) * (y - a.y)) / (b.y - a.y) + a.x
    )
      inside = !inside;
  }
  return inside;
}
export function zoneAt(map: string, x: number, y: number): string {
  const geometry = MAPS[map as MapName];
  return geometry
    ? ([
        ...geometry.sites,
        ...geometry.callouts,
        ...geometry.spawns,
        ...geometry.lanes,
      ].find((z) => pointInZone(z, x, y))?.name ?? "Unmapped")
    : "Unknown map";
}
