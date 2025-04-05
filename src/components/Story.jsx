import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh -mt-20 w-screen bg-black">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-aller-display font-black text-slate-200 text-lg uppercase md:text-2xl">
           Contact Us
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Partner with purpose."
            containerClass="min-w-[1000px] mt-5 pointer-events-none mix-blend-difference relative z-10 !text-bids-red"
          />
          <AnimatedTitle
            title="Connect with B.I.D.S. today."
            containerClass="min-w-[1000px] mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container mt-10">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  ref={frameRef}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/contact-us.png"
                  alt="contact-us.png"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
            
          </div>
          <div className="-mt-56 flex-center">
          <Button id="contact-us" title="Contact Us" containerClass="flex-center gap-5 items-center"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FloatingImage;