export interface Artwork {
  id: number;
  title: string;
  artist: string;
  quote: string;
  year: number;
  imageUrl: string;
  category: string;
  description: string;
  medium: string;
  dimensions: string;
  price?: number;
  availability: 'available' | 'sold' | 'on loan';
}

export interface Artist {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  nationality: string;
  birthYear: number;
  deathYear?: number;
  notableWorks: string[];
  style: string;
}