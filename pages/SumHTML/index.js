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
          Einführung in <span className='text-accent'> HTML</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
                
                <h2 class="text-2xl font-semibold mt-4">Das Internet</h2>

                <p class="text-lg leading-relaxed">Webseiten im Internet sind durch ein Netzwerk von Servern und Technologien miteinander verbunden, die es ermöglichen, Inhalte zu speichern, abzurufen und anzuzeigen. Hier ist ein Überblick darüber, wie dieser Prozess funktioniert:</p>

                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><h2 class="font-semibold mt-2">Webserver und Hosting</h2></li>
                    <li><p>Webseiten bestehen aus verschiedenen Dateien wie HTML, CSS, JavaScript und Bildern. Diese Dateien werden auf einem Webserver gespeichert, einem spezialisierten Computer, der konzipiert ist, um Anfragen zu bearbeiten und darauf zu reagieren. Hosting bezeichnet den Prozess des Speicherns dieser Dateien auf einem Server, so dass sie über das Internet zugänglich sind.</p></li>

                    <li><h2 class="font-semibold mt-2">Domainnamen und DNS</h2></li>
                    <li><p>Server werden über IP-Adressen identifiziert, welche numerisch sind und schwer zu merken. Deshalb verwenden wir Domainnamen (z.B. &quotgoogle.com&quot). Das Domain Name System (DNS) konvertiert diese benutzerfreundlichen Namen in IP-Adressen, sodass Browser die richtigen Server erreichen können.</p></li>

                    <li><h2 class="font-semibold mt-2">Anfrage und Antwort</h2></li>
                    <li><p>Wenn Sie eine Webseite besuchen, sendet Ihr Browser eine Anfrage an den entsprechenden Server. Diese Anfrage enthält die URL der Seite, die Sie besuchen möchten.</p></li>

                    <li><h2 class="font-semibold mt-2">Verarbeitung der Anfrage</h2></li>
                    <li><p>Nachdem der Server die Anfrage erhalten hat, verarbeitet er sie. Dies kann das Ausführen von Skripten beinhalten, um dynamische Inhalte für die Webseite zu generieren.</p></li>

                    <li><h2 class="font-semibold mt-2">Senden der Antwort</h2></li>
                    <li><p>Der Server antwortet dem Browser mit der angeforderten Webseite, einschließlich HTML, CSS, JavaScript und anderen Medien.</p></li>

                    <li><h2 class="font-semibold mt-2">Rendering der Webseite</h2></li>
                    <li><p>Der Browser interpretiert die erhaltenen Daten und zeigt die Webseite entsprechend an.</p></li>

                    <li><h2 class="font-semibold mt-2">Interaktion mit der Webseite</h2></li>
                    <li><p>Nachdem die Seite geladen ist, können Sie mit ihr interagieren, z.B. durch Anklicken von Links oder Ausfüllen von Formularen. Diese Aktionen können weitere Anfragen an den Server auslösen.</p></li>
                </ul>

                <p class="text-lg leading-relaxed">In diesem gesamten Prozess ist der Server entscheidend für die Bereitstellung und Verwaltung der Inhalte, die Sie auf Webseiten sehen und mit denen Sie interagieren.</p>

                <h2 class="text-2xl font-semibold mt-4">Was ist HTML</h2>
                <p class="text-lg leading-relaxed">HTML, kurz für Hypertext Markup Language, ist die Standard-Markupsprache, die zum Erstellen von Webseiten verwendet wird. HTML-Elemente sind die Bausteine von Webseiten, und sie geben dem Webbrowser Anweisungen, wie Inhalte auf einer Webseite angezeigt werden sollen. Hier ist eine grundlegende Erklärung, was HTML ist und wie es verwendet wird:</p>

                <h3 class="text-xl font-semibold mt-4">Grundkonzept von HTML</h3>
                <p class="text-lg leading-relaxed">Struktur von Webseiten: HTML definiert die Struktur und den Inhalt einer Webseite durch sogenannte &quotTags&quot. Diese Tags kennzeichnen verschiedene Teile der Inhalte, wie Überschriften, Absätze, Links, Bilder, Listen und vieles mehr.</p>
                <p class="text-lg leading-relaxed">Tags und Elemente: Ein HTML-Element besteht typischerweise aus einem Start-Tag (z.B. {`<p>`} für einen Absatz), dem Inhalt (z.B. Text) und einem End-Tag (z.B. {`</p>`}). Einige Elemente benötigen kein End-Tag (z.B. das {`<img`}-Tag für Bilder).</p>
                <p class="text-lg leading-relaxed">Verschachtelung von Elementen: HTML-Elemente können verschachtelt werden, was bedeutet, dass ein Element innerhalb eines anderen Elements platziert werden kann. Dies hilft, komplexe Layouts und Strukturen zu erstellen.</p>

                <h3 class="text-xl font-semibold mt-4">Grundlegende Verwendung von HTML</h3>
                <p class="text-lg leading-relaxed">HTML-Dokumentstruktur: Ein typisches HTML-Dokument beginnt mit einer Deklaration ({`<!DOCTYPE html>`}), gefolgt von einem {`<html>`}-Element, das den gesamten Inhalt der Webseite umfasst. Innerhalb des {`<html>`}-Tags befinden sich das {`<head>`}-Tag, das Metadaten und Verweise auf externe Ressourcen enthält, und das {`<body>`}-Tag, das den sichtbaren Inhalt der Webseite darstellt.</p>
                <p class="text-lg leading-relaxed">Erstellen von Inhalten: Innerhalb des {`<body>`}-Tags können Sie verschiedene HTML-Tags verwenden, um Inhalte wie Text, Bilder, Videos, Links und Formulare zu erstellen. Zum Beispiel:</p>
                <ul>
                    <li>{`<p>`} für Absätze.</li>
                    <li>{`<h1>`}, {`<h2>`}, {`<h3>`} usw. für Überschriften.</li>
                    <li>{`<a href="URL">`} für Links.</li>
                    <li>{`<img src="image-path">`} für Bilder.</li>
                </ul>
                <p class="text-lg leading-relaxed">Attribute: HTML-Tags können Attribute enthalten, die zusätzliche Informationen oder Funktionen bieten. Zum Beispiel gibt das href-Attribut im {`<a>`}-Tag die URL an, auf die der Link verweisen soll.</p>
                <p class="text-lg leading-relaxed">Seitenlayout und Stil: Während HTML die Struktur einer Seite definiert, wird ihr Aussehen und Layout typischerweise mit Cascading Style Sheets (CSS) gestaltet. CSS kann entweder direkt in HTML-Dokumente eingebettet oder als separate Datei verlinkt werden.</p>
                <p class="text-lg leading-relaxed">Interaktivität: Für interaktive Funktionen oder dynamische Inhalte wird oft JavaScript zusammen mit HTML verwendet. JavaScript kann direkt in HTML-Dokumente eingebettet oder als separate Datei eingefügt werden.</p>

                <h3 class="text-xl font-semibold mt-4">HTML lernen und verwenden</h3>
                <p class="text-lg leading-relaxed">Einführung und Übung: Es gibt viele Online-Ressourcen, Tutorials und Kurse, die Anfängern helfen, HTML zu lernen. Übung ist der Schlüssel – beginnen Sie mit einfachen Webseiten und experimentieren Sie mit verschiedenen Tags und Attributen.</p>
                <p class="text-lg leading-relaxed">Webentwicklungswerkzeuge: Moderne Webbrowser bieten Entwicklertools, mit denen Sie HTML-Code inspizieren und debuggen können, was beim Lernen und Entwickeln von Webseiten sehr hilfreich ist.</p>
                <p class="text-lg leading-relaxed">HTML ist das Fundament des Webdesigns und die Grundlage für das Erstellen von Webseiten. Mit einem soliden Verständnis von HTML können Sie Ihre eigenen Webseiten erstellen und die Grundlagen für weiterführende Technologien wie CSS und JavaScript legen.</p>

                <h2 class="text-2xl font-semibold mt-4">Das erste HTML Programm</h2>
                <pre><code className="language-html">
                    {`
<html>
    <head>
        <title>Meine erste Webseite</title>
    </head>
    <body>
        <h1>Meine erste Webseite</h1>
        <p>Willkommen auf meiner ersten Webseite.</p>
</body>
</html>
                    `}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Strukturierung von HTML mit Quelldateien</h2>

                <p class="text-lg leading-relaxed">HTML-Dokument: Ein HTML-Dokument ist eine Datei, die den HTML-Code enthält. Diese Datei hat typischerweise die Erweiterung .html oder .htm. Der Inhalt der Datei folgt der HTML-Syntax und -Struktur.</p>

                <p class="text-lg leading-relaxed">rundlegende Struktur: Ein HTML-Dokument beginnt mit einer Dokumenttypdeklaration ({`<!DOCTYPE html>`}), gefolgt von einem Wurzelelement ({`<html>`}). Innerhalb des {`<html>`}-Elements gibt es zwei Hauptteile:</p>
                <ul>
                    <li>{`<head>`}: Enthält Metadaten, Titel der Seite ({`<title>`}), Links zu CSS-Dateien, Skripten und anderen Meta-Informationen.</li>
                    <li>{`<body>`}: Enthält den sichtbaren Inhalt der Webseite wie Text, Bilder, Links, usw.</li>
                </ul>

                <p class="text-lg leading-relaxed">Externe Ressourcen: HTML-Dokumente können externe Ressourcen wie CSS-Dateien, JavaScript-Dateien, Bilder, Fonts usw. einbinden. Dies geschieht durch entsprechende Tags wie {`<ink>`} für CSS-Dateien oder {`<script>`} für JavaScript-Dateien.</p>

                <h2 class="text-2xl font-semibold mt-4">Interpretation von HTML durch den Browser</h2>
                <p class="text-lg leading-relaxed">Anfrage und Empfang: Wenn ein Nutzer eine URL in den Browser eingibt, lädt der Browser das entsprechende HTML-Dokument vom Server.</p>
                <p class="text-lg leading-relaxed">Parsing des HTML-Dokuments: Der Browser liest das HTML-Dokument und erstellt eine Struktur im Speicher, den sogenannten Document Object Model (DOM). Der DOM repräsentiert die Struktur der Webseite.</p>
                <p class="text-lg leading-relaxed">Rendering: Basierend auf dem DOM rendert der Browser die Seite. Während dieses Prozesses werden auch CSS-Stile angewendet und JavaScript-Code ausgeführt, falls vorhanden.</p>
                <p class="text-lg leading-relaxed">Dynamische Änderungen: Der Browser kann den DOM dynamisch ändern, entweder durch Benutzerinteraktionen oder durch JavaScript-Code. Dies führt zu einer Aktualisierung der angezeigten Seite.</p>

                <h2 class="text-2xl font-semibold mt-4">Rolle von Attributen in HTML</h2>
                <p class="text-lg leading-relaxed">Zusätzliche Informationen: Attribute in HTML-Elementen bieten zusätzliche Informationen über das Element. Beispielsweise kann das src-Attribut in einem {`<img>`}-Tag den Pfad zu einem Bild angeben.</p>
                <p class="text-lg leading-relaxed">Steuern des Verhaltens: Attribute können auch das Verhalten oder die Darstellung eines Elements beeinflussen. Zum Beispiel legt das href-Attribut in einem {`<a>`}-Tag die URL fest, auf die der Link verweist.</p>
                <p class="text-lg leading-relaxed">Verwendung in CSS und JavaScript: Attribute werden oft in CSS und JavaScript verwendet, um auf spezifische Elemente zuzugreifen und sie zu manipulieren. Zum Beispiel können Klassen- (class) und ID-Attribute (id) zur Identifizierung und Auswahl von Elementen für Stiländerungen oder interaktive Funktionalitäten genutzt werden.</p>


                <p class="text-lg leading-relaxed">Zusammenfassend ist HTML die grundlegende Sprache, die zur Erstellung von Webseiten verwendet wird. Durch die Strukturierung des Codes in Quelldateien, die Interpretation durch den Browser und die Verwendung von Attributen, um zusätzliche Informationen und Verhaltensweisen zu definieren, ermöglicht HTML die Erstellung vielfältiger und interaktiver Webseiten.</p>

                <h1 class="text-3xl font-bold">Webseiten bauen</h1>
                <h2 class="text-2xl font-semibold mt-4">Schritt 1: Grundlegende Einrichtung</h2>
                <p class="text-lg leading-relaxed">Texteditor vorbereiten: Installieren Sie einen einfachen Texteditor wie Notepad (Windows), TextEdit (Mac) oder einen spezialisierten Code-Editor wie Visual Studio Code, Sublime Text oder Atom.</p>
                <p class="text-lg leading-relaxed">Datei erstellen: Öffnen Sie Ihren Texteditor und erstellen Sie eine neue Datei. Speichern Sie diese Datei auf Ihrem Computer mit der Erweiterung .html, z.B. meineErsteSeite.html.</p>

                <h2 class="text-2xl font-semibold mt-4">Schritt 2: Grundgerüst des HTML-Dokuments</h2>
                <p class="text-lg leading-relaxed">Doctype deklarieren: Beginnen Sie Ihre HTML-Datei mit der Doctype-Deklaration. Diese Zeile teilt dem Browser mit, dass es sich um eine HTML5-Dokument handelt:</p>
                <pre><code className="language-html">
                    {`
<!DOCTYPE html>
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">HTML-Struktur erstellen: Fügen Sie das {`<html>`}-Tag hinzu, das den Anfang und das Ende Ihres HTML-Dokuments markiert:</p>
                <pre><code className="language-html">
                    {`
<html>
</html>
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Head-Bereich hinzufügen: Innerhalb des {`<html>`}-Tags fügen Sie den {`<head>`}-Bereich hinzu. Im {`<head>`} befinden sich Meta-Informationen, Titel der Seite und Verweise auf externe Dateien:</p>
                <pre><code className="language-html">
                    {`
<head>
    <title>Meine erste Webseite</title>
</head>
                    `}        
                </code></pre>

                <p class="text-lg leading-relaxed">Body-Bereich hinzufügen: Nach dem {`<head>`}-Bereich fügen Sie den {`<body>`}-Bereich hinzu. Hier wird der sichtbare Inhalt Ihrer Webseite eingefügt:</p>
                <pre><code className="language-html">
                    {`
<body>
</body> 
                    `}       
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Schritt 3: Inhalt hinzufügen</h2>
                <p class="text-lg leading-relaxed">Überschriften und Absätze: Fügen Sie im {`<body>`}-Bereich Text, Überschriften und Absätze hinzu. Verwenden Sie hierfür {`<h1>`} für die Hauptüberschrift und {`<p>`} für Absätze:</p>
                <pre><code className="language-html">
                    {`
<body>
    <h1>Willkommen auf meiner ersten Webseite!</h1>
    <p>Dies ist ein Absatz auf meiner ersten Webseite.</p>
</body>
                    `}        
                </code></pre>

                <p class="text-lg leading-relaxed">Links einfügen: Um einen Link hinzuzufügen, verwenden Sie das {`<a>`}-Tag:</p>
                <pre><code className="language-html">
                    {`
<p>Besuchen Sie <a href="https://www.example.com">diese Webseite</a> für mehr Informationen.</p>
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Bilder einbinden: Um ein Bild einzufügen, nutzen Sie das {`<img>`}-Tag. Ersetzen Sie bildpfad.jpg durch den Pfad zu Ihrem Bild:</p>
                <pre><code className="language-html">
                    {`
<img src="bildpfad.jpg" alt="Beschreibung des Bildes">
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Listen erstellen: Für eine Aufzählungsliste verwenden Sie {`<ul>`} (unordered list) und {`<li>`} (list item):</p>
                <pre><code className="language-html">
                    {`
<ul>
    <li>Listenelement 1</li>
    <li>Listenelement 2</li>
    <li>Listenelement 3</li>
</ul>
                    `}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">Ihre Webseite anzeigen</h2>
                <p class="text-lg leading-relaxed">Datei speichern: Speichern Sie Ihre HTML-Datei nach jeder Änderung.</p>
                <p class="text-lg leading-relaxed">Im Browser öffnen: Öffnen Sie die Datei in einem Webbrowser, indem Sie die Datei in den Browser ziehen oder mit Rechtsklick „Öffnen mit“ wählen und dann Ihren Browser auswählen.</p>

                <h2 class="text-2xl font-semibold mt-4">Experimentieren und Erweitern</h2>
                <p class="text-lg leading-relaxed">Weitere HTML-Elemente erforschen: Experimentieren Sie mit anderen HTML-Elementen wie {`<table>`} für Tabellen, {`<form>`} für Formulare usw.</p>
                <p class="text-lg leading-relaxed">CSS und JavaScript einbinden: Wenn Sie sich mit dem grundlegenden HTML vertraut gemacht haben, können Sie beginnen, CSS für das Styling und JavaScript für interaktive Elemente zu lernen und einzusetzen.</p>
                <p class="text-lg leading-relaxed">Online-Ressourcen nutzen: Nutzen Sie Online-Tutorials, Dokumentationen und Kurse, um Ihre Fähigkeiten weiterzuentwickeln.</p>

                <p class="text-lg leading-relaxed">Das Erstellen einer einfachen HTML-Seite ist ein toller erster Schritt in die Welt des Webdesigns.</p>

                <h1 class="text-3xl font-bold">CSS</h1>
                <p class="text-lg leading-relaxed">CSS, kurz für Cascading Style Sheets, ist eine Stilsprache, die verwendet wird, um das Erscheinungsbild und Layout von Webseiten zu gestalten. Während HTML die Struktur und den Inhalt einer Webseite definiert, bestimmt CSS, wie diese Elemente optisch dargestellt werden. Hier ist eine grundlegende Einführung in CSS, inklusive seiner Verwendung und Beispiele.</p>

                <h2 class="text-2xl font-semibold mt-4">Was ist CSS und wofür wird es verwendet?</h2>
                <p class="text-lg leading-relaxed">Layout und Design: CSS ermöglicht es Ihnen, das Layout Ihrer Webseite zu gestalten. Dazu gehören Aspekte wie die Positionierung von Elementen, Abstände, Ausrichtung und vieles mehr.</p>
                <p class="text-lg leading-relaxed">Farben und Schriftarten: Mit CSS können Sie die Farben und Schriftarten Ihrer Webseite anpassen, um ein einheitliches und ansprechendes Design zu schaffen.</p>
                <p class="text-lg leading-relaxed">Reaktionsfähigkeit: CSS wird auch verwendet, um Webseiten responsiv zu machen, d.h., sie passen ihr Layout automatisch an verschiedene Bildschirmgrößen und Geräte an.</p>
                <p class="text-lg leading-relaxed">Verbesserung der Benutzererfahrung: Durch stilistische Verbesserungen verbessert CSS die Benutzererfahrung, indem es die Lesbarkeit und Zugänglichkeit der Webseite erhöht.</p>

                <h2 class="text-2xl font-semibold mt-4">Grundlegende Verwendung von CSS</h2>
                <p class="text-lg leading-relaxed">CSS kann auf drei Arten in eine Webseite eingebunden werden: Inline, intern und extern</p>
                <p class="text-lg leading-relaxed">Inline-CSS: Hier wird der Stil direkt im HTML-Element über das style-Attribut angewendet. Beispiel:</p>
                <pre><code className="language-html">
                    {`
<p style="color: blue; font-size: 18px;">Dieser Text ist blau und 18px groß.</p>
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Internes CSS: Dieses wird im {`<head>`}-Bereich des HTML-Dokuments innerhalb eines {`<style>`}-Tags geschrieben. Beispiel:</p>
                <pre><code className="language-html">
                    {`
<style>
    p {
        color: red;
        font-size: 16px;
    }
</style>
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">Externes CSS: Bei dieser Methode wird CSS in einer separaten .css-Datei geschrieben und im HTML-Dokument verlinkt.</p>
                <pre><code className="language-css">
                    {`
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}
h1 {
    color: green;
}
                    `}
                </code></pre>
                <p class="text-lg leading-relaxed">HTML-Datei:</p>
                <pre><code className="language-html">
                    {`
<link rel="stylesheet" href="styles.css">
                    `}
                </code></pre>

                <h2>Beispiele für die Verwendung von CSS</h2>
                <p class="text-lg leading-relaxed">Farbgestaltung</p>
                <pre><code className="language-css">
                    {`
p {
    color: #333333; /* Dunkelgrauer Text */
}
                    `}
                </code></pre>
                <p class="text-lg leading-relaxed">Schriftart und -größe:</p>
                <pre><code className="language-css">
                    {`
h1 {
    font-family: 'Helvetica', sans-serif;
    font-size: 24px;
}
                    `}
                    
                </code></pre>
                <p class="text-lg leading-relaxed">Layout mit Flexbox:</p>
                <pre><code className="language-css">
                    {`
.container {
    display: flex;
    justify-content: space-between;
}
                    `}
                    
                </code></pre>
                <p class="text-lg leading-relaxed">Styling von Links:</p>
                <pre><code className="language-css">
                    {`
a:hover {
    color: red;
    text-decoration: underline;
}
                    `}
                </code></pre>
                <p class="text-lg leading-relaxed">Responsive Design:</p>
                <pre><code className="language-css">
                    {`
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
                    `}
                </code></pre>

                <p class="text-lg leading-relaxed">CSS ist ein mächtiges Werkzeug im Webdesign, das Ihnen ermöglicht, Ihre Webseite nicht nur funktional, sondern auch visuell ansprechend zu gestalten. Mit der Zeit und Übung können Sie komplexe Layouts erstellen und Ihre Webseite für eine Vielzahl von Geräten und Bildschirmgrößen optimieren.</p>

                <h1 class="text-3xl font-bold">Vererbung</h1>

                <p class="text-lg leading-relaxed">Die Vererbung in HTML und CSS ist ein wichtiges Konzept, das bestimmt, wie Stileigenschaften von einem Element auf seine Nachkommen angewendet werden. Verständnis der Vererbung hilft dabei, effizienteres und konsistenteres Design für Webseiten zu erstellen.</p>

                <h2 class="text-2xl font-semibold mt-4">Vererbung in HTML und CSS</h2>
                <p class="text-lg leading-relaxed">In CSS werden viele Stileigenschaften von einem Elternelement an seine Kind-Elemente &quotvererbt&quot. Das bedeutet, dass, wenn Sie eine bestimmte Stileigenschaft (wie Schriftart, Farbe, usw.) für ein Elternelement festlegen, diese Eigenschaft standardmäßig auch auf alle Kind-Elemente innerhalb dieses Elternelements angewendet wird.</p>
                <p class="text-lg leading-relaxed">Beispiel der Vererbung: Wenn Sie im {`<body>`}-Tag die Schriftart festlegen, wird diese Schriftart auf alle Textelemente innerhalb des {`<body>`} angewendet, es sei denn, sie wird von einem spezifischeren Stil überschrieben.</p>
                <pre><code className="language-css">
                    {`
body {
    font-family: Arial, sans-serif;
}
                    `}       
                </code></pre>
                <p class="text-lg leading-relaxed">In diesem Beispiel erben alle Textelemente im Body (wie {`<p>`}, {`<h1>`}) die Arial-Schriftart, es sei denn, sie haben eine eigene Schriftartendeklaration.</p>

                <p class="text-lg leading-relaxed">Vererbung und Spezifität: Vererbte Stile können von spezifischeren CSS-Regeln überschrieben werden. Wenn beispielsweise ein inneres Element eine eigene Stilregel für die Schriftart hat, wird diese Regel die vererbte Schriftart überschreiben.</p>

                <p class="text-lg leading-relaxed">Nicht vererbte Eigenschaften: Nicht alle CSS-Eigenschaften werden vererbt. Zum Beispiel werden Margin (Außenabstand) und Padding (Innenabstand) nicht vererbt. Jedes Element hat seine eigenen Margin- und Padding-Einstellungen, unabhängig von seinen Elternelementen.</p>

                <p class="text-lg leading-relaxed">Verwendung der inherit-Wert: Manchmal möchten Sie explizit, dass eine Eigenschaft den Wert ihres Elternelements erbt. Dazu können Sie den Wert inherit für eine Eigenschaft festlegen. Beispiel:</p>
                <pre><code className="language-css">
                    {`
h1 {
    color: inherit;
}
                    `}       
                </code></pre>
                <p class="text-lg leading-relaxed">Hier wird das {`<h1>`}-Tag die Textfarbe seines Elternelements erben.</p>

                <h2 class="text-2xl font-semibold mt-4">Vorteile der Vererbung</h2>
                <p class="text-lg leading-relaxed">Konsistenz: Durch Vererbung können Sie ein einheitliches Erscheinungsbild für Ihre Webseite erzeugen, indem Sie allgemeine Stile für Elternelemente definieren, die sich auf die Kind-Elemente auswirken.</p>
                <p class="text-lg leading-relaxed">Weniger Code: Vererbung reduziert die Notwendigkeit, denselben Stil mehrmals zu definieren, was den CSS-Code schlanker und wartbarer macht.</p>

                <h2 class="text-2xl font-semibold mt-4">Umgang mit Vererbung</h2>
                <p class="text-lg leading-relaxed">Verständnis der Vererbungskette: Es ist wichtig zu verstehen, wie Vererbungsketten funktionieren, um unerwartetes Verhalten zu vermeiden und die gewünschten Stiländerungen effektiv umzusetzen.</p>
                <p class="text-lg leading-relaxed">Kaskade und Spezifität beachten: Die Kaskade und Spezifität in CSS bestimmen, welche Stile letztendlich angewendet werden, insbesondere wenn es konkurrierende Deklarationen gibt.</p>

                <p class="text-lg leading-relaxed">Zusammenfassend spielt die Vererbung in HTML und CSS eine zentrale Rolle bei der Gestaltung und Verwaltung von Webseitenstilen. Sie ermöglicht ein konsistentes Design, reduziert Redundanzen und trägt zu einem effizienten Styling-Prozess bei.</p>
            
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
