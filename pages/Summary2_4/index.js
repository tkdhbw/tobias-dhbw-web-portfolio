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
          Vorlesung <span className='text-accent'> 4</span> <br />
          <span className='text-accent'>PHP</span> und mySQL

        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
            <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-semibold mt-4">Einführung in PHP</h2>
            <h3 className="text-xl font-semibold mt-2">Was ist PHP?</h3>
            <p className="text-lg leading-relaxed">
              PHP (Hypertext Preprocessor) ist eine weit verbreitete Open-Source-Skriptsprache, die speziell für die Webentwicklung entwickelt wurde. Sie kann in HTML eingebettet werden und wird auf dem Server ausgeführt, wodurch dynamische Webseiten und Webanwendungen erstellt werden können.
            </p>
            <h3 className="text-xl font-semibold mt-2">Geschichte von PHP</h3>
            <p className="text-lg leading-relaxed">
              PHP wurde 1994 von Rasmus Lerdorf entwickelt. Ursprünglich stand PHP für &quotPersonal Home Page&quot, aber es wurde später in &quotPHP: Hypertext Preprocessor&quot umbenannt, um seine Hauptfunktion besser zu beschreiben. Seit seiner Einführung hat sich PHP stetig weiterentwickelt und ist zu einer der wichtigsten Technologien im Web geworden.
            </p>
            <h3 className="text-xl font-semibold mt-2">Einsatzbereiche von PHP</h3>
            <p className="text-lg leading-relaxed">
              PHP wird hauptsächlich für die serverseitige Webentwicklung verwendet. Hier sind einige typische Einsatzbereiche:
            </p>
            <ul className="list-disc ml-8">
              <li>Erstellung dynamischer Webseiten</li>
              <li>Formularverarbeitung</li>
              <li>Interaktion mit Datenbanken</li>
              <li>Session-Management</li>
              <li>Erstellung von Webanwendungen</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-2">Vorteile von PHP</h3>
            <p className="text-lg leading-relaxed">
              PHP bietet viele Vorteile, darunter:
            </p>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>Einfach zu erlernen:</span> PHP hat eine flache Lernkurve, was es Anfängern leicht macht, einzusteigen.</li>
              <li><span className='text-accent'>Open Source:</span> PHP ist kostenlos und wird von einer großen Community unterstützt.</li>
              <li><span className='text-accent'>Plattformunabhängig:</span> PHP läuft auf fast allen Betriebssystemen, einschließlich Windows, Linux und Mac OS.</li>
              <li><span className='text-accent'>Breite Datenbankunterstützung:</span> PHP unterstützt zahlreiche Datenbanken wie MySQL, PostgreSQL, SQLite und mehr.</li>
              <li><span className='text-accent'>Große Community:</span> Die PHP-Community ist groß und aktiv, was bedeutet, dass es viele Ressourcen, Tutorials und Support gibt.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-2">Einfache PHP-Syntax</h3>
            <p className="text-lg leading-relaxed">
              Ein einfaches PHP-Skript, das &quotHello, World!&quot ausgibt, sieht folgendermaßen aus:
            </p>
            <pre>
              <code className="language-php">
{`<?php
echo "Hello, World!";
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Einbetten von PHP in HTML</h3>
            <p className="text-lg leading-relaxed">
              PHP kann problemlos in HTML eingebettet werden. Hier ist ein Beispiel:
            </p>
            <pre>
              <code className="language-php">
{`<!DOCTYPE html>
<html>
<head>
    <title>PHP in HTML</title>
</head>
<body>
    <h1><?php echo "Hello, World!"; ?></h1>
</body>
</html>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Fazit</h3>
            <p className="text-lg leading-relaxed">
              PHP ist eine leistungsstarke und flexible Sprache, die speziell für die Webentwicklung entwickelt wurde. Mit seiner einfachen Syntax und umfangreichen Funktionen ist es eine ausgezeichnete Wahl für Anfänger und erfahrene Entwickler gleichermaßen. PHP bleibt eine der wichtigsten Technologien für die Erstellung dynamischer und interaktiver Webinhalte.
            </p>

            <h2 className="text-2xl font-semibold mt-4">PHP anhand eines Formulars</h2>
            <h3 className="text-xl font-semibold mt-2">Einführung</h3>
            <p className="text-lg leading-relaxed">
              PHP ist besonders nützlich für die Verarbeitung von Formularen, die in HTML erstellt wurden. Ein Formular ermöglicht Benutzern die Eingabe von Daten, die dann vom Server verarbeitet werden können. Hier zeigen wir, wie man ein einfaches Formular erstellt und die Eingaben mit PHP verarbeitet.
            </p>
            <h3 className="text-xl font-semibold mt-2">HTML-Formular erstellen</h3>
            <p className="text-lg leading-relaxed">
              Zunächst erstellen wir ein einfaches HTML-Formular, das den Benutzer nach seinem Namen und seiner E-Mail-Adresse fragt.
            </p>
            <pre>
              <code className="language-html">
{`<!DOCTYPE html>
<html>
<head>
    <title>Einfaches Formular</title>
</head>
<body>
    <h1>Kontaktformular</h1>
    <form action="process_form.php" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">E-Mail:</label><br>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Absenden">
    </form>
</body>
</html>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Formularverarbeitung mit PHP</h3>
            <p className="text-lg leading-relaxed">
              Nun erstellen wir die PHP-Datei <code>process_form.php</code>, um die eingegebenen Daten zu verarbeiten. Diese Datei empfängt die Daten aus dem Formular und gibt sie zurück an den Benutzer.
            </p>
            <pre>
              <code className="language-php">
{`<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    echo "Vielen Dank, $name!<br>";
    echo "Wir werden Ihnen eine Bestätigung an $email senden.";
}
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Erklärung des PHP-Codes</h3>
            <p className="text-lg leading-relaxed">
              Der PHP-Code überprüft zuerst, ob das Formular mit der POST-Methode gesendet wurde. Anschließend werden die Eingabedaten des Benutzers sicher verarbeitet, indem spezielle HTML-Zeichen mit <code>htmlspecialchars()</code> konvertiert werden, um Sicherheitsrisiken wie Cross-Site Scripting (XSS) zu vermeiden. Schließlich werden die bereinigten Eingabedaten dem Benutzer angezeigt.
            </p>
            <h3 className="text-xl font-semibold mt-2">Fazit</h3>
            <p className="text-lg leading-relaxed">
              Mit PHP können Sie Benutzereingaben aus HTML-Formularen einfach verarbeiten und dynamische Inhalte generieren. Dieses Beispiel zeigt die Grundlagen der Formularverarbeitung, die Sie erweitern können, um komplexere Anwendungen zu erstellen.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Fortgeschrittener Kurs in PHP</h2>
            <h3 className="text-xl font-semibold mt-2"> Programmierung (OOP)</h3>
            <p className="text-lg leading-relaxed">
              Die objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das auf der Verwendung von Objekten basiert. In PHP können Klassen und Objekte definiert werden, um wiederverwendbaren Code zu schreiben und die Wartbarkeit der Anwendung zu verbessern.
            </p>
            <pre>
              <code className="language-php">
{`<?php
class Car {
    public $color;
    public $model;

    public function __construct($color, $model) {
        $this->color = $color;
        $this->model = $model;
    }

    public function message() {
        return "My car is a " . $this->color . " " . $this->model . ".";
    }
}

$myCar = new Car("black", "Volvo");
echo $myCar->message();
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Datenbankverbindung mit PDO</h3>
            <p className="text-lg leading-relaxed">
              PHP Data Objects (PDO) ist eine Datenbankabstraktionsschicht, die eine einheitliche Schnittstelle für die Verbindung zu verschiedenen Datenbanken bietet. PDO unterstützt verschiedene Datenbanken wie MySQL, PostgreSQL, SQLite und viele andere.
            </p>
            <pre>
              <code className="language-php">
{`<?php
$dsn = 'mysql:host=localhost;dbname=testdb';
$username = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Verbindung erfolgreich!";
} catch (PDOException $e) {
    echo "Verbindung fehlgeschlagen: " . $e->getMessage();
}
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Prepared Statements</h3>
            <p className="text-lg leading-relaxed">
              Prepared Statements sind eine effiziente und sichere Möglichkeit, SQL-Abfragen in PHP auszuführen. Sie schützen vor SQL-Injection-Angriffen und verbessern die Leistung durch wiederverwendbare Abfragen.
            </p>
            <pre>
              <code className="language-php">
{`<?php
$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->execute(['email' => 'test@example.com']);
$user = $stmt->fetch();

if ($user) {
    echo "Benutzer gefunden: " . $user['name'];
} else {
    echo "Benutzer nicht gefunden.";
}
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Fehlerbehandlung</h3>
            <p className="text-lg leading-relaxed">
              Fehlerbehandlung ist ein wichtiger Aspekt der Softwareentwicklung. PHP bietet mehrere Mechanismen zur Fehlerbehandlung, einschließlich der Verwendung von try-catch-Blöcken und benutzerdefinierten Fehler-Handlern.
            </p>
            <pre>
              <code className="language-php">
{`<?php
function customError($errno, $errstr) {
    echo "Fehler: [$errno] $errstr";
}

set_error_handler("customError");

echo($test); // Verursacht einen Fehler, da $test nicht definiert ist
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Sessions und Cookies</h3>
            <p className="text-lg leading-relaxed">
              Sessions und Cookies werden verwendet, um Benutzerdaten über verschiedene Seiten hinweg zu speichern. Sessions speichern Daten auf dem Server, während Cookies Daten im Browser des Benutzers speichern.
            </p>
            <pre>
              <code className="language-php">
{`<?php
// Session starten
session_start();
$_SESSION['username'] = 'JohnDoe';

// Cookie setzen
setcookie('user', 'JohnDoe', time() + (86400 * 30), "/"); // 86400 = 1 Tag

// Zugriff auf Session und Cookie
echo "Session-Username: " . $_SESSION['username'];
echo "Cookie-Username: " . $_COOKIE['user'];
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">API-Erstellung</h3>
            <p className="text-lg leading-relaxed">
              Mit PHP können RESTful APIs erstellt werden, um Anwendungen zu ermöglichen, miteinander zu kommunizieren. Hier ist ein einfaches Beispiel, wie eine API erstellt wird, die JSON-Daten zurückgibt.
            </p>
            <pre>
              <code className="language-php">
{`<?php
header("Content-Type: application/json; charset=UTF-8");

$data = [
    "status" => "success",
    "message" => "API funktioniert!"
];

echo json_encode($data);
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Fortgeschrittene Themen</h3>
            <p className="text-lg leading-relaxed">
              Weitere fortgeschrittene Themen in PHP umfassen das Arbeiten mit Composer für die Paketverwaltung, die Verwendung von Namespaces zur Strukturierung des Codes und die Implementierung von Design Patterns für saubere und wartbare Softwarearchitekturen.
            </p>
            <h3 className="text-xl font-semibold mt-2">Fazit</h3>
            <p className="text-lg leading-relaxed">
              PHP ist eine vielseitige und leistungsstarke Sprache, die für viele fortgeschrittene Webentwicklungsaufgaben geeignet ist. Mit den hier vorgestellten Techniken können Entwickler robuste und sichere Webanwendungen erstellen.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Verknüpfung von PHP und SQL-Datenbanken</h2>
            <h3 className="text-xl font-semibold mt-2">Einführung</h3>
            <p className="text-lg leading-relaxed">
              PHP ist eine weit verbreitete serverseitige Skriptsprache, die oft verwendet wird, um dynamische Webseiten zu erstellen. Eine der häufigsten Aufgaben in PHP ist die Interaktion mit einer SQL-Datenbank, wie MySQL. Diese Verknüpfung ermöglicht es, Daten aus einer Datenbank zu lesen, zu schreiben, zu aktualisieren und zu löschen.
            </p>
            <h3 className="text-xl font-semibold mt-2">Verbindung zu einer MySQL-Datenbank herstellen</h3>
            <p className="text-lg leading-relaxed">
              Um eine Verbindung zu einer MySQL-Datenbank herzustellen, können wir die <code>mysqli</code>-Erweiterung oder PDO (PHP Data Objects) verwenden. Hier zeigen wir beide Methoden.
            </p>
            <h4 className="text-lg font-semibold mt-2">Verbindung mit <code>mysqli</code></h4>
            <pre>
              <code className="language-php">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

// Verbindung erstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}
echo "Verbindung erfolgreich";
?>`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Verbindung mit PDO</h4>
            <pre>
              <code className="language-php">
{`<?php
$dsn = 'mysql:host=localhost;dbname=database';
$username = 'username';
$password = 'password';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Verbindung erfolgreich";
} catch (PDOException $e) {
    echo "Verbindung fehlgeschlagen: " . $e->getMessage();
}
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Datenbankabfragen durchführen</h3>
            <p className="text-lg leading-relaxed">
              Nachdem die Verbindung hergestellt ist, können wir Datenbankabfragen durchführen. Hier sind Beispiele für das Abrufen, Einfügen, Aktualisieren und Löschen von Daten mit <code>mysqli</code> und PDO.
            </p>
            <h4 className="text-lg font-semibold mt-2">Daten abrufen</h4>
            <h5 className="text-md font-semibold mt-1">Mit <code>mysqli</code></h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Ausgabe der Daten jeder Zeile
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 Ergebnisse";
}
$conn->close();
?>`}
              </code>
            </pre>
            <h5 className="text-md font-semibold mt-1">Mit PDO</h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = 'SELECT id, firstname, lastname FROM MyGuests';
$stmt = $pdo->query($sql);

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "id: " . $row['id'] . " - Name: " . $row['firstname'] . " " . $row['lastname'] . "<br>";
}
?>`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Daten einfügen</h4>
            <h5 className="text-md font-semibold mt-1">Mit <code>mysqli</code></h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "Neuer Datensatz erfolgreich erstellt";
} else {
    echo "Fehler: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>`}
              </code>
            </pre>
            <h5 className="text-md font-semibold mt-1">Mit PDO</h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "INSERT INTO MyGuests (firstname, lastname, email) VALUES (:firstname, :lastname, :email)";
$stmt = $pdo->prepare($sql);
$stmt->execute(['firstname' => 'John', 'lastname' => 'Doe', 'email' => 'john@example.com']);
echo "Neuer Datensatz erfolgreich erstellt";
?>`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Daten aktualisieren</h4>
            <h5 className="text-md font-semibold mt-1">Mit <code>mysqli</code></h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

if ($conn->query($sql) === TRUE) {
    echo "Datensatz erfolgreich aktualisiert";
} else {
    echo "Fehler beim Aktualisieren des Datensatzes: " . $conn->error;
}
$conn->close();
?>`}
              </code>
            </pre>
            <h5 className="text-md font-semibold mt-1">Mit PDO</h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "UPDATE MyGuests SET lastname = :lastname WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['lastname' => 'Doe', 'id' => 2]);
echo "Datensatz erfolgreich aktualisiert";
?>`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Daten löschen</h4>
            <h5 className="text-md font-semibold mt-1">Mit <code>mysqli</code></h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "DELETE FROM MyGuests WHERE id=3";

if ($conn->query($sql) === TRUE) {
    echo "Datensatz erfolgreich gelöscht";
} else {
    echo "Fehler beim Löschen des Datensatzes: " . $conn->error;
}
$conn->close();
?>`}
              </code>
            </pre>
            <h5 className="text-md font-semibold mt-1">Mit PDO</h5>
            <pre>
              <code className="language-php">
{`<?php
$sql = "DELETE FROM MyGuests WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => 3]);
echo "Datensatz erfolgreich gelöscht";
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Zusammenfassung</h3>
            <p className="text-lg leading-relaxed">
              Die Verknüpfung von PHP und SQL-Datenbanken ermöglicht es Entwicklern, leistungsstarke und dynamische Webanwendungen zu erstellen. Mit PHP können Sie auf einfache Weise Datenbankverbindungen herstellen, Datenbankabfragen durchführen und Daten sicher und effizient verarbeiten.
            </p>
            
            <h2 className="text-2xl font-semibold mt-4">PHP und SQL Datenbankintegration</h2>
            <h3 className="text-xl font-semibold mt-2">Einführung</h3>
            <p className="text-lg leading-relaxed">
              PHP ist eine weit verbreitete serverseitige Skriptsprache, die oft verwendet wird, um dynamische Webseiten zu erstellen. Eine der häufigsten Aufgaben in PHP ist die Interaktion mit einer SQL-Datenbank, wie MySQL. Diese Verknüpfung ermöglicht es, Daten aus einer Datenbank zu lesen, zu schreiben, zu aktualisieren und zu löschen.
            </p>
            <h3 className="text-xl font-semibold mt-2">Verbindung zu einer MySQL-Datenbank herstellen</h3>
            <p className="text-lg leading-relaxed">
              Um eine Verbindung zu einer MySQL-Datenbank herzustellen, können wir die <code>mysqli</code>-Erweiterung oder PDO (PHP Data Objects) verwenden. Hier zeigen wir beide Methoden.
            </p>
            <h4 className="text-lg font-semibold mt-2">Verbindung mit <code>mysqli</code></h4>
            <pre>
              <code className="language-php">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

// Verbindung erstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}
echo "Verbindung erfolgreich";
?>`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Verbindung mit PDO</h4>
            <pre>
              <code className="language-php">
{`<?php
$dsn = 'mysql:host=localhost;dbname=database';
$username = 'username';
$password = 'password';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Verbindung erfolgreich";
} catch (PDOException $e) {
    echo "Verbindung fehlgeschlagen: " . $e->getMessage();
}
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">HTML-Formular erstellen</h3>
            <p className="text-lg leading-relaxed">
              Zunächst erstellen wir ein einfaches HTML-Formular, das den Benutzer nach seinem Namen und seiner E-Mail-Adresse fragt. Die Daten werden dann mithilfe von PHP in die Datenbank geschrieben.
            </p>
            <pre>
              <code className="language-html">
{`<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP und MySQL Beispiel</title>
</head>
<body>
    <h2>Daten eingeben</h2>
    <form action="insert.php" method="post">
        <label for="firstname">Vorname:</label><br>
        <input type="text" id="firstname" name="firstname"><br>
        <label for="lastname">Nachname:</label><br>
        <input type="text" id="lastname" name="lastname"><br>
        <input type="submit" value="Absenden">
    </form>
    <h2>Daten anzeigen</h2>
    <div id="data-output">
        <?php include 'fetch.php'; ?>
    </div>
</body>
</html>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">PHP-Skript für die Datenbankverbindung</h3>
            <p className="text-lg leading-relaxed">
              Erstelle eine Datei namens <code>db_connection.php</code>, die den Code zur Verbindung mit der Datenbank enthält.
            </p>
            <pre>
              <code className="language-php">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">PHP-Skript zum Einfügen von Daten</h3>
            <p className="text-lg leading-relaxed">
              Erstelle eine Datei namens <code>insert.php</code>, die die Daten aus dem Formular entgegennimmt und in die Datenbank einfügt.
            </p>
            <pre>
              <code className="language-php">
{`<?php
include 'db_connection.php';

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];

$sql = "INSERT INTO MyGuests (firstname, lastname) VALUES ('$firstname', '$lastname')";

if ($conn->query($sql) === TRUE) {
    echo "Neuer Datensatz erfolgreich erstellt";
} else {
    echo "Fehler: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<a href="index.html">Zurück zur Startseite</a>
`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">PHP-Skript zum Abrufen und Anzeigen von Daten</h3>
            <p className="text-lg leading-relaxed">
              Erstelle eine Datei namens <code>fetch.php</code>, die die Daten aus der Datenbank abruft und anzeigt.
            </p>
            <pre>
              <code className="language-php">
{`<?php
include 'db_connection.php';

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        echo "<li>ID: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "</li>";
    }
    echo "</ul>";
} else {
    echo "0 Ergebnisse";
}

$conn->close();
?>`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Datenbankstruktur</h3>
            <p className="text-lg leading-relaxed">
              Stelle sicher, dass du eine Datenbank und eine Tabelle erstellt hast, die mit dem obigen Code kompatibel ist. Hier ist ein Beispiel-SQL-Befehl, um die Tabelle zu erstellen:
            </p>
            <pre>
              <code className="language-sql">
{`CREATE DATABASE database;
USE database;

CREATE TABLE MyGuests (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Zusammenfassung</h3>
            <p className="text-lg leading-relaxed">
              Diese Anleitung zeigt, wie du eine HTML-Webseite mit einem Formular erstellst, das Daten in eine SQL-Datenbank einfügt und wieder ausgibt. Der Prozess umfasst die Erstellung einer Verbindung zur Datenbank, das Einfügen von Daten über ein PHP-Skript und das Abrufen und Anzeigen dieser Daten.
            </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
