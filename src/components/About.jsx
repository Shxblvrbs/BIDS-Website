// src/components/About.jsx
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import AnimatedTitleSmall from "./AnimatedTitleSmall";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // detect desktop
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // clip‐animation on desktop
  useGSAP(
    () => {
      if (!isDesktop) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });
      tl.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    },
    [isDesktop]
  );

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="text-center font-aller-display font-black text-slate-200 text-lg uppercase md:text-2xl">
          Welcome to Blackstone Integrated Defense Solutions
        </p>

        <AnimatedTitleSmall
          title="Where strategy meets results"
          containerClass="mt-2 !text-bids-red text-center"
        />
        <AnimatedTitleSmall
          title="B.I.D.S. delivers the future of defense"
          containerClass="!text-slate-200 text-center"
        />
      </div>

      <div className="mb-40 md:mb-0">
        {isDesktop ? (
          <div className="relative h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
              <img
                src="/img/BIDS-3D.jpg"
                alt="Background"
                className="absolute left-0 top-0 size-full object-cover"
              />
            </div>
            {/* slightly smaller, using venus-rising */}
            <div className="absolute bottom-32 w-full flex justify-center pointer-events-none">
              <span className="font-venus-rising text-bids-red opacity-75 animate-bounce text-3xl md:text-5xl">
                Scroll ↓
              </span>
            </div>
          </div>
        ) : (
          <div className="relative h-[60vh] w-full overflow-hidden">
            <img
              src="/img/2.jpg"
              alt="Background"
              className="about-image absolute left-0 top-0 h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
