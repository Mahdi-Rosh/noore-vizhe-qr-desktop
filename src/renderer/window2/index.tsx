import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './../App.css'

const Printer = () => {
  const [url, setUrl] = useState('');
  const ipcRenderer = require('electron').ipcRenderer;
  ipcRenderer.on('print', (e, url) => {
    setUrl(url);
    ipcRenderer.send('readyToPrint');
  });

  return <img className='w-full' src={url} />
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Printer />);