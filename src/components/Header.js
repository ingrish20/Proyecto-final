import React, {useEffect, useState} from 'react'

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
     
      <div class="container"></div>      

      <hr></hr>

      </div>
    </>
  )
}

export default Header