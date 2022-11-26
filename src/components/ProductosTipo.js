import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {consultarProducto} from "../utils/crudProducto.js";
import Card from "react-bootstrap/Card";

const urlDetalle = "http://localhost:3000/detalle/";
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
      {
        data.map((s, i) => (
          <Card >
            <Card.Img
              variant="top"
              src={s.UrlImagen}
              height="150px"
            />
            <Card.Body>
              <Card.Title>{s.NombreProducto}</Card.Title>
              <Card.Text>
               { s.DescripcionProducto}
              </Card.Text>
              <a href={urlDetalle + s.IdProducto} > Entrar </a>
            </Card.Body>
          </Card>
      ))}
    </>
  );
}

export default ProductosTipo