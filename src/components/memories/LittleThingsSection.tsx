import { nicknames, reflections } from "../../data/reflections";
import RevealSection from "../layout/RevealSection";

export default function LittleThingsSection() {
  return (
    <RevealSection id="little-things" className="little-things-section section-pad">
      <div className="section-heading section-heading--center">
        <div className="section-kicker">
          <span>05</span>
          <span className="section-kicker__line" />
          <span>Things I never want to forget</span>
        </div>
        <h2 className="section-title">
          If I could keep
          <br />
          <em>a few things.</em>
        </h2>
      </div>
      <div className="little-things-grid">
        {reflections.map((reflection, index) => (
          <article className="little-note" key={reflection}>
            <span className="little-note__number">0{index + 1}</span>
            <p>{reflection}</p>
          </article>
        ))}
      </div>
      <p className="little-things-footnote">
        The little moments and the names I called you — {nicknames.slice(0, -1).join(", ")}, and{" "}
        {nicknames[nicknames.length - 1]} — are small reminders, not the whole story.
      </p>
    </RevealSection>
  );
}
