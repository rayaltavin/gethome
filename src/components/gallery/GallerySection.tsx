import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import type { Photo } from "react-photo-album";
import { galleryImages } from "../../data/gallery";
import GalleryLightbox from "./GalleryLightbox";
import RevealSection from "../layout/RevealSection";

type AlbumPhoto = Photo & { id: string };
const photos: AlbumPhoto[] = galleryImages.map((image, index) => ({
  ...image,
  title: image.caption,
  label: `View image ${index + 1}: ${image.caption}`,
}));

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
        <p>
          A few editorial images set the mood for this page; the words stay with the dates and
          moments we know.
        </p>
      </div>
      <div className="gallery-album">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          columns={(width) => (width < 560 ? 2 : width < 900 ? 2 : 3)}
          spacing={14}
          onClick={({ index }) => setActiveIndex(index)}
        />
      </div>
      <GalleryLightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(-1)}
      />
    </RevealSection>
  );
}
