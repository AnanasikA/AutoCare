import React from 'react';
import ReactDOM from 'react-dom/client'; // Używamy 'react-dom/client' w React 18+
import App from './App';
import './index.css'; // Możesz zaimportować swój CSS, jeśli jest w folderze src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);