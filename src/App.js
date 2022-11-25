import React ,{useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Detalleproducto from './components/Detalleproducto';
import Header from './components/Header';
import Footer from './components/Footer';
import Paginaprincipal from './components/Paginaprincipal';
import Catalogoproducto from './components/Catalogoproducto';
import Carritodetalle from "./components/Carritodetalle";
import ProductosTipo from './components/ProductosTipo';
import { getTotalCarrito } from './utils/funciones'; 

function App() {
  const [carrito, setCarrito] = useState(0)

  useEffect(() => {
    getContador();
  }, [])
  
  

  return (
    <BrowserRouter>
    <Header />
    <div >
      <table>
      
      
      <Link to="/carrito" id="enlace">
        
<img src="/images/carrito-de-compras.png" alt="Carrito"  width="50px" id="car2"></img>
<p id="car">{ carrito }</p>

      </Link>
      </table>
    </div>

    <Routes>
      <Route path="/detalle/:id" element={<Detalleproducto contador={getContador} />} />

      <Route path="/catalogo/productos/:opcion/:idProducto" element={<Catalogoproducto />} />

      <Route path="/carrito/" element={<Carritodetalle />} />

      <Route path="/" element={<Paginaprincipal/>} />

      <Route path='/productos/:idTipo' element={<ProductosTipo/>} />

    </Routes>
    <Footer/>
  </BrowserRouter>

  );

  function getContador(){
    setCarrito(getTotalCarrito());
  }
}

export default App;
