/**
 * REACT ENTRY POINT
 * =================
 * This is the first file that runs when someone opens the website.
 * It mounts (displays) our App component into the HTML <div id="root">.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
