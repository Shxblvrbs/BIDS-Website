import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const ExpeditionarySystemsBody = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto md:mt-32 md:mb-56'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='md:block hidden flex-1 bg-[url(/img/ExpeditionarySystemsBody.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>Expeditionary Systems</h2>
            <h3 className='h3 mb-4 font-aller-display'>
            Autonomous Rapid-Deploy Platforms
            </h3>
            <p className='mb-6 font-aller-display'>
            Designed for lightning-fast establishment of forward-operating outposts, these expeditionary systems deliver modular power generation, climate-controlled shelters, and transportable water-purification units engineered for the harshest environments. Rapidly deployable via air, sea, or land transport, the containerized modules snap together with minimal tooling to provide habitable workspaces and critical utilities in hours rather than days.
            </p>
            <p className='mb-6 font-aller-display'>
            Equipped with an open-architecture control network, each suite integrates hybrid energy arrays, advanced HVAC, and automated resource monitoring to sustain continuous operations in remote theaters. Secure satellite communications, intelligent logistics tracking, and remote diagnostics ensure real-time situational awareness and streamlined resupply, keeping personnel safe and mission objectives on track.
            </p>
            
            <div className='flex gap-x-8 items-center'>

            <a
            href="https://www.google.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="about__button font-venus-rising inline-block mt-10 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
            >
            Learn More
            </a>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionarySystemsBody;