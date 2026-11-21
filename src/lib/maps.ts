import { MAP_NAMES, type MapName } from './types';
export interface Point { x: number; y: number }
export interface Zone { name: string; polygon: Point[] }
export interface MapGeometry { name: MapName; sites: Zone[]; callouts: Zone[]; spawns: Zone[]; lanes: Zone[] }
const rect = (name: string, x: number, y: number, w: number, h: number): Zone => ({ name, polygon: [{x,y},{x:x+w,y},{x:x+w,y:y+h},{x,y:y+h}] });
const labels: Record<MapName, string[]> = { Ascent: ['A Main','Mid Market','B Main','Heaven'], Bind: ['A Short','B Link','B Long','A Heaven'], Haven: ['A Long','Mid Window','C Long','A Heaven'], Lotus: ['A Root','B Main','C Mound','A Stairs'], Sunset: ['A Main','Mid Courtyard','B Main','B Market'] };
export const MAPS: Record<MapName, MapGeometry> = Object.fromEntries(MAP_NAMES.map(name => [name, {
  name, sites: [rect('A Site',12,12,24,22),rect('B Site',64,12,24,22), ...(['Haven','Lotus'].includes(name) ? [rect('C Site',40,10,18,20)] : [])],
  callouts: [rect(labels[name][0],12,38,24,24),rect(labels[name][1],40,38,20,24),rect(labels[name][2],64,38,24,24),rect(labels[name][3],12,2,24,9)],
  spawns: [rect('Attacker Spawn',35,82,30,16),rect('Defender Spawn',40,0,20,9)],
  lanes: [rect('A Approach',18,63,12,18),rect('Mid Approach',44,63,12,18),rect('B Approach',70,63,12,18)],
}])) as Record<MapName, MapGeometry>;
function contains(polygon: Point[], x: number, y: number) {
  let inside = false;
  for (let i=0,j=polygon.length-1;i<polygon.length;j=i++) {
    const a=polygon[i], b=polygon[j];
    if ((a.y>y)!==(b.y>y) && x<(b.x-a.x)*(y-a.y)/(b.y-a.y)+a.x) inside=!inside;
  }
  return inside;
}
export function zoneAt(map: string, x: number, y: number): string {
  const geometry = MAPS[map as MapName];
  return geometry ? [...geometry.sites,...geometry.callouts,...geometry.spawns,...geometry.lanes].find(z=>contains(z.polygon,x,y))?.name ?? 'Unmapped' : 'Unknown map';
}
