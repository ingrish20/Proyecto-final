import React, { useState, useEffect } from 'react'
import { getDetalleCarrito, limpiarCarrrito } from '../utils/funciones.js'

let lista = [];

const Carritodetalle = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(getDetalleCarrito());
        lista = getDetalleCarrito();
    }, [])
    
   
    return (
        <>
            <p>Carrito</p>
            {
                  productos.map((s,i) => (
                    <div key={i}>
                        <div>Categoria: {s.TipoProducto}</div>
                        <div>Nombre: {s.NombreProducto}</div>
                        <div>Precio: {s.PrecioUnitario}</div>
                        <br></br>
                    </div>
                  ))
                
            }
            <button onClick={procesar}>Procesar orden</button>
        </>
    )
}

const procesar = () =>{

    if (lista.length<=0) {
        return false
    }
    let total = 0.0;

    lista.forEach(e => {
        total=total+ (parseFloat(e.PrecioUnitario))
    });
      
    let header = {
        IdUsuario: 2, 
        Total: total, 
        IdEstadoPedido: 1
      }

      fetch("http://localhost:8080/api/guardarPedidoHeader",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(header)
      })
      .then(function(res)
        { 
            return res.json();
        }).then(function(res){
            let idHeader = res.Result.idPedido;
            guardarDetalle(idHeader);
        })
      .catch(function(res){ console.log("Error",res) })
}

const guardarDetalle =(id) =>{
    if (lista.length<=0) {
        return false
    }

    let detalle =[];
console.log(detalle)
    lista.forEach(e => {
       detalle.push({
        IdPedido: id,
        IdProducto: e.IdProducto,
        Cantidad: 1,
        PrecioUnitario: e.PrecioUnitario
     })
    });

    fetch("http://localhost:8080/api/guardarPedidoDetalle",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(detalle)
    })
    .then(function(res)
      { 
          return res.json();
      }).then(function(res){
        limpiarCarrrito();
      })
    .catch(function(res){ console.log("Error",res) })

}

export default Carritodetalle