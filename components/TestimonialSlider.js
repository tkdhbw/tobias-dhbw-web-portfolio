// testimonial slider data
export const testimonialSlider = [
  {
    name: 'Übung 1',
    category: 'Akkordeon',
    download_name: "Übung 1.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung1.html.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung1.html",
    description:
      'Schreiben Sie ein Programm, das mit Hilfe geschachtelter Schleifen ein *-Dreieck in HTML ausgibt. Die Benutzerin soll vorher die Anzahl der Zeilen eingeben können. Machen Sie die Ausgabe zusätzlich auf der Console.',
  },
  {
    name: 'Übung 2',
    category: 'Pfeilfunktionen',
    download_name: "Übung 2.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung2.html.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung2.html",
    description:
      'Schreiben Sie ein Programm, welches die "B"s in einem String zählt und eine Pfeilfunktion welche einen beliegigen Buchstaben zählt.',
  },
  {
    name: 'Übung 3',
    category: 'Objektkonstruktoren',
    download_name: "Übung 3.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung3.html.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung3.html",
    description:
      'Schreiben Sie einen Konstruktor für die Kontakte-Objekte, welche private Eigenschaften und öffentliche Methoden haben sollen.',
  },
  {
    name: 'Übung 4',
    category: 'Funktionen und Formulare',
    download_name: "Übung 4.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung4.html.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung4.html",
    description:
      'Schreiben Sie einen Währungsumrechner, der zwischen 2 Währungen umrechnet, z.B. $ und €.',
  },
  {
    name: 'Übung 5',
    category: 'PHP',
    download_name: "Übung 5.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung5.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung5/boards.html",
    description:
      'Anpassung einer Webseite mit PHP, damit die Seite nicht neu geladen werden muss.',
  },
  {
    name: 'Übung 6',
    category: 'Fenster erzeugen',
    download_name: "Übung 6.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung6.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung7/10.1.html",
    description:
      'Schreiben Sie ein JavaScript / jQuery Programm welches sich genau über das aktuelle BrowserFenster ein neues (gleich großes) Fenster mit der DHBW-Website erzeugt.',
  },
  {
    name: 'Übung 7',
    category: 'jQuery Funktionen',
    download_name: "Übung 7.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Uebung7.html.zip",
    link_external: "https://tkarsch.com/Uebungen/Uebung8.html",
    description:
      'Erstellen Sie mithilfe vordefinierter Funktionen ein Akkordeon.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';
import { motion } from 'framer-motion';

const fadeIn = (direction = 'up', duration = 2.0) => {
  return {
    hidden: {
      opacity: 0.5,
      scale: 0.95 // slightly smaller
    },
    show: {
      opacity: 1,
      scale: 1.4, // normal size
      transition: {
        duration,
        repeat: Infinity, // repeat the animation infinitely
        repeatType: "reverse", // reverse the animation to create a pulse
        ease: "easeInOut"
      }
    }
  };
};


const TestimonialSlider = () => {
  const openWindow = (url) => {
    const windowFeatures = `directories=yes,menubar=yes,location=no,resizable=yes,scrollbars=yes,status=yes,width=${1000},height=${1000}`;
    window.open(url, "_blank", windowFeatures);
  };
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((uebung, index) => {
        return (
          <SwiperSlide key={index}>

            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <motion.div
              variants={fadeIn('down', 2.0)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
                <div className='flex flex-col justify-center text-center'>
                    <div className='text-lg'>{uebung.name}</div>
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>
                      {uebung.category}
                    </div>
                </div>
                </motion.div>
              </div>
              {/* quote & description */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                <div className='xl:text-lg text-center md:text-left'>
                  {uebung.description}
                  <div className='pt-5'>
                    <button onClick={() => openWindow(uebung.link_external)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live Preview
                      </span>
                    </button>
                    <a href={uebung.link_download} download={uebung.download_name} className='btn btn-primary'>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Download
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
