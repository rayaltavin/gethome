import { momentPhotoPaths } from "./momentPhotoPaths.generated";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const featuredMemories: GalleryImage[] = [
  {
    id: "first-date",
    src: "/photos/first-date.jpg",
    alt: "Our first date at Moon Gypsy in Senopati, Jakarta.",
    caption: "First date · Moon Gypsy, Senopati, Jakarta",
  },
  {
    id: "second-date",
    src: "/photos/second-date.jpg",
    alt: "Our second date at Dimsum 9 Ayam in Bandung.",
    caption: "Second date · Dimsum 9 Ayam, Bandung",
  },
  {
    id: "third-date",
    src: "/photos/third-date.jpg",
    alt: "Looking for books together in Blok M.",
    caption: "Looking for books · Blok M",
  },
  {
    id: "fourth-date",
    src: "/photos/fourth-date.jpg",
    alt: "Malam Takbir together at Urban Forest.",
    caption: "Malam Takbir · Urban Forest",
  },
];

export const sharedMoments: GalleryImage[] = momentPhotoPaths.map((src, index) => ({
  id: `shared-moment-${index + 1}`,
  src,
  alt: "A photograph from a moment together.",
  caption: "A moment together.",
}));

export const galleryImages: GalleryImage[] = [...featuredMemories, ...sharedMoments];
