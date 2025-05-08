import React from 'react';

const ParalaxComponents = () => {
  return (
    <div className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center relative paralax">
      <div className="text-white text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg" data-aos="zoom-out"  data-aos-duration="1500">Spicetra Export</h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md" data-aos="zoom-out"  data-aos-duration="1500">
          Spices & seafood from Indonesia to the world.
        </p>

        {/* Play Button */}
        <div className="mt-8 flex flex-col items-center" data-aos="zoom-out"  data-aos-duration="1500">
          <button className="group relative w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </button>
          <span className="mt-2 text-sm text-white group-hover:underline">
            Watch Video
          </span>
        </div>
      </div>

      {/* Overlay (opsional, untuk visibilitas teks lebih baik) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </div>
  );
};

export default ParalaxComponents;
