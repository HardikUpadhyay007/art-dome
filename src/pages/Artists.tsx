import React from 'react';
import { artists } from '../data/artists';
import ArtistCard from '../components/ArtistCard';

const Artists = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Featured Artists</h1>
        <p className="text-xl text-white/70 mb-12 max-w-3xl">
          Discover the brilliant minds behind our collection. Each artist brings their unique vision and style to the world of digital art.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;