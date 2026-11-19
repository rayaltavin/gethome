import { memories } from "../../data/timeline";
import RevealSection from "../layout/RevealSection";

function formatMemoryDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function TimelineSection() {
  return (
    <RevealSection id="timeline" className="timeline-section section-pad">
      <div className="section-heading">
        <div className="section-kicker">
          <span>03</span>
          <span className="section-kicker__line" />
          <span>Our little timeline</span>
        </div>
        <h2 className="section-title">
          Little moments,
          <br />
          <em>big memories.</em>
        </h2>
        <p>
          Only the dates we know are marked here; the rest of the story is held in what it meant.
        </p>
      </div>
      <ol className="timeline">
        {memories.map((memory, index) => (
          <li className="timeline__item" key={memory.id}>
            <span className="timeline__marker" aria-hidden="true">
              0{index + 1}
            </span>
            <details className="timeline__details">
              <summary>
                <span className="timeline__date">{formatMemoryDate(memory.date)}</span>
                <span className="timeline__title">{memory.title}</span>
                <span className="timeline__toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="timeline__body">
                <p>{memory.description}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </RevealSection>
  );
}
