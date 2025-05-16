import React from "react";
import ArtCard from "./ArtCard";
import { Artwork } from "../types";

interface GalleryGridProps {
    artworks: Artwork[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ artworks }) => {
    return (
        <div className="w-full">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {artworks.map((artwork) => (
                    <ArtCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
    );
};

export default GalleryGrid;
