import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//"IdTipoProducto": 0,
//    "TipoProducto": "LIBROS",
//"UrlImagenTipo": "",
// http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png

let producto = {
  IdProducto: "0",
  NombreProducto: "Alex",
  DescripcionProducto: "",
  PrecioUnitario: 0,
  UrlImagen: "",
  UrlImagenAgotado: "",
  Existencias: 0,
};
const Catalogoproducto = () => {
  let { opcion, id } = useParams();

  const [data, setData] = useState(producto);
  console.log(data);
  return (
    <>
      <h1 id="titulo2">Catálogo de Productos</h1>

      <h2> Por favor ingresa la información requerida</h2>

      <div id="informacion">
        <br></br>
        <label>Nombre del producto </label>
        <input
          value={data.NombreProducto}
          onChange={(e) => setData({ ...data, NombreProducto: e.target.value })}
          type="text"
          name="NombreProducto"
        ></input>
        <br></br>
        <label>Precio unitario: $ </label>
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
        <input
          value={data.Existencias}
          onChange={(e) => setData({ ...data, Existencias: e.target.value })}
          type="text"
          name="DescripcionProducto"
        ></input>
        <br></br>
        <label> URL de imagen del producto </label>
        <input
          id="myURL"
          name="myURL"
          type="url"
          placeholder="http://www.example.com"
        ></input>
        <br></br>
        <br></br>
        <button type="submit" id="agregar">Agregar</button>

        <button type="cancel" id="cancelar"> Cancelar</button>
      </div>
    </>
  );
};

export default Catalogoproducto;
