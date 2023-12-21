import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Change to your chosen theme
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Summary3 = () => {
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
          Vorlesung <span className='text-accent'> 2</span><br /> 
          JavaScript <span className='text-accent'> Grundlagen</span><br /> 
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            
            <div className="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">

                <h1 className="text-3xl font-bold pt-10">Die Konsole</h1>
                <h2 className="text-2xl font-semibold mt-4">Kontrollausgabe beim Entwickeln</h2>
                <p className="text-lg leading-relaxed">
                Das console-Objekt, ursprünglich eingeführt durch das Firefox-Plugin Firebug, ermöglicht das Schreiben auf die Standardausgabe in JavaScript-Umgebungen...
                </p>
                <p className="text-lg leading-relaxed">
                Die verfügbaren Methoden des console-Objekts variieren je nach der spezifischen JavaScript-Umgebung...
                </p>

                <table className="w-full text-left mt-4">
                    <thead>
                        <tr className="text-lg font-semibold border-b border-gray-700">
                            <th className="pb-2">Methode</th>
                            <th className="pb-2">Beschreibung</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        <tr>
                            <td className="pt-2 pb-1">clear()</td>
                            <td className="pt-2 pb-1">Leert die Konsole</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">debug()</td>
                            <td className="pt-2 pb-1">Erwartet ein oder mehrere Objekte und gibt diese auf der Konsole aus.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">error()</td>
                            <td className="pt-2 pb-1">Erwartet wie debug() ein oder mehrere Objekte und gibt diese als Fehler auf der Konsole aus. In Browsern wird innerhalb der Konsole oft ein Fehler-Icon neben der ausgegebenen Meldung dargestellt sowie der Fehler-Stack ausgegeben.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">info()</td>
                            <td className="pt-2 pb-1">Hiermit werden die übergebenen Objekte als Info-Meldung auf die Konsole ausgegeben. Chrome beispielsweise gibt zusätzlich ein InfoIcon mit aus.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">log()</td>
                            <td className="pt-2 pb-1">Die wohl am häuﬁgsten verwendete Methode von console. Loggt die übergebenen Objekte auf die Konsole.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">trace()</td>
                            <td className="pt-2 pb-1">Gibt den Stack-Trace, also den Methodenaufruf-Stack, auf die Konsole aus.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">warn()</td>
                            <td className="pt-2 pb-1">Gibt die übergebenen Objekte als Warnung auf die Konsole aus. Auch hier wird in den meisten Browsern ein entsprechendes Icon neben der Meldung ausgegeben.</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="text-3xl font-bold pt-10">Dynamische Typisierung</h1>
                <p className="text-lg leading-relaxed">
                    JavaScript unterscheidet sich in mehreren Aspekten von statisch typisierten Sprachen wie Java oder C#. In statisch typisierten Sprachen sind die Typen von Variablen, Parametern und Objekteigenschaften zur Compile-Zeit bekannt und können zur Durchführung von Typüberprüfungen genutzt werden. Dies ermöglicht die frühzeitige Erkennung von typbedingten Fehlern bereits zur Compile-Zeit.
                    In JavaScript hingegen ist die Typisierung vollständig dynamisch. Die Typen werden erst zur Laufzeit ermittelt, und es ist nicht erforderlich, Typen für Variablen anzugeben. Es gibt dennoch Typen in JavaScript, jedoch ist die Anzahl im Vergleich zu anderen Sprachen begrenzt und kann fast an einer Hand abgezählt werden. Dies bedeutet, dass JavaScript-Entwickler flexibel mit den zur Verfügung stehenden Typen umgehen können, jedoch auch sorgfältig auf Typfehler achten müssen, die erst zur Laufzeit auftreten können.
                </p>

                <h1 className="text-3xl font-bold pt-10">Variablen und Zugriff</h1>
                <p className="text-lg leading-relaxed">In JavaScript gibt es verschiedene Arten von Variablen und unterschiedliche Möglichkeiten, auf sie zuzugreifen. Hier sind die wichtigsten Arten von Variablen und deren Zugriff in JavaScript:</p>

                <h2 className="text-2xl font-semibold mt-4">Lokale Variablen (var, let, const)</h2>
                <p className="text-lg leading-relaxed">var: Früher üblicher Weg, um Variablen zu deklarieren, jedoch weniger empfohlen. Lokale var-Variablen sind funktionsübergreifend sichtbar (nicht blockübergreifend).</p>
                <p className="text-lg leading-relaxed">let: Eingeführt in ECMAScript 6 (ES6), wird für blockscoped (blockübergreifende) Variablen verwendet. Sie sind nur in ihrem Block oder in verschachtelten Blöcken sichtbar.</p>
                <p className="text-lg leading-relaxed">const: Ähnlich wie let, erstellt aber Konstanten, deren Wert nach der Initialisierung nicht geändert werden kann.</p>
                <pre><code className="language-javascript">
{`
function exampleFunction() {
    var localVar = 10;   // var ist funktionsübergreifend sichtbar
    let blockVar = 20;   // blockscoped mit let
    const constantVar = 30; // Konstante mit const

    console.log(localVar);
    console.log(blockVar);
    console.log(constantVar);
}

exampleFunction();

console.log(localVar); // Fehler: localVar ist nicht definiert
console.log(blockVar); // Fehler: blockVar ist nicht definiert
console.log(constantVar); // Fehler: constantVar ist nicht definiert
`}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Globale Variablen</h2>
                <p className="text-lg leading-relaxed">Globale Variablen sind außerhalb von Funktionen deklariert und können von überall im Code zugegriffen werden. Sie sollten sparsam verwendet werden, da sie das Risiko von Namenskonflikten erhöhen.</p>
                <pre><code className="language-javascript">
{`
var globalVar = 42;

function accessGlobal() {
    console.log(globalVar);
}

accessGlobal(); // Ausgabe: 42
`}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Objekt-Eigenschaften</h2>
                <p className="text-lg leading-relaxed">Variablen können auch als Eigenschaften von JavaScript-Objekten gespeichert werden. Der Zugriff erfolgt über den Punktoperator oder den Bracket-Operator.</p>
                <pre><code className="language-javascript">
{`
var person = {
    name: "Alice",
    age: 30
};
console.log(person.name); // Zugriff mit Punktoperator
console.log(person['age']); // Zugriff mit Bracket-Operator
`}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Array-Elemente</h2>
                <p className="text-lg leading-relaxed">In JavaScript können Variablen auch in Arrays gespeichert werden. Der Zugriff auf Array-Elemente erfolgt über den Index.</p>
                <pre><code className="language-javascript">
                {`
var fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Zugriff auf das erste Element
console.log(fruits.length); // Länge des Arrays
                    `}
                </code></pre>
                <p className="text-lg leading-relaxed">Wichtige Methoden von Arrays</p>

                <table className="w-full text-left mt-4">
                    <thead>
                        <tr className="text-lg font-semibold border-b border-gray-700">
                        <th className="pb-2">Methode</th>
                        <th className="pb-2">Beschreibung</th>
                        </tr>
                    </thead>
     
                    <tbody className="divide-y divide-gray-700">
                        <tr>
                            <td className="pt-2 pb-1">concat ()</td>
                            <td className="pt-2 pb-1">Hängt Elemente oder Arrays an ein bestehendes Array an.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">filter()</td>
                            <td className="pt-2 pb-1">Filtert Elemente aus dem Array auf Basis eines in Form einer Funktion übergebenen Filterkriteriums.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">forEach()</td>
                            <td className="pt-2 pb-1">Wendet eine übergebene Funktion auf jedes Element im Array an.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">join()</td>
                            <td className="pt-2 pb-1">Wandelt ein Array in eine Zeichenkette um.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">map()</td>
                            <td className="pt-2 pb-1">Bildet die Elemente eines Arrays auf Basis einer übergebenen Umwandlungsfunktion auf neue Elemente ab</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">pop()</td>
                            <td className="pt-2 pb-1">Entfernt das letzte Element eines Arrays.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">push()</td>
                            <td className="pt-2 pb-1">Fügt ein neues Element am Ende des Arrays ein.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">reduce ()</td>
                            <td className="pt-2 pb-1">Fasst die Elemente eines Arrays auf Basis einer übergebenen Funktion zu einem Wert zusammen.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">reverse()</td>
                            <td className="pt-2 pb-1">Kehrt die Reihenfolge der Elemente im Array um.</td>
                        </tr>   
                        <tr>
                            <td className="pt-2 pb-1">shift()</td>
                            <td className="pt-2 pb-1">Entfernt das erste Element eines Arrays.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">slice()</td>
                            <td className="pt-2 pb-1">Schneidet einzelne Elemente aus einem Array heraus.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">splice()</td>
                            <td className="pt-2 pb-1">Fügt neue Elemente an beliebiger Position im Array hinzu.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">sort ()</td>
                            <td className="pt-2 pb-1">Sortiert das Array, optional auf Basis einer übergebenen Vergleichsfunktion.</td>
                        </tr>
                        <tr>
                            <td className="pt-2 pb-1">unshift()</td>
                            <td className="pt-2 pb-1">Fügt ein Element oder mehrere Elemente an den Anfang eines Arrays hinzu.</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl font-semibold mt-4">Funktionen als Variablen</h2>
                <p className="text-lg leading-relaxed">In JavaScript können auch Funktionen als Variablen verwendet werden. Sie können direkt aufgerufen oder an andere Funktionen übergeben werden.</p>
                <pre><code className="language-javascript">
                    {`
var add = function(a, b) {
    return a + b;
};
                    `}
                    console.log(add(2, 3)); // Aufruf der Funktion
                    
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Closures</h2>
                <p className="text-lg leading-relaxed">JavaScript unterstützt Closures, die es ermöglichen, auf Variablen aus umgebenden Funktionen zuzugreifen.</p>
                <pre><code className="language-javascript">
                    {`
function outerFunction() {
    var outerVar = 'I am from outerFunction';
    
    function innerFunction() {
        console.log(outerVar);
    }
    
    return innerFunction;
}

var closureFunc = outerFunction();
closureFunc(); // Ausgabe: 'I am from outerFunction'
                    `}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Privater Zugriff</h2>
                <p className="text-lg leading-relaxed">In JavaScript gibt es keine expliziten privaten Variablen oder Methoden auf klassische Weise wie in einigen anderen Programmiersprachen. Allerdings gibt es Techniken und Konventionen, um in JavaScript den Eindruck von Privatsphäre zu schaffen:</p>

                <p className="text-lg leading-relaxed">Closure: Eine gängige Technik zur Erzeugung von privaten Variablen in JavaScript ist die Verwendung von Closures. Indem Sie eine Funktion in einer anderen Funktion definieren, können Sie auf die Variablen der äußeren Funktion zugreifen, während diese Variablen von außen nicht sichtbar sind.</p>
                <pre><code className="language-javascript">
                {`
function createCounter() {
    let count = 0; // Private Variable
    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // Ausgabe: 1
counter(); // Ausgabe: 2
                    `}
                </code></pre>

                <p className="text-lg leading-relaxed">Module Pattern: Das Modulmuster nutzt Closures, um private Variablen und Funktionen innerhalb eines Moduls zu verbergen und nur ausgewählten Teilen des Codes den Zugriff darauf zu ermöglichen. Dies wird oft verwendet, um private Mitglieder in JavaScript-Klassen zu erstellen.</p>
                <pre><code className="language-javascript">
                    {`
const myModule = (function() {
    let privateVar = 'Ich bin privat';
    
    function privateFunction() {
        console.log('Private Funktion');
    }
    
    return {
        publicVar: 'Ich bin öffentlich',
        publicFunction: function() {
            console.log('Öffentliche Funktion');
            console.log(privateVar); // Zugriff auf private Variable
            privateFunction(); // Zugriff auf private Funktion
        }
    };
})();

console.log(myModule.publicVar); // Ausgabe: 'Ich bin öffentlich'
myModule.publicFunction(); // Ausgabe: 'Öffentliche Funktion' und 'Ich bin privat'
                    `}
                </code></pre>

                <p className="text-lg leading-relaxed">Symbole: Mit ES6 wurden Symbole eingeführt, die es ermöglichen, private Mitglieder in Klassen zu erstellen. Symbole sind einzigartige Werte und können als Schlüssel für Objekteigenschaften verwendet werden.</p>
                <pre><code className="language-javascript">
            {`
const privateVarSymbol = Symbol('privateVar');

class MyClass {
    constructor() {
        this[privateVarSymbol] = 'Ich bin privat';
    }

    getPrivateVar() {
        return this[privateVarSymbol];
    }
}

const instance = new MyClass();
console.log(instance.getPrivateVar()); // Ausgabe: 'Ich bin privat'
                    `}
                </code></pre>

                <p className="text-lg leading-relaxed">Es ist wichtig zu beachten, dass diese Techniken die Sichtbarkeit von Variablen und Funktionen eingeschränkt halten, aber sie sind nicht wirklich privat im Sinne einer starken Kapselung wie in einigen anderen Programmiersprachen. Entwickler sollten sich dieser Konzepte bewusst sein und sicherstellen, dass sie den Code in Übereinstimmung mit den Konventionen für Sichtbarkeit und Zugriff schreiben.</p>

                <h2 className="text-2xl font-semibold mt-4">Null / Undefined</h2>
                <p className="text-lg leading-relaxed">In JavaScript gibt es zwei unterschiedliche Werte, die ausdrücken, dass eine Variable keinen Wert zugewiesen hat: undefined und null. </p>
                <p className="text-lg leading-relaxed">undefined ist ein globaler Wert, der angibt, dass eine Variable nicht initialisiert wurde, auf nicht vorhandene Objekteigenschaften oder nicht übergebene Funktionsparameter verweist. Es zeigt auf die globale Variable. Funktionen, die keinen expliziten Rückgabewert haben, liefern standardmäßig undefined.</p>
                <p className="text-lg leading-relaxed">null hingegen ist ein Schlüsselwort und wird oft verwendet, um auszudrücken, dass eine Variable bewusst keinen Wert hat. In der Praxis werden beide Werte manchmal für denselben Zweck verwendet, nämlich um anzuzeigen, dass eine Variable keinen Wert enthält. Es wird jedoch empfohlen, den Wert undefined nicht explizit einer Variable zuzuweisen, sondern stattdessen null zu verwenden.</p>
                <p className="text-lg leading-relaxed">Die Verwendung von null anstelle von undefined kann dazu beitragen, die Absicht klarer auszudrücken, dass die Variable bewusst keinen Wert hat, anstatt dass sie einfach nicht initialisiert wurde.</p>

                <h2 className="text-2xl font-semibold mt-4">Operatoren</h2>
                
                <h3 className="text-xl font-semibold mt-4">Arithmetische Operatoren</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>+: Addition</li>
                    <li>-: Subtraktion</li>
                    <li>*: Multiplikation</li>
                    <li>/: Division</li>
                    <li>%: Modulo (Restwert nach Division)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Zuweisungsoperatoren</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>=: Zuweisung</li>
                    <li>+=: Addition und Zuweisung</li>
                    <li>-=: Subtraktion und Zuweisung</li>
                    <li>*=: Multiplikation und Zuweisung</li>
                    <li>/=: Division und Zuweisung</li>
                    <li>%=: Modulo und Zuweisung</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Vergleichsoperatoren</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>==: Gleich</li>
                    <li>!=: Ungleich</li>
                    <li>===: Strikte Gleichheit (Wert und Typ)</li>
                    <li>!==: Strikte Ungleichheit (Wert und Typ)</li>
                    <li>{`>`}: Größer als</li>
                    <li>{`<`}: Kleiner als</li>
                    <li>{`>=`}: Größer oder gleich</li>
                    <li>{`<=`}: Kleiner oder gleich</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Logische Operatoren</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>&&: Logisches UND (UND-Verknüpfung)</li>
                    <li>||: Logisches ODER (ODER-Verknüpfung)</li>
                    <li>!: Logisches NICHT (Negation)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Inkrement- und Dekrementoperatoren</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>++: Inkrement (Erhöhung um 1)</li>
                    <li>--: Dekrement (Verminderung um 1)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Ternärer Operator</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>condition ? expr1 : expr2: Kurzform einer bedingten (ternären) Anweisung</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Weitere Operatoren</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>typeof: Gibt den Datentyp einer Variable zurück</li>
                    <li>instanceof: Überprüft, ob ein Objekt eine Instanz einer bestimmten Klasse oder eines Konstruktors ist</li>
                    <li>,: Kommaoperator (Ausführung von Ausdrücken von links nach rechts und gibt den Wert des rechten Ausdrucks zurück)</li>
                </ul>

                <p className="text-lg leading-relaxed">Diese Operatoren sind grundlegend für die Durchführung von Berechnungen, Vergleichen, logischen Prüfungen und anderen Operationen in JavaScript. Sie werden in der Programmierung verwendet, um die Funktionalität von JavaScript-Anwendungen zu steuern und Daten zu verarbeiten.</p>

                <h1 className="text-3xl font-bold pt-10">Was sind Funktionen in JavaScript?</h1>
                <p className="text-lg leading-relaxed">In JavaScript sind Funktionen eigenständige Codeblöcke, die eine spezifische Aufgabe ausführen können. Sie spielen eine zentrale Rolle in der JavaScript-Programmierung und ermöglichen die Organisation von Code in wiederverwendbare Einheiten. Funktionen können Parameter akzeptieren, Berechnungen durchführen und Werte zurückgeben. Sie sind ein grundlegendes Konzept in JavaScript und bieten die Möglichkeit zur Modularisierung und Strukturierung von Code.</p>

                <h2 className="text-2xl font-semibold mt-4">Funktionen erstellen:</h2>

                <p className="text-lg leading-relaxed">Funktionsausdrücke</p>
                <pre><code className="language-javascript">
                    {`
const add = function(a, b) {
    return a + b;
};
                    `}
                </code></pre>

                <p className="text-lg leading-relaxed">Funktionsdeklarationen</p>
                <pre><code className="language-javascript">
                {`
function subtract(x, y) {
    return x - y;
}
                `}
                </code></pre>

                <p className="text-lg leading-relaxed">Pfeilfunktionen</p>
                <pre><code className="language-javascript">
                    {`
const multiply = (c, d) => c * d;
                    `}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Funktionen aufrufen</h2>
                <p className="text-lg leading-relaxed">Um eine Funktion in JavaScript aufzurufen, verwenden Sie den Funktionsnamen gefolgt von Klammern (). Wenn die Funktion Parameter erwartet, geben Sie die Werte in den Klammern an.</p>
                <pre><code className="language-javascript">
                {`
const result = add(5, 3); // Aufruf der 'add'-Funktion mit den Argumenten 5 und 3
                `}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Parameter und Rückgabewerte</h2>
                <p className="text-lg leading-relaxed">Parameter: Funktionen können Parameter akzeptieren, die als Eingabeinformationen dienen. Diese Parameter sind in den Klammern der Funktionsdeklaration oder des Funktionsausdrucks definiert.</p>
                <pre><code className="language-javascript">
                    {`
function greet(name) {
    return "Hallo, "$"{name}!";
}
                    `}   
                </code></pre>

                <p className="text-lg leading-relaxed">Rückgabewerte: Funktionen können Werte mit dem return-Statement zurückgeben. Wenn keine return-Anweisung vorhanden ist oder sie leer ist, gibt die Funktion undefined zurück.</p>
                <pre><code className="language-javascript">
                {`
function multiply(x, y) {
    return x * y;
}
                `}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Funktionen als Werte</h2>
                <p className="text-lg leading-relaxed">In JavaScript sind Funktionen sogenannte "First-Class-Citizens", was bedeutet, dass sie wie jede andere Variable behandelt werden können. Sie können Funktionen als Argumente an andere Funktionen übergeben, sie als Rückgabewerte von Funktionen verwenden und sie in Variablen speichern.</p>
                <pre><code className="language-javascript">
                    {`
function operate(a, b, operation) {
    return operation(a, b);
}

const result = operate(5, 3, add); // Verwendung der 'add'-Funktion als Argument
                    `}       
                </code></pre>

                <h3 className="text-xl font-semibold mt-4">Anonyme Funktionen</h3>
                <p className="text-lg leading-relaxed">Funktionen ohne Namen werden als "anonyme Funktionen" bezeichnet. Sie können direkt als Argumente an andere Funktionen übergeben werden.</p>
                <pre><code className="language-javascript">
                {`
const sum = function(x, y) {
    return x + y;
};

const result = sum(4, 2); // Aufruf der anonymen Funktion
                `}
                </code></pre>

                <br /><p className="text-lg leading-relaxed">Funktionen sind ein grundlegendes Konzept in JavaScript und spielen eine wesentliche Rolle bei der Strukturierung und Organisation von Code. Sie ermöglichen die Wiederverwendbarkeit von Code und die Durchführung von Aufgaben in JavaScript-Anwendungen.</p>

                <h1 className="text-3xl font-bold pt-10">Pfeilfunktionen</h1>
                <p className="text-lg leading-relaxed">Pfeilfunktionen, auch als "Arrow Functions" bezeichnet, sind eine spezielle Art von Funktionen in JavaScript, die mit ES6 (ECMAScript 2015) eingeführt wurden. Sie bieten eine kürzere Syntax zum Definieren von Funktionen im Vergleich zu herkömmlichen Funktionsausdrücken oder Funktionsdeklarationen. Pfeilfunktionen sind besonders nützlich für einfache Funktionen, die eine klare und kurze Definition erlauben.</p>

                <h2 className="text-2xl font-semibold mt-4">Hier sind einige wichtige Merkmale und Eigenschaften von Pfeilfunktionen:</h2>
                <h3 className="text-xl font-semibold mt-4">Kompakte Syntax</h3>
                <p className="text-lg leading-relaxed">Die Syntax von Pfeilfunktionen ist oft kürzer und einfacher als die von herkömmlichen Funktionen.</p>
                <p className="text-lg leading-relaxed">Beispiel einer herkömmlichen Funktion:</p>
                <pre><code className="language-javascript">
                    {`
const add = function(a, b) {
    return a + b;
};
                    `} 
                </code></pre>
                <p className="text-lg leading-relaxed">Entsprechende Pfeilfunktion:</p>
                <pre><code className="language-javascript">
                {`
const add = (a, b) => a + b;
                `}
                </code></pre>

                <h3 className="text-xl font-semibold mt-4">Kein this-Binding</h3>
                <p className="text-lg leading-relaxed">Pfeilfunktionen haben kein eigenes this-Binding. Sie erben das this von ihrer umgebenden (äußeren) Funktion oder vom globalen Kontext.
                    Dies ist besonders nützlich in Callback-Funktionen oder in Funktionen innerhalb von Objekten, da Sie das this nicht explizit binden müssen.</p>
                <pre><code className="language-javascript">
                    {`
const person = {
    name: 'Alice',
    sayHello: function() {
        console.log("Hallo, mein Name ist "$"{this.name}");
    }
};

// Mit Pfeilfunktion:
const person = {
    name: 'Alice',
    sayHello: () => {
        console.log("Hallo, mein Name ist "$"{this.name}");
    }
};
                    `}
                </code></pre>

                <h3 className="text-xl font-semibold mt-4">Kein arguments-Objekt</h3>
                <p className="text-lg leading-relaxed">Pfeilfunktionen haben kein eigenes arguments-Objekt. Wenn Sie Zugriff auf die Argumente einer Funktion benötigen, sollten Sie herkömmliche Funktionen verwenden.</p>
                <pre><code className="language-javascript">
                {`
function traditionalFunction() {
    console.log(arguments);
}

const arrowFunction = () => {
    console.log(arguments); // Fehler: 'arguments' ist in Pfeilfunktionen nicht definiert
}
                `}
                </code></pre>

                <h3 className="text-xl font-semibold mt-4">Kein new-Operator</h3>
                <p className="text-lg leading-relaxed">Pfeilfunktionen können nicht als Konstruktoren verwendet werden. Sie können keine Instanzen von Objekten erstellen.</p>
                <pre><code className="language-javascript">
                    {`
const ConstructorFunc = () => {}; // Fehler: Pfeilfunktionen können nicht als Konstruktoren verwendet werden
                    `}
                </code></pre>

                <h3 className="text-xl font-semibold mt-4">Kurze Einzeiler</h3>
                <p className="text-lg leading-relaxed">Pfeilfunktionen eignen sich gut für kurze Einzeiler-Funktionen. Wenn Ihre Funktion mehrere Anweisungen erfordert, sollten Sie herkömmliche Funktionen verwenden.</p>
                <pre><code className="language-javascript">
                {`
const isEven = (num) => num % 2 === 0; // Kurzer Einzeiler
                `}
                </code></pre>

                <p className="text-lg leading-relaxed">Pfeilfunktionen sind eine praktische Ergänzung zu JavaScript, insbesondere für kurze und einfache Funktionen, bei denen eine kompakte Syntax und das Verhalten des this-Wertes ohne Bindung erforderlich sind. Sie haben jedoch bestimmte Einschränkungen und sollten sorgfältig ausgewählt werden, abhängig von den Anforderungen Ihrer Anwendung.</p>

                <h1 className="text-3xl font-bold pt-10">Higher-Order-Functions</h1>
                <p className="text-lg leading-relaxed">Higher-Order-Functions (HOC) sind ein Konzept in der funktionellen Programmierung und in vielen modernen Programmiersprachen, einschließlich JavaScript. Eine Higher-Order-Function ist im Wesentlichen eine Funktion, die eine andere Funktion als Argument akzeptiert und/oder eine Funktion zurückgibt. Dies macht sie zu Funktionen, die auf Funktionen wirken, und erweitert die Möglichkeiten der Funktionen in der Programmierung erheblich.</p>

                <h2 className="text-2xl font-semibold mt-4">Funktionen als Argumente</h2>
                <p className="text-lg leading-relaxed">HOCs können andere Funktionen als Argumente akzeptieren. Dies ermöglicht es, Funktionen zu parametrisieren und die Funktionalität dynamisch zu gestalten.</p>
                <pre><code className="language-javascript">
                    {`
function applyOperation(operation, x, y) {
    return operation(x, y);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const result = applyOperation(add, 5, 3); // Verwendung von 'add' als Argument
                    `}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Funktionen als Rückgabewerte</h2>
                <p className="text-lg leading-relaxed">HOCs können auch Funktionen zurückgeben. Dies ermöglicht die Erstellung von Fabriken für Funktionen oder die Implementierung von Closures.</p>
                <pre><code className="language-javascript">
                {`
function createMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

const result1 = double(4); // Ergebnis: 8
const result2 = triple(5); // Ergebnis: 15
                `}
                </code></pre>

                <h2 className="text-2xl font-semibold mt-4">Abstraktion und Wiederverwendbarkeit</h2>
                <p className="text-lg leading-relaxed">HOCs fördern die Abstraktion von Funktionalität und die Wiederverwendbarkeit von Code. Sie ermöglichen es, allgemeine Operationen auf Funktionen anzuwenden, ohne den Kerncode der Funktionen zu ändern.</p>

                <h2 className="text-2xl font-semibold mt-4">Funktionen als Daten</h2>
                <p className="text-lg leading-relaxed">In der funktionalen Programmierung werden Funktionen oft wie Daten behandelt. Dies ermöglicht es, Funktionen in Arrays oder Objekten zu speichern und sie dynamisch zu manipulieren.</p>
                <pre><code className="language-javascript">
                    {`
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

const operationName = 'add';
const result = operations[operationName](5, 3); // Verwendung von 'add' aus dem Objekt
                    `}
                </code></pre>

                <p className="text-lg leading-relaxed">Higher-Order-Functions sind ein leistungsstarkes Konzept in der funktionalen Programmierung und in modernen JavaScript-Anwendungen. Sie fördern die Flexibilität und Abstraktion von Code und ermöglichen es, komplexe Operationen auf Funktionen anzuwenden. Dies ist besonders nützlich für Aufgaben wie das Filtern von Arrays, das Mappen von Werten und das Verketten von Funktionen, um komplexe Aufgaben zu erfüllen.</p>

            </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Summary3;
