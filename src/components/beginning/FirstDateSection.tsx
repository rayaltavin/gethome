import { ArrowDownRight, MapPin } from "lucide-react";
import { firstDateLocation, relationship } from "../../data/relationship";
import RevealSection from "../layout/RevealSection";

const firstDateImage =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1500&q=85";

export default function FirstDateSection() {
  return (
    <RevealSection id="first-date" className="first-date-section section-pad">
      <div className="first-date-section__image">
        <img
          src={firstDateImage}
          alt="Illustrative editorial photograph, not a personal relationship photo."
          loading="lazy"
          width="1500"
          height="1100"
        />
        <span className="photo-tag">An image for the first page</span>
      </div>
      <div className="first-date-section__copy">
        <div className="section-kicker">
          <span>02</span>
          <span className="section-kicker__line" />
          <span>Our first date</span>
        </div>
        <time className="date-display" dateTime={relationship.firstDate}>
          January 19
          <span>, 2025</span>
        </time>
        <h2 className="first-date-section__heading">
          The day our story became a memory we could actually hold.
        </h2>
        <p className="first-date-section__location">
          <MapPin size={14} strokeWidth={1.6} aria-hidden="true" />
          <span>{firstDateLocation}</span>
        </p>
        <p>
          After reconnecting at the end of December, we finally met in person for the first time.
          And the rest is history.
        </p>
        <a className="text-link" href="#timeline">
          A little further along <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </div>
    </RevealSection>
  );
}
