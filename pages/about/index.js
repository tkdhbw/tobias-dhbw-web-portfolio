import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiVisualstudiocode,
} from 'react-icons/si';

const iconTypes = {
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaJs: FaJs,
  FaReact: FaReact,
  FaPython: FaPython,
  SiVisualstudiocode: SiVisualstudiocode,
};

//  about data
export const aboutData = [
  {
    title: 'Website Code',
    info: [
      {
        text: "To bulid this website I used the following languages and editors:",
        title: 'Used Languages:',
        icons: ['FaHtml5', 'FaCss3', 'FaJs', 'FaReact', 'FaPython'],
      },
      {
        title: 'Used Editor:',
        icons: [`SiVisualstudiocode`],
      }
    ],
  },
  {
    title: 'Inspiration',
    info: [
      {
        text: "As I am a not very creative person, I used the following websites for inspiration:",
        title: 'This website was enspired by:',
        stage: 'https://www.poppr.be/en',
      },
      {
        title: 'Furthermore I the following website for images:',
        stage: 'Unsplash.com',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Some information about this<span className='text-accent'> website</span> 
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            In the tabs on the right you can find some information about this website. What tools were used to create the website and where I got my inspiration from.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5} /> 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Used Languages
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Scrapped attempts
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Houres Spend
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[390px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* Tab Description */}
                  <div className='font-light mb-2 md:mb-0 '>{item.text}</div>      
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* Tab Description */}
                  {/* title below description*/}
                  <div className='font-light mb-2 md:mb-0 '>{item.title}</div>
                  {/* text-descrption */}
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons.map((iconName, index) => {
                        const IconComponent = iconTypes[iconName];
                      return <div key={index} className='text-2xl text-white'><IconComponent /></div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
