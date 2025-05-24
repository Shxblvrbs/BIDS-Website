import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const WeaponSystemsBody = () => {
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
            className='md:block hidden flex-1 bg-[url(/img/WeaponSystemsBody.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>Weapon Systems</h2>
            <h3 className='h3 mb-4 font-aller-display'>
            Reliable Firepower for Mission Success
            </h3>
            <p className='mb-6 font-aller-display'>
            Engineered for pinpoint accuracy and modular flexibility, these weapon systems feature quick-change barrel assemblies, multi-caliber compatibility, and advanced recoil-dampening mechanisms to maintain stable engagement across land, sea, and air platforms. Rapidly configurable with minimal calibration, precision-guided munitions and adaptive targeting software enable swift neutralization of high-value threats under the most demanding operational conditions.
            </p>
            <p className='mb-6 font-aller-display'>
            Built around an open-architecture fire-control network, each platform integrates real-time sensor fusion, encrypted command links, and automated health diagnostics to ensure continuous situational awareness and reliability. Supported by modular maintenance kits and a global logistics network, these weapon systems provide rapid armament turnaround, automated resupply tracking, and field-service readiness for sustained mission success.
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

export default WeaponSystemsBody;