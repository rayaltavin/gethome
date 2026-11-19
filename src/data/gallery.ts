export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "photo-one",
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1100&q=85",
    alt: "Illustrative editorial landscape photograph.",
    caption: "Light finds its way into ordinary things.",
    width: 1100,
    height: 1400,
  },
  {
    id: "photo-two",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85",
    alt: "Illustrative editorial photograph of a quiet landscape.",
    caption: "Somewhere between pause and possibility.",
    width: 1100,
    height: 800,
  },
  {
    id: "photo-three",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85",
    alt: "Illustrative editorial photograph of flowers.",
    caption: "Little details deserve their own page.",
    width: 1100,
    height: 1300,
  },
  {
    id: "photo-four",
    src: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1100&q=85",
    alt: "Illustrative editorial photograph of a landscape.",
    caption: "An image from the quiet in-between.",
    width: 1100,
    height: 800,
  },
  {
    id: "photo-five",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85",
    alt: "Illustrative editorial landscape photograph.",
    caption: "Soft colors, kept for the feeling.",
    width: 1100,
    height: 1400,
  },
  {
    id: "photo-six",
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1100&q=85",
    alt: "Illustrative editorial photograph of a landscape.",
    caption: "A gentle reminder to notice.",
    width: 1100,
    height: 900,
  },
];
