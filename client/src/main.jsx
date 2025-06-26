// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import GeneralContextProvider from './context/GeneralContext'; // ✅ Add this line

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GeneralContextProvider> {/* ✅ Wrap App */}
        <App />
      </GeneralContextProvider>
    </BrowserRouter>
  </StrictMode>
);
