import { useState } from "react";
import { featuredMemories, galleryImages, sharedMoments } from "../../data/gallery";
import GalleryLightbox from "./GalleryLightbox";
import RevealSection from "../layout/RevealSection";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <RevealSection id="memories" className="gallery-section section-pad">
      <div className="gallery-section__heading">
        <div>
          <div className="section-kicker">
            <span>04</span>
            <span className="section-kicker__line" />
            <span>The little things</span>
          </div>
          <h2 className="section-title">
            It's always
            <br />
            <em>the little things.</em>
          </h2>
        </div>
        <p>Four places with their own memories, followed by the many moments we shared.</p>
      </div>

      <div className="gallery-section__featured">
        {featuredMemories.map((image, index) => (
          <button
            className="gallery-featured-card"
            key={image.id}
            type="button"
            aria-label={`View featured moment ${index + 1}: ${image.caption}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="gallery-featured-card__image">
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </span>
            <span className="gallery-featured-card__index">Featured moment · 0{index + 1}</span>
            <span className="gallery-featured-card__caption">{image.caption}</span>
          </button>
        ))}
      </div>

      <div className="gallery-section__moments-heading">
        <h3>Moments together</h3>
        <span>{sharedMoments.length} photographs</span>
      </div>
      <div className="gallery-album gallery-moments-grid">
        {sharedMoments.map((image, index) => (
          <button
            className="gallery-moments-grid__item"
            key={image.id}
            type="button"
            aria-label={`View shared moment ${index + 1}`}
            onClick={() => setActiveIndex(featuredMemories.length + index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(-1)}
      />
    </RevealSection>
  );
}
