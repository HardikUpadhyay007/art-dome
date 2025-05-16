import React from "react";
import GalleryGrid from "../components/GalleryGrid";
import { artworks } from "../data/artworks";
import AnimatedBackground from "../components/AnimatedBackground";

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white overflow-x-hidden">
            <AnimatedBackground />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Discover one of the finest
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                {" "}
                                digital art gallery
                            </span>
                        </h1>
                        <p className="text-xl text-white/70 mb-8 leading-relaxed">
                            Explore our curated collection of masterpieces from
                            renowned artists across the globe. Click on any
                            artwork to learn more about the creator and their
                            inspiration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="pb-24 md:pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    <GalleryGrid artworks={artworks} />
                </div>
            </section>
        </div>
    );
};

export default Home;
