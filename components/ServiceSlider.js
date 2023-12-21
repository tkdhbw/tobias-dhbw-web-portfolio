// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxArchive,
  RxBadge,
  RxTarget,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'HTML',
    description: 'Einführung in HTML. Die erste Webseite.',
    link: "/SumHTML",
  },
  {
    icon: <RxPencil2 />,
    title: 'Vorlesung 1',
    description: 'Einführung in die Web-Anwendungen.',
    link: "/Summary1",
  },
  {
    icon: <RxDesktop />,
    title: 'Vorlesung 2',
    description: 'Einführung in JavaScript Grundlagen',
    link: "/Summary2",
  },
  {
    icon: <RxReader />,
    title: 'Vorlesung 3',
    description: 'JavaScript Grundlagen: Strings und Eingaben',
    link: "/Summary3",
  },
  {
    icon: <RxRocket />,
    title: 'Vorlesung 4',
    description: 'JavaScript Grundlagen: Objekte',
    link: "/Summary4",
  },
  {
    icon: <RxArchive />,
    title: 'Vorlesung 5',
    description: 'JavaScript Document Object Model',
    link: "/Summary5",
  },
  {
    icon: <RxBadge />,
    title: 'Vorlesung 6',
    description: 'Window-Objekt und interaktive Navigation',
    link: "/Summary6",
  },
  {
    icon: <RxTarget />,
    title: 'Vorlesung 7',
    description: 'Einführung und Grundlagen von Ajax',
    link: "/Summary7",
  },

];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <a href={item.link}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
