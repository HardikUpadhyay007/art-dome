import { Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 1,
    name: "Vincent van Gogh",
    bio: "Dutch post-impressionist painter who posthumously became one of the most influential figures in Western art history. His work is notable for its bold colors and dramatic, impulsive, and expressive brushwork.",
    imageUrl: "https://images.pexels.com/photos/15013979/pexels-photo-15013979.jpeg",
    nationality: "Dutch",
    birthYear: 1853,
    deathYear: 1890,
    notableWorks: ["The Starry Night", "Sunflowers", "The Potato Eaters"],
    style: "Post-Impressionism"
  },
  {
    id: 2,
    name: "Salvador Dalí",
    bio: "Spanish surrealist artist known for the striking and bizarre images in his work. His painterly skills were influenced by the Renaissance masters.",
    imageUrl: "https://images.pexels.com/photos/15574335/pexels-photo-15574335.jpeg",
    nationality: "Spanish",
    birthYear: 1904,
    deathYear: 1989,
    notableWorks: ["The Persistence of Memory", "Christ of Saint John of the Cross"],
    style: "Surrealism"
  },
  // Add more artists...
];