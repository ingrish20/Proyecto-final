import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  agregarProducto,
  modificarProducto,
  EliminarProducto,
  consultarProducto
} from "../utils/crudProducto.js";

let producto = {
  IdTipoProducto: 1,
  IdProducto: "0",
  NombreProducto: "",
  DescripcionProducto: "",
  PrecioUnitario: 0,
  UrlImagen: "",
  UrlImagenAgotado: "",
  Existencias: 0,
};

const Catalogoproducto = (props) => {
  let { opcion, idProducto } = useParams();
  const [data, setData] = useState(producto);

  if (idProducto === undefined) {
    idProducto = 0;
  }

  useEffect(() => {
    if (opcion !== "agregar") {
      if (idProducto > 0) {
        var url = "http://localhost:8080/api/getProductoByIdProducto?idProducto=" + idProducto;

        fetch(url)
        .then(res => res.json())
        .then(res => {
           setData(res.Result[0])
        }).catch( err => console.error(err)); 
      }
    }
  }, []);
  console.log(idProducto)

      
 return (
    <>
      <h1 id="titulo2">Catálogo de Productos</h1>

      <h2> Por favor ingresa la información requerida</h2>

      <div id="informacion">
        <select
          name="tipoProducto"
          value={data.IdTipoProducto == 1 ? "1" : "2"}
          onChange={(e) =>
            setData({ ...data, IdTipoProducto: parseInt(e.target.value) })
          }
        >
          <option value="1">LIBROS</option>
          <option value="2">VIDEO JUEGOS</option>
        </select>

        <br></br>
        <label>Nombre del producto </label>
        <input
          value={data.NombreProducto}
          onChange={(e) => setData({ ...data, NombreProducto: e.target.value })}
          type="text"
          name="NombreProducto"
        ></input>
        <br></br>
        <label>Precio unitario: </label>
        <input
          value={data.PrecioUnitario}
          onChange={(e) => setData({ ...data, PrecioUnitario: e.target.value })}
          type="text"
          name="PrecioUnitario"
        ></input>
        <br></br>
        <label>Descripción: </label>
        <input
          value={data.DescripcionProducto}
          onChange={(e) =>
            setData({ ...data, DescripcionProducto: e.target.value })
          }
          type="text"
          name="DescripcionProducto"
        ></input>
        <br></br>
        <label>Existencias: </label>
        <input value={data.Existencias} onChange={(e) => setData({ ...data, Existencias: e.target.value })} type="text" name="DescripcionProducto"></input>
        <br></br>
        <label> URL de imagen del producto </label>
        <input id="myURL" name="myURL" type="url" placeholder="http://www.example.com" value={data.UrlImagen} onChange={(e) => setData({ ...data, UrlImagen: e.target.value })}></input>
        <br></br>
        <br></br>
        <button id="guardar" onClick={guardar}>
          Agregar
        </button>

        <button type="cancel" onClick={cancelar} id="cancelar">
          {" "}
          Cancelar
        </button>
      </div>
    </>
  );

  async function guardar() {
    if (opcion === "modificar") {
      const productoModificado = {
        IdProducto: data.IdProducto ,
        IdTipoProducto: data.IdTipoProducto ,
        NombreProducto: data.NombreProducto,
        DescripcionProducto: data.DescripcionProducto,
        PrecioUnitario: data.PrecioUnitario ,
        UrlImagen: data.UrlImagen ,
        UrlImagenAgotado: "http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png" ,
        Existencias: data.Existencias
      };

      let msg =await modificarProducto(productoModificado);

      alert(msg);
      
      setData(producto);

    } else if (opcion === "agregar") {

      const productoNuevo = {
        IdTipoProducto: data.IdTipoProducto,
        NombreProducto: data.NombreProducto,
        DescripcionProducto: data.DescripcionProducto,
        PrecioUnitario: data.PrecioUnitario,
        UrlImagen: data.UrlImagen,
        UrlImagenAgotado:
          "http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png",
        Existencias: data.Existencias,
      };

      let msg =await agregarProducto(productoNuevo);

      alert(msg);

      setData(producto);

    } else if (opcion === "eliminar") {

      let idProducto = data.IdProducto;

      let msg =await EliminarProducto(idProducto);

      alert(msg);
      
      setData(producto);
    }
  }

  function cancelar() {
    setData(producto);
  }
};

export default Catalogoproducto;
