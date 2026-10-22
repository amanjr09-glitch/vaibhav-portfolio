import type { Day } from "@/lib/github";

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const month = new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" });

export default function GithubHeatmap({ days, profile }: { days: Day[]; profile: string }) {
  const total = days.reduce((n, d) => n + d.count, 0);
  const lead = new Date(days[0].date + "T00:00:00Z").getUTCDay(); // calendar starts on a Sunday row
  const weeks = Math.ceil((lead + days.length) / 7);

  // A month label sits above the first week that starts in that month.
  const labels: { col: number; text: string }[] = [];
  days.forEach((d, i) => {
    const date = new Date(d.date + "T00:00:00Z");
    if (date.getUTCDate() <= 7 && date.getUTCDay() === 0) {
      labels.push({ col: Math.floor((lead + i) / 7) + 1, text: month.format(date) });
    }
  });

  return (
    <div className="heat">
      <div className="heat-scroll">
        <div className="heat-inner" style={{ "--weeks": weeks } as React.CSSProperties}>
          <div className="heat-months" aria-hidden="true">
            {labels.map((l) => (
              <span key={l.col} style={{ gridColumn: l.col }}>{l.text}</span>
            ))}
          </div>
          <div className="heat-grid" role="img" aria-label={`${total} GitHub contributions in the last year`}>
            {lead > 0 && <span style={{ gridRow: `span ${lead}` }} />}
            {days.map((d) => (
              <span
                key={d.date}
                className={`cell l${d.level}`}
                title={`${d.count === 0 ? "No" : d.count} contribution${d.count === 1 ? "" : "s"} on ${fmt.format(new Date(d.date + "T00:00:00Z"))}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="heat-foot">
        <span>
          <b>{total.toLocaleString("en-IN")}</b> contributions in the last year
        </span>
        <span className="heat-legend" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`cell l${l}`} />)}
          More
        </span>
        <a href={profile} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}
