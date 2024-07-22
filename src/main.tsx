import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import 'semantic-ui-css/semantic.min.css'
import { AuthProvider } from '../src/contexts/authContext/AuthContextDetails';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <App />
      </AuthProvider>
     
    </Router>
  </React.StrictMode>
);
