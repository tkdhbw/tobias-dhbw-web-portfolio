// pages/ConcurrencyProblems.js

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Change to your chosen theme
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const ConcurrencyProblems = () => {
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
          Vorlesung <span className='text-accent'> 3</span> <br />
          <span className='text-accent'>Threads</span> und Nebenläufigkeitsprobleme 
        </motion.h2>
        {/* content */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <div className="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-semibold mt-4">Threads und Nebenläufigkeitsprobleme</h2>
            <h3 className="text-xl font-semibold mt-2">Einführung</h3>
            <p className="text-lg leading-relaxed">
              Nebenläufigkeit bezieht sich auf die gleichzeitige Ausführung mehrerer Threads in einem Programm. Während Threads die Ausführung von Aufgaben parallelisieren und die Anwendungsleistung verbessern können, bringen sie auch mehrere Herausforderungen und Probleme mit sich, insbesondere wenn sie gemeinsame Ressourcen verwenden.
            </p>
            <h3 className="text-xl font-semibold mt-2">Arten von Nebenläufigkeitsproblemen</h3>
            <h4 className="text-lg font-semibold mt-2">Race Conditions (Wettlaufsituationen)</h4>
            <p className="text-lg leading-relaxed">
              Eine Race Condition tritt auf, wenn zwei oder mehr Threads gleichzeitig auf gemeinsame Daten zugreifen und die Endergebnisse vom Zeitpunkt der Ausführung abhängen. Dies kann zu inkonsistenten oder falschen Ergebnissen führen.
            </p>
            <h4 className="text-lg font-semibold mt-2">Deadlocks (Verklemmungen)</h4>
            <p className="text-lg leading-relaxed">
              Ein Deadlock tritt auf, wenn zwei oder mehr Threads auf Ressourcen warten, die von anderen Threads gehalten werden, wodurch ein unendlicher Wartungszustand entsteht. In diesem Zustand kann keiner der Threads seine Ausführung fortsetzen.
            </p>
            <h4 className="text-lg font-semibold mt-2">Livelocks</h4>
            <p className="text-lg leading-relaxed">
              Ein Livelock ähnelt einem Deadlock, jedoch ändern die betroffenen Threads ständig ihren Zustand als Reaktion auf die Aktionen des anderen, ohne nennenswerte Fortschritte zu machen.
            </p>
            <h4 className="text-lg font-semibold mt-2">Starvation (Verhungern)</h4>
            <p className="text-lg leading-relaxed">
              Starvation tritt auf, wenn ein Thread nie die CPU-Zeit erhält, die er benötigt, um fortzufahren, weil andere Threads kontinuierlich bevorzugt werden.
            </p>
            <h3 className="text-xl font-semibold mt-2">Lösungen für Nebenläufigkeitsprobleme</h3>
            <h4 className="text-lg font-semibold mt-2">Synchronisation</h4>
            <p className="text-lg leading-relaxed">
              Synchronisation stellt sicher, dass nur ein Thread gleichzeitig auf eine kritische Region zugreifen kann. Dies kann durch die Verwendung des <span className='text-accent'>synchronized</span> Schlüsselworts in Java erreicht werden.
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
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Locks</h4>
            <p className="text-lg leading-relaxed">
              Die <span className='text-accent'>java.util.concurrent.locks</span> Bibliothek bietet flexiblere Lock-Implementierungen als die synchronisierten Methoden und Blöcke.
            </p>
            <pre>
              <code className="language-java">
{`import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class Counter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }

    public int getCount() {
        return count;
    }
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Warten und Benachrichtigen</h4>
            <p className="text-lg leading-relaxed">
              Die Methoden <span className='text-accent'>wait()</span> und <span className='text-accent'>notify()</span> der Object-Klasse können verwendet werden, um die Kommunikation zwischen Threads zu koordinieren.
            </p>
            <pre>
              <code className="language-java">
{`public class SharedResource {
    private boolean available = false;

    public synchronized void produce() throws InterruptedException {
        while (available) {
            wait();
        }
        available = true;
        notifyAll();
    }

    public synchronized void consume() throws InterruptedException {
        while (!available) {
            wait();
        }
        available = false;
        notifyAll();
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Fazit</h3>
            <p className="text-lg leading-relaxed">
              Nebenläufigkeitsprobleme stellen eine große Herausforderung in der parallelen Programmierung dar. Das Verständnis und die Anwendung geeigneter Synchronisationstechniken und -mechanismen sind entscheidend, um sichere und effiziente nebenläufige Programme zu erstellen. Java bietet eine Vielzahl von Werkzeugen und Bibliotheken, um diese Herausforderungen zu bewältigen, einschließlich synchronisierter Methoden, Lock-Objekten und der Verwendung von <span className='text-accent'>wait()</span> und <span className='text-accent'>notify()</span>.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Threads: Synchronisierung</h2>
            <h3 className="text-xl font-semibold mt-2">Einführung</h3>
            <p className="text-lg leading-relaxed">
              Synchronisierung ist ein Konzept in der parallelen Programmierung, das sicherstellt, dass mehrere Threads sicher auf gemeinsam genutzte Ressourcen zugreifen können. Ohne Synchronisierung können Race Conditions und andere Nebenläufigkeitsprobleme auftreten, die zu inkonsistenten Daten und unvorhersehbarem Verhalten führen.
            </p>
            <h3 className="text-xl font-semibold mt-2">Das <span className='text-accent'>synchronized</span> Schlüsselwort</h3>
            <p className="text-lg leading-relaxed">
              In Java kann das <span className='text-accent'>synchronized</span> Schlüsselwort verwendet werden, um sicherzustellen, dass nur ein Thread gleichzeitig auf eine kritische Region zugreifen kann. Dies kann auf Methodenebene oder auf Blockebene erfolgen.
            </p>
            <h4 className="text-lg font-semibold mt-2">Synchronisierte Methoden</h4>
            <p className="text-lg leading-relaxed">
              Eine synchronisierte Methode ermöglicht den exklusiven Zugriff auf eine Methode für einen Thread.
            </p>
            <pre>
              <code className="language-java">
{`public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Synchronisierte Blöcke</h4>
            <p className="text-lg leading-relaxed">
              Synchronisierte Blöcke bieten eine feinere Kontrolle über die Synchronisierung, da sie nur einen bestimmten Teil einer Methode synchronisieren können.
            </p>
            <pre>
              <code className="language-java">
{`public class Counter {
    private int count = 0;
    private final Object lock = new Object();

    public void increment() {
        synchronized (lock) {
            count++;
        }
    }

    public int getCount() {
        synchronized (lock) {
            return count;
        }
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Locks und ReentrantLock</h3>
            <p className="text-lg leading-relaxed">
              Die <span className='text-accent'>java.util.concurrent.locks</span> Bibliothek bietet die <span className='text-accent'>Lock</span> Schnittstelle und die <span className='text-accent'>ReentrantLock</span> Klasse, die mehr Flexibilität und Funktionen als das <span className='text-accent'>synchronized</span> Schlüsselwort bieten.
            </p>
            <pre>
              <code className="language-java">
{`import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class Counter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }

    public int getCount() {
        lock.lock();
        try {
            return count;
        } finally {
            lock.unlock();
        }
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Warten und Benachrichtigen</h3>
            <p className="text-lg leading-relaxed">
              Die Methoden <span className='text-accent'>wait()</span>, <span className='text-accent'>notify()</span> und <span className='text-accent'>notifyAll()</span> werden verwendet, um die Kommunikation zwischen Threads zu koordinieren. Diese Methoden müssen innerhalb eines synchronisierten Blocks oder einer synchronisierten Methode aufgerufen werden.
            </p>
            <pre>
              <code className="language-java">
{`public class SharedResource {
    private boolean available = false;

    public synchronized void produce() throws InterruptedException {
        while (available) {
            wait();
        }
        available = true;
        notifyAll();
    }

    public synchronized void consume() throws InterruptedException {
        while (!available) {
            wait();
        }
        available = false;
        notifyAll();
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Fazit</h3>
            <p className="text-lg leading-relaxed">
              Die Synchronisierung von Threads ist entscheidend für die Erstellung sicherer und effizienter nebenläufiger Programme. Java bietet mehrere Mechanismen zur Synchronisierung, einschließlich des <span className='text-accent'>synchronized</span> Schlüsselworts, der <span className='text-accent'>Lock</span> Schnittstelle und der <span className='text-accent'>wait()</span> und <span className='text-accent'>notify()</span> Methoden. Das Verständnis und die richtige Anwendung dieser Mechanismen sind wesentlich, um Race Conditions, Deadlocks und andere Nebenläufigkeitsprobleme zu vermeiden.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Threads: Thread-Kommunikation</h2>
            <h3 className="text-xl font-semibold mt-2">Einführung</h3>
            <p className="text-lg leading-relaxed">
              Thread-Kommunikation ist ein wichtiger Aspekt der nebenläufigen Programmierung, der es Threads ermöglicht, sicher und effizient miteinander zu interagieren. In Java gibt es mehrere Mechanismen, um die Kommunikation zwischen Threads zu handhaben, einschließlich der Methoden <span className='text-accent'>wait()</span>, <span className='text-accent'>notify()</span> und <span className='text-accent'>notifyAll()</span>.
            </p>
            <h3 className="text-xl font-semibold mt-2">Warten und Benachrichtigen</h3>
            <p className="text-lg leading-relaxed">
              Die Methoden <span className='text-accent'>wait()</span>, <span className='text-accent'>notify()</span> und <span className='text-accent'>notifyAll()</span> der <span className='text-accent'>Object</span>-Klasse werden verwendet, um die Kommunikation und Synchronisation zwischen Threads zu koordinieren. Diese Methoden müssen innerhalb eines synchronisierten Blocks oder einer synchronisierten Methode aufgerufen werden.
            </p>
            <h4 className="text-lg font-semibold mt-2">Die Methode <span className='text-accent'>wait()</span></h4>
            <p className="text-lg leading-relaxed">
              Die Methode <span className='text-accent'>wait()</span> versetzt den aufrufenden Thread in einen Wartezustand, bis er von einem anderen Thread mit <span className='text-accent'>notify()</span> oder <span className='text-accent'>notifyAll()</span> geweckt wird.
            </p>
            <pre>
              <code className="language-java">
{`public synchronized void waitForCondition() throws InterruptedException {
    while (!condition) {
        wait();
    }
    // Proceed when condition is met
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Die Methode <span className='text-accent'>notify()</span></h4>
            <p className="text-lg leading-relaxed">
              Die Methode <span className='text-accent'>notify()</span> weckt einen einzigen wartenden Thread, der auf das gleiche Objekt wartet. Wenn mehrere Threads auf das Objekt warten, wird einer von ihnen willkürlich geweckt.
            </p>
            <pre>
              <code className="language-java">
{`public synchronized void signalCondition() {
    condition = true;
    notify();
}`}
              </code>
            </pre>
            <h4 className="text-lg font-semibold mt-2">Die Methode <span className='text-accent'>notifyAll()</span></h4>
            <p className="text-lg leading-relaxed">
              Die Methode <span className='text-accent'>notifyAll()</span> weckt alle wartenden Threads, die auf das gleiche Objekt warten. Jeder der geweckten Threads muss erneut die Bedingung überprüfen, bevor er fortfährt.
            </p>
            <pre>
              <code className="language-java">
{`public synchronized void signalAllConditions() {
    condition = true;
    notifyAll();
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Beispiel: Einfache Thread-Kommunikation</h3>
            <p className="text-lg leading-relaxed">
              Im folgenden Beispiel wird die Kommunikation zwischen einem Produzenten-Thread und einem Konsumenten-Thread demonstriert. Der Produzent erzeugt Daten und signalisiert dem Konsumenten, dass die Daten verfügbar sind.
            </p>
            <pre>
              <code className="language-java">
{`public class SharedResource {
    private boolean available = false;

    public synchronized void produce() throws InterruptedException {
        while (available) {
            wait();
        }
        available = true;
        notifyAll();
    }

    public synchronized void consume() throws InterruptedException {
        while (!available) {
            wait();
        }
        available = false;
        notifyAll();
    }
}

public class Producer implements Runnable {
    private final SharedResource resource;

    public Producer(SharedResource resource) {
        this.resource = resource;
    }

    @Override
    public void run() {
        try {
            while (true) {
                resource.produce();
                System.out.println("Produced");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

public class Consumer implements Runnable {
    private final SharedResource resource;

    public Consumer(SharedResource resource) {
        this.resource = resource;
    }

    @Override
    public void run() {
        try {
            while (true) {
                resource.consume();
                System.out.println("Consumed");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();
        Thread producerThread = new Thread(new Producer(resource));
        Thread consumerThread = new Thread(new Consumer(resource));

        producerThread.start();
        consumerThread.start();
    }
}`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mt-2">Fazit</h3>
            <p className="text-lg leading-relaxed">
              Die Kommunikation zwischen Threads ist ein wesentlicher Bestandteil der nebenläufigen Programmierung. In Java ermöglichen die Methoden <span className='text-accent'>wait()</span>, <span className='text-accent'>notify()</span> und <span className='text-accent'>notifyAll()</span> eine effektive und koordinierte Interaktion zwischen Threads. Durch das richtige Verständnis und die Anwendung dieser Methoden können Entwickler sicherstellen, dass ihre Programme korrekt und effizient arbeiten.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConcurrencyProblems;
