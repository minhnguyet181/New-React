import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // For React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
