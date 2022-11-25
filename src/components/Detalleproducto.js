import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { getTotalCarrito, agregarDetalleCarrito } from '../utils/funciones';

let seleccionado = {};

const Detalleproducto = (props) => {

  let { id } = useParams();

  const [data, setData] = useState([])

  const { contador } = props

  useEffect(() => {

      var url = "http://localhost:8080/api/getProductoByIdProducto?idProducto=" + id;

      fetch(url)
      .then(res => res.json())
      .then(res => {
         setData(res.Result[0])
         seleccionado = res.Result[0]
      }).catch( err => console.error(err)); 
    
  }, []);
  
        if (data) {
          return ( <>
          <label>Categoria: { data.TipoProducto }</label>
           <br></br>
            <label>Nombre {data.NombreProducto} </label>
            <br></br>
            <label>Precio: </label>
            <label> { data.PrecioUnitario } </label>
            <br></br>
            <label>Valoración: </label>

              <div id="valoracion">
            <ReactStars 
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                value={parseInt(data.ValoracionPromedio)}
                edit = {true}
              />
      </div>
            <br></br>
            <button onClick={agregarCarrito} id="porden">Agregar al Carrito</button>
<br></br>
            <img src={data.UrlImagen} id="productod" alt="Imagen"></img>

            
          </>
          )
        }
        else
        {
          return (
            <>
              <label>
                Producto no encontrado
              </label>
            </>
          )
        }
      
  function agregarCarrito (){
    agregarDetalleCarrito(seleccionado)
    contador();
  }

    
}

const ratingChanged = () => {

}


export default Detalleproducto