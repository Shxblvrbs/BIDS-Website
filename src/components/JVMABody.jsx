import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const IBDBody = () => {
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
            className='md:block hidden flex-1 bg-[url(/img/JVMABody.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h3 text-bids-red font-venus-rising'>Joint Ventures, Mergers & Acquisitions</h2>
            <h3 className='h3 mb-4 font-aller-display'>
            Unlock Growth Through Strategic Alliances and Transformative Deals
            </h3>
            <p className='mb-6 font-aller-display'>
            Our end-to-end deal advisory covers target screening, rigorous due diligence, valuation modeling, and negotiations—ensuring each partnership or acquisition aligns with your strategic goals and delivers maximum ROI. With a global network and sector-specific insights, we pinpoint opportunities that drive competitive advantage.
            </p>
            <p className='mb-6 font-aller-display'>
            Post-transaction, we guide seamless integration through tailored governance frameworks, performance metrics, and change-management plans. By harmonizing operations, cultures, and compliance standards, we help you realize synergies faster and sustain growth in your newly combined enterprise.
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

export default IBDBody;