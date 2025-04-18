import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 100%)",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 125%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        {/* 🔸 Fallback Image */}
        <img
          src="/img/HeroFallback.png"
          alt="Fallback Background"
          className={`absolute left-0 top-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
            videoLoaded ? "opacity-0" : "opacity-50"
          }`}
        />

        {/* 🔹 Background Video */}
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute left-0 top-0 h-full w-full object-cover object-center opacity-50"
        >
          Your browser does not support the video tag.
        </video>

        {/* 🔸 Overlay Content */}
        <h1 className="font-black text-3xl text-right font-venus-rising absolute bottom-14 md:bottom-20 xl:bottom-28 right-5 z-40 text-balance text-bids-red sm:right-10 md:text-6xl lg:text-7xl xl:text-8xl">
          Redefine
        </h1>
        <h1 className="font-black text-3xl text-right font-venus-rising absolute bottom-5 right-5 z-40 text-balance text-slate-200 sm:right-10 md:text-6xl lg:text-7xl xl:text-8xl">
          Strategy
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-32 md:mt-44 px-5 sm:px-10">
            <p className="mt-2 mb-5 max-w-[800px] font-aller-display font-black text-slate-200 text-3xl md:text-4xl lg:text-6xl">
              Advancing Global Defense with Innovative Technology and Strategic Alliances
            </p>
            <a
              href="https://forms.office.com/r/MF1Y4FXCxT"
              className="about__button font-venus-rising inline-block mt-5 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Text outside video frame */}
      <h1 className="font-black text-3xl text-right font-venus-rising absolute bottom-14 md:bottom-20 xl:bottom-28 right-5 text-balance text-bids-gray sm:right-10 md:text-6xl lg:text-7xl xl:text-8xl">
        Redefine
      </h1>
      <h1 className="font-black text-3xl text-right font-venus-rising absolute bottom-5 right-5 text-balance text-bids-gray sm:right-10 md:text-6xl lg:text-7xl xl:text-8xl">
        Strategy
      </h1>
    </div>
  );
};

export default Hero;