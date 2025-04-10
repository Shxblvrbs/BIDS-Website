import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Story from '../components/Story';
import Description from '../components/Description';

const About = () => {
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
    <div className= "relative min-h-screen w-screen overflow-x-hidden bg-black">
      <Navbar />

      <div
        ref={container}
        className="relative px-6 py-20 md:py-32 max-w-5xl mx-auto text-center text-bids-red bg-black overflow-hidden mt-10"
      >
        <div className="absolute inset-0 -z-10" />

        <h1 className="about__heading font-venus-rising text-5xl md:text-7xl font-medium leading-tight opacity-0">
          Who We Are
        </h1>

        <p className="about__body font-aller-display mt-6 max-w-5xl mx-auto text-slate-200 text-lg md:text-xl opacity-0">
          At Blackstone Integrated Defense Solutions, our mission is to drive the future of global security by fostering strategic partnerships and bridging the gap between innovative technologies and the organizations that shape tomorrow’s defense landscape. With a diverse range of capabilities spanning defense, technology, and commercial industries, we are committed to connecting visionary solutions with high-level stakeholders, creating limitless opportunities for collaboration and growth.        
        </p>

        <a
          href="/contact"
          className="about__button font-venus-rising inline-block mt-10 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300 opacity-0"
        >
          Contact Us
        </a>

        <div className="about__image mt-16 flex justify-center opacity-0">
          <div className="relative p-4 rounded-lg bg-white/10 backdrop-blur-md">
            <div className="about__glow absolute inset-0 -z-10 bg-bids-red/30 blur-2xl opacity-0 rounded-lg" />
            <img
              src="/img/BIDS 3D.jpg"
              alt="About"
              className="rounded-lg max-w-4xl"
            />
          </div>
        </div>
      </div>

      <Description />
      <Story />
      <Footer />
    </div>
  );
};

export default About;
