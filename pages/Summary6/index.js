// components   `}
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Change to your chosen theme
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
    useEffect(() => {
        Prism.highlightAll();
      }, []);
  return (
    <div className='h-full bg-primary/30 py-32'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0 text-center'
        >
          Vorlesung <span className='text-accent'> 6</span><br />
          JavaScript <span className='text-accent'>jQuery</span> & <span className='text-accent'>Events</span> <br />
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
                
                <h1 class="text-3xl font-bold">Event-Behandlung in JavaScript</h1>

                <p class="text-lg leading-relaxed">In JavaScript ermöglicht die Event-Behandlung die Reaktion auf Benutzeraktionen wie Klicks, Tastatureingaben, Mausbewegungen oder das Laden von Webseiten. Jedes dieser Ereignisse kann mit einem Event-Listener abgefangen und verarbeitet werden.</p>


                <h2 class="text-2xl font-semibold mt-4">Grundlagen</h2>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Event-Listener</span>Eine Funktion, die auf ein spezifisches Event (Ereignis) wartet und darauf reagiert.</li>
                    <li><span className='text-accent'>Event-Objekt:</span>Enthält Details zum ausgelösten Ereignis, wie den Event-Typ und das Ziel des Events.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Event-Listener hinzufügen</h3>

                <p class="text-lg leading-relaxed">Es gibt mehrere Wege, um Event-Listener in JavaScript hinzuzufügen:</p>

                <h4 class="text-lg font-semibold mt-4">HTML-Attribut</h4>
                <pre><code className="language-html">
                    {`
<button onclick="alert('Button geklickt!')">Klick mich</button>
`}
                </code></pre>
                <h4 class="text-lg font-semibold mt-4">DOM-Element-Property</h4>
                <pre><code className="language-javascript">
                    {`
const button = document.getElementById('meinButton');
button.onclick = function() {
  alert('Button geklickt!');
};
                    `}
                </code></pre>
                <h4 class="text-lg font-semibold mt-4">addEventListener-Methode</h4>
                <pre><code className="language-javascript">
                    {`
const button = document.getElementById('meinButton');
button.addEventListener('click', function() {
  alert('Button geklickt!');
});
                    `}
                </code></pre>




                <h2 class="text-2xl font-semibold mt-4">Beispiele:</h2>

                <p class="text-lg leading-relaxed">Klick-Event</p>
                <pre><code className="language-javascript">
{`
document.getElementById('meinButton').addEventListener('click', function() {
    console.log('Button wurde geklickt!');
  });
  `}
                </code></pre>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Elementauswahl: </span>document.getElementById('meinButton') wählt das HTML-Element mit der ID meinButton aus</li>
                    <li><span className='text-accent'>Event-Listener hinzufügen: </span>.addEventListener('click', function() {`{...}`}) fügt einen Event-Listener hinzu, der auf Klick-Events reagiert.</li>
                    <li><span className='text-accent'>Anonyme Funktion: </span>Die Funktion, die als zweiter Parameter übergeben wird, wird ausgeführt, sobald das Klick-Event auftritt.</li>
                    <li><span className='text-accent'>Aktion: </span>In der Funktion wird console.log('Button wurde geklickt!') aufgerufen. Dies zeigt eine Nachricht in der Konsole des Browsers an, sobald der Button geklickt wird.</li>
                </ul>



                <p class="text-lg leading-relaxed">Mausbewegungs-Event</p>
                <pre><code className="language-javascript">
{`
document.addEventListener('mousemove', function(e) {
    console.log("Mausposition: X="$"{e.clientX}, Y="$"{e.clientY}");
  });
  `}
                </code></pre>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Globales Event: </span>Hier wird der Event-Listener an das gesamte Dokument (document) gebunden.</li>
                    <li><span className='text-accent'>Event-Objekt:</span>Das e in der Funktion (function(e) {`{...}`}) ist das Event-Objekt, das Details zum ausgelösten Event enthält.</li>
                    <li><span className='text-accent'>Mausposition:</span>e.clientX und e.clientY geben die X- und Y-Koordinaten der Mausposition relativ zum sichtbaren Bereich des Browsers an.</li>
                    <li><span className='text-accent'>Aktion:</span>Bei jeder Bewegung der Maus innerhalb des Dokuments wird die aktuelle Position in der Konsole ausgegeben.</li>
                </ul>



                <p class="text-lg leading-relaxed">Formular-Submit-Event</p>
                <pre><code className="language-javascript">
{`
document.getElementById('meinFormular').addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindert das Neuladen der Seite
    console.log('Formular gesendet!');
  });
  `}
                </code></pre>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Formularauswahl: </span>Ein Event-Listener wird an ein Formularelement mit der ID meinFormular gebunden.</li>
                    <li><span className='text-accent'>Verhindern des Standardverhaltens: </span>e.preventDefault() verhindert das standardmäßige Verhalten des Browsers beim Absenden eines Formulars, nämlich das Neuladen der Seite.</li>
                    <li><span className='text-accent'>Aktion</span>Wenn das Formular abgeschickt wird, erscheint statt des Neuladens der Seite die Nachricht „Formular gesendet!“ in der Konsole.</li>
                </ul>



                <p class="text-lg leading-relaxed">Tastatureingabe-Event</p>
                <pre><code className="language-javascript">
{`
document.addEventListener('keydown', function(e) {
    console.log("Gedrückte Taste: "$"{e.key}");
  });
  `}
                </code></pre>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Globales Event: </span>Dieser Event-Listener wird für das gesamte Dokument registriert und reagiert auf Tastendrücke.</li>
                    <li><span className='text-accent'>Event-Objekt: </span>Das e in function(e) stellt das Event-Objekt dar, das Informationen über das Tastendruck-Event enthält.</li>
                    <li><span className='text-accent'>Gedrückte Taste: </span>e.key gibt an, welche Taste gedrückt wurde.</li>
                    <li><span className='text-accent'>Aktion: </span>Bei jedem Tastendruck wird die gedrückte Taste in der Browser-Konsole angezeigt.</li>
                </ul>

                <h1 class="text-3xl font-bold">Event-Behandlung im Window-Objekt und Interaktive Navigation</h1>
                <p class="text-lg leading-relaxed">Das Window-Objekt in JavaScript ist ein zentraler Bestandteil für die Interaktion mit dem Browserfenster und bietet vielfältige Möglichkeiten zur Handhabung von Events und interaktiver Navigation.</p>
                <h2 class="text-2xl font-semibold mt-4">Grundlagen</h2>
                <p class="text-lg leading-relaxed">window.eventMethod(function): Ein gängiges Muster, um Event-Listener am Window-Objekt zu registrieren. Hierbei ist `eventMethod` die Methode für ein spezifisches Event, und `function` ist der Event-Handler.</p>
                <h3 class="text-xl font-semibold mt-4">Event-Listener hinzufügen</h3>
                <p class="text-lg leading-relaxed">Die Handhabung von Events auf dem Window-Objekt umfasst typischerweise folgende Schritte:</p>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Globales Objekt: </span>Das Window-Objekt ist global verfügbar und erfordert keine spezielle Auswahl.</li>
                    <li><span className='text-accent'>Event-Listener hinzufügen: </span>Verwende window.eventMethod(function), um auf globale Events wie das Laden der Seite, Größenänderungen des Fensters und Tastaturereignisse zu reagieren.</li>
                </ul>
                <h2 class="text-2xl font-semibold mt-4">Beispiele:</h2>
                <p class="text-lg leading-relaxed">Seitenlade-Event</p>
                <pre><code className="language-javascript">
                {
                `window.onload = function() {
                    document.title = 'Seite geladen';
                };
                `}
                </code></pre>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>window.onload: </span>Wird ausgelöst, wenn die gesamte Seite geladen ist. Dieses Event eignet sich, um Initialisierungen durchzuführen.</li>
                    <li>Aktion: Ändert den Titel des Dokuments, nachdem die Seite vollständig geladen wurde.</li>
                </ul>
                <p class="text-lg leading-relaxed">Fenstergrößenänderungs-Event</p>
                <pre><code className="language-javascript">
                {
                `window.onresize = function() {
                    document.body.style.backgroundColor = 'lightblue';
                };
                `}
                </code></pre>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>window.onresize: </span>Wird ausgelöst, wenn die Größe des Browserfensters geändert wird. Dies kann genutzt werden, um das Layout dynamisch anzupassen.</li>
                    <li>Aktion: Ändert die Hintergrundfarbe des Body-Elements, wenn die Größe des Fensters geändert wird.</li>
                </ul>
                <p class="text-lg leading-relaxed">Neues Browserfenster öffnen</p>
                <pre><code className="language-javascript">
                {
                `window.onclick = function() {
                    window.open('https://www.example.com', 'newWindow', 'width=800,height=600');
                };
                `}
                </code></pre>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>window.onclick: </span>Reagiert auf Mausklicks im Browserfenster.</li>
                    <li>Aktion: Öffnet ein neues Browserfenster mit einer bestimmten URL und definierten Abmessungen, wenn irgendwo im Fenster geklickt wird.</li>
                </ul>
                <p class="text-lg leading-relaxed">Tastatureingabe-Event</p>
                <pre><code className="language-javascript">
                {
                `window.onkeydown = function(e) {
                    if (e.key === 'Enter') {
                    alert('Enter-Taste gedrückt');
                    }
                };
                `}
                </code></pre>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>window.onkeydown: </span>Wird ausgelöst, wenn eine Taste gedrückt wird.</li>
                    <li><span className='text-accent'>e.key: </span>Überprüft, welche Taste gedrückt wurde.</li>
                    <li>Aktion: Zeigt ein Alert-Fenster an, wenn die Enter-Taste gedrückt wird.</li>
                </ul>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
