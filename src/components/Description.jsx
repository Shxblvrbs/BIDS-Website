import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
import Button from './Button';

const Description = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto mb-40'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-[url(/img/description.png)] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-bids-red font-venus-rising'>About Us</h2>
            <h3 className='h3 mb-4 font-aller-display'>
              Your Business Deserves Better
            </h3>
            <p className='mb-6 font-aller-display'>
              We're here to make your business look good online—simple as that. 
              Whether it's a fresh website, sharp marketing, or some cool designs,  
              we do the work so you can focus on what you do best. No gimmicks, just 
              honest work that gets your business noticed.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-aller-display text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className='font-aller-display text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-aller-display text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                  +
                </div>
                <div className='font-aller-display text-sm tracking-[2px]'>
                  Successful <br />
                  Campaigns
                </div>
              </div>
              <div>
                <div className='text-[40px] font-aller-display text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  %
                </div>
                <div className='font-aller-display text-sm tracking-[2px]'>
                  Satisfaction <br />
                  Goal
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>

            <a
            href="/contact"
            className="about__button font-venus-rising inline-block mt-10 px-8 py-3 rounded-full text-white font-semibold bg-bids-red hover:bg-bids-gray transition duration-300"
            >
            Contact Us
            </a>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Description;