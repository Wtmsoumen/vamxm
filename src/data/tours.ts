export interface Tour {
  id: string;
  title: string;
  location: string;
  description: string;
  nodes: number;
  preview: string;
  path: string;
  published: boolean;
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: "uniworldpuja25",
    title: "Uniworld City Puja 2025",
    location: "Uniworld City, New Town, Kolkata",
    description: "Explore the grandeur of Uniworld City's Durga Puja celebration through a fully immersive 360° virtual tour with 3 vantage points.",
    nodes: 3,
    preview: "/tours/uniworldpuja25/preview.jpg",
    path: "https://webtechnomind.in/utsavverse/uniworldpuja25",
    published: true,
    featured: true,
  },
  {
    id: "ahiritolasapuja25",
    title: "Ahiritola Sarbojanin 2025",
    location: "Ahiritola, North Kolkata",
    description: "Step inside one of Kolkata's most celebrated Durga Puja pandals — Ahiritola Sarbojanin — in stunning 360° detail.",
    nodes: 3,
    preview: "/tours/ahiritolasapuja25/preview.jpg",
    path: "https://webtechnomind.in/utsavverse/ahiritolasapuja25",
    published: true,
    featured: false,
  },
];
