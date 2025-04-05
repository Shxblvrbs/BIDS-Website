import { TiLocationArrow } from "react-icons/ti"
import Button from "./Button"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 20% 100%, 0% 100%)',
            
        });
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
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
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 size-full object-cover object-center opacity-50"
                />
            </div>
            <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-28 right-5 z-40 text-balance text-bids-red sm:right-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
                Redefine
            </h1>
            <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-5 right-5 z-40 text-balance text-slate-200 sm:right-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
                Strategy
            </h1>
            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-44 px-5 sm:px-10">
                    <p className="mt-2 mb-5 max-w-[800px] font-aller-display font-black text-slate-200 sm:text-xl lg:text-6xl">
                        Advancing Global Defense with Innovative Technology and Strategic Alliances
                    </p>
                    <a href="/coming-soon/"><Button id="hero-button" title="Contact Us" containerClass="flex-center gap-5"/></a>
                </div>
            </div>
        </div>
        <h1 className="font-black text-4xl text-right font-venus-rising absolute bottom-28 right-5 text-balance text-bids-red md:text-bids-gray sm:right-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            Redefine
        </h1>
        <h1 className="text-4xl text-right font-black font-venus-rising absolute bottom-5 right-5 text-balance text-slate-200 md:text-bids-gray sm:right-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            Strategy
        </h1>
    </div>
    
  )
}

export default Hero