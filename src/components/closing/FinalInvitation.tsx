import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import { relationship } from "../../data/relationship";
import { calculateElapsedDays } from "../../utils/dateCalculator";
import RevealSection from "../layout/RevealSection";

const whatsappNumber = "6281291119767";
const elapsedDays = calculateElapsedDays(relationship.firstDate, relationship.relationshipEnd);
const countdownDuration = 8000;
const loadingDuration = 1800;

type TransitionStage = "counting" | "loading" | "complete";

const whatsappMessages = {
  yes: "Hi, I read your little story. I’m open to talking about the possibility of beginning again, slowly and only if we both feel ready. There’s no pressure to rush.",
  no: "Hi, thank you for the memories and for sharing your story. I don’t want to begin again, but I wish you well and hope we can respect each other’s space.",
};

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function FinalInvitation() {
  const sequenceRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sequenceRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const [daysRemaining, setDaysRemaining] = useState(elapsedDays);
  const [transitionStage, setTransitionStage] = useState<TransitionStage>("counting");
  const isProgressAnimating = isInView && prefersReducedMotion === false;

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDaysRemaining(0);
      setTransitionStage("complete");
      return;
    }

    const startedAt = performance.now();
    let frameId = 0;
    let loadingTimeout: ReturnType<typeof setTimeout> | undefined;

    function animate(now: number) {
      const progress = Math.min((now - startedAt) / countdownDuration, 1);
      const nextValue = Math.round(elapsedDays * (1 - progress));
      setDaysRemaining((currentValue) => (currentValue === nextValue ? currentValue : nextValue));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDaysRemaining(0);
        setTransitionStage("loading");
        loadingTimeout = setTimeout(() => setTransitionStage("complete"), loadingDuration);
      }
    }

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      if (loadingTimeout !== undefined) clearTimeout(loadingTimeout);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <RevealSection id="from-zero-to-one" className="closing-section section-pad">
      <div className="section-kicker">
        <span>08</span>
        <span className="section-kicker__line" />
        <span>From 0 to 1, someday?</span>
      </div>
      <div className="closing-section__content" ref={sequenceRef}>
        <p className="closing-section__overline">A possibility, never an expectation</p>
        <h2>
          Can we start
          <br />
          from <em>0 to 1</em> again?
        </h2>
        <div className="closing-section__zero" aria-label={`${daysRemaining} days`}>
          <span aria-hidden="true">{daysRemaining}</span>
          <span>days</span>
        </div>
        <p className="closing-section__maybe">
          Maybe someday, if life brings us back to the same place, and if we both still want it...
        </p>
        <p className="closing-section__ask">Could we begin again?</p>
        <div
          className={[
            "closing-section__progress",
            `closing-section__progress--${transitionStage}`,
            isProgressAnimating && "closing-section__progress--active",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-label={
            transitionStage === "complete"
              ? "Zero to one, a possible new beginning"
              : transitionStage === "loading"
                ? "Zero to one, loading"
                : "A visual transition from 652 days to a possible new beginning"
          }
        >
          <span>0</span>
          <span className="closing-section__track" aria-hidden="true">
            <span className="closing-section__track-fill" />
            <span className="closing-section__arrow">
              <ArrowRight size={20} strokeWidth={2} />
            </span>
          </span>
          <span className="closing-section__destination">
            {transitionStage === "complete" ? (
              "1"
            ) : (
              <span className="closing-section__pending" aria-hidden="true">
                1
              </span>
            )}
          </span>
        </div>
        <p className="closing-section__status" aria-live="polite">
          {transitionStage === "loading"
            ? "A new beginning, if we both choose it…"
            : transitionStage === "complete"
              ? "A beginning, freely chosen."
              : ""}
        </p>
        <div className="closing-section__letter">
          <p>I don't expect an answer, and I don't want you to feel any pressure.</p>
          <p>I just wanted to leave this little possibility here.</p>
          <p>
            If someday we both feel ready, maybe we can meet again not as the people we used to be,
            but as two people who have grown, learned, and chosen each other freely.
          </p>
          <p>
            And if life takes us somewhere else, I will still be grateful for the chapter we shared.
          </p>
        </div>
        <p className="closing-section__signoff">Until then, take care of yourself, Bebe.</p>
        <div className="closing-choices" aria-label="Optional responses">
          <a
            className="closing-choice"
            href={whatsappLink(whatsappMessages.yes)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yes, I’m open to talking. Open a prepared WhatsApp message."
          >
            <span className="closing-choice__copy">
              <span className="closing-choice__answer">Yes</span>
              <span className="closing-choice__description">I’m open to a conversation.</span>
            </span>
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a
            className="closing-choice"
            href={whatsappLink(whatsappMessages.no)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="No, I’d rather keep this chapter closed. Open a prepared WhatsApp message."
          >
            <span className="closing-choice__copy">
              <span className="closing-choice__answer">No</span>
              <span className="closing-choice__description">I’d rather keep this chapter closed.</span>
            </span>
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
        <p className="closing-choices__note">
          Each choice opens a prepared message in WhatsApp. Nothing is sent unless you choose to send it.
        </p>
      </div>
    </RevealSection>
  );
}
