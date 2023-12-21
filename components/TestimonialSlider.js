// testimonial slider data
export const testimonialSlider = [
  {
    name: 'Übung 1',
    category: 'Akkordeon',
    link_internal: "",
    link_external: "https://tkarsch.com/Uebungen/Uebung1.html",
    description:
      'Schreiben Sie ein Programm, das mit Hilfe geschachtelter Schleifen ein *-Dreieck in HTML ausgibt. Die Benutzerin soll vorher die Anzahl der Zeilen eingeben können. Machen Sie die Ausgabe zusätzlich auf der Console.',
  },
  {
    name: 'Übung 2',
    category: 'Pfeilfunktionen',
    link_internal: "",
    link_external: "https://tkarsch.com/Uebungen/Uebung2.html",
    description:
      'Schreiben Sie ein Programm, welches die "B"s in einem String zählt und eine Pfeilfunktion welche einen beliegigen Buchstaben zählt.',
  },
  {
    name: 'Übung 3',
    category: 'Objektkonstruktoren',
    link_internal: "",
    link_external: "https://tkarsch.com/Uebungen/Uebung3.html",
    description:
      'Schreiben Sie einen Konstruktor für die Kontakte-Objekte, welche private Eigenschaften und öffentliche Methoden haben sollen.',
  },
  {
    name: 'Übung 4',
    category: 'Funktionen und Formulare',
    link_internal: "",
    link_external: "https://tkarsch.com/Uebungen/Uebung4.html",
    description:
      'Schreiben Sie einen Währungsumrechner, der zwischen 2 Währungen umrechnet, z.B. $ und €.',
  },
  {
    name: 'Übung 5',
    category: 'PHP',
    link_internal: "",
    link_external: "https://tkarsch.com/Uebungen/Uebung5/boards.html",
    description:
      'Anpassung einer Webseite mit PHP, damit die Seite nicht neu geladen werden muss.',
  },
  {
    name: 'Übung 6',
    category: 'Fenster erzeugen',
    link_internal: "",
    link_external: "https://tkarsch.com/Uebungen/Uebung7/10.1.html",
    description:
      'Schreiben Sie ein JavaScript / jQuery Programm welches sich genau über das aktuelle BrowserFenster ein neues (gleich großes) Fenster mit der DHBW-Website erzeugt.',
  },
  {
    name: 'Übung 7',
    category: 'jQuery Funktionen',
    link_internal: "",
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
                <div className='flex flex-col justify-center text-center' onClick={() => openWindow(uebung.link_external)}>
                  <div className='text-lg'>{uebung.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {uebung.category}
                  </div>
                </div>
              </div>
              {/* quote & description */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                <div className='xl:text-lg text-center md:text-left'>
                  {uebung.description}
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
