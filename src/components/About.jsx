import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // Desktop view
      "(min-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            // markers: true, // uncomment for debugging
          },
        });

        tl.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      },

      // Mobile view
      "(max-width: 767px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "top+=50 top", // Offset helps better trigger on iOS/Android
            end: "+=500",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            // markers: true, // uncomment for debugging
          },
        });

        tl.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      },
    });
  }, []);

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

      <div className="h-[100dvh] w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/BIDS 3D.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
