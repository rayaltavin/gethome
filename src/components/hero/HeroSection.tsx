import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { relationship } from "../../data/relationship";

const heroImage = "/photos/photo%201.JPG";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Can I Get Home Now Bebe? home">
            <span className="wordmark__name">a little archive</span>
          </a>
          <span className="site-header__note">Made of moments, kept with care</span>
        </header>

        <div className="hero__content" id="top">
          <motion.div
            className="hero__copy"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">
              <span className="eyebrow__rule" />
              A story in little moments
            </p>
            <h1 id="hero-title">
              Can I Get
              <br />
              Home Now
              <br />
              <em>Bebe?</em>
            </h1>
            <p className="hero__description">
              A little place for the memories, the moments, and everything that once felt like home.
            </p>
            <p className="hero__dates">
              <time dateTime={relationship.relationshipStart}>November 23, 2024</time>
              <span aria-hidden="true"> — </span>
              <time dateTime={relationship.relationshipEnd}>November 2, 2026</time>
            </p>

            <a className="hero__link" href="#beginning">
              <span>Open our little story</span>
              <span className="hero__link-icon" aria-hidden="true">
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </span>
            </a>
          </motion.div>

          <motion.figure
            className="hero__visual"
            id="hero-photograph"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: prefersReducedMotion ? 0 : 0.18 }}
          >
            <div className="hero__image-wrap">
              <img
                className="hero__image"
                src={heroImage}
                alt="A quiet moment together, smiling as we lie side by side."
                fetchPriority="high"
              />
              <div className="hero__image-shade" aria-hidden="true" />
              <span className="hero__image-index">No. 01 &nbsp; / &nbsp; A beginning</span>
              <figcaption className="hero__caption">
                <span>Somewhere between then and always</span>
                <span className="hero__caption-mark" aria-hidden="true">
                  ✳
                </span>
              </figcaption>
            </div>
          </motion.figure>
        </div>

        <a className="scroll-cue" href="#beginning" aria-label="Continue to the story">
          <span className="scroll-cue__text">Take your time</span>
          <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
      <span className="hero__side-note" aria-hidden="true">
        AN ARCHIVE OF US · 2024—2026
      </span>
    </section>
  );
}
