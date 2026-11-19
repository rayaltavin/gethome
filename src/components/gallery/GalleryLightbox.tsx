import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import type { GalleryImage } from "../../data/gallery";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, index, onClose }: GalleryLightboxProps) {
  return (
    <Lightbox
      open={index >= 0}
      close={onClose}
      index={Math.max(index, 0)}
      slides={images.map((image) => ({
        src: image.src,
        alt: image.alt,
        description: image.caption,
      }))}
      plugins={[Captions]}
      captions={{ descriptionTextAlign: "center" }}
      labels={{ Close: "Close image viewer", Next: "Next image", Previous: "Previous image" }}
    />
  );
}
