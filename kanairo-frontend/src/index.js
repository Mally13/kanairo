import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AirportContextProvider } from './context/AirportsContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AirportContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AirportContextProvider>
  </React.StrictMode>
);

reportWebVitals();
