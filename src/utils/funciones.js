const { Children } = require("react");

const getTotalCarrito = () => {

    let total = 0;

    try {

        let articulos = JSON.parse( localStorage.getItem("articulos"));

        total = articulos.length;

    } catch (error) {
        
    }

    return total;

}

const getDetalleCarrito = () => {

    let data = [];

    let total = 0;

    try {

        let articulos = JSON.parse(localStorage.getItem("articulos"));

        if (articulos===null) {
            total = 0;
        }
        else
        {
            total = articulos.length;
        }
       

        if (total > 0) {
            data = articulos;
        } 

    } catch (error) {
        
    }

    return data;

}

const agregarDetalleCarrito = (producto) => {

    let total = 0;

    try {

        let articulos = getDetalleCarrito();
        
        articulos.push(producto)

        localStorage.setItem("articulos", JSON.stringify( articulos));

    } catch (error) {
        console.log(error)
    }


}

let limpiarCarrrito = () => {

    localStorage.removeItem("articulos");
}


module.exports = {
    getTotalCarrito,
    agregarDetalleCarrito,
    getDetalleCarrito,
    limpiarCarrrito
}