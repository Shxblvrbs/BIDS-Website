import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const UnmannedSystemsBody = () => {
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
            className='md:block hidden flex-1 bg-[url(/img/UnmannedSystemsBody.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>Unmanned Systems</h2>
            <h3 className='h3 mb-4 font-aller-display'>
            Autonomy in Flight
            </h3>
            <p className='mb-6 font-aller-display'>
            Equipped with advanced sensors, intelligent navigation, and robust communications, our unmanned platforms deliver persistent, scalable coverage for surveillance, inspection, and logistics. Each vehicle is engineered for rapid deployment, energy-efficient operation, and seamless integration with existing command-and-control systems.
            </p>
            <p className='mb-6 font-aller-display'>
            Integrated mission-planning and data-fusion software synchronizes multi-domain assets, reducing operator workload while maximizing situational awareness. Whether powering routine infrastructure inspections, conducting search-and-rescue, or supporting defense missions, our unmanned systems offer unmatched reliability, safety, and cost-effectiveness.
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

export default UnmannedSystemsBody;