import { type AbilityCastEvent, type Filters, type ScoutData, type SniperEvent, type Round, type Insight, type AntiStrat } from './types';
import { zoneAt } from './maps';
const pct=(n:number,total:number)=>total?100*n/total:0;
export function filterEvents<T extends AbilityCastEvent>(events: T[], filters: Filters): T[] {
  return events.filter(e=>Object.entries(filters).every(([key,value])=>!value||value==='all'||e[key as keyof T]===value));
}
export function tendencyPercentages<T>(events:T[], keyFn:(event:T)=>string) {
  const counts=new Map<string,number>();
  events.forEach(e=>{ const key=keyFn(e); counts.set(key,(counts.get(key)??0)+1); });
  return { total:events.length, items:[...counts].map(([key,count])=>({key,count,pct:pct(count,events.length)})).sort((a,b)=>b.count-a.count||a.key.localeCompare(b.key)) };
}
export function heatmapGrid(events: {x:number;y:number}[], cols=10, rows=10) {
  if(!Number.isInteger(cols)||!Number.isInteger(rows)||cols<1||rows<1) return [];
  const cells=Array.from({length:cols*rows},(_,i)=>({col:i%cols,row:Math.floor(i/cols),x:(i%cols)*100/cols,y:Math.floor(i/cols)*100/rows,count:0,density:0}));
  events.forEach(e=>{if(Number.isFinite(e.x)&&Number.isFinite(e.y)) cells[Math.max(0,Math.min(rows-1,Math.floor(e.y*rows/100)))*cols+Math.max(0,Math.min(cols-1,Math.floor(e.x*cols/100)))].count++;});
  const max=Math.max(0,...cells.map(c=>c.count));
  return cells.map(c=>({...c,density:max?c.count/max:0}));
}
export function clusterHotspots(events: Pick<AbilityCastEvent,'x'|'y'|'map'>[], radius=8) {
  if(!Number.isFinite(radius)||radius<=0) return [];
  let remaining=[...events];
  const clusters=[];
  while(remaining.length) {
    let members:typeof remaining=[];
    for(const center of remaining) {
      const nearby=remaining.filter(e=>e.map===center.map&&Math.hypot(e.x-center.x,e.y-center.y)<=radius);
      if(nearby.length>members.length) members=nearby;
    }
    if(!members.length) break;
    const x=members.reduce((s,e)=>s+e.x,0)/members.length,y=members.reduce((s,e)=>s+e.y,0)/members.length,map=members[0].map;
    clusters.push({x,y,map,count:members.length,share:pct(members.length,events.length),zone:zoneAt(map,x,y)});
    const used=new Set(members); remaining=remaining.filter(e=>!used.has(e));
  }
  return clusters.sort((a,b)=>b.count-a.count);
}
const coverage=(events: {matchId:string;roundNumber:number}[])=>({roundsAnalysed:new Set(events.map(e=>`${e.matchId}:${e.roundNumber}`)).size,matchesAnalysed:new Set(events.map(e=>e.matchId)).size});
export function sentinelSetupTendencies(events: AbilityCastEvent[], radius=8) {
  const sentinels=events.filter(e=>e.agentRole==='Sentinel');
  return [...new Set(sentinels.map(e=>`${e.team}|${e.map}`))].flatMap(key=>{
    const group=sentinels.filter(e=>`${e.team}|${e.map}`===key), hot=clusterHotspots(group,radius)[0];
    return hot?[{team:group[0].team,...hot,pct:hot.share,sampleSize:group.length,...coverage(group)}]:[];
  });
}
export function operatorStats(events: SniperEvent[], rounds: Round[]) {
  const players=[...new Set(events.map(e=>`${e.team}|${e.player}`))].map(key=>{
    const buys=events.filter(e=>`${e.team}|${e.player}`===key),{team,player}=buys[0];
    const played=rounds.filter(r=>r.attackingTeam===team||r.defendingTeam===team);
    const buyRounds=new Set(buys.map(e=>`${e.matchId}:${e.roundNumber}`)).size;
    const op=buys.filter(e=>e.weapon==='Operator'), odin=buys.filter(e=>e.weapon==='Odin');
    const timings=[[0,10],[10,20],[20,40],[40,60],[60,Infinity]].map(([min,max])=>{const count=op.filter(e=>e.firstShotTimeSec>=min&&e.firstShotTimeSec<max).length;return {key:max===Infinity?'60+':`${min}-${max}`,count,pct:pct(count,op.length)};});
    const attempts=op.filter(e=>e.firstPick).length;
    return {team,player,buyRounds,roundsPlayed:played.length,buyRate:pct(buyRounds,played.length),avgCreditsAtBuy:buys.reduce((s,e)=>s+e.credits,0)/buys.length,operatorCount:op.length,odinCount:odin.length,aggressivePct:pct(op.filter(e=>e.angleType==='aggressive').length,op.length),passivePct:pct(op.filter(e=>e.angleType==='passive').length,op.length),topHoldZones:tendencyPercentages(op,e=>e.holdZone).items,timingBuckets:timings,earlyShotPct:pct(op.filter(e=>e.firstShotTimeSec<20).length,op.length),firstPickAttemptRate:pct(attempts,op.length),firstPickSuccessPct:pct(op.filter(e=>e.firstPick&&e.gotFirstKill).length,attempts),deathWithoutKillRate:pct(op.filter(e=>e.died&&!e.gotFirstKill).length,op.length)};
  });
  const teams=[...new Set([...events.map(e=>e.team),...rounds.flatMap(r=>[r.attackingTeam,r.defendingTeam])])].map(team=>{
    const played=rounds.filter(r=>r.economy[team]);
    return {team,roundsByBuyType:tendencyPercentages(played,r=>r.economy[team].buyType).items,opBuyRateByCreditBand:[[0,3000],[3000,5000],[5000,7000],[7000,Infinity]].map(([min,max])=>{
      const band=played.filter(r=>r.economy[team].credits>=min&&r.economy[team].credits<max), keys=new Set(band.map(r=>`${r.matchId}:${r.roundNumber}`));
      const count=new Set(events.filter(e=>e.team===team&&e.weapon==='Operator'&&keys.has(`${e.matchId}:${e.roundNumber}`)).map(e=>`${e.matchId}:${e.roundNumber}`)).size;
      return {band:max===Infinity?`${min}+`:`${min}-${max}`,rounds:band.length,count,pct:pct(count,band.length)};
    })};
  });
  return {players,teams};
}
export function generateInsights(data: ScoutData, team: string, map?: string): Insight[] {
  const events=filterEvents(data.abilityEvents,{team,map});
  const insights:Insight[]=sentinelSetupTendencies(events).map(t=>({id:`sentinel:${team}:${t.map}`,category:'sentinel',text:`${team} most often (${t.pct.toFixed(0)}%) uses their Sentinel utility at Point (${t.x.toFixed(0)}, ${t.y.toFixed(0)}) — ${t.zone} on ${t.map}`,evidence:{sampleSize:t.sampleSize,roundsAnalysed:t.roundsAnalysed,matchesAnalysed:t.matchesAnalysed,frequency:{n:t.count,total:t.sampleSize}}}));
  const snipers=data.sniperEvents.filter(e=>e.team===team&&(!map||map==='all'||e.map===map)&&e.weapon==='Operator');
  for(const player of operatorStats(snipers,data.rounds).players) {
    const buys=snipers.filter(e=>e.player===player.player), early=buys.filter(e=>e.firstShotTimeSec<20).length;
    insights.push({id:`operator:${team}:${player.player}:${map??'all'}`,category:'operator',text:`${player.player} fires the Operator within 20s in ${player.earlyShotPct.toFixed(0)}% of buys; ${player.aggressivePct.toFixed(0)}% aggressive holds, most often ${player.topHoldZones[0]?.key??'unknown'}.`,evidence:{sampleSize:buys.length,...coverage(buys),frequency:{n:early,total:buys.length}}});
  }
  return insights.sort((a,b)=>pct(b.evidence.frequency.n,b.evidence.frequency.total)-pct(a.evidence.frequency.n,a.evidence.frequency.total));
}
export function generateAntiStrats(insights: Insight[]): AntiStrat[] {
  return insights.map(i=>({insightId:i.id,title:i.category==='sentinel'?'Clear the repeated setup':'Deny the early Operator pick',counter:i.category==='sentinel'?`Against this setup (${i.text}), clear the location with Sova Shock Bolt or Fade Prowler before entry; stagger the hit after the utility is removed.`:`Against this profile (${i.text}), avoid dry peeking in the first 20 seconds. Flash the hold, smoke the sightline and double swing; on low credits, counter-buy utility rather than contesting with an Operator.`,supportingNumbers:i.evidence}));
}
export function selfScout(data: ScoutData, team='Cloud9') { const insights=generateInsights(data,team);return {team,insights,antiStrats:generateAntiStrats(insights)}; }
export function buildScoutReport(data: ScoutData, opponent: string, map?: string) {
  const top3Tendencies=generateInsights(data,opponent,map).slice(0,3);
  return {opponent,map:map??'all',top3Tendencies,operatorProfile:operatorStats(data.sniperEvents.filter(e=>e.team===opponent&&(!map||map==='all'||e.map===map)),data.rounds.filter(r=>(r.attackingTeam===opponent||r.defendingTeam===opponent)&&(!map||map==='all'||r.map===map))),antiStrats:generateAntiStrats(top3Tendencies),dataLabel:data.dataLabel};
}
