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
          Vorlesung <span className='text-accent'> 3</span><br />
          JavaScript <span className='text-accent'> Grundlagen</span><br />
          Strings und Eingaben <br />


        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
                
                <h1 class="text-3xl font-bold">Strings</h1>
                <p class="text-lg leading-relaxed">Strings sind in JavaScript eine grundlegende Datentyp, die verwendet werden, um Text und Zeichenketten zu repräsentieren. In JavaScript können Strings auf zwei Arten erstellt werden: als primitive Zeichenkette oder als String-Objekt. Hier ist eine Erklärung beider Varianten.</p>

                <h2 class="text-2xl font-semibold mt-4">Primitive Zeichenkette</h2>
                <p class="text-lg leading-relaxed">Eine primitive Zeichenkette ist der einfachste und häufigste Weg, Strings in JavaScript zu erstellen. Sie können primitive Zeichenketten durch das Umgeben von Text mit einfachen Anführungszeichen (&apos;) oder doppelten Anführungszeichen (&quot;) erstellen.</p>
                <pre><code className="language-javascript">
                {`
const greeting = 'Hallo, Welt!'; // Verwendung von einfachen Anführungszeichen
const message = "Das ist ein Text."; // Verwendung von doppelten Anführungszeichen
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">Eigenschaften von primitiven Zeichenketten:</p>
                <p class="text-lg leading-relaxed">Unveränderlich: Primitive Zeichenketten sind unveränderlich, was bedeutet, dass Sie den Inhalt einer vorhandenen Zeichenkette nicht ändern können. Sie können jedoch neue Zeichenketten durch Konkatenation erstellen</p>
                <pre><code className="language-javascript">
                {`
const name = 'Alice';
const greeting = 'Hallo, ' + name; // Neue Zeichenkette durch Konkatenation
                `}
                </code></pre>

                <h2 class="text-2xl font-semibold mt-4">String-Objekt</h2>
                <p class="text-lg leading-relaxed">String-Objekte sind spezielle Objekte in JavaScript, die zusätzliche Methoden und Eigenschaften für die Arbeit mit Zeichenketten bereitstellen. Sie können ein String-Objekt erstellen, indem Sie den String-Konstruktor verwenden.</p>
                <pre><code className="language-javascript">
                {`
const strObject = new String('Dies ist ein String-Objekt.');
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">Eigenschaften von String-Objekten:</p>
                <p class="text-lg leading-relaxed">Methoden: String-Objekte bieten eine Vielzahl von nützlichen Methoden zur Manipulation von Zeichenketten, z. B. length, charAt(), substring(), toUpperCase(), toLowerCase(), usw.</p>
                <pre><code className="language-javascript">
                {`
const text = 'JavaScript ist eine großartige Sprache.';
const length = text.length; // Länge der Zeichenkette
const firstChar = text.charAt(0); // Erstes Zeichen
const subString = text.substring(0, 10); // Teilzeichenkette von Index 0 bis 9
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">Eigenschaften: String-Objekte haben Eigenschaften, die Informationen über die Zeichenkette bereitstellen, z. B. length für die Länge der Zeichenkette.</p>
                <pre><code className="language-javascript">
                {`
const text = 'Dies ist ein Beispiel.';
const len = text.length; // Länge der Zeichenkette
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">Es ist wichtig zu beachten, dass JavaScript automatisch primitive Zeichenketten in String-Objekte umwandeln kann und umgekehrt. Dieser Prozess wird als &quot;Implizite String-Umwandlung&quot; bezeichnet.</p>
                <pre><code className="language-javascript">
                {`
const primitiveString = 'Hallo';
const stringObject = new String(primitiveString); // Konvertierung in ein String-Objekt
const backToPrimitive = stringObject.toString(); // Konvertierung zurück in eine primitive Zeichenkette
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">In den meisten Fällen werden primitive Zeichenketten bevorzugt, da sie einfacher zu handhaben sind. Sie können jedoch String-Objekte verwenden, wenn Sie zusätzliche Funktionen zur Arbeit mit Zeichenketten benötigen.</p>

                <h2 class="text-2xl font-semibold mt-4">String-Objekt Funktionen</h2>
                <h3 class="text-xl font-semibold mt-4">charAt()</h3>
                <p class="text-lg leading-relaxed">Diese Methode gibt das Zeichen an einer bestimmten Position in einem String zurück.</p>

                <h3 class="text-xl font-semibold mt-4">indexOf()</h3>
                <p class="text-lg leading-relaxed">Gibt den Index des ersten Vorkommens eines angegebenen Wertes in einem String zurück. Wenn der Wert nicht gefunden wird, gibt die Methode -1 zurück.</p>

                <h3 class="text-xl font-semibold mt-4">lastIndexOf()</h3>
                <p class="text-lg leading-relaxed">Ähnlich wie indexOf(), aber diese Methode gibt den Index des letzten Vorkommens eines angegebenen Wertes im String zurück.</p>

                <h3 class="text-xl font-semibold mt-4">substring()</h3>
                <p class="text-lg leading-relaxed">Diese Methode gibt einen Teilstring zurück, der zwischen zwei angegebenen Indizes liegt.</p>

                <h3 class="text-xl font-semibold mt-4">split()</h3>
                <p class="text-lg leading-relaxed">Diese Methode teilt einen String anhand eines Trennzeichens in ein Array von Substrings auf.</p>

                <h1 class="text-3xl font-bold">Formulare</h1>
                <p class="text-lg leading-relaxed">Das Arbeiten mit Formularen in HTML und JavaScript ermöglicht es Benutzern, Daten in Webanwendungen einzugeben und zu senden. Hier ist eine Schritt-für-Schritt-Erklärung, wie Sie Formulare in HTML erstellen und Daten mit JavaScript verarbeiten können:</p>

                <pre><code className="language-html">
                {`
<body>
    <h1>Formular Beispiel</h1>
    <>form id="myForm">
        <!-- Texteingabefeld -->
        <<>label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <!-- Optionsfelder (Radio-Buttons) -->
        <label>Geschlecht:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Männlich</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Weiblich</label><br><br>

        <!-- Auswahlmenü (Dropdown-Liste) -->
        <label for="country">Land:</label>
        <select id="country" name="country">
            <option value="germany">Deutschland</option>
            <option value="usa">USA</option>
            <option value="france">Frankreich</option>
        </select><br><br>

        <!-- Kontrollkästchen -->
        <label for="subscribe">Newsletter abonnieren:</label>
        <input type="checkbox" id="subscribe" name="newsletter"><br><br>

        <!-- Senden-Button -->
        <input type="submit" value="Absenden">
    </form>
</body>
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">In diesem Beispiel haben wir ein einfaches HTML-Formular erstellt, das die Eingabe von Name, Geschlecht, Land und die Option zum Abonnieren eines Newsletters ermöglicht.</p>

                <p class="text-lg leading-relaxed">JavaScript hinzufügen, um das Formular zu verarbeiten</p>

                <pre><code className="language-html">
                {`
<script>
    // Funktion zur Verarbeitung des Formulars
    function handleSubmit(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenneuladen)

        // Formulardaten abrufen
        const form = event.target;
        const name = form.elements.name.value;
        const gender = form.elements.gender.value;
        const country = form.elements.country.value;
        const newsletter = form.elements.newsletter.checked;

        // Verarbeitung der Daten (hier: Anzeige in der Konsole)
        console.log("Name: " + name);
        console.log("Geschlecht: " + gender);
        console.log("Land: " + country);
        console.log("Newsletter abonnieren: " + newsletter);
    }

    // Formular-Element abrufen und Event-Listener hinzufügen
    const form = document.getElementById("myForm");
    form.addEventListener("submit", handleSubmit);
</script>
                `}
                </code></pre>

                <p class="text-lg leading-relaxed">In diesem JavaScript-Code haben wir eine Funktion handleSubmit erstellt, die aufgerufen wird, wenn das Formular abgesendet wird. Die event.preventDefault()-Methode verhindert das Standardverhalten des Formulars (Seitenneuladen).</p>

                <p class="text-lg leading-relaxed">Wir rufen dann die Werte der Formularelemente ab, die der Benutzer eingegeben hat, und verarbeiten sie. In diesem Beispiel geben wir die Daten einfach in der Konsole aus, aber Sie können sie auch an einen Server senden oder anderweitig verwenden.</p>

                <p class="text-lg leading-relaxed">Schließlich fügen wir einen Event-Listener zum Formular hinzu, der die handleSubmit-Funktion aufruft, wenn das Formular abgesendet wird.</p>

                <p class="text-lg leading-relaxed">Mit diesen Schritten können Sie Benutzereingaben über Formulare in HTML und JavaScript erfassen und verarbeiten. Sie können die Verarbeitungsfunktion an Ihre Anforderungen anpassen, um die Daten in Ihrer Webanwendung zu verwenden oder an einen Server zu senden.</p>
            
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
