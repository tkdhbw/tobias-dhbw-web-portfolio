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
          Vorlesung <span className='text-accent'> 1</span> <br />
          Web- <span className='text-accent'>Anwendungen</span>

        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
                
                <p class="text-lg leading-relaxed">Eine Webanwendung ist eine Software oder ein Programm, das über einen Webbrowser zugänglich ist und mit Hilfe von Webtechnologien wie HTML, CSS und JavaScript entwickelt wird. Im Gegensatz zu herkömmlichen Desktop-Anwendungen, die auf dem lokalen Computer installiert werden müssen, werden Webanwendungen auf einem Server gehostet und über das Internet bereitgestellt. Dies ermöglicht Benutzern den Zugriff von jedem Gerät mit Internetverbindung und einem Webbrowser.</p>

                <h2 class="text-2xl font-semibold mt-4">Kernkomponenten von Webanwendungen</h2>
                <h3 class="text-xl font-semibold mt-4">Frontend (Client-Side)</h3>
                <p class="text-lg leading-relaxed">Technologien: Das Frontend einer Webanwendung ist der Teil, den der Benutzer sieht und mit dem er interagiert. Es wird hauptsächlich mit HTML, CSS und JavaScript erstellt.</p>
                <p class="text-lg leading-relaxed">Frameworks und Bibliotheken: Beliebte JavaScript-Frameworks und -Bibliotheken wie React, Angular und Vue.js werden oft verwendet, um reichhaltige und interaktive Benutzeroberflächen zu erstellen.</p>
                <p class="text-lg leading-relaxed">Responsive Design: Da Webanwendungen auf verschiedenen Geräten und Bildschirmgrößen funktionieren müssen, ist ein responsives Design, oft erreicht durch CSS und spezielle Frameworks wie Bootstrap, entscheidend.</p>

                <h3 class="text-xl font-semibold mt-4">Backend (Server-Side)</h3>
                <p class="text-lg leading-relaxed">Server: Der Server ist verantwortlich für die Geschäftslogik, Datenverarbeitung und -speicherung. Er verarbeitet Anfragen vom Frontend, führt Operationen aus und sendet die Ergebnisse zurück.</p>
                <p class="text-lg leading-relaxed">Programmiersprachen: Für die Server-Entwicklung können verschiedene Sprachen wie JavaScript (Node.js), Python (Django, Flask), Ruby (Ruby on Rails), PHP, Java (Spring) und viele andere verwendet werden.</p>
                <p class="text-lg leading-relaxed">Datenbanken: Die meisten Webanwendungen benötigen eine Datenbank zur Speicherung von Daten. Datenbanken können SQL-basiert (wie MySQL, PostgreSQL) oder NoSQL-basiert (wie MongoDB) sein.</p>

                <h3 class="text-xl font-semibold mt-4">Kommunikation zwischen Client und Server</h3>
                <p class="text-lg leading-relaxed">HTTP-Anfragen: Die Kommunikation zwischen Client (Browser) und Server erfolgt über das HTTP/HTTPS-Protokoll.</p>
                <p class="text-lg leading-relaxed">APIs: Oftmals wird eine RESTful API oder GraphQL genutzt, um Daten zwischen Frontend und Backend auszutauschen.</p>
                <p class="text-lg leading-relaxed">WebSockets: Für Echtzeit-Kommunikation können WebSockets verwendet werden, die eine dauerhafte Verbindung zwischen Client und Server ermöglichen.</p>

                <h2 class="text-2xl font-semibold mt-4">Beispiele für Webanwendungen</h2>
                <p class="text-lg leading-relaxed">E-Commerce-Plattformen (z.B. Amazon, eBay): Diese ermöglichen Benutzern, Produkte zu durchsuchen, in den Warenkorb zu legen und online zu kaufen.</p>
                <p class="text-lg leading-relaxed">Soziale Netzwerke (z.B. Facebook, Twitter): Sie bieten Plattformen für soziale Interaktionen, Teilen von Inhalten und Netzwerkbildung.</p>
                <p class="text-lg leading-relaxed">E-Mail-Dienste (z.B. Gmail, Outlook): Web-basierte E-Mail-Clients ermöglichen das Senden, Empfangen und Verwalten von E-Mails direkt im Browser.</p>
                <p class="text-lg leading-relaxed">Projektmanagement-Tools (z.B. Trello, Asana): Diese Anwendungen helfen Teams, Projekte zu organisieren, Aufgaben zuzuweisen und den Fortschritt zu verfolgen.</p>
                <p class="text-lg leading-relaxed">Cloud-Speicher-Dienste (z.B. Google Drive, Dropbox): Sie ermöglichen das Speichern, Teilen und Bearbeiten von Dateien in der Cloud.</p>

                <h2 class="text-2xl font-semibold mt-4">Vorteile von Webanwendungen</h2>
                <p class="text-lg leading-relaxed">Plattformunabhängigkeit: Sie sind über jeden modernen Webbrowser zugänglich, unabhängig vom Betriebssystem oder Gerät.</p>
                <p class="text-lg leading-relaxed">Keine Installation erforderlich: Benutzer müssen keine spezielle Software installieren oder aktualisieren.</p>
                <p class="text-lg leading-relaxed">Zentralisierte Daten: Da die Daten auf dem Server gespeichert werden, können sie von überall und von jedem Gerät aus sicher abgerufen werden.</p>
                <p class="text-lg leading-relaxed">Einfachere Wartung und Updates: Updates können schnell und einfach auf dem Server durchgeführt werden, ohne dass Benutzer beteiligt sind.</p>

                <h2 class="text-2xl font-semibold mt-4">Herausforderungen bei der Entwicklung von Webanwendungen</h2>
                <p class="text-lg leading-relaxed">Sicherheit: Webanwendungen sind oft Ziel von Sicherheitsbedrohungen, daher ist die Implementierung robuster Sicherheitsmaßnahmen unerlässlich.</p>
                <p class="text-lg leading-relaxed">Performance: Da Webanwendungen über das Internet laufen, können Netzwerklatenz und -geschwindigkeit die Performance beeinflussen.</p>
                <p class="text-lg leading-relaxed">Kompatibilität: Es muss sichergestellt werden, dass die Webanwendung in verschiedenen Browsern und auf unterschiedlichen Geräten korrekt funktioniert.</p>

                <br />
                <p class="text-lg leading-relaxed">Webanwendungen bieten eine flexible und zugängliche Lösung für eine Vielzahl von Anwendungen und haben die Art und Weise, wie wir Software nutzen, revolutioniert. Von einfachen Webseiten bis hin zu komplexen Unternehmensanwendungen bieten sie die Möglichkeit, Benutzern weltweit Dienste und Informationen effizient bereitzustellen.</p>

                <h1 class="text-3xl font-bold">Skriptsprachen</h1>

                <p class="text-lg leading-relaxed">Eine Skriptsprache ist eine Art Programmiersprache, die für das Schreiben von Skripten verwendet wird. Skripte sind Programme, die in der Regel für automatisierte Aufgaben verwendet werden und in einer Laufzeitumgebung ausgeführt werden. Im Kontext des Webdesigns und der Webentwicklung spielen Skriptsprachen eine zentrale Rolle.</p>

                <h2 class="text-2xl font-semibold mt-4">Was sind Skriptsprachen?</h2>
                <p class="text-lg leading-relaxed">Interpretiert, nicht kompiliert: Im Gegensatz zu kompilierten Sprachen wie C++ oder Java, die in Maschinencode übersetzt werden müssen, bevor sie ausgeführt werden, werden Skriptsprachen direkt vom Interpreter zur Laufzeit verarbeitet. Das bedeutet, dass Skripte in diesen Sprachen in einem interpretierten Umfeld (wie einem Webbrowser) direkt ausgeführt werden können.</p>
                <p class="text-lg leading-relaxed">Automatisierung und Aufgabenvereinfachung: Skriptsprachen werden häufig für Automatisierungsaufgaben, schnelle Entwicklung kleinerer Programme oder für spezifische Funktionen innerhalb größerer Anwendungen verwendet.</p>
                <p class="text-lg leading-relaxed">Dynamische Typisierung: Viele Skriptsprachen sind dynamisch typisiert, was bedeutet, dass Variablentypen zur Laufzeit bestimmt werden, was die Sprachen flexibel, aber auch anfälliger für Laufzeitfehler macht.</p>

                <h2 class="text-2xl font-semibold mt-4">Skriptsprachen im Webkontext</h2>
                <p class="text-lg leading-relaxed">Im Webkontext sind die bekanntesten Skriptsprachen JavaScript, PHP, Python (für serverseitige Skripte) und JavaScript (für clientseitige Skripte).</p>
                <br />
                <p class="text-lg leading-relaxed">JavaScript (Client-seitig): JavaScript ist die vorherrschende Sprache für clientseitige Skripte in Webbrowsern. Es ermöglicht interaktive Funktionen auf Webseiten, wie z.B. das Reagieren auf Benutzereingaben, das Ändern von HTML-Inhalten in Echtzeit und das Erstellen dynamischer Effekte.</p>
                <p class="text-lg leading-relaxed">PHP, Python, Ruby, Node.js (Server-seitig): Diese Sprachen werden auf dem Server ausgeführt und sind verantwortlich für die Back-End-Logik von Webanwendungen, Datenbankinteraktionen, Authentifizierung und vieles mehr.</p>

                <h2 class="text-2xl font-semibold mt-4">HTML und Skriptsprachen</h2>
                <p class="text-lg leading-relaxed">HTML selbst ist keine Skriptsprache, sondern eine Auszeichnungssprache (Markup Language), die zur Strukturierung und Präsentation von Inhalten im Web verwendet wird. HTML definiert, was auf einer Webseite angezeigt wird, während Skriptsprachen definieren, wie sich die Webseitenelemente verhalten.</p>
                <br />
                <p class="text-lg leading-relaxed">Integration von Skriptsprachen in HTML: Skriptsprachen wie JavaScript können in ein HTML-Dokument integriert werden, um dynamische und interaktive Webseiten zu erstellen. Dies geschieht meist über das {`<script>`}-Tag in HTML.</p>

                <h2 class="text-2xl font-semibold mt-4">Zweck von Skriptsprachen</h2>
                <p class="text-lg leading-relaxed">Interaktivität und Dynamik: Skriptsprachen ermöglichen es, Webseiten interaktiv und dynamisch zu gestalten. Zum Beispiel können Benutzerinteraktionen verarbeitet und darauf reagiert werden, ohne die Seite neu laden zu müssen.</p>
                <p class="text-lg leading-relaxed">Automatisierung von Aufgaben: Skriptsprachen werden häufig für automatisierte Prozesse wie das Ausfüllen von Formularen, Datenüberprüfungen, automatische Updates von Inhalten und mehr verwendet.</p>
                <p class="text-lg leading-relaxed">Serverseitige Logik: Auf dem Server ermöglichen Skriptsprachen das Verarbeiten von Benutzeranfragen, Interaktion mit Datenbanken und das Generieren dynamischer Inhalte.</p>

                <br />

                <p class="text-lg leading-relaxed">Zusammenfassend sind Skriptsprachen essenziell für die Entwicklung moderner, interaktiver und funktionaler Webseiten und Webanwendungen. Sie ergänzen HTML und CSS, indem sie Logik und Interaktivität hinzufügen, die über die reine Präsentation von Inhalten hinausgeht.</p>

                <h1 class="text-3xl font-bold">JavaScript</h1>
                <p class="text-lg leading-relaxed">JavaScript ist eine leistungsstarke und vielseitige Skriptsprache, die vorrangig in der Webentwicklung verwendet wird. Sie ermöglicht es, interaktive und dynamische Elemente auf Webseiten zu erstellen. Ursprünglich für das clientseitige Skripting in Webbrowsern entwickelt, wird JavaScript heute auch auf dem Server (z.B. mit Node.js) und in vielen anderen Umgebungen eingesetzt.</p>

                <h2 class="text-2xl font-semibold mt-4">Was ist JavaScript?</h2>
                <p class="text-lg leading-relaxed">Clientseitiges Skripting: Im Webkontext wird JavaScript hauptsächlich für clientseitige Skripte verwendet, was bedeutet, dass der Code im Browser des Benutzers ausgeführt wird. Dies ermöglicht interaktive Funktionen wie das Ändern von Webseiteinhalten, Reagieren auf Benutzeraktionen, Validieren von Formulareingaben, Animieren von Elementen und vieles mehr.</p>
                <p class="text-lg leading-relaxed">Serverseitige Anwendungen: Mit der Einführung von Node.js kann JavaScript auch auf dem Server ausgeführt werden, was es ermöglicht, JavaScript für die gesamte Webentwicklungs-Pipeline zu verwenden.</p>
                <p class="text-lg leading-relaxed">Event-Driven und Asynchron: JavaScript unterstützt ein ereignisgesteuertes Programmiermodell und kann asynchrone Operationen durchführen, was besonders nützlich ist für Funktionen wie das Laden von Daten ohne Neuladen der Seite (AJAX).</p>

                <h2 class="text-2xl font-semibold mt-4">Grundlegende Verwendung von JavaScript</h2>
                <p class="text-lg leading-relaxed">JavaScript wird in HTML-Dokumenten über das {`<script>`}-Tag eingebunden. Dies kann entweder direkt im HTML-Dokument geschehen oder durch Verlinkung auf externe JS-Dateien.</p>
                <p class="text-lg leading-relaxed">Inline JavaScript:</p>
                <pre><code className="language-javascript">
                {`
<script>
    alert("Hallo Welt!");
</script>
                `}  
                </code></pre>
                <p class="text-lg leading-relaxed">Externes JavaScript:</p>
                <pre><code className="language-javascript">
                    {`
<script src="meinSkript.js"></script>
                    `}
                </code></pre>

                <h4 class="text-lg font-semibold mt-4">Grundlegende Konzepte</h4>
                <p class="text-lg leading-relaxed">Variablen: Speichern von Daten.</p>
                <pre><code className="language-javascript">
                    {`
let nachricht = "Hallo Welt!";
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Funktionen: Codeblöcke, die eine bestimmte Aufgabe ausführen.</p>
                <pre><code className="language-javascript">
                    {`
function gruessen() {
    alert("Hallo Welt!");
}
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Ereignishandler: Reagieren auf Benutzeraktionen wie Klicks, Tastatureingaben usw.</p>
                <pre><code className="language-javascript">
                    {`
document.getElementById("meinButton").onclick = function() {
    alert("Button wurde geklickt!");
};
                    `}          
                </code></pre>

                <p class="text-lg leading-relaxed">DOM-Manipulation: Ändern von HTML- und CSS-Elementen.</p>
                <pre><code className="language-javascript">
                    {`
document.getElementById("meineID").innerHTML = "Neuer Inhalt";
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Asynchrone Anfragen (AJAX): Daten von einem Server abrufen, ohne die Seite neu zu laden.</p>
                <pre><code className="language-javascript">
                    {`
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));
                    `}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Beispiele für die Verwendung von JavaScript</h2>
                <p class="text-lg leading-relaxed">Formularvalidierung: Überprüfen der Eingaben in einem Formular, bevor es abgeschickt wird.</p>
                <pre><code className="language-javascript">
                    {`
function validiereFormular() {
    let x = document.forms["meinFormular"]["fname"].value;
    if (x == "") {
    alert("Name muss ausgefüllt werden");
    return false;
    }
}   
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Dynamisches Ändern von Inhalten: Ändern von Inhalten auf einer Webseite basierend auf Benutzerinteraktionen.</p>
                <pre><code className="language-javascript">
                    {`
function aendereInhalt() {
    document.getElementById("meinText").innerHTML = "Willkommen auf meiner Seite!";
}    
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Animationen und Interaktive Elemente: Erstellen von bewegten Elementen oder interaktiven Features.</p>
                <pre><code className="language-javascript">
                    {`
document.getElementById("meinElement").addEventListener("mouseover", function() {
    this.style.color = "red";
});          
                    `}
                </code></pre>
            
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
