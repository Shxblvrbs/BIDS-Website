import React from "react";
import Navbar from "../components/Navbar"; // Adjust path if needed

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full text-bids-red font-venus-rising overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Navbar + Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4">
          <h1 className="text-center text-7xl md:text-9xl font-bold uppercase tracking-wide">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
