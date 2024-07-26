import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import 'semantic-ui-css/semantic.min.css'
import { AuthProvider } from '../src/contexts/authContext/AuthContextDetails';
import { UserDetailsContextProvider } from './contexts/userContext/UserDetailsContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserDetailsContextProvider>
      <App />
      </UserDetailsContextProvider>
      </AuthProvider>
      
     
    </Router>
  </React.StrictMode>
);
