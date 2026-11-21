import { DATA_SOURCE_LABEL, MAP_NAMES, phaseAt, type ScoutData, type AgentRole, type AbilityType, type BuyType, type Match } from '../lib/types';
import { zoneAt } from '../lib/maps';
export { DATA_SOURCE_LABEL };
export const TEAMS = ['Cloud9','Nova Ridge','Ember Vale Esports','Polar Static'];
export const ROSTERS: Record<string,string[]> = Object.fromEntries(TEAMS.map((t,i)=>[t,['Lumen','Quill','Cipherleaf','Glint','Drift'].map(p=>`${p}${i+1}`)]));
const kits: [string,AgentRole,[string,AbilityType][]][] = [
  ['Killjoy','Sentinel',[['Nanoswarm','sentinel'],['Alarmbot','sentinel'],['Turret','sentinel'],['Lockdown','sentinel']]],
  ['Cypher','Sentinel',[['Trapwire','sentinel'],['Cyber Cage','sentinel'],['Spycam','sentinel']]],
  ['Deadlock','Sentinel',[['GravNet','sentinel'],['Sonic Sensor','sentinel'],['Barrier Mesh','sentinel']]],
  ['Vyse','Sentinel',[['Razorvine','sentinel'],['Shear','sentinel'],['Arc Rose','sentinel']]],
  ['Sova','Initiator',[['Recon Bolt','recon'],['Owl Drone','recon'],['Shock Bolt','molly']]],
  ['Fade','Initiator',[['Haunt','recon'],['Seize','other'],['Prowler','recon']]],
  ['Omen','Controller',[['Dark Cover','smoke']]],['Brimstone','Controller',[['Sky Smoke','smoke']]],
  ['Astra','Controller',[['Nebula','smoke']]],['Clove','Controller',[['Ruse','smoke']]],
];
export function mulberry32(seed: number) { return () => { let t=seed+=0x6D2B79F5; t=Math.imul(t^t>>>15,t|1); t^=t+Math.imul(t^t>>>7,t|61); return ((t^t>>>14)>>>0)/4294967296; }; }
export function generateSampleData(seed=2026): ScoutData {
  const random=mulberry32(seed), data: ScoutData={dataLabel:DATA_SOURCE_LABEL,matches:[],rounds:[],abilityEvents:[],sniperEvents:[]};
  const gaussian=()=>Math.sqrt(-2*Math.log(Math.max(random(),0.000001)))*Math.cos(2*Math.PI*random());
  for (let mi=0;mi<24;mi++) {
    const pairs=[[0,1],[0,2],[0,3],[1,2],[2,3],[1,3]], [ai,bi]=pairs[mi%6], teamA=TEAMS[ai],teamB=TEAMS[bi],map=MAP_NAMES[mi%5],matchId=`demo-${mi+1}`;
    const match: Match={dataLabel:DATA_SOURCE_LABEL,matchId,date:`2026-01-${String(mi+1).padStart(2,'0')}`,map,teamA,teamB,winner:teamA,rounds:[]};
    for(let rn=1;rn<=22;rn++) {
      const attackingTeam=rn<=11?teamA:teamB, defendingTeam=rn<=11?teamB:teamA;
      const round={dataLabel:DATA_SOURCE_LABEL,matchId,roundNumber:rn,map,attackingTeam,defendingTeam,winner:random()<0.5?teamA:teamB,economy:{} as Match['rounds'][number]['economy']};
      for(const ti of [ai,bi]) {
        const team=TEAMS[ti], side=team===attackingTeam?'attack' as const:'defense' as const;
        const buyType: BuyType=rn===1||rn===12?'pistol':(['eco','force','full','full','bonus'] as BuyType[])[Math.floor(random()*5)];
        const credits=buyType==='pistol'?800:buyType==='eco'?1400:buyType==='force'?2800:buyType==='bonus'?3900:5600+Math.floor(random()*3000);
        round.economy[team]={credits,buyType};
        const favoriteX=(ti+mi%5)%2===0?24:76;
        for(let pi=0;pi<5;pi++) {
          const kit=pi===0?kits[ti]:pi===1?kits[4+ti%2]:pi===2?kits[6+ti]:kits[4+(pi+mi)%6];
          for(let cast=0;cast<2;cast++) {
            const [ability,abilityType]=kit[2][Math.floor(random()*kit[2].length)];
            const favored=pi===0&&random()<0.63, cx=favored?favoriteX:[24,50,76][Math.floor(random()*3)];
            const x=Math.max(cx-9,Math.min(cx+9,cx+gaussian()*2)), y=Math.max(40,Math.min(60,50+gaussian()*2));
            const roundTimeSec=Math.floor(random()*100);
            data.abilityEvents.push({dataLabel:DATA_SOURCE_LABEL,eventId:`${matchId}-${rn}-${ti}-${pi}-${cast}`,matchId,roundNumber:rn,map,team,player:ROSTERS[team][pi],agent:kit[0],agentRole:kit[1],ability,abilityType,side,x,y,roundTimeSec,phase:phaseAt(roundTimeSec)});
          }
        }
        const weapon=credits>=5600&&random()<0.86?'Operator':buyType==='force'&&random()<0.7?'Odin':null;
        if(weapon) {
          const aggressive=random()<0.79, holdX=aggressive?favoriteX:24, holdY=aggressive?50:20;
          const firstPick=aggressive&&random()<0.85;
          data.sniperEvents.push({dataLabel:DATA_SOURCE_LABEL,matchId,roundNumber:rn,map,team,player:ROSTERS[team][4],weapon,credits,side,holdX,holdY,holdZone:zoneAt(map,holdX,holdY),angleType:aggressive?'aggressive':'passive',firstShotTimeSec:aggressive?Math.floor(random()*20):20+Math.floor(random()*65),firstPick,gotFirstKill:firstPick&&random()<0.48,died:random()<0.45});
        }
      }
      data.rounds.push(round); match.rounds.push(round);
    }
    match.winner=match.rounds.filter(r=>r.winner===teamA).length>=12?teamA:teamB;
    data.matches.push(match);
  }
  return data;
}
export const sampleData = generateSampleData();
