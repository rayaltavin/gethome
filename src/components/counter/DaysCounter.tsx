import { relationship } from "../../data/relationship";
import { calculateElapsedDays } from "../../utils/dateCalculator";
import RevealSection from "../layout/RevealSection";

const elapsedDays = calculateElapsedDays(relationship.firstDate, relationship.relationshipEnd);

export default function DaysCounter() {
  return (
    <RevealSection id="days" className="days-section section-pad">
      <div className="section-kicker">
        <span>07</span>
        <span className="section-kicker__line" />
        <span>A measure of time, not of meaning</span>
      </div>
      <div className="days-section__layout">
        <div className="days-section__number" aria-label={`${elapsedDays} elapsed days`}>
          {elapsedDays}
        </div>
        <div className="days-section__copy">
          <p className="days-section__label">Days of us</p>
          <h2>One chapter. A thousand little things.</h2>
          <p>
            {elapsedDays} days of memories, little moments, lessons, laughter, and a story that
            became part of us.
          </p>
          <p className="days-section__dates">
            <time dateTime={relationship.firstDate}>January 19, 2025</time>
            <span aria-hidden="true"> — </span>
            <time dateTime={relationship.relationshipEnd}>November 2, 2026</time>
          </p>
          <p className="days-section__footnote">
            Elapsed days between our first date and the end of this chapter.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
