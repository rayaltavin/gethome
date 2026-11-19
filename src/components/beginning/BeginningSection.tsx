import { relationship, openingStory } from "../../data/relationship";
import RevealSection from "../layout/RevealSection";

export default function BeginningSection() {
  return (
    <RevealSection id="beginning" className="beginning-section section-pad">
      <div className="section-kicker">
        <span>01</span>
        <span className="section-kicker__line" />
        <span>Before we met</span>
      </div>
      <div className="beginning-section__layout">
        <div>
          <p className="eyebrow">Before January 19, 2025</p>
          <h2 className="section-title">
            Every story
            <br />
            has a <em>before.</em>
          </h2>
        </div>
        <div className="beginning-section__note">
          <p className="handwritten-note">It started a little earlier than that.</p>
          <p className="beginning-section__line">{openingStory}</p>
          <div className="date-stamp">
            <span className="date-stamp__label">The day it began</span>
            <time dateTime={relationship.relationshipStart}>November 23, 2024</time>
            <span className="date-stamp__caption">The day we started calling this something more.</span>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
