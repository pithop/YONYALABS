// frontend/src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react";

// Importation des pages et des composants de layout
import Home from "./pages/Home";
import Questionnaire from './pages/Questionnaire';
import Header from './components/Header'; // On importe le Header
import Footer from './components/Footer'; // On importe le Footer

import "./App.css";


function App() {
  return (
    <div className="App flex flex-col min-h-screen"> {/* Assure que le footer reste en bas */}
      <BrowserRouter>
        {/* Le Header est maintenant ici, il sera visible sur toutes les pages */}
        <Header />

        {/* Le contenu principal de la page changera ici */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questionnaire" element={<Questionnaire />} /> {/* NOTRE NOUVELLE ROUTE */}
          </Routes>
        </main>
        
        {/* Le Footer est également ici pour être visible partout */}
        <Footer />
      </BrowserRouter>

      {/* Les outils comme Toaster et Analytics restent en dehors du Router */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          success: { style: { background: '#22c55e', color: 'white' } },
          error: { style: { background: '#ef4444', color: 'white' } },
        }}
      />
      <Analytics />
    </div>
  );
}

export default App;