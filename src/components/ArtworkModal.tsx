import React from 'react';
import { X } from 'lucide-react';
import { Artwork } from '../types';

interface ArtworkModalProps {
  artwork: Artwork;
  isOpen: boolean;
  onClose: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <div 
        className="relative w-full max-w-4xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-all"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[600px] relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${artwork.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <div>
              <span className="text-sm font-medium text-white/60">{artwork.category}</span>
              <h2 className="text-3xl font-bold text-white mt-1">{artwork.title}</h2>
              <p className="text-xl text-white/80 mt-2">{artwork.artist}, {artwork.year}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{artwork.description}</p>
              </div>

              <blockquote className="border-l-2 border-white/20 pl-4 italic text-white/80">
                "{artwork.quote}"
              </blockquote>

              <div className="space-y-2">
                <div>
                  <span className="text-white/60">Medium:</span>
                  <span className="ml-2 text-white">{artwork.medium}</span>
                </div>
                <div>
                  <span className="text-white/60">Dimensions:</span>
                  <span className="ml-2 text-white">{artwork.dimensions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;