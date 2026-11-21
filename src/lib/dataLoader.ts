import { MAP_NAMES, phaseAt, type AbilityCastEvent, type SniperEvent, type Round, type Match, type ScoutData } from './types';

// Flat export schema: eventType=ability|sniper|round|match plus the corresponding
// interface's column names. Nested economy/rounds cells are JSON (CSV-quoted).
// phase is derived from roundTimeSec. JSON accepts an array of flat records or
// a ScoutData object. Imported provenance must be supplied, never inferred as GRID.
export interface LoadResult { data: ScoutData; errors: string[] }
function csvRows(text: string): string[][] {
  const rows:string[][]=[], row:string[]=[]; let cell='', quoted=false;
  for(let i=0;i<text.length;i++) {
    const ch=text[i];
    if(ch==='"') { if(quoted&&text[i+1]==='"'){cell+='"';i++;}else if(!quoted&&cell.length) throw Error('Unexpected quote');else quoted=!quoted; }
    else if(ch===','&&!quoted){row.push(cell);cell='';}
    else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push([...row]);row.length=0;cell='';}
    else cell+=ch;
  }
  if(quoted)throw Error('Unterminated CSV quote');
  row.push(cell);if(row.some(Boolean))rows.push(row);
  return rows;
}
export function loadData(input: string, format: 'csv'|'json', dataLabel='IMPORTED DATA — source unverified'): LoadResult {
  const data:ScoutData={dataLabel,matches:[],rounds:[],abilityEvents:[],sniperEvents:[]}, errors:string[]=[];
  let records:unknown[];
  try {
    if(format==='csv') {
      const [headers,...rows]=csvRows(input.replace(/^\uFEFF/,''));
      if(!headers?.includes('eventType'))throw Error('Missing column: eventType');
      if(new Set(headers).size!==headers.length)throw Error('Duplicate columns');
      records=rows.map(row=>{if(row.length!==headers.length)throw Error('CSV column count mismatch');return Object.fromEntries(headers.map((h,i)=>[h,row[i]]));});
    } else {
      const parsed=JSON.parse(input);
      if(Array.isArray(parsed)) records=parsed;
      else if(parsed&&['matches','rounds','abilityEvents','sniperEvents'].every(k=>Array.isArray(parsed[k]))) records=[...parsed.matches.map((r:object)=>({...r,eventType:'match'})),...parsed.rounds.map((r:object)=>({...r,eventType:'round'})),...parsed.abilityEvents.map((r:object)=>({...r,eventType:'ability'})),...parsed.sniperEvents.map((r:object)=>({...r,eventType:'sniper'}))];
      else throw Error('Expected records array or ScoutData object');
    }
  } catch(error) { return {data,errors:[(error as Error).message]}; }
  records.forEach((record,index)=>{
    try {
      if(!record||typeof record!=='object'||Array.isArray(record))throw Error('Expected object');
      const r={...record} as Record<string,unknown>;
      const required=(keys:string[])=>keys.forEach(k=>{if(r[k]===undefined||r[k]===null||r[k]==='')throw Error(`Missing column/value: ${k}`);});
      const number=(k:string,min=0,max=Infinity)=>{required([k]);const n=Number(r[k]);if(!Number.isFinite(n)||n<min||n>max)throw Error(`Invalid ${k}`);r[k]=n;};
      const choice=(k:string,values:readonly string[])=>{if(!values.includes(String(r[k])))throw Error(`Invalid ${k}`);};
      required(['eventType','matchId','roundNumber','map'].filter(k=>r.eventType!=='match'||k!=='roundNumber'));
      choice('map',MAP_NAMES);if(r.eventType!=='match'){number('roundNumber',1);if(!Number.isInteger(r.roundNumber))throw Error('Invalid roundNumber');}
      r.dataLabel=dataLabel;
      if(r.eventType==='ability'||r.eventType==='sniper') {
        required(['team','player','side']);choice('side',['attack','defense']);
        if(r.eventType==='ability') {
          required(['eventId','agent','ability','abilityType','agentRole']);
          choice('abilityType',['smoke','recon','sentinel','flash','molly','other']);choice('agentRole',['Sentinel','Initiator','Controller','Duelist']);
          number('x',0,100);number('y',0,100);number('roundTimeSec');r.phase=phaseAt(r.roundTimeSec as number);
          data.abilityEvents.push(r as unknown as AbilityCastEvent);
        } else {
          required(['weapon','holdZone','angleType']);choice('angleType',['aggressive','passive']);
          number('credits');number('holdX',0,100);number('holdY',0,100);number('firstShotTimeSec');
          for(const k of ['gotFirstKill','died','firstPick']){if(![true,false,'true','false'].includes(r[k] as boolean))throw Error(`Invalid ${k}`);r[k]=r[k]===true||r[k]==='true';}
          data.sniperEvents.push(r as unknown as SniperEvent);
        }
      } else if(r.eventType==='round') {
        required(['attackingTeam','defendingTeam','winner','economy']);
        if(typeof r.economy==='string')r.economy=JSON.parse(r.economy);
        for(const team of [r.attackingTeam,r.defendingTeam]) {
          const economy=(r.economy as Round['economy'])?.[String(team)];
          if(!economy||!Number.isFinite(economy.credits)||economy.credits<0||!['eco','force','full','bonus','pistol'].includes(economy.buyType))throw Error('Invalid economy');
        }
        if(![r.attackingTeam,r.defendingTeam].includes(r.winner))throw Error('Invalid winner');
        data.rounds.push(r as unknown as Round);
      } else if(r.eventType==='match') {
        required(['date','teamA','teamB','winner']);if(!Number.isFinite(Date.parse(String(r.date))))throw Error('Invalid date');
        if(![r.teamA,r.teamB].includes(r.winner))throw Error('Invalid winner');
        data.matches.push({...r,rounds:[]} as unknown as Match);
      } else throw Error('Invalid eventType');
    } catch(error){errors.push(`Row ${index+1}: ${(error as Error).message}`);}
  });
  data.matches.forEach(m=>{m.rounds=data.rounds.filter(r=>r.matchId===m.matchId);});
  return {data,errors};
}
