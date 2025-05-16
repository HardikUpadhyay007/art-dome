import React, { useState } from 'react';
import { Artwork } from '../types';
import ArtworkModal from './ArtworkModal';

interface ArtCardProps {
  artwork: Artwork;
}

const ArtCard: React.FC<ArtCardProps> = ({ artwork }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative h-[400px] rounded-lg overflow-hidden transition-all duration-700 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {/* Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${artwork.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: isHovered ? 'brightness(0.5) saturate(1.2)' : 'brightness(0.9)',
            transition: 'all 0.7s ease-in-out',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />

        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500"
          style={{ opacity: isHovered ? '0.9' : '0.6' }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="transform transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0)' }}>
            <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white/80 px-2 py-1 rounded-full">
              {artwork.category}
            </span>
          </div>
          
          <div className="space-y-2 transform transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? 'translateY(-16px)' : 'translateY(0)' }}>
            <h2 className="text-2xl font-bold text-white tracking-tight">{artwork.title}</h2>
            <h3 className="text-white/80 text-lg">{artwork.artist}, {artwork.year}</h3>
          </div>
        </div>

        {/* Expanded info that appears on hover */}
        <div 
          className="absolute inset-0 p-6 flex flex-col justify-center items-center bg-black/80 text-center"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-in-out, transform 0.7s ease-in-out',
            transitionDelay: isHovered ? '0.1s' : '0s',
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
        >
          <blockquote className="italic text-lg text-white/90 max-w-xs mb-6">
            "{artwork.quote}"
          </blockquote>
          <div className="w-16 h-[1px] bg-white/40 mb-4"/>
          <p className="text-white/70 text-sm mb-4">
            {artwork.artist}, {artwork.year}
          </p>
          <button 
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            View Details
          </button>
        </div>
      </div>

      <ArtworkModal
        artwork={artwork}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ArtCard;