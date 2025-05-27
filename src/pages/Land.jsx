import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VSAStory from "../components/VSAStory";
import { Bounded } from "../components/Bounded";
import FadeIn from "../components/FadeIn";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Land = () => {
const container = useRef(null);

useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.fromTo(
      '.about__heading',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4 }
    )
      .fromTo(
        '.about__body',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=0.8'
      )
      .fromTo(
        '.about__button',
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=0.8'
      )
      .fromTo(
        '.about__image',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 },
        '+=0.3'
      )
      .fromTo(
        '.about__glow',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8 },
        '-=1.2'
      );
  }, { scope: container });


  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <Navbar />

      <div ref={container} className="relative px-6 pt-20 md:pt-32 max-w-5xl mx-auto text-center text-bids-red bg-black overflow-hidden mt-10">
        <h1 className="about__heading font-venus-rising text-5xl md:text-7xl font-medium leading-tight opacity-0">
          Land
        </h1>
      </div>

      <Bounded alt="Tactical Vehicles" className="overflow-hidden bg-black py-16 text-white md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]">
          {/* Main image */}
          <FadeIn
            className="translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"
            vars={{ duration: 1 }}
            start="top 70%"
          >
            <img
              src="/img/TacticalVehiclesBig.png"
              alt="Feature"
              className="h-auto w-full object-cover md:block hidden"
            />
          </FadeIn>

          {/* Text block */}
          <FadeIn className="translate-y-16 space-y-6 self-start bg-bids-red p-10 opacity-0 lg:col-start-3 lg:row-start-1">
            <h2 className="font-venus-rising text-slate-200 text-xl leading-tight font-semibold md:text-xl">
              Tactical Vehicles
            </h2>
            {/* <div className="max-w-lg font-aller-display text-base text-slate-200">Test</div> */}
          </FadeIn>

          {/* Static “feature” panel */}
          <FadeIn
            className="animate-in relative translate-y-16 self-end bg-bids-gray opacity-0 will-change-transform"
            vars={{ duration: 1, delay: 1 }}
          >
            <img
              src="/img/TacticalVehiclesSmall.png"
              alt="Feature Detail"
              className="mx-auto -mt-10 w-96 md:w-full md:-mt-20"
            />

            <div className="flex justify-between p-10 pt-4">
              <div className="space-y-1">
                {/* <h3 className="font-venus-rising text-bids-red text-4xl">Test</h3> */}
                {/* <p className="font-aller-display my-2 text-slate-200">Explore How B.I.D.S. Delivers Integrated Defense Solutions</p> */}
                <a
                  href="/products-and-services/land/tactical-vehicles"
                  rel="noopener noreferrer"
                  className="about__button font-venus-rising inline-block mt-5 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Bounded>

      <Bounded
      alt="Expeditionary Systems"
      className="overflow-hidden bg-black py-2 text-white md:py-6"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]">
            {/* Text block now on the left */}
            <FadeIn
            className="translate-y-16 space-y-6 self-start bg-bids-red p-10 opacity-0 lg:col-start-1 lg:row-start-1"
            vars={{ duration: 1 }}
            start="top 70%"
            >
                <h2 className="font-venus-rising text-slate-200 text-xl leading-tight font-semibold md:text-xl">
                    Expeditionary Systems
                </h2>
            </FadeIn>

            {/* Main image now on the right */}
            <FadeIn
            className="translate-y-16 opacity-0 lg:col-start-2 lg:col-span-2 lg:row-span-2"
            vars={{ duration: 1 }}
            start="top 70%"
            >
            <img
            src="/img/ExpeditionarySystemsBig.png"
            alt="Feature"
            className="h-auto w-full object-cover md:block hidden"
            />
            </FadeIn>

            {/* Static “feature” panel */}
            <FadeIn
            className="animate-in relative translate-y-16 self-end bg-bids-gray opacity-0 will-change-transform"
            vars={{ duration: 1, delay: 1 }}
            >
                <img
                src="/img/ExpeditionarySystemsSmall.png"
                alt="Feature Detail"
                className="mx-auto -mt-10 w-96 md:w-full md:-mt-20"
                />

                <div className="flex justify-between p-10 pt-4">
                    <div className="space-y-1">
                    <a
                        href="/products-and-services/land/expeditionary-systems"
                        rel="noopener noreferrer"
                        className="about__button font-venus-rising inline-block mt-5 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
                    >
                    Learn More
                    </a>
                </div>
            </div>
            </FadeIn>
        </div>
      </Bounded>

      <Bounded alt="Post-Conflict Reconstruction" className="overflow-hidden bg-black py-16 text-white md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]">
          {/* Main image */}
          <FadeIn
            className="translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"
            vars={{ duration: 1 }}
            start="top 70%"
          >
            <img
              src="/img/PostConflictBig.png"
              alt="Feature"
              className="h-auto w-full object-cover md:block hidden"
            />
          </FadeIn>

          {/* Text block */}
          <FadeIn className="translate-y-16 space-y-6 self-start bg-bids-red p-10 opacity-0 lg:col-start-3 lg:row-start-1">
            <h2 className="font-venus-rising text-slate-200 text-xl leading-tight font-semibold md:text-xl">
               Post-Conflict Reconstruction
            </h2>
            {/* <div className="max-w-lg font-aller-display text-base text-slate-200">Test</div> */}
          </FadeIn>

          {/* Static “feature” panel */}
          <FadeIn
            className="animate-in relative translate-y-16 self-end bg-bids-gray opacity-0 will-change-transform"
            vars={{ duration: 1, delay: 1 }}
          >
            <img
              src="/img/PostConflictSmall.png"
              alt="Feature Detail"
              className="mx-auto -mt-10 w-96 md:w-full md:-mt-20"
            />

            <div className="flex justify-between p-10 pt-4">
              <div className="space-y-1">
                {/* <h3 className="font-venus-rising text-bids-red text-4xl">Test</h3> */}
                {/* <p className="font-aller-display my-2 text-slate-200">Explore How B.I.D.S. Delivers Integrated Defense Solutions</p> */}
                <a
                  href="/post-conflict-reconstruction"
                  rel="noopener noreferrer"
                  className="about__button font-venus-rising inline-block mt-5 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Bounded>

      <VSAStory />
      <Footer />
    </div>
  );
};

export default Land;
