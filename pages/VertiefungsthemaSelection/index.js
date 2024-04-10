// components
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Link from 'next/link'; // Importing Link from next/link

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
          className='text-center'
        >
          <Link href="/Vertiefungsthema" passHref>
            <a className='text-lg font-medium bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent-dark inline-block'>
              Vertiefungsthema 1
            </a>
          </Link>
          <p className='mt-2 max-w-xs'>
            Semester 3
          </p>
        </motion.div>

        {/* Vertiefungsthema 2 */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          animate='show'
          className='text-center'
        >
          <Link href="/Vertiefungsthema_2" passHref>
            <a className='text-lg font-medium bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent-dark inline-block'>
              Vertiefungsthema 2
            </a>
          </Link>
          <p className='mt-2 max-w-xs'>
            Semester 4
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vertiefungsthema;
