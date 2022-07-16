import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ToastContainer 
  position="bottom-left"
  theme="colored"
  fontWeight="700"

  toastStyle={{ backgroundColor: "#f48915",  fontSize: "1.3rem" }}

/>
    <App />
  </React.StrictMode>
);
