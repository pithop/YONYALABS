import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'; // Importer le Toaster
import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* Ajouter le composant Toaster ici */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;