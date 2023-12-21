// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <Link
        href={'/work'}
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-cover bg-center bg-no-repeat group rounded-full'
      >
        <div className='flex items-center justify-center text-lg font-bold animate-pulse duration-75 group-hover:translate-x-2 transition-all'>
          <span className='text-lg font-bold mr-2'>
            Let&apos;s explore
          </span>
          <HiArrowRight className='text-4xl group-hover:translate-x-2 transition-all duration-300' />
        </div>
      </Link>
    </div>
  );
};




export default ProjectsBtn;

