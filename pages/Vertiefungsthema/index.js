import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Change to your chosen theme
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ProxyDisplay from '../../components/ProxyDisplay';
import Image from 'next/image';



const Vertiefungsthema = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className='bg-primary/30 py-36 flex flex-col items-center'> {/* Removed h-full here */}
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row justify-center items-center'>
            {/* text */}
            <div className='text-center flex flex-col mbw xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-12 mx-auto'
              >
                Vertiefungsthema<span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto'
              >
                Als Vertiefungsthema habe ich Web-Scraping gewählt.
              </motion.p>
            </div>
          </div>
        </div>

        {/* New Content Section */}
        {/* Repeat this section for each new content block */}
        <div className='py-36'> {/* Removed h-full here */}
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-col gap-x-8'>
              <div>
                <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                  <div class="mb-6">
                    <h1 class="text-4xl font-bold mb-4">
                      Was ist Web Scraping <span class="text-red-500">?</span>
                    </h1>
                    
                    <p class="text-lg mb-4">
                      Web-Scraping ist eine Technik, um Daten aus dem Internet zu extrahieren. Sie bezieht sich auf den Prozess des automatischen Herunterladens und Extrahierens von Informationen aus Webseiten. Dies ist besonders nützlich, um große Mengen an Daten effizient zu sammeln, die sonst manuell schwer zu erfassen wären.
                    </p>

                    <p class="text-lg mb-4">
                      Der Bezug zum Web-Programmieren ist deutlich, da Web-Scraping eng mit dem Verständnis von HTML, CSS und JavaScript verbunden ist. Diese Technologien sind die Grundlage für den Aufbau von Webseiten. Um Web-Scraping effektiv durchzuführen, muss man verstehen, wie Webseiten strukturiert sind und wie man auf die gewünschten Daten zugreifen kann.
                    </p>

                    <p class="text-lg mb-4">
                      Python ist eine beliebte Sprache für Web-Scraping, da es mehrere leistungsstarke Bibliotheken und Frameworks gibt, die diesen Prozess vereinfachen. Die bekannteste Bibliothek ist Beautiful Soup, die es ermöglicht, HTML- und XML-Dateien zu parsen. Sie bietet Methoden, um durch Elemente zu navigieren, sie zu suchen und zu ändern, was das Extrahieren spezifischer Daten erleichtert.
                    </p>
                  </div>


                  <div>
                    <p class="text-lg font-semibold mb-4">
                      Ein typischer Web-Scraping-Prozess in Python beinhaltet folgende Schritte:
                    </p>
                    <ul class="list-none space-y-2 ml-4">
                      <li class="relative">
                        <span class="absolute -left-4 text-red-500">•</span>
                        <span class="font-bold text-red-500">Anfordern der Webseite: </span>
                        Zuerst wird die Webseite mit einer Bibliothek wie requests angefordert. Dieser Schritt ist vergleichbar mit dem Öffnen einer Webseite in einem Browser.
                      </li>

                      <li class="relative">
                        <span class="absolute -left-4 text-red-500">•</span>
                        <span class="font-bold text-red-500">Parsen des HTML-Codes: </span>
                        Nachdem die Webseite geladen wurde, verwendet man Beautiful Soup, um den HTML-Code zu parsen. Hierdurch kann man auf die verschiedenen Elemente der Webseite wie Tags, IDs und Klassen zugreifen.
                      </li>  

                      <li class="relative">
                        <span class="absolute -left-4 text-red-500">•</span>
                        <span class="font-bold text-red-500">Extrahieren der Daten: </span>
                        Nun kann man die spezifischen Informationen, die man benötigt, aus der Struktur der Webseite extrahieren. Dies kann Text, Bilder, Links oder andere Daten sein.
                      </li>  

                      <li class="relative">
                        <span class="absolute -left-4 text-red-500">•</span>
                        <span class="font-bold text-red-500">Speichern der Daten: </span>
                        Die extrahierten Daten können dann in einem gewünschten Format gespeichert werden, z.B. in einer CSV-Datei, einer Datenbank oder einem JSON-Format.
                      </li>
                    </ul>
                  </div>
                </div>
              </div> 

              <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
  
                <div class="mb-6">
                  <p class="text-lg leading-relaxed mb-4">
                    Es ist wichtig zu beachten, dass Web-Scraping rechtliche und ethische Fragen aufwirft. Nicht alle Webseiten erlauben das Scraping ihrer Daten, und manche haben spezifische Regeln, die in den Nutzungsbedingungen oder in einer robots.txt-Datei festgelegt sind. Es ist daher entscheidend, diese Aspekte zu berücksichtigen und sicherzustellen, dass das Scraping im Einklang mit diesen Richtlinien und dem geltenden Recht erfolgt.
                  </p>
                </div>

                <div class="mb-6">
                  <h1 class="text-3xl font-bold mb-4">
                    Warum Web-Scraping?
                  </h1>
                  <p class="text-lg leading-relaxed mb-4">
                    Web-Scraping wird aus mehreren Gründen eingesetzt, die von technischen bis hin zu geschäftlichen Anforderungen reichen. Hier sind einige der wichtigsten Gründe:
                  </p>
                  
                  <ul class="list-none space-y-2 ml-4">
                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Datenbeschaffung für Analysezwecke: </span>
                      Eine der häufigsten Anwendungen von Web-Scraping ist das Sammeln von Daten für die Analyse. Unternehmen und Forscher nutzen diese Technik, um große Mengen an öffentlich verfügbaren Daten von Webseiten zu sammeln, um Markttrends zu analysieren, Wettbewerbsanalysen durchzuführen, Kundenverhalten zu verstehen oder für akademische Forschungen.
                    </li>

                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Automatisierung und Effizienz: </span>
                      Web-Scraping ermöglicht die Automatisierung des Datensammelprozesses, der manuell zeitaufwändig und fehleranfällig sein kann. Durch Automatisierung können Daten regelmäßig und effizient gesammelt werden.
                    </li>

                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Monitoring und Tracking: </span>
                      Unternehmen nutzen Web-Scraping, um Preise, Lagerbestände oder neue Inhalte auf Konkurrenzwebseiten zu überwachen. Dies hilft ihnen, schnell auf Marktveränderungen zu reagieren.
                    </li>

                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Lead-Generierung: </span>
                      Marketing- und Vertriebsteams verwenden Web-Scraping, um potenzielle Kundenkontakte zu sammeln. Sie extrahieren Informationen wie Kontaktangaben von Websites, die für ihr Geschäft relevant sind.
                    </li>

                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Suchmaschinenoptimierung (SEO): </span>
                      Web-Scraping wird eingesetzt, um Keywords, Backlinks und andere SEO-relevante Daten von Webseiten zu extrahieren. Diese Informationen helfen bei der Optimierung der eigenen Webseite für Suchmaschinen.
                    </li>

                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Inhaltssyndizierung: </span>
                      Web-Scraping ermöglicht das Sammeln von Inhalten aus verschiedenen Quellen, um sie auf einer einzigen Plattform zusammenzuführen. News-Aggregatoren verwenden beispielsweise diese Technik, um Artikel von verschiedenen Online-Nachrichtenquellen zu sammeln.
                    </li>

                    <li class="relative">
                      <span class="absolute -left-6 top-1 text-red-500">•</span>
                      <span class="font-bold text-red-500">Maschinelles Lernen und KI: </span>
                      Für Projekte im Bereich des maschinellen Lernens und der künstlichen Intelligenz ist oft eine große Menge an Daten erforderlich. Web-Scraping ist eine Methode, um diese Daten zu sammeln, insbesondere wenn es um Text-, Bild- oder Verhaltensdaten geht.
                    </li>       
                  </ul>
                </div>

                <div class="mb-6">
                  <h1 class="text-3xl font-bold mb-4">
                    Das Web-Scraping Programm
                  </h1>
                  <p class="text-lg leading-relaxed mb-4">
                    Um Web-Scraping in Python zu demonstrieren, habe ich ein Programm geschrieben, welches die Tabelle der Webseite "https://spys.one/en/" mit den "Free Proxy" scraped und dann hier wieder einfügt. Hierfür habe ich die Bibliothek Beautiful Soup verwendet.
                  </p>
                  <p class="text-lg leading-relaxed mb-4">
                    Dieser Prozess läuft alle 60 Sekunden, damit haben wir eine immer eine aktuelle Kopie der Tabelle.
                  </p>
                  <p class="text-lg leading-relaxed">
                    Ein wichtiger Faktor ist es den Prozess nicht zu oft zu machen, da sonder der Server der Webseite "https://spys.one/en/" uns aufgrund einer DDOS attacke blacklsiten könnte.
                  </p>
                </div>
              </div>

              <div className='text-xs'>
                <h1 class="text-3xl font-bold mb-4">
                      Beispiel Programm
                </h1>
                <pre><code className="language-javascript">
                  {` 
import requests 
from bs4 import BeautifulSoup
import re
from datetime import datetime

word_to_num = {
    'Zero': '0', 'One': '1', 'Two': '2', 'Three': '3', 'Four': '4', 'Five': '5',
    'Six': '6', 'Seven': '7', 'Eight': '8', 'Nine': '9'
}

path = "/Users/tobiaskarsch/Documents/VM/"

def replace_words_with_numbers(s):
    for word, num in word_to_num.items():
        s = s.replace(word, num)
    return s

url = 'https://spys.one/en/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

response = requests.get(url, headers=headers)

with open(path + 'proxyList.txt', 'w') as file:

    if response.status_code == 200:

        html_content = response.text

        soup = BeautifulSoup(html_content, 'html.parser')

        proxy_entries = soup.find_all('tr', class_=re.compile('spy1x|spy1xx'))

        file.write(f'{datetime.now().strftime("%d.%m.%Y %H:%M:%S")}')

        for entry in proxy_entries:
            ip_tag = entry.find('font', class_='spy14')
            script_tag = ip_tag.find_next('script') if ip_tag else None
            country_tag = entry.find('font', class_='spy14').find_next('acronym') if ip_tag else None

            type_tag = entry.find('font', class_='spy1')
            anonymity_tag = type_tag.find_next('font') if type_tag else None
            uptime_tag = anonymity_tag.find_next('font', class_='spy1').find_next('acronym') if anonymity_tag else None
            check_date_tags = entry.find_all('font', class_='spy1')[-2:]

            if script_tag and ip_tag and country_tag and type_tag and anonymity_tag and uptime_tag and check_date_tags:
                ip = ip_tag.get_text(strip=True)
                country = country_tag.get('title', 'Unknown').split(' ')[0]
                proxy_type = type_tag.get_text(strip=True)
                anonymity = anonymity_tag.get_text(strip=True)
                uptime = uptime_tag.get_text(strip=True)
                check_date = ' '.join(tag.get_text(strip=True) for tag in check_date_tags)
                script_code = script_tag.string

                script_code_numeric = replace_words_with_numbers(script_code)

                port_matches = re.findall(r'\((\w+)\^(\w+)\)', script_code_numeric)
                if port_matches:
                    port = 0
                    for part in port_matches:
                        port ^= int(part[0], 16) ^ int(part[1], 16)
                    file.write(f'Proxy: {ip}:{port}, Country: {country}, Type: {proxy_type}, Anonymity: {anonymity}, Uptime: {uptime}, Check Date: {check_date}')
    else:
        file.write(f"Failed to retrieve the webpage. Status code: {response.status_code}")

print('Done')
                  `}
                  </code></pre>
                </div> 
              </div>
              <h1 class="text-3xl font-bold mb-4 pt-20">
                Ergebnis:
              </h1>
              <ProxyDisplay />

              <div className='text-xs'>
                <h1 class="text-3xl font-bold mb-4 pt-20">
                  Ein weiteres Beispiel:
                </h1>
                <p class="text-lg mb-4">
                Letztes Jahr habe ich ein Python-Programm entwickelt, um eine Herausforderung mit meinem Adventskalender zu bewältigen. Der Kalender bot tägliche Gewinnchancen, aber um herauszufinden, ob ich gewonnen hatte, musste ich online nachsehen, ob meine einzigartige Kalendernummer unter den Tagesgewinnern war. Da ich diesen Prozess mühsam fand, erstellte ich ein Programm, das automatisch einmal täglich die Gewinnnummern von der Webseite abruft und überprüft, ob meine Nummer darunter ist. Außerdem habe ich das Programm so eingerichtet, dass es mir täglich eine E-Mail schickt, die mir mitteilt, ob ich etwas gewonnen habe oder nicht. Leider hatte ich in diesem Adventskalender keinen Gewinn.
                </p>
                <div className='text-xs'>
                <h1 class="text-3xl font-bold mb-4">
                      Beispiel Programm
                </h1>
                <pre><code className="language-javascript">
                  {` 
import requests
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from datetime import date
import csv, smtplib, ssl
from datetime import datetime

url = "https://k2022.lions-gruenstadt.de/gewinner"
kalenderTobias = "4917"
id = "gewinnerliste"
today = date.today()
newFormatDate = today.strftime('%d.%m.%Y')
subject = """Subject: Lions Adventskalender \n"""

def getWebPageDataCurrent():
    today = date.today()
    newFormatDate = today.strftime('%d.%m.%Y')
    print("Getting Website Information")
    driver = webdriver.Firefox()
    driver.get(url)
    time.sleep(15)
    html = driver.page_source

    result = driver.find_element(By.ID, 'gewinnerliste')
    readable = str(result.text)

    driver.quit()

    tobias = ""
    loser = ""

    won = 0

    newFormat = newFormatDate.lstrip('0')

    seperate = readable.split("€")
    for i in range(len(seperate)):
        if newFormat in seperate[i]:
            if kalenderTobias in seperate[i]:
                a = "\n\nTobias won!\n"
                b = seperate[i]
                tobias = a + b
                won += 1
        if won == 0:
            loser = "Today neither of you has won\n"

    print("Received Website Information")
    finalText = tobias + "\n" + loser
    subject = """Subject: Lions Adventskalender \n""" + str(newFormat) + "\n\n" + finalText
    return subject


def sendMail(message):
    
    server = smtplib.SMTP('smtp.xxx.xxx', 000)
    server.starttls()
    server.login("noreply@xxx.cc", "xxx")
    msg = (message)
    server.sendmail("noreply@xxx.cc", "txxx.kxxx@ixxx.com", msg)
    server.quit()
    print("E-mail send successfully to Tobias on the: ", datetime.now())


def sleepTimer():
    date_time = datetime.now()
    print("Sleeping...")

    wert = "08:00:00"
    stopper = True
    counter = 0

    while stopper:
        date_time = datetime.now()
        d = date_time.strftime("%X")
        if d == wert:
            print("Current Day: ", datetime.now())
            print("Set time reached")
            stopper = False
        else:
            if counter == 15:
                print("Sleeping...")
                time.sleep(1)
                counter = 0
            else: 
                counter += 1
                time.sleep(1)

def programm():
    today = date.today()

    newFormatDate = today.strftime('%d.%m.%Y')
    print("Now running: ", datetime.now(), "\n\n")
    currentDay = newFormatDate
    running = True
    while running:
        newFormatDate = today.strftime('%d.%m.%Y')
        print("Currently running: ", datetime.now(), "\n\n")
        currentDay = newFormatDate

        if str(currentDay) == "25.12.2022":
            text = subject + "Der Adventskalender ist zu ende."
            sendMailChrissi(text)
            sendMailTobias(text)
            running = False
        else:
            data = getWebPageDataCurrent()
            sendMail(data)
            sleepTimer()

def main():
    try:
        programm()
    except:
        print("An error has occured.")
        print("Waiting 10 seconds.")
        time.sleep(10)
        main()

main()
                  `}
                  </code></pre>
                </div>
                <p class="text-lg mb-4 pt-10">
                  Da dieses Programm nur eine E-Mail generiet, können Sie unten das Ergebnis sehen. Noch einen kleinen Kommentart zu Programm. Dieses Programm verwendet eine andere Methode des Web.Scraping wie das vorherige Programm, da wir hier die Webseite in einem Browser öffnen und somit einen User simulieren. Diese Methode dauert leider etwas länger,
                  aber aufgrund der Struktur der Webseite ist dies notwendig, da nur so die Inhalte und somit die Gewinnernummern geladen werden.
                </p>
                <div className='pt-10'>
                  <Image src="/LionsEmailAdventskalender.png" width={1200} height={200} alt='' />
                </div>
              </div>
            </div>
            </div>
          </div>
      
      <Bulb />
    </>
  );
};

export default Vertiefungsthema;
