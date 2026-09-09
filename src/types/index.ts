export interface Pandal {
  id: string;
  name: string;
  nameBengali?: string;
  location: string;
  views?: number;
  description: string;
  thumbnail: string;
  panoramaUrl: string;
  idolPanoramaUrl?: string;
  featured: boolean;
  published: boolean;
  sponsors: Sponsor[];
  hotspots: Hotspot[];
  createdAt: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  bannerImage?: string;
}

export interface Hotspot {
  id: string;
  type: 'sponsor' | 'info';
  label: string;
  pitch: number;
  yaw: number;
  sponsorId?: string;
  url?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  image?: string;
  createdAt: string;
  read: boolean;
}
