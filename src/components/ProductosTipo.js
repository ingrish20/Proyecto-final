import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {
  consultarProducto
} from "../utils/crudProducto.js";


const productos = [];

const ProductosTipo = () => {

    let { idTipo } = useParams();
    const [data, setData] = useState(productos);

    useEffect(() => {
        var url = "http://localhost:8080/api/getProductosByIdTipoProducto?idTipo=" + idTipo;
    
          fetch(url)
          .then(res => res.json())
          .then(res => {
            setData(res.Result)
          }).catch( err => {
            console.error(err)
          }); 
    
    }, [])
    

  return (

    <>
        <div>Productos</div>
          {productos.map((s, i) => (
            <div>
                
            </div>
          ))}
    </>


  )
}

export default ProductosTipo