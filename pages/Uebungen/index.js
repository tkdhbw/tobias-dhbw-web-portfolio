// components
import TestimonialSlider from '../../components/TestimonialSlider';
import TestimonialSlider2 from '../../components/TestimonialSlider2';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Uebungen = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0'
        >
          Übungen <span className='text-accent'> der Vorlesungen.</span>
          <br />
          <br />
        </motion.h2>

        {/* slider */}
        
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0'
        >
           Semester 3
        </motion.h2>


        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider />
        </motion.div>

        <br />
        <br />

        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0'
        >
           Semester 4
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider2 />
        </motion.div>
      </div>
    </div>
  );
};

export default Uebungen;
