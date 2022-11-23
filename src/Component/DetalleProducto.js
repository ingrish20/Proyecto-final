import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


 const Detalleproducto = () => {
    const [idProducto, setIdProducto] = useState(0)
 let{id}=useParams("idProducto");
 console.log(useParams())
    useEffect(() => {
       

      setIdProducto(id)
    }, [])
    
  return (
    <div>Pagina detalle producto</div>
  )
}
export default Detalleproducto;