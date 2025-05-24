import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const TacticalVehiclesBody = () => {
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
            className='md:block hidden flex-1 bg-[url(/img/TacticalVehicleBody.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>Tactical Vehicles</h2>
            <h3 className='h3 mb-4 font-aller-display'>
            The Operational Prowess of our Fleet
            </h3>
            <p className='mb-6 font-aller-display'>
            Our tactical vehicles put the operator first, combining rugged durability with streamlined ergonomics for swift maneuvering in any terrain. Reinforced chassis and adaptive suspension work together with advanced drive modes to transition effortlessly between on- and off-road, while joystick-assisted steering and high-capacity powertrains deliver burst speed and extended silent-watch capability without fatigue.
            </p>
            <p className='mb-6 font-aller-display'>
            Built for mission flexibility, each platform sports modular payload bays for reconnaissance drones, electronic-warfare pods, or medevac modules. An open-architecture electronics suite supports plug-and-play sensors—thermal imagers, LIDAR mapping, 360° cameras—and streams data over hardened, encrypted networks. Ergonomic crew stations combine touchscreen and dial controls for diagnostics, GPS navigation, and secure comms, all backed by a global logistics network for rapid field support.
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

export default TacticalVehiclesBody;