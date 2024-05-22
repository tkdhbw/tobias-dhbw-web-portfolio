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
          Vorlesung <span className='text-accent'> 2</span> <br />
          <span className='text-accent'>Netzwerkprogrammierung</span> über Sockets Teil 1
        </motion.h2>
        {/* content */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <div className="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg leading-relaxed">
              Netzwerkprogrammierung über Sockets ermöglicht die Kommunikation zwischen verschiedenen Computern über ein Netzwerk. Sockets sind die grundlegenden Bausteine für die Netzwerkkommunikation. Sie bieten eine Möglichkeit, Daten zwischen Anwendungen zu senden und zu empfangen, die auf verschiedenen Rechnern laufen.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Arten von Sockets</h2>
            <p className="text-lg leading-relaxed">1. Steam Sockets (TCP)</p>
            <ul className="list-disc ml-8">
              <li>Bieten eine zuverlässige, verbindungsorientierte Kommunikation.</li>
              <li>Daten werden in der richtigen Reihenfolge und ohne Duplikate übertragen.</li>
              <li><span className='text-accent'>Verwendung:</span> Web-Server, E-Mail, Dateiübertragungen.</li>
            </ul>
            <p className="text-lg leading-relaxed">2. Datagram Sockets (UDP)</p>
            <ul className="list-disc ml-8">
              <li>Bieten eine verbindungslose Kommunikation.</li>
              <li>Datenpakete werden ohne Garantie der Zustellung oder Reihenfolge gesendet.</li>
              <li><span className='text-accent'>Verwendung:</span> Videostreaming, VoIP, Online-Gaming.</li>
            </ul>
            <p className="text-lg leading-relaxed">Java unterstützt auch Kommunikation über UDP Sockets durch die Klassen DatagramPacket und DatagramSocket.</p>

            <h2 className="text-2xl font-semibold mt-4">Grundlagen der Socket-Programmierung</h2>
            <h3 className="text-xl font-semibold mt-2">1. Erstellen eines Sockets</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`import java.net.*;

// Erstellen eines TCP/IP Sockets
Socket tcpSocket = new Socket("localhost", 8080);

// Erstellen eines UDP Sockets
DatagramSocket udpSocket = new DatagramSocket();`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">2. Binden eines Sockets an eine Adresse und Port</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`// Für ServerSocket in TCP
ServerSocket serverSocket = new ServerSocket(8080);`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">3. Hören auf Verbindungen (nur für TCP)</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`// Server wartet auf Verbindungen
Socket clientSocket = serverSocket.accept();`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">4. Akzeptieren einer Verbindung (nur für TCP)</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`// Verbindung wird akzeptiert
Socket clientSocket = serverSocket.accept();`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">5. Senden und Empfangen von Daten</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`// TCP
BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

String inputLine;
while ((inputLine = in.readLine()) != null) {
    out.println("Daten vom Server: " + inputLine);
}

// UDP
byte[] sendData = new byte[1024];
byte[] receiveData = new byte[1024];

DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, InetAddress.getByName("localhost"), 8080);
udpSocket.send(sendPacket);

DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
udpSocket.receive(receivePacket);`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">6. Schließen des Sockets</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`tcpSocket.close();
udpSocket.close();`}
              </code>
            </pre>

            <h2 className="text-2xl font-semibold mt-4">Beispiel: Einfache Client-Server-Kommunikation</h2>
            <h3 className="text-xl font-semibold mt-2">Server (TCP)</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`import java.net.*;
import java.io.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Warten auf eine Verbindung...");
        Socket clientSocket = serverSocket.accept();
        System.out.println("Verbunden mit " + clientSocket.getInetAddress());

        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

        String inputLine;
        while ((inputLine = in.readLine()) != null) {
            System.out.println("Empfangen: " + inputLine);
            out.println("Hallo vom Server");
        }

        in.close();
        out.close();
        clientSocket.close();
        serverSocket.close();
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Client (TCP)</h3>
            <pre className="bg-gray-800 p-4 rounded mb-4">
              <code className="language-java">
                {`import java.net.*;
import java.io.*;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

        out.println("Hallo Server");
        String response = in.readLine();
        System.out.println("Empfangen: " + response);

        in.close();
        out.close();
        socket.close();
    }
}`}
              </code>
            </pre>

            <h2 className="text-2xl font-semibold mt-4">Anwendungsfälle</h2>
            <ul className="list-disc ml-8">
              <li>Web-Server und Web-Clients: Web-Browser verwenden TCP-Sockets, um mit Web-Servern zu kommunizieren.</li>
              <li>Echtzeitkommunikation: Anwendungen wie VoIP oder Online-Spiele nutzen UDP-Sockets für schnelle und effiziente Kommunikation.</li>
              <li>Dateiübertragungen: Protokolle wie FTP verwenden Sockets, um Dateien zwischen Server und Client zu übertragen.</li>
            </ul>

            <p className="text-lg leading-relaxed">
              Sockets bieten eine leistungsstarke und flexible Möglichkeit, Anwendungen über Netzwerke hinweg zu verbinden, und sind ein grundlegendes Werkzeug in der Netzwerkprogrammierung.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Theorie zu Sockets und Ports</h2>
            <h3 className="text-xl font-semibold mt-2">Was ist ein Port?</h3>
            <p className="text-lg leading-relaxed">
              Ein Port ist ein numerischer Bezeichner, der spezifische Prozesse oder Netzwerkdienste auf einem Host in einem Computernetzwerk identifiziert. Jeder Port ist mit einer IP-Adresse und dem Protokoll (TCP oder UDP) verbunden, um eine eindeutige Verbindung zu ermöglichen.
            </p>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>Portnummern:</span> Sie reichen von 0 bis 65535, wobei Ports 0-1023 als &quotwell-known ports&quot bekannt sind und für häufig verwendete Protokolle reserviert sind (z.B. HTTP auf Port 80, HTTPS auf Port 443).</li>
              <li><span className='text-accent'>Registrierte Ports:</span> Diese reichen von 1024 bis 49151 und werden für weniger gängige Anwendungen verwendet.</li>
              <li><span className='text-accent'>Dynamische und private Ports:</span> Diese reichen von 49152 bis 65535 und werden oft für temporäre Verbindungen oder private Anwendungen verwendet.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Ports sind notwendig, um verschiedene Netzwerkdienste auf einem einzelnen Host zu unterscheiden. Ein Computer kann mehrere Dienste gleichzeitig anbieten, wie z.B. einen Webserver, einen E-Mail-Server und einen FTP-Server. Jeder dieser Dienste lauscht auf einem anderen Port.
            </p>
            <h3 className="text-xl font-semibold mt-2">Was ist ein Socket?</h3>
            <p className="text-lg leading-relaxed">
              Ein Socket ist eine Kombination aus einer IP-Adresse und einer Portnummer und dient als Endpunkt für die Kommunikation. Sockets ermöglichen es, dass Daten zwischen zwei Endpunkten in einem Netzwerk gesendet und empfangen werden können.
            </p>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>Socket-Adresse:</span> Eine Kombination aus einer IP-Adresse und einer Portnummer (z.B. 192.168.1.1:8080).</li>
              <li><span className='text-accent'>Verbindungsorientierte Sockets:</span> Diese verwenden das TCP-Protokoll, das eine zuverlässige Datenübertragung gewährleistet. TCP-Sockets garantieren die Zustellung von Daten in der richtigen Reihenfolge und ohne Verlust.</li>
              <li><span className='text-accent'>Verbindungslos Sockets:</span> Diese verwenden das UDP-Protokoll, das schnelle und effiziente Datenübertragungen ermöglicht, jedoch ohne Garantie der Zustellung. UDP-Sockets sind nützlich für Anwendungen, bei denen Geschwindigkeit wichtiger ist als Zuverlässigkeit, wie z.B. beim Videostreaming oder Online-Gaming.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Sockets sind ein grundlegendes Konzept in der Netzwerkprogrammierung, da sie es Anwendungen ermöglichen, miteinander zu kommunizieren. Ein typisches Beispiel ist ein Webbrowser, der eine Verbindung zu einem Webserver herstellt. Der Browser verwendet einen Socket, um eine Anfrage an den Server zu senden, und der Server verwendet einen Socket, um die Antwort zurück an den Browser zu senden.
            </p>

            <h3 className="text-xl font-semibold mt-2">Wichtige Konzepte in der Socket-Programmierung</h3>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>Binden:</span> Der Vorgang, bei dem ein Socket an eine spezifische IP-Adresse und Portnummer gebunden wird, sodass er auf eingehende Verbindungen oder Datenpakete lauschen kann.</li>
              <li><span className='text-accent'>Hören (Listen):</span> Der Vorgang, bei dem ein Server-Socket auf Verbindungsanforderungen von Clients wartet.</li>
              <li><span className='text-accent'>Akzeptieren:</span> Der Vorgang, bei dem ein Server-Socket eine eingehende Verbindungsanforderung eines Client-Sockets akzeptiert und eine neue Socket-Verbindung erstellt.</li>
              <li><span className='text-accent'>Verbinden:</span> Der Vorgang, bei dem ein Client-Socket eine Verbindung zu einem Server-Socket herstellt.</li>
              <li><span className='text-accent'>Senden und Empfangen:</span> Die grundlegenden Operationen, die es Sockets ermöglichen, Daten zwischen Client und Server zu übertragen.</li>
              <li><span className='text-accent'>Schließen:</span> Der Vorgang, bei dem eine Socket-Verbindung beendet wird.</li>
            </ul>

            <p className="text-lg leading-relaxed">
              Das Verständnis von Ports und Sockets ist entscheidend für die Entwicklung von Netzwerkapplikationen, da sie die Mechanismen bereitstellen, durch die Computer im Netzwerk miteinander kommunizieren können. In der Praxis werden Sockets häufig in vielen Anwendungen verwendet, von einfachen Chat-Programmen bis hin zu komplexen verteilten Systemen.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Theorie zur Programmierung eines einfachen Chat-Clients in Java</h2>
            <h3 className="text-xl font-semibold mt-2">1. Einführung</h3>
            <p className="text-lg leading-relaxed">
              Ein Chat-Client in Java nutzt Sockets zur Kommunikation mit einem Server. Der Server fungiert als Vermittler und leitet Nachrichten zwischen verschiedenen Clients weiter. Die Kommunikation erfolgt über das TCP-Protokoll, da es zuverlässige, verbindungsorientierte Datenübertragungen ermöglicht.
            </p>
            <h3 className="text-xl font-semibold mt-2">2. Grundlagen</h3>
            <h4 className="text-lg font-semibold mt-2">Sockets:</h4>
            <p className="text-lg leading-relaxed">
              Ein Socket ist eine Kombination aus einer IP-Adresse und einer Portnummer. Es dient als Endpunkt für die Netzwerkkommunikation. Es gibt zwei Hauptarten von Sockets:
            </p>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>TCP Sockets:</span> Für verbindungsorientierte, zuverlässige Kommunikation.</li>
              <li><span className='text-accent'>UDP Sockets:</span> Für verbindungslose, weniger zuverlässige Kommunikation.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-2">Ports:</h4>
            <p className="text-lg leading-relaxed">
              Ports sind numerische Bezeichner, die spezifische Netzwerkdienste auf einem Host identifizieren. Jeder Dienst (z.B. HTTP, FTP) hat einen Standardport (z.B. HTTP nutzt Port 80).
            </p>
            <h3 className="text-xl font-semibold mt-2">3. Komponenten eines Chat-Clients</h3>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>Client-Socket:</span> Wird verwendet, um eine Verbindung zu einem Server-Socket herzustellen. In Java wird ein `Socket` Objekt verwendet.</li>
              <li><span className='text-accent'>Server-Socket:</span> Lauscht auf einem bestimmten Port auf Verbindungsanfragen von Clients. In Java wird ein `ServerSocket` Objekt verwendet.</li>
              <li><span className='text-accent'>Input/Output Streams:</span> Zum Senden und Empfangen von Nachrichten über die Socket-Verbindung. `InputStream` und `OutputStream` Klassen in Java ermöglichen den Datentransfer.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-2">4. Schritt-für-Schritt Anleitung</h3>
            <h4 className="text-lg font-semibold mt-2">Server-Programm:</h4>
            <pre>
              <code className="language-java">
{`import java.io.*;
import java.net.*;
import java.util.*;

public class ChatServer {
    private static Set<Socket> clientSockets = new HashSet<>();

    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            System.out.println("Server is listening on port 12345");

            while (true) {
                Socket socket = serverSocket.accept();
                clientSockets.add(socket);
                new ClientHandler(socket).start();
            }
        } catch (IOException ex) {
            System.out.println("Server exception: " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    private static class ClientHandler extends Thread {
        private Socket socket;

        public ClientHandler(Socket socket) {
            this.socket = socket;
        }

        public void run() {
            try (InputStream input = socket.getInputStream();
                 BufferedReader reader = new BufferedReader(new InputStreamReader(input))) {

                String message;
                while ((message = reader.readLine()) != null) {
                    System.out.println("Received: " + message);
                    broadcast(message, socket);
                }
            } catch (IOException ex) {
                System.out.println("Server exception: " + ex.getMessage());
                ex.printStackTrace();
            } finally {
                try {
                    socket.close();
                    clientSockets.remove(socket);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        private void broadcast(String message, Socket senderSocket) {
            for (Socket clientSocket : clientSockets) {
                if (clientSocket != senderSocket) {
                    try {
                        OutputStream output = clientSocket.getOutputStream();
                        PrintWriter writer = new PrintWriter(output, true);
                        writer.println(message);
                    } catch (IOException ex) {
                        System.out.println("Error sending message: " + ex.getMessage());
                        ex.printStackTrace();
                    }
                }
            }
        }
    }
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Client-Programm:</h4>
            <pre>
              <code className="language-java">
{`import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 12345)) {
            new ReadThread(socket).start();
            new WriteThread(socket).start();
        } catch (IOException ex) {
            System.out.println("Client exception: " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    private static class ReadThread extends Thread {
        private BufferedReader reader;

        public ReadThread(Socket socket) {
            try {
                InputStream input = socket.getInputStream();
                reader = new BufferedReader(new InputStreamReader(input));
            } catch (IOException ex) {
                System.out.println("Error getting input stream: " + ex.getMessage());
                ex.printStackTrace();
            }
        }

        public void run() {
            try {
                String message;
                while ((message = reader.readLine()) != null) {
                    System.out.println(message);
                }
            } catch (IOException ex) {
                System.out.println("Error reading from server: " + ex.getMessage());
                ex.printStackTrace();
            }
        }
    }

    private static class WriteThread extends Thread {
        private PrintWriter writer;
        private BufferedReader consoleReader;

        public WriteThread(Socket socket) {
            try {
                OutputStream output = socket.getOutputStream();
                writer = new PrintWriter(output, true);
                consoleReader = new BufferedReader(new InputStreamReader(System.in));
            } catch (IOException ex) {
                System.out.println("Error getting output stream: " + ex.getMessage());
                ex.printStackTrace();
            }
        }

        public void run() {
            try {
                String message;
                while ((message = consoleReader.readLine()) != null) {
                    writer.println(message);
                }
            } catch (IOException ex) {
                System.out.println("Error writing to server: " + ex.getMessage());
                ex.printStackTrace();
            }
        }
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">5. Fazit</h3>
            <p className="text-lg leading-relaxed">
              Die Programmierung eines einfachen Chat-Clients in Java verdeutlicht, wie Sockets zur Netzwerkkommunikation genutzt werden können. Ein Server-Socket lauscht auf Verbindungen und verwaltet mehrere Client-Verbindungen mittels Threads. Ein Client-Socket stellt die Verbindung zum Server her und ermöglicht das Senden und Empfangen von Nachrichten. Diese Grundlagen sind essenziell für die Entwicklung komplexerer Netzwerkapplikationen.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Threads in Java</h2>
            <h3 className="text-xl font-semibold mt-2">1. Einführung</h3>
            <p className="text-lg leading-relaxed">
              Ein Thread ist der kleinste Ausführungseinheit in einem Programm. In Java kann ein Programm mehrere Threads gleichzeitig ausführen, wodurch parallele und nebenläufige Programmierung ermöglicht wird. Dies ist besonders nützlich für Aufgaben wie die gleichzeitige Bearbeitung mehrerer Netzwerkverbindungen oder die Verbesserung der Anwendungsleistung durch parallele Verarbeitung.
            </p>
            <h3 className="text-xl font-semibold mt-2">2. Grundlagen</h3>
            <h4 className="text-lg font-semibold mt-2">Erstellen von Threads:</h4>
            <p className="text-lg leading-relaxed">
              In Java können Threads auf zwei Arten erstellt werden:
            </p>
            <ul className="list-disc ml-8">
              <li>Durch Implementieren des <span className='text-accent'>Runnable</span> Interface und Übergeben einer Instanz an einen <span className='text-accent'>Thread</span>.</li>
              <li>Durch Erben von der <span className='text-accent'>Thread</span> Klasse und Überschreiben der <span className='text-accent'>run()</span> Methode.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-2">Zustände eines Threads:</h4>
            <p className="text-lg leading-relaxed">
              Ein Thread kann verschiedene Zustände haben:
            </p>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>New:</span> Der Thread wurde erstellt, aber noch nicht gestartet.</li>
              <li><span className='text-accent'>Runnable:</span> Der Thread ist bereit zur Ausführung und wartet auf CPU-Zeit.</li>
              <li><span className='text-accent'>Blocked:</span> Der Thread wartet darauf, eine Ressource freizugeben.</li>
              <li><span className='text-accent'>Waiting:</span> Der Thread wartet auf die Benachrichtigung eines anderen Threads.</li>
              <li><span className='text-accent'>Timed Waiting:</span> Der Thread wartet für eine bestimmte Zeitspanne.</li>
              <li><span className='text-accent'>Terminated:</span> Der Thread hat seine Ausführung beendet.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-2">3. Beispiel: Implementierung von Threads</h3>
            <h4 className="text-lg font-semibold mt-2">Implementierung des Runnable Interface:</h4>
            <pre>
              <code className="language-java">
{`public class MyRunnable implements Runnable {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable());
        thread1.start();

        Thread thread2 = new Thread(new MyRunnable());
        thread2.start();
    }
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Erben von der Thread Klasse:</h4>
            <pre>
              <code className="language-java">
{`public class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }

    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        thread1.start();

        MyThread thread2 = new MyThread();
        thread2.start();
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">4. Synchronisation von Threads</h3>
            <p className="text-lg leading-relaxed">
              Bei der Arbeit mit mehreren Threads können Synchronisationsprobleme auftreten, wenn mehrere Threads gleichzeitig auf dieselbe Ressource zugreifen. In Java wird dies durch die Verwendung des <span className='text-accent'>synchronized</span> Schlüsselworts gelöst.
            </p>
            <pre>
              <code className="language-java">
{`public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }

    public static void main(String[] args) {
        Counter counter = new Counter();
        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        };

        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final count: " + counter.getCount());
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">5. Fazit</h3>
            <p className="text-lg leading-relaxed">
              Threads in Java ermöglichen parallele und nebenläufige Programmierung, was die Leistung und Effizienz von Anwendungen verbessern kann. Die Implementierung von Threads kann entweder durch das Implementieren des <span className='text-accent'>Runnable</span> Interface oder durch das Erben von der <span className='text-accent'>Thread</span> Klasse erfolgen. Synchronisation ist wichtig, um Datenkonsistenz bei gleichzeitigen Zugriffen zu gewährleisten.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Das Philosophenproblem</h2>
            <h3 className="text-xl font-semibold mt-2">1. Einführung</h3>
            <p className="text-lg leading-relaxed">
              Das Philosophenproblem ist ein klassisches Synchronisationsproblem in der Informatik, das ursprünglich von Edsger Dijkstra formuliert wurde. Es beschreibt eine Situation, in der fünf Philosophen abwechselnd denken und essen. Sie sitzen um einen runden Tisch, und zwischen jedem Paar von Philosophen befindet sich eine Gabel. Ein Philosoph muss beide Gabeln nehmen, um zu essen. Das Problem stellt sicher, dass keine zwei Philosophen gleichzeitig dieselbe Gabel benutzen können, um Deadlocks und Ressourcenverklemmung zu vermeiden.
            </p>
            <h3 className="text-xl font-semibold mt-2">2. Das Szenario</h3>
            <p className="text-lg leading-relaxed">
              Es gibt fünf Philosophen, die ihr Leben damit verbringen, abwechselnd zu denken und zu essen. Jeder Philosoph benötigt zwei Gabeln, um zu essen. Zwischen jedem Paar von Philosophen liegt eine Gabel. Daher müssen sich die Philosophen die Gabeln teilen.
            </p>
            <h3 className="text-xl font-semibold mt-2">3. Probleme und Lösungen</h3>
            <h4 className="text-lg font-semibold mt-2">a) Deadlock</h4>
            <p className="text-lg leading-relaxed">
              Ein Deadlock tritt auf, wenn jeder Philosoph eine Gabel aufhebt und auf die zweite Gabel wartet. Da jede Gabel bereits von einem anderen Philosophen gehalten wird, warten alle Philosophen unendlich lange.
            </p>
            <h4 className="text-lg font-semibold mt-2">b) Lösungen</h4>
            <p className="text-lg leading-relaxed">
              Es gibt verschiedene Ansätze zur Lösung des Philosophenproblems:
            </p>
            <ul className="list-disc ml-8">
              <li><span className='text-accent'>Asymmetrische Lösung:</span> Ein Philosoph nimmt zuerst die linke, dann die rechte Gabel, während der nächste Philosoph zuerst die rechte, dann die linke Gabel nimmt. Dies verhindert Deadlocks.</li>
              <li><span className='text-accent'>Arbitration:</span> Ein externer Schiedsrichter gibt die Erlaubnis zum Aufheben der Gabeln. Nur ein Philosoph kann die Gabeln gleichzeitig aufnehmen.</li>
              <li><span className='text-accent'>Benutzung von Ressourcenhierarchien:</span> Jeder Philosoph nimmt zuerst die Gabel mit der niedrigeren Nummer und dann die Gabel mit der höheren Nummer auf.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-2">4. Beispielimplementierung in Java</h3>
            <pre>
              <code className="language-java">
{`import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class PhilosopherProblem {
    private static class Philosopher extends Thread {
        private final Lock leftFork;
        private final Lock rightFork;

        public Philosopher(Lock leftFork, Lock rightFork) {
            this.leftFork = leftFork;
            this.rightFork = rightFork;
        }

        private void doAction(String action) throws InterruptedException {
            System.out.println(Thread.currentThread().getName() + " " + action);
            Thread.sleep(((int) (Math.random() * 100)));
        }

        public void run() {
            try {
                while (true) {
                    // thinking
                    doAction("Thinking");
                    leftFork.lock();
                    try {
                        doAction("Picked up left fork");
                        rightFork.lock();
                        try {
                            // eating
                            doAction("Picked up right fork - eating"); 
                            doAction("Put down right fork");
                        } finally {
                            rightFork.unlock();
                        }
                        doAction("Put down left fork");
                    } finally {
                        leftFork.unlock();
                    }
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }

    public static void main(String[] args) {
        Philosopher[] philosophers = new Philosopher[5];
        Lock[] forks = new ReentrantLock[philosophers.length];

        for (int i = 0; i < forks.length; i++) {
            forks[i] = new ReentrantLock();
        }

        for (int i = 0; i < philosophers.length; i++) {
            Lock leftFork = forks[i];
            Lock rightFork = forks[(i + 1) % forks.length];

            // The last philosopher picks up the right fork first
            if (i == philosophers.length - 1) {
                philosophers[i] = new Philosopher(rightFork, leftFork);
            } else {
                philosophers[i] = new Philosopher(leftFork, rightFork);
            }

            philosophers[i].start();
        }
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">5. Fazit</h3>
            <p className="text-lg leading-relaxed">
              Das Philosophenproblem veranschaulicht die Herausforderungen der Synchronisation und der Vermeidung von Deadlocks in parallelen Systemen. Es zeigt, wie wichtig es ist, geeignete Synchronisationsmechanismen und Strategien zu entwickeln, um Ressourcenverklemmung und -verhungern zu verhindern.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
