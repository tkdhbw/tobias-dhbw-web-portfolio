// testimonial slider data
export const testimonialSlider2 = [
  {
    name: 'Übung 1',
    category: 'Objekte Speichern',
    download_name: "Übung 1.zip",
    link_external: "",
    link_download: "https://tkarsch.com/Uebungen/Download/Semester2/ObjekteSpeichern.zip",
    description:
      'Schreiben Sie ein Java Programm, welches Objekte in einer Datei speichert und wieder ausliest.',
  },
  {
    name: 'Übung 2',
    category: 'Dateien Schreiben & Lesen',
    download_name: "Übung 2.zip",
    link_external: "",
    link_download: "https://tkarsch.com/Uebungen/Download/Semester2/TextDateiSchreiben.zip",
    description:
      'Legen Sie sich eine Textdatei "name".txt an mit etwa 5-10 Zeilen Text. Schreiben Sie ein Java-Programm, welches diese Datei liest und eine Kopie der Datei in das selbe Verzeichnis schreibt. schreibt.',
  },
  {
    name: 'Übung 3',
    category: 'Tipp des Tages Server',
    download_name: "Übung 3.zip",
    link_external: "",
    link_download: "https://tkarsch.com/Uebungen/Download/Semester2/TTS.zip",
    description:
      'Schreiben Sie ein Java-Programm, welches eine Server erstellt und eine Verbindung zu einem Client aufbaut. Der Server soll dem Client mehrere Tipps auf einmal schicken.',
  },
  {
    name: 'Übung 4',
    category: 'Einfacher Chat Client',
    download_name: "Übung 4.zip",
    link_external: "",
    link_download: "https://tkarsch.com/Uebungen/Download/Semester2/ChatClient.zip",
    description:
      'Schreiben Sie ein Java-Programm, welches einen Chat-Client erstellt. Der Client soll sich mit einem Server verbinden und Nachrichten senden und empfangen können.',
  },
  {
    name: 'Übung 5',
    category: 'PHP Meldung',
    download_name: "Übung 5.zip",
    link_external: "",
    link_download: "https://tkarsch.com/Uebungen/Download/Semester2/PhpMeldung.zip",
    description:
      'Ein Programm, welches mithilfe eines PHP Skripts mit einer SQL Datenbank kommuniziert und die Eingegebenen Details des Forms in der Datenbank speichert.',
  },
  {
    name: 'Übung 6',
    category: 'PHP Login & MySQL',
    download_name: "Übung 3.zip",
    link_download: "https://tkarsch.com/Uebungen/Download/Semester2/PhpLogin.zip",
    link_external: "https://mr202a.com",
    description:
      'PHP Webanwendung mit Login und einer SQL Datenbank für die Speicherung der Benutzerdaten.',
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


const TestimonialSlider2 = () => {
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
      {testimonialSlider2.map((uebung, index) => {
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
                    {uebung.link_external && (
                      <button onClick={() => openWindow(uebung.link_external)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Live Preview
                        </span>
                      </button>
                    )}
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

export default TestimonialSlider2;
