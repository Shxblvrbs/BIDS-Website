import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's md breakpoint
    };

    handleResize(); // Run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (!isDesktop) return;

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, [isDesktop]);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="text-center font-aller-display font-black text-slate-200 text-lg uppercase md:text-2xl">
          Welcome to Blackstone Integrated Defense Solutions
        </p>

        <AnimatedTitle
          title="Where strategy meets results"
          containerClass="mt-2 !text-bids-red text-center"
        />
        <AnimatedTitle
          title="B.I.D.S. delivers the future of defense"
          containerClass="!text-slate-200 text-center"
        />
      </div>
      
      <div className="mb-40 md:mb-0">
      {isDesktop ? (
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="/img/BIDS 3D.jpg"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img
            src="/img/1.jpg"
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
