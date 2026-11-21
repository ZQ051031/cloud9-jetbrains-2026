import { TimingChart, formatPct } from "./Charts";
import type { operatorStats } from "../lib/analytics";
type Stats = ReturnType<typeof operatorStats>;
export function OperatorCards({
  players,
  compact = false,
}: {
  players: Stats["players"];
  compact?: boolean;
}) {
  return (
    <div className={`profile-grid ${compact ? "compact-profiles" : ""}`}>
      {players.length ? (
        players.map((p) => (
          <article
            className="panel operator-card"
            data-testid="operator-card"
            key={`${p.team}-${p.player}`}
          >
            <div className="card-top">
              <div>
                <p className="eyebrow">{p.team} / PRIMARY SNIPER</p>
                <h3>{p.player}</h3>
              </div>
              <span className="tag">OPERATOR</span>
            </div>
            <div className="profile-numbers">
              <div>
                <strong>{p.buyRounds}</strong>
                <span>buy rounds</span>
              </div>
              <div>
                <strong>{formatPct(p.buyRate)}</strong>
                <span>round buy rate</span>
              </div>
              <div>
                <strong>
                  {p.avgCreditsAtBuy.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </strong>
                <span>avg credits at buy</span>
              </div>
            </div>
            <p className="small">
              Operator <b>{p.operatorCount}</b>{" "}
              <span className="divider">/</span> Odin <b>{p.odinCount}</b> ·{" "}
              {p.roundsPlayed} team rounds in scope
            </p>
            <div
              className="split-bar"
              aria-label={`${formatPct(p.aggressivePct)} aggressive, ${formatPct(p.passivePct)} passive`}
            >
              <span style={{ width: `${p.aggressivePct}%` }} />
              <span style={{ width: `${p.passivePct}%` }} />
            </div>
            <div className="bar-key">
              <span>
                <i className="dot amber" /> Aggressive{" "}
                {formatPct(p.aggressivePct)}
              </span>
              <span>
                <i className="dot blue" /> Passive {formatPct(p.passivePct)}
              </span>
            </div>
            {!compact && (
              <>
                <h4>
                  First shot timing <span>Operator only</span>
                </h4>
                <TimingChart buckets={p.timingBuckets} />
                <p className="accent-note">
                  {formatPct(p.earlyShotPct)} of first shots within 0–20s
                </p>
                <h4>Preferred holds</h4>
                <div className="hold-zones">
                  {p.topHoldZones.slice(0, 3).map((z) => (
                    <span key={z.key}>
                      {z.key} <b>{formatPct(z.pct)}</b>
                    </span>
                  ))}
                </div>
              </>
            )}
            {compact && (
              <p className="small compact-hold">
                {formatPct(p.earlyShotPct)} first shots in 0–20s · Top hold:{" "}
                {p.topHoldZones[0]?.key ?? "No Operator holds"} (
                {formatPct(p.topHoldZones[0]?.pct ?? 0)})
              </p>
            )}
            <dl className="metric-list">
              <div>
                <dt>First-pick attempt rate</dt>
                <dd>{formatPct(p.firstPickAttemptRate)}</dd>
              </div>
              <div>
                <dt>First-pick success / attempts</dt>
                <dd>{formatPct(p.firstPickSuccessPct)}</dd>
              </div>
              <div>
                <dt>Death w/o first kill</dt>
                <dd>{formatPct(p.deathWithoutKillRate)}</dd>
              </div>
            </dl>
          </article>
        ))
      ) : (
        <div className="empty panel">
          No sniper buys match these filters. Try resetting the player or
          utility filters.
        </div>
      )}
    </div>
  );
}
export function EconomyTable({ teams }: { teams: Stats["teams"] }) {
  return (
    <div className="economy-grid">
      {teams.map((t) => (
        <section className="panel" key={t.team}>
          <p className="eyebrow">TEAM ECONOMY</p>
          <h3>{t.team}</h3>
          <div className="table-scroll">
            <table>
              <caption>Rounds by buy type</caption>
              <thead>
                <tr>
                  <th>Buy type</th>
                  <th>Rounds</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                {t.roundsByBuyType.map((b) => (
                  <tr key={b.key}>
                    <td>{b.key}</td>
                    <td>{b.count}</td>
                    <td>{formatPct(b.pct)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <caption>Operator buy rate by team credit band</caption>
              <thead>
                <tr>
                  <th>Credits</th>
                  <th>Op / rounds</th>
                  <th>Buy rate</th>
                </tr>
              </thead>
              <tbody>
                {t.opBuyRateByCreditBand.map((b) => (
                  <tr key={b.band}>
                    <td>{b.band}</td>
                    <td>
                      {b.count} / {b.rounds}
                    </td>
                    <td>{formatPct(b.pct)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
