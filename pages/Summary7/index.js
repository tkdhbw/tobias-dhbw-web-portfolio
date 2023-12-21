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
                    
                <h1 class="text-3xl font-bold">Grundlagen von Ajax</h1>

                <p class="text-lg leading-relaxed">Ajax (Asynchronous JavaScript and XML) ist eine Webentwicklungstechnik, die es ermöglicht, Webanwendungen zu erstellen, die asynchron Daten im Hintergrund austauschen können, ohne die Seite neu laden zu müssen. Dies führt zu einer flüssigeren und schnelleren Benutzererfahrung. Ajax nutzt eine Kombination aus JavaScript und XML, obwohl heutzutage oft JSON anstelle von XML verwendet wird.</p>

                <p class="text-lg leading-relaxed">Ajax arbeitet mit der <span className='text-accent'>XMLHttpRequest-API</span>, die es JavaScript ermöglicht, HTTP-Anfragen an den Server zu senden und Antworten zu empfangen, ohne die Seite neu laden zu müssen. Die asynchrone Natur von Ajax bedeutet, dass diese Anfragen im Hintergrund geschehen, während der Benutzer weiterhin mit der Seite interagieren kann.</p>

                <h2 class="text-2xl font-semibold mt-4">Einfacher Ajax-Aufruf</h2>

                <pre><code className="language-javascript">
{`
let xhr = new XMLHttpRequest();
xhr.open("GET", "meineDatei.txt", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
`}
                </code></pre>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>XMLHttpRequest(): </span>Erstellt ein neues Ajax-Objekt.</li>
                    <li><span className='text-accent'>.open(&quot;GET&quot;, &quot;meineDatei.txt&quot;, true):</span>Konfiguriert die Anfrage. Hier wird die Datei meineDatei.txt asynchron mit der Methode GET abgerufen.</li>
                    <li><span className='text-accent'>.onreadystatechange: </span>Eine Event-Handler-Funktion, die aufgerufen wird, wenn der Status der Anfrage sich ändert.</li>
                    <li><span className='text-accent'>xhr.readyState: </span>Gibt den Status der Anfrage an. 4 bedeutet, dass die Anfrage abgeschlossen und die Antwort verfügbar ist.</li>
                    <li><span className='text-accent'>xhr.status:  </span>Der HTTP-Statuscode, 200 steht für &quot;OK&quot;.</li>
                    <li><span className='text-accent'>xhr.responseText: </span>Der Text, der vom Server zurückgegeben wird.</li>
                    <li><span className='text-accent'>.send(): </span>Sendet die Anfrage.</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Ajax im Detail</h2>
                
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Asynchronität: </span>Der Hauptvorteil von Ajax ist die Fähigkeit, Daten asynchron vom Server abzurufen. Das bedeutet, dass der Benutzer mit der Webseite interagieren kann, während im Hintergrund Daten geladen oder gesendet werden, ohne die Seite neu laden zu müssen.</li>
                    <li><span className='text-accent'>JavaScript und XMLHttpRequest: </span>JavaScript spielt eine zentrale Rolle in Ajax. Es verwendet das <span className='text-accent'>XMLHttpRequest-Objekt</span>, um HTTP-Anfragen zu erstellen und zu senden. Diese Anfragen können Daten im JSON-, XML-, HTML- oder Textformat abrufen.</li>
                    <li><span className='text-accent'>Dynamische Inhalte: </span>Mit Ajax kann eine Webseite dynamisch aktualisiert werden. Beispielsweise können neue Inhalte geladen, Formulardaten gesendet oder Daten von einem Server abgerufen werden, ohne die Seite neu laden zu müssen.</li>
                    <li><span className='text-accent'>Verbesserte Benutzererfahrung: </span>Da die Seite nicht bei jeder Aktion neu geladen werden muss, sorgt Ajax für eine reibungslosere und schnellere Benutzererfahrung.</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Ajax und PHP</h2>

                <p class="text-lg leading-relaxed">Ajax kann mit PHP-Backends verwendet werden, um Daten dynamisch zu laden und zu verarbeiten. Die Rolle von PHP in einer Ajax-Anwendung ist es, Anfragen vom Client zu empfangen, diese zu verarbeiten (z.B. Datenbankabfragen durchführen) und eine Antwort zurückzusenden.</p>
                <p class="text-lg leading-relaxed">PHP ist oft die serverseitige Sprache, die Ajax-Anfragen verarbeitet.</p>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Datenempfang: </span>PHP-Skripte empfangen die von Ajax gesendeten Daten, verarbeiten sie und senden eine Antwort zurück.</li>
                    <li><span className='text-accent'>Datenverarbeitung: </span>PHP kann Daten aus einer Datenbank abfragen, verarbeiten und dann in einem für JavaScript lesbaren Format (wie JSON) zurücksenden.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Ajax-Anfrage an PHP-Script</h3>
                <p class="text-lg leading-relaxed">JavaScript (Frontend)</p>
                <pre><code className="language-javascript">
{`
$.ajax({
    url: 'meinScript.php',
    type: 'POST',
    data: {name: 'Max'},
    success: function(response) {
        console.log(response);
    }
});
`}
                </code></pre>
                <p class="text-lg leading-relaxed">PHP (Backend)</p>
                <pre><code className="language-php">
{`
<?php
$receivedData = $_POST['key'];
// Verarbeitung ...
echo "Empfangene Daten: $receivedData";
?>

`}
                </code></pre>

                <p class="text-lg leading-relaxed">Beschreibung:</p>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>$.ajax(): </span>jQuery-Methode für Ajax-Anfragen.</li>
                    <li><span className='text-accent'>url: </span>Der Pfad zum PHP-Script.</li>
                    <li><span className='text-accent'>type: </span>Die HTTP-Methode, hier POST.</li>
                    <li><span className='text-accent'>data: </span>Die zu sendenden Daten, hier ein Objekt mit dem Namen Max.</li>
                    <li><span className='text-accent'>success: </span>Eine Funktion, die ausgeführt wird, wenn die Anfrage erfolgreich ist. </li>
                    <li><span className='text-accent'>response: </span>Enthält die Antwort vom Server..</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">jQuery und Ajax</h2>

                <p class="text-lg leading-relaxed">jQuery vereinfacht die Ajax-Programmierung durch Bereitstellung einer einfacheren Syntax und Methoden. Es bietet auch Cross-Browser-Kompatibilität.</p>
                
                <p class="text-lg leading-relaxed"><span className='text-accent'>GET-Anfrage: </span>Daten vom Server abrufen.</p>

                <pre><code className="language-javascript">
{`
$.get('server.php', {name: 'Max'}, function(response) {
    console.log(response);
});

`}
                </code></pre>

                <p class="text-lg leading-relaxed"><span className='text-accent'>POST-Anfrage: </span>Daten an den Server senden.</p>

                <pre><code className="language-javascript">
{`
$.post('server.php', {data: 'Wert'}, function(response) {
    console.log(response);
});
`}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Reload-Methoden und ihre Bedeutung in Ajax</h2>

                <p class="text-lg leading-relaxed">In traditionellen Webanwendungen werden Seiten neu geladen, um neue Inhalte anzuzeigen oder Daten zu senden. Ajax ändert diesen Ansatz, indem es erlaubt, Daten zu senden und zu empfangen, ohne die Seite neu zu laden. Dies verbessert nicht nur die Benutzererfahrung, sondern reduziert auch die Serverlast und Netzwerkverkehr.</p>
                <br />
                <p class="text-lg leading-relaxed">Ajax revolutioniert die Art und Weise, wie Webanwendungen erstellt werden, indem es asynchrone Datenanfragen ermöglicht. Dies führt zu einer schnelleren und reibungsloseren Benutzererfahrung. In Verbindung mit PHP ermöglicht Ajax eine effiziente Datenverarbeitung auf dem Server, und der Einsatz von jQuery erleichtert die Ajax-Programmierung deutlich.</p>

                <h2 class="text-2xl font-semibold mt-4">Fortgeschrittene Ajax-Konzepte</h2>

                <p class="text-lg leading-relaxed"><span className='text-accent'>JSON und Ajax: </span>Statt einfacher Textantworten ist es üblich, dass Ajax-Anfragen JSON (JavaScript Object Notation) verwenden, eine leichte Daten-Austausch-Format, das leicht von JavaScript gelesen und verarbeitet werden kann.</p>

                <p class="text-lg leading-relaxed">Ein Ajax-Aufruf erhält JSON von einem PHP-Server.</p>
                <h4 class="text-lg font-semibold mt-4">JavaScript</h4>
                <pre><code className="language-javascript">
{`
$.ajax({
    url: 'daten.php',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log('Name: ', data.name);
    }
});
`}
                </code></pre>

                <h4 class="text-lg font-semibold mt-4">PHP</h4>
                <pre><code className="language-php">
{`
<?php
$response = ['name' => 'Max', 'alter' => 25];
echo json_encode($response);
?>
`}
                </code></pre>

                <p class="text-lg leading-relaxed"><span className='text-accent'>Fehlerbehandlung in Ajax: </span>Es ist wichtig, auf Fehler bei Ajax-Anfragen vorbereitet zu sein, etwa wenn der Server nicht erreichbar ist oder eine falsche Antwort sendet.</p>

                <p class="text-lg leading-relaxed">Hinzufügen von Fehlerbehandlung zu einer Ajax-Anfrage.</p>
                <h4 class="text-lg font-semibold mt-4">JavaScript</h4>
                <pre><code className="language-javascript">
{`
$.ajax({
    url: 'daten.php',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        // Erfolgreiche Verarbeitung
    },
    error: function(xhr, status, error) {
        console.error('Fehler aufgetreten: ', error);
    }
});
`}
                </code></pre>

                <p class="text-lg leading-relaxed"><span className='text-accent'>Promises in Ajax: </span> Moderne JavaScript-Techniken wie Promises können mit Ajax verwendet werden, um besseren asynchronen Code zu schreiben.</p>

                <p class="text-lg leading-relaxed">Verwendung von Promises mit Ajax.</p>
                <h4 class="text-lg font-semibold mt-4">JavaScript</h4>
                <pre><code className="language-javascript">
{`
function fetchData() {
    return $.ajax({
        url: 'daten.php',
        type: 'GET',
        dataType: 'json'
    });
}

fetchData().done(function(data) {
    console.log('Daten empfangen: ', data);
}).fail(function(error) {
    console.error('Fehler: ', error);
});
`}
                </code></pre>

                <p class="text-lg leading-relaxed"><span className='text-accent'>Ajax mit Async/Await: </span>Async/Await, eine moderne JavaScript-Syntax, kann Ajax-Anfragen noch lesbarer und wartbarer machen.</p>

                <p class="text-lg leading-relaxed">Verwendung von Async/Await mit Ajax.</p>
                <h4 class="text-lg font-semibold mt-4">JavaScript</h4>
                <pre><code className="language-javascript">
{`
async function fetchData() {
    try {
        let response = await $.ajax({url: 'daten.php', type: 'GET', dataType: 'json'});
        console.log('Daten: ', response);
    } catch (error) {
        console.error('Fehler: ', error);
    }
}

fetchData();
`}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">PHP und Ajax für fortgeschrittene Anwendungen</h2>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><span className='text-accent'>Sicherheit: </span>Bei der Verarbeitung von Ajax-Anfragen ist die Sicherheit von entscheidender Bedeutung. Stellen Sie sicher, dass alle eingehenden Daten validiert und bereinigt werden, um Sicherheitsrisiken wie SQL-Injection oder Cross-Site Scripting (XSS) zu vermeiden.</li>
                    <li><span className='text-accent'>Datenbankoperationen: </span>Ajax kann verwendet werden, um dynamische Datenbankabfragen durchzuführen, ohne die Seite neu laden zu müssen. Denken Sie daran, Prepared Statements in PHP zu verwenden, um die Datenbanksicherheit zu gewährleisten.</li>
                    <li><span className='text-accent'>RESTful API: </span>Für komplexere Anwendungen kann PHP genutzt werden, um eine RESTful API zu erstellen, die Ajax-Anfragen verarbeitet. Dies ermöglicht eine modulare und skalierbare Architektur.</li>
                    <li><span className='text-accent'>Session Management: </span>Ajax kann auch für Funktionen wie Benutzeranmeldung und -verwaltung eingesetzt werden. Stellen Sie sicher, dass Sessions und Cookies sicher gehandhabt werden.</li>
                </ul>

                <br />
                <br />
                <p class="text-lg leading-relaxed">Die Kombination von Ajax, PHP und jQuery ermöglicht die Entwicklung dynamischer, interaktiver und leistungsfähiger Webanwendungen. Durch die Verwendung fortgeschrittener Techniken wie JSON, Fehlerbehandlung, Promises und Async/Await können Entwickler effiziente und benutzerfreundliche Anwendungen erstellen. Die Beachtung von Sicherheitsaspekten und die Implementierung robuster Backend-Logik sind dabei unerlässlich für den Erfolg moderner Webprojekte.</p>


                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default Testimonials;
