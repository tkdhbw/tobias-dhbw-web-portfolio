import Link from 'next/link'; // Importing Link from next/link
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Vertiefungsthema = () => {
  return (
    <div className='h-screen bg-primary/30 flex flex-col justify-center items-center'>
      {/* Title */}
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        animate='show'
        className='text-center'
      >
        <h1 className='text-4xl font-bold mb-6'>Vertiefungsthema</h1>
      </motion.div>

      {/* Buttons with descriptions */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
        {/* Vertiefungsthema 1 */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          className='bg-[rgba(65,47,123,0.15)] h-auto w-full max-w-[300px] rounded-lg p-6 flex flex-col items-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 text-center'
        >
          <Link href="/Vertiefungsthema">
            <a className='text-xl font-medium text-accent'>
              Vertiefungsthema 1
            </a>
          </Link>
          <p className='mt-2'>
            Semester 3
          </p>
        </motion.div>

        {/* Vertiefungsthema 2 */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          animate='show'
          className='bg-[rgba(65,47,123,0.15)] h-auto w-full max-w-[300px] rounded-lg p-6 flex flex-col items-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 text-center'
        >
          <Link href="/Vertiefungsthema_2">
            <a className='text-xl font-medium text-accent'>
              Vertiefungsthema 2
            </a>
          </Link>
          <p className='mt-2'>
            Semester 4
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vertiefungsthema;
