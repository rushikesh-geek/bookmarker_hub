import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
);