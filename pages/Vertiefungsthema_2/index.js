import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Change to your chosen theme
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Image from 'next/image';



const Vertiefungsthema2 = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className='bg-primary/30 py-36 flex flex-col items-center'> {/* Removed h-full here */}
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row justify-center items-center'>
            {/* text */}
            <div className='text-center flex flex-col mbw xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-12 mx-auto'
              >
                Vertiefungsthema<span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto'
              >
                Als Vertiefungsthema habe ich Web-Scraping gewählt.
              </motion.p>
            </div>
          </div>
        </div>

        {/* New Content Section */}
        {/* Repeat this section for each new content block */}
        <div className='py-36'> {/* Removed h-full here */}
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-col gap-x-8'>
  

                <div className='pt-10'>
                  <Image src="/LionsEmailAdventskalender.png" width={1200} height={200} alt='' />
                </div>
              </div>
            </div>
            </div>
          </div>
      
      <Bulb />
    </>
  );
};

export default Vertiefungsthema2;
