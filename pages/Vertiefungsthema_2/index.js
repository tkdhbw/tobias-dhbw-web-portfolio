// Vertiefungsthema2.jsx
import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Vertiefungsthema2 = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const file = event.target.elements.pdfFile.files[0];
    const formData = new FormData();
    formData.append('pdfFile', file);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.blob())
    .then(blob => {
      setUploadProgress(100);  // Assuming the upload completes here.
      setDownloadUrl(URL.createObjectURL(blob));
      setIsProcessing(false);
    })
    .catch(() => {
      alert('Error processing the file');
      setIsProcessing(false);
    });
  };

  return (
    <>
      <div className='bg-primary/30 py-36 flex flex-col items-center'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col items-center'>
            <form
              className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg"
              onSubmit={handleFileUpload}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Upload PDF
                  </label>
                  <input
                    type="file"
                    name="pdfFile"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    accept=".pdf"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload
              </button>
            </form>
            {uploadProgress === 100 && (
              <button
                className={`mt-4 ${isProcessing ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
                disabled={isProcessing}
                onClick={() => downloadUrl && window.location.assign(downloadUrl)}
              >
                Download Processed Document
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vertiefungsthema2;
