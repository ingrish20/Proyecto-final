import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getTotalCarrito} from '../utils/funciones.js'

const Header = () => {

  const [carrito, setCarrito] = useState(0)

  useEffect(() => {

    setCarrito(getTotalCarrito());

  }, [])
  

  return (
    <>
      <div id="Tituloprincipal">
      <div>Bienvenidos a LIDA'S STORE </div>

      <p>Carrito:{ carrito }</p>

      <Link to="/carrito">Ir al carrito</Link>

      <hr></hr>

      </div>
    </>
  )
}

export default Header