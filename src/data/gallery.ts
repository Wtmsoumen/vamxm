export interface GalleryTile {
  id: string;
  src: string;
  alt: string;
  span: 1 | 2;
}

export const galleryTiles: GalleryTile[] = [
  { id: "1", src: "/pandals/pandal1.jpg", alt: "Durga Puja pandal", span: 1 },
  { id: "2", src: "/pandals/pandal2.jpg", alt: "Puja artwork", span: 1 },
  { id: "3", src: "/pandals/pandal3.jpg", alt: "Durga Puja celebration", span: 1 },
  { id: "4", src: "/pandals/pandal4.jpg", alt: "Durga Puja pandal", span: 1 },
  { id: "5", src: "/pandals/pandal1.jpg", alt: "Puja decorations", span: 1 },
  { id: "6", src: "/pandals/pandal2.jpg", alt: "Durga Puja pandal", span: 2 },
  { id: "7", src: "/pandals/pandal3.jpg", alt: "Durga Puja celebration", span: 1 },
];
