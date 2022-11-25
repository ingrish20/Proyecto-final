const agregarProducto = async (producto) =>{

    return await new Promise(resolve => {
            
        fetch("http://localhost:8080/api/agregarProducto", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(producto),
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (res) {
              resolve("Producto agregado")
            })
            .catch(function (res) {
              console.log("Error", res);
              resolve("Error al agregar producto") 
            });


      });


   
}

const modificarProducto = async(producto) =>{

    return await new Promise(resolve => {
            
        fetch("http://localhost:8080/api/agregarProducto", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(producto),
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (res) {
              resolve("Producto modificado")
            })
            .catch(function (res) {
              console.log("Error", res);
              resolve("Error al modificar producto") 
            });


      });
}

const EliminarProducto = async(idProducto) =>{

    return await new Promise(resolve => {
            
        fetch("http://localhost:8080/api/eliminarProducto", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({IdProducto: idProducto}),
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (res) {
              resolve("Producto eliminado")
            })
            .catch(function (res) {
              console.log("Error", res);
              resolve("Error al eliminar producto") 
            });

      });
}

const consultarProducto=async(idProducto)=>{
    return await new Promise(resolve => {
        var url = "http://localhost:8080/api/getProductoByIdProducto?idProducto=" + idProducto;

      fetch(url)
      .then(res => res.json())
      .then(res => {
        resolve(res);
      }).catch( err => {
        console.error(err)
        resolve(err)
      }); 

    });
}


module.exports = {
    agregarProducto,
    modificarProducto,
    EliminarProducto,
    consultarProducto
}