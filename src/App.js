import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Detalleproducto from './components/Detalleproducto';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalogoproducto from './components/Catalogoproducto';
import Carritodetalle from "./components/Carritodetalle";

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/detalle/:id" element={<Detalleproducto />} />

      <Route path="/catalogo/productos/:idtipo" element={<Catalogoproducto />} />

      <Route path="/carrito/" element={<Carritodetalle />} />

    </Routes>
    <Footer/>
  </BrowserRouter>

  );
}

export default App;
