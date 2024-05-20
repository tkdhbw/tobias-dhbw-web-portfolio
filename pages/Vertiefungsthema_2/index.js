// Vertiefungsthema2.jsx
import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Image from 'next/image';

const Vertiefungsthema2 = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
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
                Vertiefungsthema <span className='text-accent'> 2 .</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto'
              >
                Als Vertiefungsthema 2 habe ich eine Web-Applikation gewählt.
              </motion.p>
            </div>
          </div>
        </div>
        <div className='py-36'> {/* Removed h-full here */}
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-col gap-x-8'>
              <div>
                <div class="bg-transparent text-white max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                  <div class="mb-6">

                    <h1 className='text-4xl font-bold  mb-8'>Vertiefungsthema: Web-Applikation</h1>
                    <h2 className='text-2xl font-bold  mb-4'>Hintergrund</h2>
                    <p className='text-lg  mb-8'>
                    Für mein Vertiefungsthema habe ich eine Web-Applikation entwickelt. Zunächst möchte ich den Hintergrund dazu erläutern: In den Vorlesungen mache ich mir gerne direkte Notizen auf die Skripte. Da diese jedoch oftmals sehr wenig Platz bieten, habe ich in der Vergangenheit ein Python-Programm erstellt, das jeder Seite eines PDF-Dokuments einen weißen Rand hinzufügt.
        Nun habe ich mir überlegt, dieses Tool auch anderen zur Verfügung zu stellen. Gleichzeitig erleichtert es mir selbst die Nutzung. Statt das Programm jedes Mal zu suchen und auszuführen – wobei es manchmal auch Probleme mit den PDF-Dateien gab – kann ich nun einfach das Dokument hochladen und herunterladen.
        Da ich bereits ein Skript habe, das einige Anforderungen erfüllt, werde ich dieses Skript für das Backend verwenden und es um weitere Funktionen erweitern, wie variable Seitenränder und die Möglichkeit für den Benutzer, die Größe des Randes individuell anzupassen.
                    </p>

                    <h3 className='text-2xl font-bold  mb-4'>Aufbau der Web-Applikation</h3>
                    <p className='text-lg  mb-8'>
                    Mein Portfolio basiert auf einem statischen Export einer React-App. Daher ist es mir leider nicht möglich, einen solchen Prozess im Hintergrund durchzuführen. Dieser Prozess läuft daher auf einem separaten Server.
                    </p>
                    <br />
                    <p className='text-lg mb-8'>Der Aufbau meines Vertiefungsthemas gestaltet sich wie folgt:</p>
                    <p className='text-lg mb-8'>1. HTML-Seite für das Hochladen eines PDFs</p>
                    <ul className='text-lg mb-8'>
                      <li>Die Seite enthält ein Formular, das sicherstellt, dass nur PDF-Dokumente hochgeladen werden können, indem es die Dateiendung überprüft.</li>
                      <li>Das Formular bietet dem Benutzer die Möglichkeit, die betroffenen Seiten auszuwählen und einen numerischen Wert für die Größe des Randes einzugeben. Dies ermöglicht ein hohes Maß an Individualisierung.</li>
                    </ul>

                    <p className='text-lg  mb-8'>2. Upload und Verarbeitung</p>
                    <ul className='text-lg  mb-8'>
                      <li>Nachdem der Benutzer sein Dokument konfiguriert und hochgeladen hat, wird das PDF-Dokument über eine API (Application Programming Interface) an den internen Server übergeben. Dieser Server (server.py) kümmert sich um die Bearbeitung und Speicherung des PDFs.</li>
                      <li>Während dieses Prozesses wird dem Benutzer ein Ladebalken angezeigt, um den Fortschritt zu verfolgen und zu zeigen, dass seine Anfrage bearbeitet wird.</li>
                    </ul>

                    <p className='text-lg  mb-8'>3. Speicherung und Download</p>
                    <ul className='text-lg  mb-8'>
                      <li>Nach erfolgreicher Bearbeitung des PDF-Dokuments wird dieses in einem öffentlichen Ordner gespeichert. Der Name des neuen PDF-Dokuments wird an die HTML-Seite zurückgegeben.</li>
                      <li>Der Pfad zum neuen PDF-Dokument wird im &quotHerunterladen&quot-Button als Link hinterlegt, sodass der Benutzer das Dokument einfach durch Drücken des Buttons herunterladen kann.</li>
                    </ul>

                    <h3 className='text-2xl font-bold  mb-4'>Bestandteile des Projekts</h3>
                    <p className='text-lg  mb-8'>Mein Vertiefungsthema besteht aus vier verschiedenen Programmen:</p>
                    <p className='text-lg  mb-8'>1. <b>server.py</b> – Bearbeitung der PDF-Dokumente</p>
                    <p className='text-lg  mb-8'>2. <b>housekeeping.py</b> – öscht alte Dokumente aus dem öffentlichen Ordner</p>
                    <p className='text-lg  mb-8'>3. <b>index.html</b> – Benutzeroberfläche für den User</p>
                    <p className='text-lg  mb-8'>4. <b>script.js</b> – Vorschau der PDF-Dokumente und Interaktion zwischen index.html und server.py</p>

                    <h2 className='text-2xl font-bold  mb-4'>Detaillierte Beschreibung der Programme</h2>
                    <h4 className='text-xl font-bold  mb-4'>server.py</h4>
                    <p className='text-lg  mb-8'>Das Skript server.py ist für die Bearbeitung der PDF-Dokumente zuständig. Es empfängt das hochgeladene PDF, fügt den gewünschten Rand hinzu und speichert das bearbeitete PDF im öffentlichen Ordner. Hier sind die wesentlichen Funktionen des Skripts:</p>
                    <ul className='text-lg  mb-8'>
                      <li><b>Empfang des PDFs:</b> Das Skript empfängt das hochgeladene PDF über eine API.</li>
                      <li><b>Bearbeitung des PDFs:</b> Es fügt den vom Benutzer angegebenen Rand hinzu.</li>
                      <li><b>Speicherung des PDFs:</b> Das bearbeitete PDF wird im öffentlichen Ordner gespeichert und der Dateiname wird zurückgegeben.</li>
                    </ul>
                    <pre><code className="language-javascript">
{`
from flask import Flask, request, jsonify, session, redirect, url_for
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader, PdfWriter
from PyPDF2 import Transformation
from tqdm import tqdm
import os
import time

app = Flask(__name__)

UPLOAD_FOLDER = '/var/www/html/public'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def generate_unique_identifier():
    return str(int(time.time()))

def add_margin_to_pdf(input_file, output_file, margins):
    try:
        with open(input_file, 'rb') as f:
            p = PdfReader(f)
            writer = PdfWriter()
            number_of_pages = len(p.pages)

            for i in tqdm(range(number_of_pages)):
                page = p.pages[i]
                mediabox = page.mediabox

                original_width = mediabox.upper_right[0] - mediabox.lower_left[0]
                original_height = mediabox.upper_right[1] - mediabox.lower_left[1]

                new_width = original_width + margins['left_margin'] + margins['right_margin']
                new_height = original_height + margins['top_margin'] + margins['bottom_margin']

                new_page = writer.add_blank_page(width=new_width, height=new_height)

                tx = margins['left_margin']
                ty = margins['bottom_margin']

                page.merge_page(new_page)
                new_page.merge_page(page)

                transformation = Transformation().translate(tx, ty)
                new_page.add_transformation(transformation)

            with open(output_file, 'wb') as f_out:
                writer.write(f_out)

    except Exception as e:
        print('Error processing PDF: %s' % str(e))
        raise


def delete_file(filepath):
    try:
        os.remove(filepath)
    except Exception as e:
        app.logger.error('Error deleting file: %s', str(e))
        raise

@app.route('/api/upload', methods=['POST'])
def upload_file():
    try:
        if 'pdf_file' not in request.files:
            return jsonify({'error': 'No PDF file uploaded'}), 400

        pdf_file = request.files['pdf_file']
        if pdf_file.filename == '':
            return jsonify({'error': 'No PDF file selected'}), 400

        if pdf_file and pdf_file.filename.endswith('.pdf'):
            filename = secure_filename(pdf_file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            pdf_file.save(filepath)

            top_margin_enabled = request.form.get('top_margin_enabled') == 'true'
            bottom_margin_enabled = request.form.get('bottom_margin_enabled') == 'true'
            left_margin_enabled = request.form.get('left_margin_enabled') == 'true'
            right_margin_enabled = request.form.get('right_margin_enabled') == 'true'

            margins = {
                'top_margin': int(request.form.get('top_margin', 0)) if top_margin_enabled else 0,
                'bottom_margin': int(request.form.get('bottom_margin', 0)) if bottom_margin_enabled else 0,
                'left_margin': int(request.form.get('left_margin', 0)) if left_margin_enabled else 0,
                'right_margin': int(request.form.get('right_margin', 0)) if right_margin_enabled else 0,
            }

            output_filename = f"Modified_{generate_unique_identifier()}_{filename}"
            output_filepath = os.path.join(app.config['UPLOAD_FOLDER'], output_filename)
            add_margin_to_pdf(filepath, output_filepath, margins)

            session['download_pressed'] = False

            return jsonify({'download_url': f'/downloads/{output_filename}'}), 200
        else:
            return jsonify({'error': 'Invalid file format, only PDF files are supported'}), 400
    except Exception as e:
        app.logger.error('Error uploading file: %s', str(e))
        return jsonify({'error': 'An error occurred while processing the request'}), 500

@app.route('/download-complete', methods=['GET'])
def download_complete():
    try:
        if session.get('download_pressed', False):

            filename = session.pop('file_to_delete', None)
            if filename:
                delete_file(filename)
                return jsonify({'message': 'File deleted successfully'}), 200
            else:
                return jsonify({'error': 'No file to delete'}), 404
        else:
            return jsonify({'error': 'Download button not pressed'}), 400
    except Exception as e:
        app.logger.error('Error deleting file: %s', str(e))
        return jsonify({'error': 'An error occurred while deleting the file'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000)

`}
                    </code></pre>


                    <h4 className='text-xl font-bold  mb-4'>housekeeping.py</h4>
                    <p className='text-lg  mb-8'>Das Skript housekeeping.py ist für die Verwaltung der gespeicherten Dokumente verantwortlich. Es löscht alte Dokumente aus dem öffentlichen Ordner, um Speicherplatz freizugeben und die Übersichtlichkeit zu wahren. Die Hauptfunktionen umfassen:</p>
                    <ul className='text-lg  mb-8'>
                      <li><b>Überprüfung der Dokumente: </b> Das Skript überprüft regelmäßig den öffentlichen Ordner.</li>
                      <li><b>Löschen alter Dateien:</b> Dokumente, die älter als eine bestimmte Zeit sind, werden automatisch gelöscht.</li>
                    </ul>
                    <pre><code className="language-javascript">
{`
import os
import time
from datetime import datetime, timedelta

DIRECTORY_PATH = "/var/www/html/public"
LOG_FILE = "deletion_log.txt"

def log_action(action, file_path=""):
    with open(LOG_FILE, 'a') as log:
        if file_path:
            log.write(f"{datetime.now()} - {action}: {file_path}\n")
        else:
            log.write(f"{datetime.now()} - {action}\n")

def clean_directory(path):
    now = datetime.now()
    
    cutoff_time = now - timedelta(hours=24)

    for root, dirs, files in os.walk(path, topdown=False):
        for name in files:
            file_path = os.path.join(root, name)
            file_mtime = datetime.fromtimestamp(os.path.getmtime(file_path))
            
            if file_mtime < cutoff_time:

                if not name.endswith(".txt"):
                    # Due to log file
                    os.remove(file_path)
                    log_action("Deleted file", file_path)
                    print(f"Deleted file: {file_path}")
        
        for name in dirs:
            dir_path = os.path.join(root, name)
            if not os.listdir(dir_path):
                os.rmdir(dir_path)
                log_action("Deleted empty directory", dir_path)
                print(f"Deleted empty directory: {dir_path}")

def run_periodically():
    while True:
        log_action("Script executed")
        clean_directory(DIRECTORY_PATH)
        time.sleep(300)

if __name__ == "__main__":
    run_periodically()
`}
                    </code></pre>



                    <h4 className='text-xl font-bold  mb-4'>index.html</h4>
                    <p className='text-lg  mb-8'>Die Datei index.html stellt die Benutzeroberfläche für die Web-Applikation bereit. Sie enthält ein Formular zum Hochladen von PDF-Dokumenten und Eingabefelder für die Konfiguration der Seitenränder. Zu den wichtigsten Elementen gehören:</p>
                    <ul className='text-lg  mb-8'>
                      <li><b>Formular für den PDF-Upload:</b> Ermöglicht das Hochladen von PDF-Dateien.</li>
                      <li><b>Eingabefelder für Seitenränder:</b> Benutzer können die Größe der Ränder oben, unten, links und rechts einstellen.</li>
                      <li><b>PDF-Vorschau:</b> Eine Vorschau des hochgeladenen PDFs wird angezeigt.</li>
                      <li><b>Ladebalken und Fortschrittsanzeige:</b> Zeigt den Fortschritt der Bearbeitung an.</li>
                      <li><b>Download-Button:</b> Ermöglicht das Herunterladen des bearbeiteten PDFs.</li>
                    </ul>
                    <pre><code className="language-html">
{`
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>PDF Upload</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .container {
            max-width: 800px;
            margin: auto;
        }

        .input-group {
            margin-bottom: 1.5rem;
        }

        .pdf-preview-container {
            border: 1px solid #ccc;
            margin-top: 1.5rem;
        }

        .pdf-preview {
            width: 100%;
            height: 500px;
        }

        .processing-banner {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 10px;
            margin-top: 1.5rem;
            display: none;
        }
    </style>
</head>
<body class="bg-gray-900 flex items-center justify-center h-screen">
    <div class="container bg-black opacity-80 text-white p-8 rounded-lg shadow-lg">
        <i class="fas fa-times text-xl text-gray-400 reset-icon" id="resetBtn"></i>

        <h1 class="text-2xl font-bold mb-4 text-red-600">PDF-Dokument hochladen</h1>
        <p class="mb-4">Laden Sie Ihr PDF-Dokument hoch, um es zu speichern.</p>
        <input type="file" id="pdfFile" accept="application/pdf" class="block w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent p-2.5 mb-4">
        
        <div class="pdf-preview-container hidden">
            <canvas id="pdfPreview" class="pdf-preview"></canvas>
        </div>

        <div class="mt-8 border border-white p-4">
            <h2 class="text-xl font-bold mb-4 text-red-600">Seiten mit zusätzlichem Rand</h2>
            <div class="input-group flex items-center mb-4">
                <label for="topMargin" class="mr-2">Oben:</label>
                <input type="number" id="topMargin" class="w-16 text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent p-2.5" value="200">
                <input type="checkbox" id="topCheckbox" class="ml-2">
                <label for="topCheckbox" class="ml-1">Zusätzlichen Rand hinzufügen</label>
            </div>
            <div class="input-group flex items-center mb-4">
                <label for="leftMargin" class="mr-2">Links:</label>
                <input type="number" id="leftMargin" class="w-16 text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent p-2.5" value="200">
                <input type="checkbox" id="leftCheckbox" class="ml-2">
                <label for="leftCheckbox" class="ml-1">Zusätzlichen Rand hinzufügen</label>
            </div>
            <div class="input-group flex items-center mb-4">
                <label for="rightMargin" class="mr-2">Rechts:</label>
                <input type="number" id="rightMargin" class="w-16 text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent p-2.5" value="200">
                <input type="checkbox" id="rightCheckbox" class="ml-2">
                <label for="rightCheckbox" class="ml-1">Zusätzlichen Rand hinzufügen</label>
            </div>
            <div class="input-group flex items-center mb-4">
                <label for="bottomMargin" class="mr-2">Unten:</label>
                <input type="number" id="bottomMargin" class="w-16 text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent p-2.5" value="200">
                <input type="checkbox" id="bottomCheckbox" class="ml-2">
                <label for="bottomCheckbox" class="ml-1">Zusätzlichen Rand hinzufügen</label>
            </div>
        </div>

        <button id="uploadBtn" class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-8">
            Hochladen
        </button>

        <div id="processingBanner" class="processing-banner">
            Verarbeitung läuft...
        </div>

        <div class="mt-4">
            <div id="progressBar" class="w-0 bg-green-500 h-2 rounded-full"></div>
            <p id="statusText" class=" mt-2"></p>
        </div>

        <a id="downloadHtmlBtn" class="hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full mt-8" download>Download Modified PDF</a>

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
        `}
                    </code></pre>


                    <h4 className='text-xl font-bold  mb-4'>script.js</h4>
                    <p className='text-lg  mb-8'>Das Skript script.js steuert die Interaktion zwischen der Benutzeroberfläche (index.html) und dem Backend (server.py). Es enthält Funktionen zur Vorschau des PDFs, zum Hochladen der Datei und zur Anzeige des Fortschritts. Wichtige Funktionen sind:</p>
                    <ul className='text-lg  mb-8'>
                      <li><b>PDF-Vorschau:</b> Zeigt eine Vorschau des hochgeladenen PDFs im Browser an.</li>
                      <li><b>Upload-Funktion:</b> Überträgt das PDF an den Server zur Bearbeitung.</li>
                      <li><b>Fortschrittsanzeige:</b> Aktualisiert den Ladebalken und die Fortschrittsanzeige während der Bearbeitung.</li>
                      <li><b>Download-Funktion:</b>  Ermöglicht das Herunterladen des bearbeiteten PDFs.</li>
                    </ul>
                    <pre><code className="language-javascript">
{`
document.addEventListener('DOMContentLoaded', function () {
  const uploadButton = document.getElementById('uploadBtn');
  const fileInput = document.getElementById('pdfFile');
  const progressBar = document.getElementById('progressBar');
  const statusText = document.getElementById('statusText');
  const pdfPreviewContainer = document.querySelector('.pdf-preview-container');
  const pdfPreviewCanvas = document.getElementById('pdfPreview');
  const resetBtn = document.getElementById('resetBtn');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const pageNumIndicator = document.getElementById('pageNumIndicator');
  const topMarginInput = document.getElementById('topMargin');
  const bottomMarginInput = document.getElementById('bottomMargin');
  const leftMarginInput = document.getElementById('leftMargin');
  const rightMarginInput = document.getElementById('rightMargin');
  const topMarginCheckbox = document.getElementById('topCheckbox');
  const bottomMarginCheckbox = document.getElementById('bottomCheckbox');
  const leftMarginCheckbox = document.getElementById('leftCheckbox');
  const rightMarginCheckbox = document.getElementById('rightCheckbox');
  const downloadHtmlBtn = document.getElementById('downloadHtmlBtn');

  let pdfDoc = null;
  let pageNum = 1;
  let numPages = 0;

  function renderPage(pageNum) {
      pdfDoc.getPage(pageNum).then(function(page) {
          const scale = 1.5;
          const viewport = page.getViewport({scale: scale});
          const context = pdfPreviewCanvas.getContext('2d');
          pdfPreviewCanvas.height = viewport.height;
          pdfPreviewCanvas.width = viewport.width;
          const renderContext = {
              canvasContext: context,
              viewport: viewport
          };
          page.render(renderContext);
          pageNumIndicator.textContent = {"{pageNum} / {numPages}"};
      });
  }

  function disableUploadButton() {
      uploadButton.disabled = true;
  }

  function enableUploadButton() {
      uploadButton.disabled = false;
  }

  uploadButton.addEventListener('click', function() {
      disableUploadButton();

      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('pdf_file', file);
      formData.append('top_margin', topMarginInput.value);
      formData.append('bottom_margin', bottomMarginInput.value);
      formData.append('left_margin', leftMarginInput.value);
      formData.append('right_margin', rightMarginInput.value);
      formData.append('top_margin_enabled', topMarginCheckbox.checked);
      formData.append('bottom_margin_enabled', bottomMarginCheckbox.checked);
      formData.append('left_margin_enabled', leftMarginCheckbox.checked);
      formData.append('right_margin_enabled', rightMarginCheckbox.checked);

      if (!file) {
          statusText.textContent = 'Bitte wählen Sie eine Datei aus. (Version 1.0)';
          enableUploadButton();
          return;
      }

      statusText.textContent = '';
      progressBar.style.width = '0%';

      fetch('/api/upload', {
          method: 'POST',
          body: formData
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          progressBar.style.width = '100%';
          statusText.textContent = 'Datei erfolgreich hochgeladen!';
          if (data.download_url) {
              downloadHtmlBtn.href = data.download_url;
              console.log(data.download_url);
              downloadHtmlBtn.classList.remove('hidden');
          }
          enableUploadButton();
      })        
      .catch(error => {
          console.error('Error:', error);
          statusText.textContent = 'Fehler: ' + error.message;
          enableUploadButton();
      });
  });

  resetBtn.addEventListener('click', function() {
      fileInput.value = '';
      statusText.textContent = '';
      progressBar.style.width = '0%';
      pdfPreviewContainer.classList.add('hidden');
      while (document.body.lastElementChild !== resetBtn) {
          document.body.removeChild(document.body.lastElementChild);
      }
  });

  fileInput.addEventListener('change', function() {
      const file = fileInput.files[0];
      if (file) {
          const fileReader = new FileReader();
          fileReader.onload = function() {
              const typedarray = new Uint8Array(this.result);
              pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                  pdfDoc = pdf;
                  numPages = pdf.numPages;
                  renderPage(pageNum);
                  pdfPreviewContainer.classList.remove('hidden');
              });
          };
          fileReader.readAsArrayBuffer(file);
      }
  });

  prevPageBtn.addEventListener('click', function() {
      if (pageNum <= 1) {
          return;
      }
      pageNum--;
      renderPage(pageNum);
  });

  nextPageBtn.addEventListener('click', function() {
      if (pageNum >= numPages) {
          return;
      }
      pageNum++;
      renderPage(pageNum);
  });
});
`}
                    </code></pre>

                    <br />
                    <br />
                    <br />

                    <h2 className='text-2xl font-bold  mb-4'>Fazit</h2>
                    <p className='text-lg  mb-8'>Durch diese Struktur ist die Web-Applikation benutzerfreundlich und effizient, sowohl für mich als auch für andere Benutzer, die von den zusätzlichen Funktionen profitieren können.</p>
                    <p className='text-lg  mb-8'>Insgesamt ermöglicht die Web-Applikation den Benutzern, PDF-Dokumente mit individuellen Seitenrändern zu versehen und herunterzuladen. Die klare Benutzeroberfläche und die einfache Bedienung machen die Anwendung benutzerfreundlich und effizient. Durch die Kombination von Frontend und Backend-Technologien wird eine nahtlose Interaktion zwischen Benutzer und System gewährleistet.</p>
                    <p className='text-lg  mb-8'>Die Entwicklung der Web-Applikation hat mir wertvolle Einblicke in die Gestaltung und Umsetzung von Softwarelösungen gegeben. Ich konnte meine Kenntnisse in den Bereichen Web-Entwicklung, API-Integration und Benutzeroberflächen verbessern und praktische Erfahrungen sammeln. Die Anwendung meines Vertiefungsthemas zeigt, wie Technologie eingesetzt werden kann, um Probleme zu lösen und den Alltag zu erleichtern.</p>

                    <br />

                    <h1 className='text-4xl font-bold text-center mb-8'>Die fertige Applikation</h1>
                    <Image src="/preview_VT2.png" width={1200} height={200} alt='' />
                    <div className='text-center'>
                      <a href='https://pdf.karstob.com' target='_blank' className='bg-red-500 text-white text-lg  py-4 px-8 rounded-lg mb-8 inline-block hover:bg-red-600 transition duration-300'>Besuchen Sie die fertige Applikation pdf.karstob.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Vertiefungsthema2;
