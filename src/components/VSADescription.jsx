import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const VSADescription = () => {
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
            className='md:block hidden flex-1 bg-[url(/img/VSAdescription.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>The VIPRE-H3000</h2>
            <h3 className='h3 mb-4 font-aller-display'>
              Principle of Voice Stress Analysis
            </h3>
            <p className='mb-6 font-aller-display'>
            Everyone has experienced emotional stress related to deception at some point in their lives. This emotional stress, stemming from the fear of being discovered, can significantly impact the body's sympathetic nervous system (SNS), transmitting this emotional strain through the vagus nerve to the vocal cords.
            </p>
            <p className='mb-6 font-aller-display'>
            Numerous scientific and medical studies have documented the effects of emotional stress on the human voice, demonstrating that these stress indicators are observable and can be recorded. A trained and experienced voice stress examiner can analyze this recorded stress to determine whether the individual being questioned is being honest or deceptive in their responses.
            </p>
            
            <div className='flex gap-x-8 items-center'>

            <a
            href="https://www.viprevsa.com"
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

export default VSADescription;