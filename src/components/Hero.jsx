import { TiLocationArrow } from "react-icons/ti"
import Button from "./Button"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(0% 0, 100% 0, 100% 50%, 0 100%)',
        });
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 125%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
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
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black">
            <div>
                <video 
                src={`/videos/background.mp4`}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}  // Important for iOS devices
                className="absolute left-0 top-0 w-full h-full object-cover object-center opacity-50"
                >
                Your browser does not support the video tag.
                </video>
                
            </div>
            <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-28 right-5 z-40 text-balance text-bids-red sm:right-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Redefine
            </h1>
            <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-5 right-5 z-40 text-balance text-slate-200 sm:right-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Strategy
            </h1>
            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-44 px-5 sm:px-10">
                    <p className="mt-2 mb-5 max-w-[800px] font-aller-display font-black text-slate-200 sm:text-4xl md:text-7xl lg:text-6xl">
                        Advancing Global Defense with Innovative Technology and Strategic Alliances
                    </p>
                    <a
                    href="/contact"
                    className="about__button font-venus-rising inline-block mt-5 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
                    >
                    Contact Us
                    </a>
                </div>
            </div>
        </div>
        <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-28 right-5 text-balance text-bids-red sm:text-bids-gray sm:right-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Redefine
        </h1>
        <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-5 right-5 text-balance text-slate-200 sm:text-bids-gray sm:right-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Strategy
        </h1>
    </div>
    
  )
}

export default Hero