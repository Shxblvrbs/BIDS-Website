import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "./AnimatedTitle";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, fallBackSrc, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {!videoLoaded && (
        <img
          src={fallBackSrc}
          alt="Feature fallback"
          className="absolute left-0 top-0 size-full object-cover object-center z-0"
        />
      )}

      <video
        src={src}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute left-0 top-0 size-full object-cover object-center ${
          videoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base ">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <a href="/coming-soon">
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-bids-gray px-5 py-2 text-xs uppercase text-white/20"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #e0000058, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">coming soon</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    {/* Desktop Version */}
    <div className="hidden md:block container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <AnimatedTitle 
        title="Active"
        containerClass="!text-bids-red text-center"
        />
        <AnimatedTitle 
        title="Projects"
        containerClass="!text-slate-200 text-center"
        />
      </div>

      <BentoTilt className="bento-tilt_1 border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          fallBackSrc="/img/feature1fallback.png"
          title={<>Next Generation Procurement Platform</>}
          description="Revolutionizing procurement with AI-driven efficiency, real-time insights, and seamless supplier collaboration—welcome to the future of smarter, faster, and more strategic sourcing."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            fallBackSrc="/img/feature2fallback.png"
            title={<>Voice Stress Analysis</>}
            description="Uncover hidden emotions and detect stress in real time with our cutting-edge voice stress analysis system, enhancing security, truth verification, and human insight"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            fallBackSrc="/img/feature3fallback.png"
            title={<>Defense</>}
            description="Delivering cutting-edge defense solutions with precision, reliability, and innovation to support mission success and national security."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            fallBackSrc="/img/feature4fallback.png"
            title={<>AgriTech</>}
            description="Multi-purpose drone solutions engineered for adaptability, efficiency, and seamless operation across a wide range of applications and environments."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1">
          <div className="flex size-full flex-col justify-between bg-bids-red p-5">
            <h1 className="bento-title special-font max-w-64 text-white">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="text-white m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>

    {/* Mobile Version */}
    <div className="md:hidden block container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <AnimatedTitle 
        title="Active"
        containerClass="!text-bids-red text-center"
        />
        <AnimatedTitle 
        title="Projects"
        containerClass="!text-slate-200 text-center"
        />
      </div>

      <BentoTilt className="bento-tilt_1 border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={<>Next Generation Procurement Platform</>}
          description="Revolutionizing procurement with AI-driven efficiency, real-time insights, and seamless supplier collaboration—welcome to the future of smarter, faster, and more strategic sourcing."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={<>Voice Stress Analysis</>}
            description="Uncover hidden emotions and detect stress in real time with our cutting-edge voice stress analysis system, enhancing security, truth verification, and human insight"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-3.mp4"
            title={<>Defense</>}
            description="Delivering cutting-edge defense solutions with precision, reliability, and innovation to support mission success and national security."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-4.mp4"
            title={<>Drones</>}
            description="Multi-purpose drone solutions engineered for adaptability, efficiency, and seamless operation across a wide range of applications and environments."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1">
          <div className="flex size-full flex-col justify-between bg-bids-red p-5">
            <h1 className="bento-title special-font max-w-64 text-white">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="text-white m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
