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
          <span className='text-accent'>Netzwerkkommunikation</span> und serverseitige Technologien

        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
                
                <p class="text-lg leading-relaxed">In der Zukunft der Netzwerkkommunikation und serverseitigen Technologien erwarten uns bahnbrechende Entwicklungen, die die Art und Weise, wie wir Daten verarbeiten und teilen, neu definieren werden. Mit der Einführung von 5G-Netzwerken werden wir eine signifikante Beschleunigung der Geschwindigkeit und Verringerung der Latenz erleben, was neue Möglichkeiten für IoT und Echtzeitanwendungen eröffnet. Edge Computing wird die Datenverarbeitung näher an den Endnutzer bringen, was zu schnelleren und effizienteren Netzwerkdiensten führt. Serverlose Architekturen und die Integration von KI und maschinellem Lernen in serverseitige Prozesse werden die Entwicklung agiler und intelligenter Anwendungen vorantreiben. Gleichzeitig wird der Fokus auf Sicherheit und Datenschutz stärker denn je, während Nachhaltigkeitsinitiativen die ökologische Auswirkung der Technologiebranche zunehmend in den Vordergrund rücken. Diese Trends skizzieren eine aufregende Zukunft, in der Technologie weiterhin die Grenzen dessen verschiebt, was möglich ist.</p>

                <h2 class="text-2xl font-semibold mt-4">Client-Server Modell</h2>
                <p class="text-lg leading-relaxed">In der Welt der Computernetzwerke bezieht sich die Kommunikation und Verteilung von Programmen und Funktionalitäten zwischen zwei Rechnern oft auf das Client-Server-Modell. In diesem Modell interagieren zwei Arten von Computern: der Client und der Server. Jeder hat seine eigene Rolle und Funktion im Netzwerk.</p>
                
                <span className='text-accent'>Der Client</span>
                <p class="text-lg leading-relaxed">Der Client ist in der Regel der Computer, der einen Dienst oder Ressourcen anfordert. Dies kann ein Desktop-Computer, ein Laptop, ein Smartphone oder jedes andere Gerät mit Netzwerkzugang sein. Clients sind oft "schwächer", "langsamer" oder "kleiner" im Vergleich zu Servern. Das bedeutet, sie haben möglicherweise weniger Rechenleistung, Speicher oder Speicherkapazität. Clients initiieren in der Regel die Kommunikation mit dem Server, indem sie Anfragen senden.</p>
                <span className='text-accent'>Der Server (Host)</span>
                <p class="text-lg leading-relaxed">Auf der anderen Seite steht der Server, ein leistungsstarker Computer, der Ressourcen oder Dienste zur Verfügung stellt. Server sind in der Regel mit leistungsstärkeren Prozessoren, mehr Speicher und größeren Speicherkapazitäten ausgestattet, um mehrere Anfragen gleichzeitig bedienen zu können. Sie sind "größer", "stärker" und "schneller" im Vergleich zu den Clients, weil sie darauf ausgelegt sind, gleichzeitig mehrere Anfragen zu bearbeiten und auf diese schnell zu reagieren.</p>

                <h3 class="text-xl font-semibold mt-4">Kommunikation und Verteilung von Funktionalitäten:</h3>
                <ul>
                    <li><span className='text-accent'>Anfrage-Antwort-Modell</span> In einem typischen Client-Server-Modell sendet der Client eine Anfrage an den Server, der daraufhin eine Antwort zurücksendet. Zum Beispiel könnte ein Webbrowser (Client) eine Anfrage an einen Webserver senden, um eine Webseite abzurufen. Der Server verarbeitet die Anfrage und sendet die entsprechenden Daten zurück an den Client.</li>
                    <li><span className='text-accent'>Ressourcenteilung</span>Server können viele Arten von Ressourcen wie Dateien, Datenbanken, Netzwerkdienste und mehr anbieten. Clients greifen auf diese Ressourcen zu, um bestimmte Aufgaben zu erfüllen, ohne alle notwendigen Daten oder Anwendungen lokal speichern oder ausführen zu müssen.</li>
                    <li><span className='text-accent'>Dezentralisierung</span>Durch die Verteilung von Funktionalitäten zwischen Clients und Servern können Netzwerke effizienter gestaltet werden. Clients müssen nicht übermäßig leistungsstark sein, da sie auf die Verarbeitungsleistung des Servers zugreifen können.</li>
                    <li><span className='text-accent'>Skalierbarkeit</span>Ein leistungsstarker Server kann viele Clients bedienen, was die Skalierbarkeit des Systems erhöht. Wenn die Anzahl der Benutzer oder die Anforderungen an die Ressourcen wachsen, können Server hinzugefügt oder aufgerüstet werden, um den Bedarf zu decken.</li>
                </ul>
                <p class="text-lg leading-relaxed">Das Client-Server-Modell ist ein grundlegendes Konzept in der Computernetzwerkarchitektur und bildet die Basis für viele Arten von Netzwerkanwendungen und -diensten.</p>

                <h2 class="text-2xl font-semibold mt-4">Ethernet zu Beginn <span className='text-accent'>„Historie“</span></h2>
                <p class="text-lg leading-relaxed">Ethernet ist eine grundlegende Technologie, die seit den frühen 1970er Jahren die Grundlage für lokale Netzwerke (LANs) bildet. Die Anfänge von Ethernet können auf das Forschungslabor von Xerox PARC zurückgeführt werden, wo es von Robert Metcalfe und seinem Team entwickelt wurde. Die ursprüngliche Konzeption von Ethernet basierte auf der Idee, dass mehrere Computer über ein einziges Koaxialkabel kommunizieren können, das als gemeinsames Übertragungsmedium dient.</p>
            
                <h3 class="text-xl font-semibold mt-4">Koax Kabel</h3>
                <p class="text-lg leading-relaxed">Das Koaxialkabel, das in den frühen Ethernet-Netzwerken verwendet wurde, spielte eine zentrale Rolle bei der Übertragung von Daten zwischen Computern. Dieses Kabel ist so konstruiert, dass es einen zentralen, leitenden Kern besitzt, der von einem isolierenden Dielektrikum umgeben ist. Über dem Dielektrikum befindet sich eine metallische Abschirmung, die wiederum von einer äußeren Schicht umhüllt wird. Diese Konstruktion ermöglicht eine robuste und störungsarme Signalübertragung.</p>
                <p class="text-lg leading-relaxed">In den Anfängen von Ethernet wurde ein spezifisches Koaxialkabel, bekannt als Thicknet (10BASE5), eingesetzt. Dieses Kabel war relativ steif und schwer zu handhaben, bot aber die nötige Zuverlässigkeit für die damaligen Netzwerke. Später wurde ein dünneres und flexibleres Koaxialkabel, Thinnet (10BASE2), eingeführt, das einfacher zu installieren war.</p>
                
                <span className='text-accent'>Kollisionen</span>
                <p class="text-lg leading-relaxed">Im Kontext von Ethernet-Netzwerken, die auf Koaxialkabeln basierten, bezieht sich eine Kollision auf ein Ereignis, bei dem zwei Geräte gleichzeitig Daten über das gleiche Kabel senden. Da das Kabel ein gemeinsames Medium war, führten solche gleichzeitigen Übertragungen zu Dateninterferenzen. Das CSMA/CD-Protokoll (Carrier Sense Multiple Access with Collision Detection) wurde entwickelt, um dieses Problem zu bewältigen. Geräte prüfen, ob das Kabel frei ist, bevor sie senden, und warten im Falle einer Kollision eine zufällige Zeitspanne, bevor sie es erneut versuchen.</p>
                
                <span className='text-accent'>Entwicklung zur Kollisionsvermeidung</span>
                <ul>
                    <li><span className='text-accent'>Von Koaxialkabeln zu Twisted-Pair- und Glasfaserkabeln</span>Die Einführung von Twisted-Pair-Kabeln (wie 10BASE-T) und später Glasfaserkabeln bot dedizierte Verbindungen zwischen einzelnen Geräten und einem zentralen Netzwerkgerät (z.B. einem Switch), was Kollisionen auf dem Übertragungsmedium eliminieren konnte.</li>
                    <li><span className='text-accent'>Switches statt Hubs</span>Die Verwendung von Netzwerkswitches anstelle von Hubs bedeutete, dass Datenpakete direkt an das Zielgerät gesendet werden konnten, anstatt wie bei einem Hub an alle Geräte. Dies reduzierte die Wahrscheinlichkeit von Kollisionen erheblich, da Switches dedizierte Pfade für die Kommunikation zwischen jedem Gerätepaar erstellen.</li>
                    <li><span className='text-accent'>Full-Duplex-Übertragung</span>Moderne Ethernet-Netzwerke können im Full-Duplex-Modus betrieben werden, was bedeutet, dass Geräte gleichzeitig senden und empfangen können, ohne Kollisionen befürchten zu müssen. Dies wird durch die Verwendung von getrennten Kanälen für sendende und empfangende Daten ermöglicht, wie es bei der Verbindung von Computern zu Switches der Fall ist.</li>
                </ul>
                <p class="text-lg leading-relaxed">Diese Entwicklungen haben dazu geführt, dass Koaxialkabel-basierte Ethernet-Netzwerke mit ihren inhärenten Kollisionsproblemen weitgehend durch effizientere, kollisionsfreie Netzwerkinfrastrukturen ersetzt wurden.</p>

                <h2 class="text-2xl font-semibold mt-4">Das <span className='text-accent'>Kommunikationsmodell</span></h2>
                <p class="text-lg leading-relaxed">Das  5-Tupel-Modell ist eine präzise Methode, um eine Netzwerkverbindung zu charakterisieren, speziell in Kontexten wie TCP/IP, wo es um die Verbindung zwischen einem Webserver und einem Client geht. Das 5-Tupel besteht aus:</p>
                <ol>
                    <li><span className='text-accent'>Protokoll</span>Dies gibt das Kommunikationsprotokoll an, das für die Übertragung verwendet wird. In Ihrem Beispiel ist dies TCP (Transmission Control Protocol), das für die zuverlässige Übertragung von Datenpaketen im Internet sorgt. TCP ist ein verbindungsorientiertes Protokoll, das einen Handshake-Prozess verwendet, um eine sichere Verbindung zwischen Sender und Empfänger zu etablieren.</li>
                    <li><span className='text-accent'>Lokaler Host (IP-Nummer des lokalen Hosts)</span>Dies ist die IP-Adresse des Geräts, von dem die Verbindung initiiert wird oder auf dem die Anfrage empfangen wird. In Ihrem Beispiel ist "196.8.79.22" die IP-Adresse des lokalen Hosts, also beispielsweise des Webservers.</li>
                    <li><span className='text-accent'>Lokaler Prozess (Portnummer lokaler Host)</span>Hier wird der spezifische Prozess auf dem lokalen Host identifiziert, in der Regel durch eine Portnummer. Im Beispiel ist "1078" die Portnummer auf dem lokalen Host, die den spezifischen Prozess (z.B. eine bestimmte Instanz eines Webdienstes) kennzeichnet, mit dem kommuniziert wird.</li>
                    <li><span className='text-accent'>Fremder Host (IP-Nummer des fremden Hosts):</span>Dies ist die IP-Adresse des Zielgeräts in der Kommunikation, also des Geräts, das die Daten anfordert oder an das die Daten gesendet werden. In diesem Fall ist "132.49.2.3" die IP-Adresse des fremden Hosts.</li>
                    <li><span className='text-accent'>Fremder Prozess (Portnummer fremder Host):</span>Ähnlich wie beim lokalen Prozess identifiziert dies den spezifischen Prozess auf dem Zielgerät, der über eine Portnummer ("21" in Ihrem Beispiel) spezifiziert wird. Port 21 wird oft für FTP verwendet, aber in einem Webkontext könnte dies auch für HTTP (Port 80) oder HTTPS (Port 443) stehen, je nachdem, welcher Dienst angefordert wird.</li>
                </ol>

                <h2 class="text-2xl font-semibold mt-4">Software-Architektur von<span className='text-accent'> dynamischen </span>Web-Seiten</h2>
                <p class="text-lg leading-relaxed">Die Software-Architektur von dynamischen Webseiten umfasst sowohl clientseitige als auch serverseitige Komponenten, die interaktiv zusammenarbeiten, um eine reaktionsfähige und interaktive Benutzererfahrung zu ermöglichen. Im Gegensatz zu statischen Webseiten, die festen Inhalt liefern, können dynamische Webseiten ihren Inhalt in Echtzeit anpassen, basierend auf Interaktionen des Benutzers oder anderen Faktoren.</p>
                
                <h3 class="text-xl font-semibold mt-4">Serverseitige Architektur</h3>
                <p class="text-lg leading-relaxed">Auf der Serverseite werden dynamische Webseiten oft mit Hilfe von Programmiersprachen wie PHP, Python, Ruby oder JavaScript (Node.js) entwickelt. Diese serverseitigen Skripte interagieren mit Datenbanken, Dateisystemen und anderen Ressourcen, um Inhalte zu generieren, die an den Client gesendet werden.</p>
                <ul>
                    <li><span className='text-accent'>Datenverarbeitung</span>Serverseitige Skripte verarbeiten Anfragen vom Client, führen Geschäftslogik aus, interagieren mit Datenbanken und erzeugen die erforderlichen Daten.</li>
                    <li><span className='text-accent'>Dynamische Inhaltserstellung</span>Anstatt eine fixe HTML-Seite zu senden, generieren serverseitige Skripte dynamisch HTML, CSS und JavaScript basierend auf der aktuellen Anfrage, Benutzerinteraktionen oder anderen Parametern.</li>
                    <li><span className='text-accent'>Datenbankinteraktion</span>Dynamische Webseiten interagieren häufig mit Datenbanken, um Inhalte zu speichern und abzurufen. Dies ermöglicht eine personalisierte Benutzererfahrung und die Fähigkeit, große Mengen von Daten effektiv zu verwalten.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Clientseitige Architektur</h3>
                <p class="text-lg leading-relaxed">Auf der Clientseite wird das dynamische Verhalten durch JavaScript, zusammen mit HTML und CSS, ermöglicht. Moderne Webanwendungen nutzen oft JavaScript-Frameworks oder -Bibliotheken wie React, Angular oder Vue.js, um interaktive Benutzeroberflächen zu erstellen.</p>
                <ul>
                    <li><span className='text-accent'>Dynamische Interaktion</span>JavaScript ermöglicht es, auf Benutzerinteraktionen zu reagieren, ohne notwendigerweise mit dem Server kommunizieren zu müssen. Dies umfasst Aktionen wie das Erweitern eines Dropdown-Menüs oder das Überprüfen von Formulareingaben.</li>
                    <li><span className='text-accent'>Asynchrone Anfragen</span>Mit AJAX (Asynchronous JavaScript and XML) können Webseiten asynchron Daten mit dem Server austauschen und Teile der Seite aktualisieren, ohne die Seite neu laden zu müssen.</li>
                    <li><span className='text-accent'>Clientseitige Manipulation des DOM</span>avaScript kann das Document Object Model (DOM) manipulieren, was die Modifikation von Elementen und Inhalten auf einer Seite in Echtzeit ermöglicht.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4"><span className='text-accent'>Zusammenspiel von Client und Server</span></h3>
                <p class="text-lg leading-relaxed">In einer dynamischen Webseite interagieren die clientseitigen und serverseitigen Komponenten miteinander, um eine reaktive Benutzererfahrung zu ermöglichen:</p>
                <ul>
                    <li>Der Benutzer interagiert mit der Webseite im Browser (Clientseite).</li>
                    <li>JavaScript fängt diese Interaktionen ab und kann entweder direkt auf der Clientseite reagieren oder eine Anfrage an den Server senden.</li>
                    <li>Der Server verarbeitet die Anfrage (z.B. Datenabfrage, Geschäftslogik) und sendet eine Antwort zurück.</li>
                    <li>Die Antwort wird clientseitig verarbeitet, oft durch Aktualisieren des DOM, um neue oder veränderte Inhalte anzuzeigen, ohne die Seite vollständig neu zu laden.</li>
                </ul>
                <p class="text-lg leading-relaxed">Durch diese Kombination von Technologien können dynamische Webseiten komplexe und interaktive Benutzererlebnisse bieten, die weit über die Möglichkeiten statischer Seiten hinausgehen.</p>

                <h2 class="text-2xl font-semibold mt-4">Einführung in clientseitige Technologien</h2>
                <p class="text-lg leading-relaxed">Diese Technologien laufen direkt im Browser des Benutzers ab und sind entscheidend für die Interaktivität und Benutzererfahrung auf Webseiten.</p>
                <ul>
                    <li><span className='text-accent'>JavaScript & Frameworks</span>Wird für interaktive Elemente auf der Clientseite verwendet.</li>
                    <li><span className='text-accent'>Java Applets</span>Früher genutzt zur Erweiterung der Browserfunktionalität, heute jedoch wegen Sicherheitsbedenken und veralteter Technik kaum noch verwendet.</li>
                    <li><span className='text-accent'>Native Apps</span>Entwicklung spezifisch für iOS (Swift) und Android (Java).</li>
                    <li><span className='text-accent'>Hybride/Web-Apps</span>Serverseitig programmierte Anwendungen, die auf das Endgerät native Code oder JavaScript für den Browser ausliefern.</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Überblick über serverseitige Technologien</h2>
                <p class="text-lg leading-relaxed">Serverseitige Technologien sind für die Datenverarbeitung, Logik und das Backend-Management von Webanwendungen verantwortlich.</p>
                <ul>
                    <li><span className='text-accent'>CGI (Common Gateway Interface)</span>Einmal weit verbreitet, jetzt wegen Performance- und Sicherheitsproblemen veraltet.</li>
                    <li><span className='text-accent'>PHP</span>Eine populäre Scriptsprache für serverseitige Entwicklung, unterstützt durch umfangreiche Funktionen und einfache Erlernbarkeit. Verbesserungen in der Performance wurden durch JIT-Kompilierung erreicht.</li>
                    <li><span className='text-accent'>Java Servlets & JSP</span>Java-Technologien zur Erzeugung dynamischer Webinhalte, wobei Servlets die Basis für JSP bilden.</li>
                    <li><span className='text-accent'>Node.js</span>Eine Plattform, die JavaScript auf dem Server ausführt, unterstützt durch ein umfangreiches Paketökosystem (npm).</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Spezielle Entwicklungen und Trends</h2>
                <p class="text-lg leading-relaxed">Dieser Abschnitt beleuchtet die Verschiebung von veralteten Technologien zu modernen Ansätzen in der Webentwicklung.</p>
                <ul>
                    <li><span className='text-accent'>Veraltete Technologien:</span>Die Abkehr von älteren Technologien wie Java Applets und CGI zugunsten modernerer Lösungen.</li>
                    <li><span className='text-accent'>Moderne Praktiken</span>Einsatz von Node.js für serverseitiges JavaScript und die Nutzung von PHP für dynamische Webseitenerzeugung und Datenbankinteraktionen.</li>
                </ul>

            
            
            
            
            
            
            
            
            
            
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
