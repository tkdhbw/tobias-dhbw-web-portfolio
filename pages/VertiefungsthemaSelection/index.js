import Link from 'next/link'; // Importing Link from next/link
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.05, // Slightly enlarge the button on hover
    transition: {
      duration: 0.2, // Speed of the animation
      ease: "easeInOut",
    },
  },
  initial: {
    scale: 1, // Initial scale
  }
};

const Vertiefungsthema = () => {
  return (
    <div className='h-screen bg-primary/30 flex flex-col justify-center items-center'>
      {/* Title */}
      <motion.div
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
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          className='bg-[rgba(65,47,123,0.15)] w-64 h-32 rounded-lg p-6 flex flex-col items-center justify-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 text-center'
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
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          className='bg-[rgba(65,47,123,0.15)] w-64 h-32 rounded-lg p-6 flex flex-col items-center justify-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 text-center'
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
