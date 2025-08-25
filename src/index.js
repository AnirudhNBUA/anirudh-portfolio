import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // This imports your portfolio component

// Get the root container element from public/index.html
const container = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);