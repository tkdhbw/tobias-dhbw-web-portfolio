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
          <span className='text-accent'>Netzwerkprogrammierung</span> über Sockets
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
