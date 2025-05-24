import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const CBRNBody = () => {
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
            className='md:block hidden flex-1 bg-[url(/img/CBRNBody.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>CBRN & EOD Bomb Detection</h2>
            <h3 className='h3 mb-4 font-aller-display'>
            Detect Chemical-to-Explosive Threats Instantly
            </h3>
            <p className='mb-6 font-aller-display'>
            Our advanced detection system leverages cutting-edge sensor fusion and machine-learning algorithms to pinpoint chemical, biological, radiological, nuclear, and explosive hazards in seconds. Compact and ruggedized for field deployment, it integrates real-time data analytics with intuitive user interfaces—enabling operators to make informed decisions under the most demanding conditions.
            </p>
            <p className='mb-6 font-aller-display'>
            Designed for seamless integration with existing EOD workflows, our solution minimizes false alarms while maximizing detection range and accuracy. Automated alerting, secure data logging, and remote connectivity ensure that critical threat information is communicated instantly to command centers and response teams, enhancing both situational awareness and personnel safety.
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

export default CBRNBody;