import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Detalleproducto from './Components/Detalleproducto';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/detalle/:id" element={<Detalleproducto />} />

      <Route path="/Productos/" element={<Detalleproducto />} />

    </Routes>
    <Footer/>
  </BrowserRouter>

  );
}

export default App;
