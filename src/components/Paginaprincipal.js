import React from 'react'
import '../App.css'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


function Paginaprincipal() {
  return (
    <>
      <h1> ¡Gracias por visitar nuestra tienda en linea! </h1>

      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/04/12/08/09/books-718583_960_720.png"
            height="150px"
          />
          <Card.Body>
            <Card.Title>Libros</Card.Title>
            <Card.Text>
              A los amantes de la lectura, puedes ingresar y revisar nuestros
              libros.
            </Card.Text>
            <a href="http://localhost:3000/productos/1"> Entrar </a>
          </Card.Body>
        </Card>
        <br></br>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.pngplay.com/wp-content/uploads/8/Video-Game-Controller-Transparent-PNG.png"
            height="150px"
          />
          <Card.Body>
            <Card.Title>Video Juegos</Card.Title>
            <Card.Text>
              A los gamers, puedes visitar los videojuegos disponibles.
            </Card.Text>
            <a href="http://localhost:3000/productos/2"> Entrar </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
 
}





export default Paginaprincipal