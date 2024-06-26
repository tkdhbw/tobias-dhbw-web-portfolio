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
    title: 'Vorlesung 1',
    description: 'Netzwerkkommunikation und serverseitige Technologien.',
    link: "/Summary2_1",
  },
  {
    icon: <RxCrop />,
    title: 'Vorlesung 2',
    description: 'Netzwerkprogrammierung und Threads Teil 1.',
    link: "/Summary2_2",
  },
  {
    icon: <RxCrop />,
    title: 'Vorlesung 3',
    description: 'Netzwerkprogrammierung und Threads Teil 2.',
    link: "/Summary2_3",
  },
  {
    icon: <RxCrop />,
    title: 'Vorlesung 4',
    description: 'Netzwerkprogrammierung und Threads.',
    link: "/Summary2_4",
  },
  {
    icon: <RxCrop />,
    title: 'Vorlesung 5',
    description: 'PHP: Personalisierte Webanwendungen',
    link: "/Summary2_5",
  }
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
