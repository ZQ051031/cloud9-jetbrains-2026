import type { Insight, AntiStrat } from "../lib/types";
import { EvidenceChips } from "./Charts";
export function InsightCards({
  insights,
  counters,
  numbered = false,
}: {
  insights: Insight[];
  counters: AntiStrat[];
  numbered?: boolean;
}) {
  return (
    <div className="insights-grid">
      {insights.length ? (
        insights.map((insight, index) => (
          <article
            className="panel insight-card"
            key={insight.id}
            data-testid="insight-card"
          >
            <div className="card-top">
              <span className={`category ${insight.category}`}>
                {insight.category === "timing"
                  ? "UTILITY TIMING"
                  : insight.category.toUpperCase()}
              </span>
              {numbered && (
                <span className="insight-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </div>
            <h3>{insight.text}</h3>
            <EvidenceChips evidence={insight.evidence} />
            <div className="counter">
              <p className="eyebrow">↳ COACH’S COUNTER</p>
              <p>{counters.find((a) => a.insightId === insight.id)?.counter}</p>
            </div>
          </article>
        ))
      ) : (
        <div className="empty panel">
          <h3>No observations in this slice</h3>
          <p>
            Broaden the filters or load a complete export. We won’t invent a
            tendency without evidence.
          </p>
        </div>
      )}
    </div>
  );
}
