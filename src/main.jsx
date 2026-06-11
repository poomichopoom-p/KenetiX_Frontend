<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KinetixProvider } from './context/KinetixContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KinetixProvider>
      <App />
    </KinetixProvider>
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from "./context/LanguageProvider";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
>>>>>>> dd6513017cd14769dbc41f58ffdb2ef8f2777899
  </StrictMode>,
);