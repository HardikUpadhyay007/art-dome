import React from 'react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900 p-6 hover:bg-gray-800 transition-all duration-300">
      <div className="flex gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img 
            src={artist.imageUrl} 
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{artist.name}</h3>
          <p className="text-white/60 text-sm mb-3">
            {artist.nationality}, {artist.birthYear}-{artist.deathYear || 'Present'}
          </p>
          <p className="text-white/80 text-sm line-clamp-3">{artist.bio}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-white/60 mb-2">Notable Works</h4>
        <div className="flex flex-wrap gap-2">
          {artist.notableWorks.map((work, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
            >
              {work}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;