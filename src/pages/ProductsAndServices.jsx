// src/pages/ProductsAndServices.jsx
import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VSAStory from "../components/VSAStory";
import { Bounded } from "../components/Bounded";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProductsAndServices = () => {
  const headingRef = useRef(null);

  // video loaded states
  const [landLoaded, setLandLoaded] = useState(false);
  const [seaLoaded, setSeaLoaded] = useState(false);
  const [airLoaded, setAirLoaded] = useState(false);

  // Animate the main heading
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.fromTo(
        headingRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );
    },
    { scope: headingRef }
  );

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <Navbar />

      {/* Main animated heading */}
      <div className="relative px-6 pt-20 md:pt-32 max-w-5xl mx-auto text-center text-bids-red overflow-hidden mt-10">
        <h1
          ref={headingRef}
          className="about__heading font-venus-rising text-5xl md:text-7xl font-medium leading-tight opacity-0"
        >
          Products &amp; Services
        </h1>
      </div>

      {/* ----------------------- LAND ----------------------------*/}
      <Bounded className="overflow-hidden bg-black py-6 text-white md:py-10">
        <a href="/products-and-services/land" className="block">
          <div className="relative h-[60vh] w-full mt-6 overflow-hidden rounded group border-l-2 border-r-2 border-bids-red hover:cursor-pointer">
            {/* Fallback image */}
            <img
              src="/img/land-fallback.png"
              alt="LAND fallback"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                landLoaded ? "opacity-0" : "opacity-50"
              }`}
            />
            {/* Bottom video (full brightness) */}
            <video
              src="/videos/land-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setLandLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* SVG mask overlay */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask
                  id="text-mask-land"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse"
                >
                  <rect width="100%" height="100%" fill="white" />
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fontFamily="venus-rising, sans-serif"
                    fontWeight="100"
                    fontSize="17"
                    fill="black"
                  >
                    LAND
                  </text>
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="black"
                fillOpacity="0.90"
                mask="url(#text-mask-land)"
              />
            </svg>

            {/* Red stroke outline: hidden until hover */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <text
                x="50%"
                y="50%"
                dy=".35em"
                textAnchor="middle"
                fontFamily="venus-rising, sans-serif"
                fontWeight="100"
                fontSize="17"
                fill="none"
                stroke="#E00000"
                strokeWidth="0.6"
              >
                LAND
              </text>
            </svg>
          </div>
        </a>
      </Bounded>

      {/* ------------------- SEA ---------------------- */}
      <Bounded className="overflow-hidden bg-black py-6 text-white md:py-10">
        <a href="/products-and-services/sea" className="block">
          <div className="relative h-[60vh] w-full mt-6 overflow-hidden rounded group border-l-2 border-r-2 border-bids-red hover:cursor-pointer">
            {/* Fallback image */}
            <img
              src="/img/sea-fallback.png"
              alt="SEA fallback"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                seaLoaded ? "opacity-0" : "opacity-50"
              }`}
            />
            {/* Bottom video (full brightness) */}
            <video
              src="/videos/sea-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setSeaLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* SVG mask overlay */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask
                  id="text-mask-sea"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse"
                >
                  <rect width="100%" height="100%" fill="white" />
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fontFamily="venus-rising, sans-serif"
                    fontWeight="100"
                    fontSize="17"
                    fill="black"
                  >
                    SEA
                  </text>
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="black"
                fillOpacity="0.90"
                mask="url(#text-mask-sea)"
              />
            </svg>

            {/* Red stroke outline: hidden until hover */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <text
                x="50%"
                y="50%"
                dy=".35em"
                textAnchor="middle"
                fontFamily="venus-rising, sans-serif"
                fontWeight="100"
                fontSize="17"
                fill="none"
                stroke="#E00000"
                strokeWidth="0.6"
              >
                SEA
              </text>
            </svg>
          </div>
        </a>
      </Bounded>

      {/* ---------------------- AIR ----------------------- */}
      <Bounded className="overflow-hidden bg-black py-6 text-white md:py-10">
        <a href="/products-and-services/air" className="block">
          <div className="relative h-[60vh] w-full mt-6 overflow-hidden rounded group border-l-2 border-r-2 border-bids-red hover:cursor-pointer">
            {/* Fallback image */}
            <img
              src="/img/air-fallback.png"
              alt="AIR fallback"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                airLoaded ? "opacity-0" : "opacity-50"
              }`}
            />
            {/* Bottom video (full brightness) */}
            <video
              src="/videos/air-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setAirLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* SVG mask overlay */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask
                  id="text-mask-air"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse"
                >
                  <rect width="100%" height="100%" fill="white" />
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fontFamily="venus-rising, sans-serif"
                    fontWeight="100"
                    fontSize="17"
                    fill="black"
                  >
                    AIR
                  </text>
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="black"
                fillOpacity="0.90"
                mask="url(#text-mask-air)"
              />
            </svg>

            {/* Red stroke outline: hidden until hover */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <text
                x="50%"
                y="50%"
                dy=".35em"
                textAnchor="middle"
                fontFamily="venus-rising, sans-serif"
                fontWeight="100"
                fontSize="17"
                fill="none"
                stroke="#E00000"
                strokeWidth="0.6"
              >
                AIR
              </text>
            </svg>
          </div>
        </a>
      </Bounded>

      <VSAStory />
      <Footer />
    </div>
  );
};

export default ProductsAndServices;
