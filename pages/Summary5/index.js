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
          Vorlesung <span className='text-accent'> 5</span> <br />
          JavaScript <span className='text-accent'> DOM</span> <br />
          jQuery

        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
                
                <h1 class="text-3xl font-bold">DOM</h1>
                <p class="text-lg leading-relaxed">Das Document Object Model (DOM) ist eine Programmierschnittstelle (API) in Webbrowsern, die dazu dient, HTML- oder XML-Dokumente als Baumstruktur darzustellen. Das DOM ermöglicht es JavaScript und anderen Skriptsprachen, auf die Struktur, den Inhalt und die Eigenschaften eines Webdokuments zuzugreifen und es dynamisch zu manipulieren.</p>

                <h4>Darstellung der Webseite</h4>
                <p class="text-lg leading-relaxed">Das DOM repräsentiert die gesamte Struktur einer Webseite. Jedes HTML- oder XML-Element (z.B. Tags wie {`<div>`} oder {`<p class="text-lg leading-relaxed">`}) wird als Knoten im DOM dargestellt, und Texte zwischen den Tags werden als Textknoten betrachtet. Diese Darstellung ermöglicht es, auf jedes Element und jeden Text im Dokument zuzugreifen.</p>

                <h4>Zugriff und Manipulation</h4>
                <p class="text-lg leading-relaxed">Das DOM ermöglicht es, auf Elemente und Texte zuzugreifen, sie zu ändern, hinzuzufügen oder zu entfernen. Entwickler können mithilfe von JavaScript auf Elemente zugreifen, deren Attribute ändern, Inhalte ändern oder dynamisch neue Elemente erstellen und in das Dokument einfügen.</p>

                <h4>Interaktivität</h4>
                <p class="text-lg leading-relaxed">Das DOM ermöglicht es, auf Benutzerinteraktionen zu reagieren, wie z.B. Mausklicks, Tastatureingaben oder das Laden der Seite. Entwickler können Event-Listener an DOM-Elemente anhängen, um auf diese Ereignisse zu reagieren und interaktive Funktionen zu implementieren.</p>

                <h4>Dynamische Aktualisierung</h4>
                <p class="text-lg leading-relaxed">Das DOM ermöglicht es, Webseiten in Echtzeit zu aktualisieren, ohne die Seite neu zu laden. Dies ermöglicht die Erstellung von dynamischen und interaktiven Webanwendungen, bei denen Inhalte und Benutzeroberflächen ohne Seitenaktualisierung geändert werden können.</p>

                <h4>Navigation und Traversierung</h4>
                <p class="text-lg leading-relaxed">Das DOM bietet Methoden und Eigenschaften, um durch den Baum zu navigieren und von einem Element zum anderen zu gelangen. Entwickler können auf übergeordnete oder untergeordnete Elemente zugreifen, Geschwisterelemente durchlaufen oder den DOM-Baum nach spezifischen Elementen durchsuchen.</p>

                <p class="text-lg leading-relaxed">Wie wir bereits wissen ermöglicht das DOm JavaScript, auf Dokumente zuzugreifen, sie zu ändern, zu manipulieren und dynamisch zu aktualisieren.</p>

                <h3 class="text-xl font-semibold mt-4">Hierarchische Struktur</h3>
                <p class="text-lg leading-relaxed">Das DOM stellt ein hierarchisches Baumdiagramm dar, in dem jedes Element, jede Eigenschaft und jeder Textknoten im Dokument als Knoten im Baum repräsentiert wird. Das Dokument selbst ist der Wurzelknoten (document), und alle anderen Elemente, Tags und Texte sind untergeordnete Knoten.</p>

                <h3 class="text-xl font-semibold mt-4">Zugriff auf DOM-Elemente</h3>
                <p class="text-lg leading-relaxed">JavaScript kann auf DOM-Elemente zugreifen, indem es sie über ihre Tags, IDs, Klassen oder andere Attribute auswählt. Die gebräuchlichste Methode ist document.querySelector(), um ein einzelnes Element auszuwählen, und document.querySelectorAll(), um eine Liste von Elementen auszuwählen.</p>
                <pre><code className="language-javascript">
{`// Auswahl eines Elements mit der ID "myElement"
const element = document.getElementById("myElement");

// Auswahl aller <p class="text-lg leading-relaxed">-Elemente auf der Seite
const paragraphs = document.querySelectorAll("p");
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Ändern von DOM-Elementen</h3>
                <p class="text-lg leading-relaxed">JavaScript kann den Inhalt, die Attribute und die Struktur von DOM-Elementen ändern. Sie können den Text eines Elements ändern, Attribute hinzufügen oder entfernen, neue Elemente erstellen und sie in das Dokument einfügen oder vorhandene Elemente entfernen.</p>
                <pre><code className="language-javascript">
{`        // Ändern des Textinhalts eines Elements
element.textContent = "Neuer Text";

// Hinzufügen eines neuen Attributes
element.setAttribute("data-custom", "Wert");

// Erstellen eines neuen Elements und Einfügen in das Dokument
const newElement = document.createElement("div");
newElement.textContent = "Neues Element";
document.body.appendChild(newElement);

// Entfernen eines Elements aus dem Dokument
element.remove();
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Ereignisse und Event-Handling</h3>
                <p class="text-lg leading-relaxed">Das DOM ermöglicht es JavaScript auch, auf Benutzeraktionen oder Ereignisse zu reagieren, z. B. Mausklicks, Tastatureingaben oder das Laden der Seite. Sie können Event-Listener an DOM-Elemente anhängen, um auf diese Ereignisse zu reagieren.</p>
                <pre><code className="language-javascript">
{`// Hinzufügen eines Klick-Event-Listeners zu einem Button
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button wurde geklickt!");
});
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Traversieren des DOM-Baums</h3>
                <p class="text-lg leading-relaxed">JavaScript kann den DOM-Baum traversieren, um von einem Element zu einem anderen zu gelangen, z. B. von einem übergeordneten Element zu einem untergeordneten Element oder umgekehrt. Hierzu stehen Eigenschaften wie parentNode, childNodes, nextSibling, previousSibling usw. zur Verfügung.</p>
                <pre><code className="language-javascript">
{`
const parent = element.parentNode; // Übergeordnetes Element
const children = parent.childNodes; // Liste der untergeordneten Knoten
const nextSibling = element.nextSibling; // Nächstes Geschwisterelement
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">DOM-Manipulation in Echtzeit</h3>
                <p class="text-lg leading-relaxed">Das DOM erlaubt es, Webseiten in Echtzeit zu aktualisieren, ohne die Seite neu zu laden. Dies ermöglicht die Erstellung von interaktiven und dynamischen Webanwendungen.</p>

                <h2 class="text-2xl font-semibold mt-4">Das Problem mit dem DOM</h2>
                <p class="text-lg leading-relaxed"></p>

                <h3 class="text-xl font-semibold mt-4">Performance</h3>
                <p class="text-lg leading-relaxed">Das DOM kann träge sein, insbesondere in großen Dokumenten. Das häufige Hinzufügen, Entfernen oder Ändern von Elementen im DOM kann zu erheblicher Verlangsamung führen, da die Aktualisierung des DOM aufwändig sein kann.</p>

                <h3 class="text-xl font-semibold mt-4">Browser-Kompatibilität</h3>
                <p class="text-lg leading-relaxed">Unterschiedliche Webbrowser implementieren das DOM leicht unterschiedlich, was zu Inkompatibilitäten führen kann. Entwickler müssen häufig Browser-spezifischen Code schreiben, um sicherzustellen, dass ihre Anwendungen in verschiedenen Browsern funktionieren.</p>

                <h3 class="text-xl font-semibold mt-4">Komplexität</h3>
                <p class="text-lg leading-relaxed">Das DOM kann bei komplexen Anwendungen schwer zu verwalten sein. Tief verschachtelte Hierarchien von DOM-Elementen können die Lesbarkeit des Codes beeinträchtigen und Fehleranfälligkeit verursachen.</p>

                <h3 class="text-xl font-semibold mt-4">Sicherheitsprobleme</h3>
                <p class="text-lg leading-relaxed">Das Manipulieren des DOM kann Sicherheitsrisiken bergen, insbesondere wenn nicht-validierte Eingaben vom Benutzer in den DOM eingefügt werden. Dies kann zu Cross-Site-Scripting (XSS)-Angriffen führen.</p>

                <h3 class="text-xl font-semibold mt-4">Synchronität</h3>
                <p class="text-lg leading-relaxed">Das DOM arbeitet auf eine synchrone Weise, was bedeutet, dass alle Operationen blockierend sind. Dies kann zu einer schlechten Benutzererfahrung führen, wenn die Benutzeroberfläche während der DOM-Manipulation eingefroren wird.</p>

                <h3 class="text-xl font-semibold mt-4">Verlust des Zustands</h3>
                <p class="text-lg leading-relaxed">Bei herkömmlichen Webanwendungen geht bei einer Aktualisierung der Seite der Zustand (z.B. Formularinhalte oder Scrollposition) verloren. Entwickler müssen Techniken wie das Speichern des Zustands auf dem Server oder im Local Storage verwenden, um dieses Problem zu umgehen.</p>

                <p class="text-lg leading-relaxed">Trotz dieser Herausforderungen bleibt das DOM ein wichtiger Bestandteil der Webentwicklung. Entwickler verwenden Techniken wie Virtual DOM (in Bibliotheken wie React), um die Leistung zu verbessern, und moderne Frameworks und Bibliotheken bieten Lösungen für viele der oben genannten Probleme. Es ist wichtig, diese Herausforderungen zu verstehen und bewährte Praktiken in der Webentwicklung anzuwenden, um effiziente und zuverlässige Anwendungen zu erstellen.</p>

                <br /><br /><br />

                <p class="text-lg leading-relaxed">Das Document Object Model ist ein entscheidender Teil der Webentwicklung und ermöglicht die Interaktion von JavaScript mit HTML- und XML-Dokumenten. Es ist ein mächtiges Werkzeug, um Webseiten dynamisch zu gestalten und Benutzererfahrungen zu verbessern.</p>

                <h1 class="text-3xl font-bold">JavaScript Bibliotheken</h1>
                <p class="text-lg leading-relaxed">JavaScript-Bibliotheken sind Sammlungen von vorgefertigtem JavaScript-Code, der zur Lösung bestimmter Entwicklungsprobleme oder zur Implementierung häufig verwendeter Funktionen und Features in Webanwendungen verwendet wird. Diese Bibliotheken sind oft Open Source und von der Entwicklergemeinschaft gepflegt. </p>

                <h2 class="text-2xl font-semibold mt-4">Was sind JavaScript Bibliotheken?</h2>
                <p class="text-lg leading-relaxed">JavaScript-Bibliotheken sind externe Code-Sammlungen, die entwickelt wurden, um die Entwicklung von Webanwendungen zu vereinfachen und zu beschleunigen. Sie bieten Funktionen, Methoden und Tools, die in der Regel über JavaScript-Frameworks oder die nativen JavaScript-APIs hinausgehen. Bibliotheken können eine breite Palette von Aufgaben abdecken, von der DOM-Manipulation über Animationen bis hin zur Datenverarbeitung.</p>

                <h2 class="text-2xl font-semibold mt-4">Warum werden JavaScript Bibliotheken verwendet?</h2>
                <h3 class="text-xl font-semibold mt-4">Zeitersparnis</h3>
                <p class="text-lg leading-relaxed">Bibliotheken bieten vorgefertigten Code, der häufig verwendete Aufgaben und Funktionen behandelt. Dies spart Entwicklern Zeit bei der Implementierung solcher Funktionen von Grund auf.</p>

                <h3 class="text-xl font-semibold mt-4">Zuverlässigkeit</h3>
                <p class="text-lg leading-relaxed">Gut gewartete Bibliotheken werden von einer Gemeinschaft von Entwicklern gepflegt und getestet, was die Zuverlässigkeit und Qualität des Codes verbessert.</p>

                <h3 class="text-xl font-semibold mt-4">Cross-Browser-Kompatibilität</h3>
                <p class="text-lg leading-relaxed">Einige Bibliotheken kümmern sich um die Behandlung von Browser-Kompatibilitätsproblemen und stellen sicher, dass der Code in verschiedenen Browsern funktioniert.</p>

                <h3 class="text-xl font-semibold mt-4">Best Practices</h3>
                <p class="text-lg leading-relaxed">Bibliotheken folgen oft bewährten Entwicklungspraktiken und Designmustern, was zu robusterem und wartbarem Code führt.</p>

                <h2 class="text-2xl font-semibold mt-4">Wie benutzt man JavaScript Bibliotheken?</h2>
                <p class="text-lg leading-relaxed">Um eine JavaScript-Bibliothek zu verwenden, müssen Sie normalerweise die folgenden Schritte ausführen:</p>

                <h3 class="text-xl font-semibold mt-4">Einbindung der Bibliothek</h3>
                <p class="text-lg leading-relaxed">Laden Sie die JavaScript-Datei der Bibliothek in Ihre HTML-Seite ein. Dies kann durch Hinzufügen eines {`<script>`}-Tags in den {`<head>`}- oder {`<body>`}-Bereich Ihrer HTML-Seite erfolgen.</p>
                <pre><code className="language-html">
{`
<script src="bibliothek.js"></script>
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Initialisierung und Verwendung</h3>
                <p class="text-lg leading-relaxed">In Ihrem eigenen JavaScript-Code können Sie die Funktionen und Objekte der Bibliothek verwenden, indem Sie auf sie zugreifen. Dies kann das Erstellen von Instanzen, das Aufrufen von Methoden oder das Zugreifen auf Eigenschaften umfassen.</p>
                <pre><code className="language-javascript">
{`
// Initialisierung der Bibliothek (falls erforderlich)
const myLibrary = new MeineBibliothek();

// Verwendung der Bibliotheksfunktionen
const result = myLibrary.doSomething();
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Dokumentation und Beispiele</h3>
                <p class="text-lg leading-relaxed">Konsultieren Sie die offizielle Dokumentation der Bibliothek, um Informationen darüber zu erhalten, wie Sie sie verwenden können. Die Dokumentation enthält normalerweise Beispiele, Code-Snippets und Erklärungen zur Verwendung der verschiedenen Funktionen und Features der Bibliothek.</p>

                <p class="text-lg leading-relaxed">Es ist wichtig zu beachten, dass nicht alle JavaScript-Bibliotheken gleich sind. Einige sind sehr spezialisiert und dienen einem bestimmten Zweck (z.B. jQuery für DOM-Manipulation), während andere umfassendere Funktionalität bieten (z.B. React für den Aufbau von Benutzeroberflächen). Die Wahl einer Bibliothek hängt von den Anforderungen Ihres Projekts ab. Es ist ratsam, die Dokumentation und die Community-Unterstützung einer Bibliothek zu überprüfen, bevor Sie sie in Ihrem Projekt verwenden.</p>

                <h1 class="text-3xl font-bold">jQuery</h1>
                <p class="text-lg leading-relaxed">jQuery ist eine JavaScript-Bibliothek, die entwickelt wurde, um die Arbeit mit HTML-Dokumenten, DOM-Manipulation, Event-Handling und Animationen in Webanwendungen zu vereinfachen. Es wurde 2006 veröffentlicht und war lange Zeit eine der beliebtesten JavaScript-Bibliotheken. Obwohl es in den letzten Jahren an Popularität verloren hat, bleibt es immer noch eine nützliche Ressource für Entwickler, insbesondere für diejenigen, die mit älteren Webprojekten arbeiten.</p>

                <h2 class="text-2xl font-semibold mt-4">Hier sind die Grundlagen von jQuery und wie man es verwendet:</h2>

                <h3 class="text-xl font-semibold mt-4">Einbindung von jQuery:</h3>
                <p class="text-lg leading-relaxed">Um jQuery in Ihre Webseite einzubinden, müssen Sie die jQuery-Bibliotheksdatei in Ihr HTML-Dokument einfügen. Sie können dies entweder durch Herunterladen der jQuery-Datei von der offiziellen Website oder durch Verwenden eines Content-Delivery-Networks (CDN) tun. </p>
                <pre><code className="language-html">
{`
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Verwendung von jQuery</h3>
                <p class="text-lg leading-relaxed">Nachdem Sie jQuery in Ihr Projekt eingebunden haben, können Sie jQuery-Funktionen und -Methoden verwenden, um auf DOM-Elemente zuzugreifen und diese zu manipulieren.</p>

                <p class="text-lg leading-relaxed">DOM-Auswahl</p>
                <p class="text-lg leading-relaxed">Sie können Elemente im DOM auswählen, indem Sie Selektoren verwenden, ähnlich wie in CSS.</p>
                <pre><code className="language-javascript">
{`
var element = $("#meinElement");
`}
                </code></pre>

                <p class="text-lg leading-relaxed">DOM-Manipulation</p>
                <p class="text-lg leading-relaxed">Sie können den Inhalt, die Attribute und die Struktur von DOM-Elementen ändern.</p>
                <pre><code className="language-javascript">
{`
$("#meinElement").text("Neuer Text");
`}
                </code></pre>

                <p class="text-lg leading-relaxed">Event-Handling</p>
                <p class="text-lg leading-relaxed">Sie können Event-Listener an DOM-Elemente anhängen, um auf Ereignisse zu reagieren.</p>
                <pre><code className="language-javascript">
{`
$("#meinElement").click(function() {
    alert("Element wurde geklickt!");
});        
`}
                </code></pre>

                <p class="text-lg leading-relaxed">Animationen</p>
                <p class="text-lg leading-relaxed">jQuery bietet Funktionen zur einfachen Erstellung von Animationen und Übergängen in Webseiten.</p>
                <pre><code className="language-javascript">
{`
$("#meinElement").animate({ width: "200px", height: "200px" }, 1000);
`}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Dokumentation und Beispiele</h2>
                <p class="text-lg leading-relaxed">Die jQuery-Dokumentation ist eine wertvolle Ressource, um mehr über die Verwendung von jQuery zu erfahren. Sie enthält ausführliche Erklärungen, Beispiele und Referenzen für alle verfügbaren Funktionen und Methoden. Sie finden die offizielle jQuery-Dokumentation auf der <a href="https://jquery.com">jQuery-Website</a>.</p>

                <h3 class="text-xl font-semibold mt-4">Beispiel</h3>
                <pre><code className="language-html">
{`
<!DOCTYPE html>
    <html>
    <head>
        <title>jQuery Beispiel</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <button id="meinButton">Klick mich!</button>

        <script>
            // Event-Handler für den Button hinzufügen
            $("#meinButton").click(function() {
                alert("Button wurde geklickt!");
            });
        </script>
    </body>
    </html>
`}
                </code></pre>

                <p class="text-lg leading-relaxed">jQuery war in der Vergangenheit sehr beliebt und erleichterte vielen Entwicklern die Arbeit. Heutzutage verwenden viele Entwickler moderne JavaScript-Frameworks wie React, Angular oder Vue.js, die fortgeschrittenere Funktionen und eine bessere Leistung bieten. Dennoch kann jQuery in bestimmten Situationen immer noch nützlich sein, insbesondere wenn Sie mit älteren Projekten arbeiten oder schnell einfache Aufgaben erledigen möchten.</p>

                <h2 class="text-2xl font-semibold mt-4">jQuery-Methoden</h2>
                <h3 class="text-xl font-semibold mt-4">Manipulation von Inhalten</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li>.html(): Setzt oder liest den HTML-Inhalt eines Elements.</li>
                    <li>.text(): Setzt oder liest den Textinhalt eines Elements.</li>
                    <li>.val(): Setzt oder liest den Wert eines Formularelements wie {`<input>`} oder {`<select>`}.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">DOM-Manipulation</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li>.append(): Fügt Inhalte am Ende eines Elements ein.</li>
                    <li>.prepend(): Fügt Inhalte am Anfang eines Elements ein.</li>
                    <li>.after(): Fügt Inhalte nach einem Element ein.</li>
                    <li>.before(): Fügt Inhalte vor einem Element ein.</li>
                    <li>.remove(): Entfernt ein Element aus dem DOM.</li>
                    <li>.empty(): Entfernt alle Inhalte eines Elements.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Attribute und CSS</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li>.attr(): Setzt oder liest den Wert eines Attributes eines Elements.</li>
                    <li>.css(): Setzt oder liest CSS-Stileigenschaften eines Elements.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Events</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li>.on(): Hängt Event-Handler an ausgewählte Elemente an.</li>
                    <li>.off(): Entfernt Event-Handler von ausgewählten Elementen.</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Animationen</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li>.animate(): Führt eine Animation auf ausgewählten Elementen durch.</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Verkettung (Chaining)</h2>
                <p class="text-lg leading-relaxed">Ein leistungsstarkes Konzept in jQuery ist die Verkettung von Methoden. Das bedeutet, dass Sie mehrere Methoden nacheinander auf das gleiche ausgewählte Element anwenden können, indem Sie sie einfach hintereinander schreiben. Dadurch wird der Code kürzer und lesbarer.</p>
                <pre><code className="language-javascript">
{`
$("#meinElement")
    .css("color", "rot")
    .text("Hallo Welt")
    .addClass("besonders");
`}
                </code></pre>

                <p class="text-lg leading-relaxed">In diesem Beispiel wird das ausgewählte Element zuerst rot eingefärbt, dann mit dem Text "Hallo Welt" gefüllt und schließlich die CSS-Klasse "besonders" hinzugefügt.</p>

                <h2 class="text-2xl font-semibold mt-4">Filter</h2>
                <p class="text-lg leading-relaxed">jQuery bietet verschiedene Filtermethoden, mit denen Sie eine Menge von ausgewählten Elementen weiter filtern können, um bestimmte Elemente auszuwählen. </p>

                <h3 class="text-xl font-semibold mt-4">Filtermethoden</h3>
                <table className="w-full text-left mt-4">
                    <thead>
                        <tr className="text-lg font-semibold border-b border-gray-700">
                            <th className="pb-2">Methode</th>
                            <th className="pb-2">Beschreibung</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        <tr>
                            <td className="pt-2 pb-1">.first()</td>
                            <td className="pt-2 pb-1">Wählt das erste Element in der Auswahl aus.</td>
                        </tr> 
                        <tr>
                            <td className="pt-2 pb-1">last()</td>
                            <td className="pt-2 pb-1">Wählt das letzte Element in der Auswahl aus.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">.eq(index)</td>
                            <td className="pt-2 pb-1">Wählt das Element an der angegebenen Indexposition aus.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">.filter(selector)</td>
                            <td className="pt-2 pb-1">Filtert die Auswahl basierend auf einem Selektor.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">.not(selector)</td>
                            <td className="pt-2 pb-1">Entfernt Elemente aus der Auswahl, die dem Selektor entsprechen.</td>
                        </tr>
                    </tbody>
                </table>

                <h2 class="text-2xl font-semibold mt-4">Automatische Schleifen</h2>
                <p class="text-lg leading-relaxed">In jQuery können Sie eine Funktion auf alle ausgewählten Elemente in einer Auswahl anwenden, ohne eine explizite Schleife zu verwenden. Dies wird als "implizite Schleife" oder "jede Methode" bezeichnet</p>
                <pre><code className="language-javascript">
{`
$("p").each(function() {
    // Diese Funktion wird für jedes <p class="text-lg leading-relaxed"> Element aufgerufen.
    console.log($(this).text());
});        
`}
                </code></pre>
                <p class="text-lg leading-relaxed">In diesem Beispiel wird die each-Methode verwendet, um eine Funktion auf jedes ausgewählte {`<p class="text-lg leading-relaxed">`}-Element anzuwenden. Sie müssen nicht manuell eine Schleife schreiben, um dies zu erreichen.</p>

                <br /><br />

                <h2 class="text-2xl font-semibold mt-4">jQuery Funktionen</h2>
                <p class="text-lg leading-relaxed">In jQuery sind Funktionen ein wesentlicher Bestandteil, da sie verwendet werden, um Aktionen auf ausgewählten Elementen auszuführen.</p>

                <h3 class="text-xl font-semibold mt-4">Bereitstellung von Funktionen</h3>
                <p class="text-lg leading-relaxed">jQuery bietet eine Vielzahl von Funktionen, die auf ausgewählte Elemente angewendet werden können. Diese Funktionen sind in der jQuery-Bibliothek vordefiniert und können auf verschiedene Arten aufgerufen werden.</p>

                <h3 class="text-xl font-semibold mt-4">Verkettung von Funktionen</h3>
                <p class="text-lg leading-relaxed">Wie bereits zuvor erwähnt, unterstützt jQuery die Verkettung von Funktionen. Das bedeutet, dass Sie mehrere Funktionen nacheinander auf dasselbe ausgewählte Element anwenden können, indem Sie sie hintereinander aufrufen.</p>
                <pre><code className="language-javascript">
{`
$("#meinElement")
    .css("color", "rot")
    .text("Hallo Welt")
    .addClass("besonders");
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Anonyme Funktionen</h3>
                <p class="text-lg leading-relaxed">Sie können anonyme Funktionen (auch als Lambda-Funktionen bezeichnet) verwenden, um benutzerdefinierte Aktionen auf ausgewählten Elementen auszuführen. Dies ist besonders nützlich, wenn Sie komplexe Logik ausführen möchten.</p>
                <pre><code className="language-javascript">
{`
$("button").click(function() {
    alert("Button wurde geklickt!");
});        
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Funktionen mit Rückgabewerten</h3>
                <p class="text-lg leading-relaxed">Einige jQuery-Funktionen geben einen Wert zurück, der in einer Variablen gespeichert oder weiterverarbeitet werden kann.</p>
                <pre><code className="language-javascript">
{`
var text = $("#meinElement").text();
`}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Verwendung von "this" in jQuery</h2>
                <p class="text-lg leading-relaxed">In jQuery ist this ein spezielles Schlüsselwort, das auf das aktuelle DOM-Element in einer Schleife oder in einem Event-Handler verweist. Die Bedeutung von this hängt vom Kontext ab, in dem es verwendet wird.</p>

                <h3 class="text-xl font-semibold mt-4">Innerhalb einer Schleife (z.B. .each())</h3>
                <p class="text-lg leading-relaxed">In einer Schleife, wie sie durch die .each()-Methode erstellt wird, verweist this auf das aktuelle DOM-Element, das durch die Schleife durchlaufen wird. Dies ermöglicht es, Operationen auf jedem Element separat auszuführen.</p>
                <pre><code className="language-javascript">
{`
$("p").each(function() {
    // In diesem Kontext verweist "this" auf das aktuelle <p class="text-lg leading-relaxed">-Element
    console.log($(this).text());
});        
`}
                </code></pre>

                <h3 class="text-xl font-semibold mt-4">Innerhalb von Event-Handlern</h3>
                <p class="text-lg leading-relaxed">In Event-Handlern wie .click(), .hover(), etc., verweist this auf das DOM-Element, auf das das Event angewendet wurde. Dies ermöglicht es, auf das auslösende Element zuzugreifen.</p>
                <pre><code className="language-javascript">
{`
$("button").click(function() {
    // In diesem Kontext verweist "this" auf das geklickte Button-Element
    $(this).addClass("geklickt");
});        
`}
                </code></pre>

                <p class="text-lg leading-relaxed">Die Verwendung von this ist eine leistungsstarke Technik in jQuery, um auf Elemente zuzugreifen und Operationen auf ihnen durchzuführen. Es ermöglicht Ihnen, dynamisch auf Benutzerinteraktionen zu reagieren und Elemente basierend auf Ereignissen zu ändern. Beachten Sie jedoch, dass this im Kontext von Funktionen unterschiedlich sein kann, daher ist es wichtig zu verstehen, wie es in Ihrem speziellen Anwendungsfall verwendet wird.</p>

                <h3 class="text-xl font-semibold mt-4">this oder $(this)</h3>
                <p class="text-lg leading-relaxed">In jQuery gibt es einen wichtigen Unterschied zwischen this und $(this).</p>
                <h4>this</h4>
                <p class="text-lg leading-relaxed">this ist ein Schlüsselwort in JavaScript, das auf das aktuelle DOM-Element verweist, auf das eine Funktion angewendet wird. Es ist ein nacktes DOM-Element und hat keine jQuery-Funktionalität. Wenn Sie beispielsweise eine Funktion in einem Event-Handler verwenden, verweist this auf das DOM-Element, das das Ereignis ausgelöst hat.</p>
                <pre><code className="language-javascript">
{`
$("button").click(function() {
    // "this" verweist auf das geklickte DOM-Element
    console.log(this); // Zeigt das DOM-Element an
});    
`}
                </code></pre>

                <h4>$(this)</h4>
                <p class="text-lg leading-relaxed">$(this) ist ein jQuery-Objekt, das aus dem DOM-Element erstellt wird, auf das this verweist. Es ist ein vollständiges jQuery-Objekt und verfügt über alle jQuery-Funktionen und -Methoden. Wenn Sie $(this) verwenden, können Sie jQuery-Methoden wie .css(), .addClass(), .text(), usw. auf das Element anwenden.</p>
                <pre><code className="language-javascript">
{`
$("button").click(function() {
    // "$(this)" ist ein jQuery-Objekt
    $(this).addClass("geklickt"); // Fügt eine CSS-Klasse hinzu
    $(this).text("Geklickt!"); // Ändert den Text
});        
`}
                </code></pre>

                <p class="text-lg leading-relaxed">Der Hauptunterschied besteht darin, dass this ein nacktes DOM-Element ist und $(this) ein jQuery-Objekt ist. Wenn Sie jQuery-spezifische Operationen auf das Element anwenden möchten, müssen Sie $(this) verwenden, um darauf zuzugreifen. Andernfalls können Sie this verwenden, um auf das DOM-Element selbst zuzugreifen, ohne die jQuery-Funktionalität zu verwenden. Die Wahl zwischen this und $(this) hängt von den Anforderungen Ihres Codes ab.</p>

                <br /><br /><br />

                <p class="text-lg leading-relaxed">jQuery bietet viele weitere Funktionen und Möglichkeiten, um die Interaktion mit HTML-Elementen und DOM-Manipulation zu vereinfachen. Es ist eine leistungsfähige und weit verbreitete Bibliothek, die die Webentwicklung erleichtert.</p>

                <h1 class="text-3xl font-bold">CSS Selektoren</h1>
                <p class="text-lg leading-relaxed">CSS-Selektoren sind Muster oder Regeln, die in Cascading Style Sheets (CSS) verwendet werden, um HTML- oder XML-Elemente auf einer Webseite auszuwählen und ihnen Stilregeln zuzuweisen. Sie ermöglichen die gezielte Auswahl von HTML-Elementen, um ihre Darstellung und Präsentation zu ändern. CSS-Selektoren sind ein wesentlicher Bestandteil der Webentwicklung und sind hilfreich, um das Erscheinungsbild einer Webseite zu gestalten.</p>

                <h2 class="text-2xl font-semibold mt-4">Elementselektor</h2>
                <p class="text-lg leading-relaxed">Dies ist der einfachste Selektor und wählt alle Instanzen eines bestimmten HTML- oder XML-Elements aus.</p>
                <pre><code className="language-css">
{`
p {
    /* Stilregeln für alle <p> Elemente */
}
`}                 
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Klassen-Selektor</h2>
                <p class="text-lg leading-relaxed">Mit diesem Selektor können Sie Elemente auswählen, die eine bestimmte CSS-Klasse haben.</p>
                <pre><code className="language-css">
{`
.meine-klasse {
    /* Stilregeln für Elemente mit der Klasse "meine-klasse" */
}
`}                  
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">ID-Selektor</h2>
                <p class="text-lg leading-relaxed">Dieser Selektor wählt ein einzelnes Element mit einer bestimmten ID aus.</p>
                <pre><code className="language-css">
{`#meine-id {
    /* Stilregeln für das Element mit der ID "meine-id" */
}
`}                
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Nachbarschafts-Selektoren</h2>
                <p class="text-lg leading-relaxed">Sie können Elemente auswählen, die bestimmte Beziehungen zu anderen Elementen haben. Zum Beispiel das erste {`<p>`}-Element innerhalb eines {`<div>`}.</p>
                <pre><code className="language-css">
{`
div > p:first-child {
    /* Stilregeln für das erste <p> innerhalb eines <div> */
}
`}                  
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Pseudo-Klassen-Selektoren</h2>
                <p class="text-lg leading-relaxed">Diese Selektoren ermöglichen die Auswahl von Elementen basierend auf ihrem Zustand oder ihrer Position. Zum Beispiel das erste Element einer Liste:</p>
                <pre><code className="language-css">
{`
li:first-child {
    /* Stilregeln für das erste <li> Element in einer Liste */
}
`}                  
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Attributselektoren</h2>
                <p class="text-lg leading-relaxed">Sie können Elemente basierend auf ihren Attributen auswählen. Zum Beispiel alle Links mit dem Attribut "href":</p>
                <pre><code className="language-css">
{`
a[href] {
    /* Stilregeln für Links mit einem "href" Attribut */
}
`}                  
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Pseudo-Element-Selektoren</h2>
                <p class="text-lg leading-relaxed">Diese Selektoren ermöglichen die Auswahl von Teilen eines Elements. Zum Beispiel den ersten Buchstaben eines Absatzes:</p>
                <pre><code className="language-css">
{`
p::first-letter {
    /* Stilregeln für den ersten Buchstaben eines <p> Elements */
}
`}                  
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Kombinierte Selektoren</h2>
                <p class="text-lg leading-relaxed">ie können mehrere Selektoren kombinieren, um spezifischere Auswahlregeln zu erstellen. Zum Beispiel ein {`<p class="text-lg leading-relaxed">`}-Element mit der Klasse "besonders" innerhalb eines {`<div>`}:</p>
                <pre><code className="language-css">
{`
div p.besonders {
    /* Stilregeln für <p> Elemente mit Klasse "besonders" innerhalb eines <div> */
}
`}                  
                </code></pre>

                <p class="text-lg leading-relaxed">CSS-Selektoren bieten eine leistungsstarke Möglichkeit, das Erscheinungsbild von Webseiten zu steuern und bestimmte Teile der Webseite gezielt anzusprechen. Sie sind ein grundlegendes Konzept in der Webentwicklung und werden in Verbindung mit CSS-Regeln verwendet, um das Layout und die Darstellung von Webseiten anzupassen.</p>

                <h1 class="text-3xl font-bold">Automatische Pull Quotes</h1>
                <p class="text-lg leading-relaxed">"Automatische Pull Quotes" (auch als "Auto-Pull-Zitate" oder "Auto-Pull-Texte" bezeichnet) sind eine Technik in der Webentwicklung, bei der jQuery oder JavaScript verwendet wird, um Zitate oder Textausschnitte aus einem vorhandenen Textabschnitt auf einer Webseite zu extrahieren und sie auffällig darzustellen.</p>

                <h2 class="text-2xl font-semibold mt-4">Umsetzung</h2>
                <h3 class="text-xl font-semibold mt-4">Text extrahieren</h3>
                <p class="text-lg leading-relaxed">Zuerst wird der Text eines Abschnitts oder Artikels mithilfe von jQuery oder JavaScript extrahiert. Dies kann durch Auswählen des Textinhalts aus einem HTML-Element erfolgen.</p>

                <h3 class="text-xl font-semibold mt-4">Text analysieren:</h3>
                <p class="text-lg leading-relaxed">Der extrahierte Text wird analysiert, um Sätze oder Abschnitte zu identifizieren, die als "pull-worthy" angesehen werden. Dies kann durch das Erkennen von Schlüsselwörtern, Zeichenfolgen oder Satzstrukturen geschehen.</p>

                <h3 class="text-xl font-semibold mt-4">Zitat erstellen</h3>
                <p class="text-lg leading-relaxed">Sobald ein zitierfähiger Satz identifiziert ist, wird ein neues HTML-Element (z.B. {`<blockquote>`}) erstellt oder ein vorhandenes Element verwendet, um das Zitat darzustellen. Das Zitat wird in dieses Element eingefügt.</p>

                <h3 class="text-xl font-semibold mt-4">Stil anwenden</h3>
                <p class="text-lg leading-relaxed">Das Zitat wird oft stilisiert, um es von normalen Text zu unterscheiden. Dies kann die Anwendung von CSS-Stilen wie Hervorhebung, Hintergrundfarben oder Schriftgrößen umfassen.</p>

                <h3 class="text-xl font-semibold mt-4">Positionierung</h3>
                <p class="text-lg leading-relaxed">Das Zitat wird an einer auffälligen Stelle auf der Webseite platziert, normalerweise neben oder innerhalb des Abschnitts, aus dem es extrahiert wurde. Dies kann durch das Hinzufügen von HTML- oder CSS-Klassen gesteuert werden.</p>

                <h3 class="text-xl font-semibold mt-4">Interaktion</h3>
                <p class="text-lg leading-relaxed">In einigen Fällen können automatische Pull Quotes interaktiv gestaltet sein, sodass der Benutzer auf das Zitat klicken oder darüber schweben kann, um den vollen Text anzuzeigen oder auf die zugehörige Quelle zu verlinken.</p>

                <p class="text-lg leading-relaxed">Automatische Pull Quotes dienen dazu, wichtige Informationen in einem Text hervorzuheben und sie für den Leser leicht zugänglich zu machen. Sie verbessern die Benutzererfahrung und können dazu beitragen, dass bestimmte Aussagen oder Zitate besser wahrgenommen werden. Diese Technik wird oft in Kombination mit jQuery oder JavaScript verwendet, um die automatische Extraktion und Darstellung von Zitaten zu ermöglichen.</p>

                
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
