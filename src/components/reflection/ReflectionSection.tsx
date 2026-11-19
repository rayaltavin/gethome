import RevealSection from "../layout/RevealSection";

export default function ReflectionSection() {
  return (
    <RevealSection id="reflection" className="reflection-section section-pad">
      <div className="reflection-section__ornament" aria-hidden="true">
        ✳
      </div>
      <div className="section-kicker section-kicker--light">
        <span>06</span>
        <span className="section-kicker__line" />
        <span>What this chapter meant</span>
      </div>
      <h2 className="reflection-section__title">
        Some chapters
        <br />
        stay with us.
      </h2>
      <div className="reflection-section__copy">
        <p>I know not every story continues the way we once imagined.</p>
        <p>But I don't want to remember ours only by how it ended.</p>
        <p>
          There were beautiful moments, lessons, laughter, and a version of life I will always be
          grateful to have experienced.
        </p>
        <p className="handwritten-note">Thank you for being part of that chapter.</p>
      </div>
      <span className="reflection-section__endmark">—</span>
    </RevealSection>
  );
}
