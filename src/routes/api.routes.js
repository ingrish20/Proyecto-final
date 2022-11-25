//#region librerias
const { 
        getProductosByIdTipoProducto,
        getProductoByIdProducto,
        getTipoProductos,
        getUsuarios,
        getUsuariosByUsuario,
        getPedidosByIdPedido,
        getPedidosByIdUsuario,
        getPedidosByUsuario,
        guardarPedidoHeader,
        guardarPedidoDetalle,
        agregarProducto,
        actualizarProducto,
        eliminarProducto
    } = require("../db/sql");

const express = require('express');
//#endregion
//#region librerias propias
const router = express.Router();
//#endregion
//#region entidades

//#endregion
//#region Routes

router.get('/getProductosByIdTipoProducto', async (req, res) => {
    try{

        var data =await getProductosByIdTipoProducto(req.query.idTipo);

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'Productos no encontrados para el Tipo:' + req.query.idTipo, Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.get('/getProductoByIdProducto', async (req, res) => {
    try{

        var data =await getProductoByIdProducto(req.query.idProducto);

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'Productos no encontrados para el Tipo:' + req.query.idProducto, Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});


router.get('/getTiposProductos', async (req, res) => {
    try{

        var data =await getTipoProductos();

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'Tipo de producto no encontrado', Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.get('/getUsuarios', async (req, res) => {
    try{

        var data =await getUsuarios();

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'No existen usuarios', Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.get('/getUsuariosByUsuario', async (req, res) => {
    try{

        var data =await getUsuariosByUsuario(req.query.usuario);

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'No se encontro el usuario:' + req.query.usuario, Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.get('/getPedidosByIdPedido', async (req, res) => {
    try{

        var data =await getPedidosByIdPedido(req.query.idPedido);

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'No se encontro el pedido:' + req.query.idPedido, Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.get('/getPedidosByIdUsuario', async (req, res) => {
    try{

        var data =await getPedidosByIdUsuario(req.query.idUsuario);

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'No se encontro el pedido de Id de Usuario:' + req.query.idUsuario, Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.get('/getPedidosByUsuario', async (req, res) => {
    try{

        var data =await getPedidosByUsuario(req.query.usuario);

        if (data.length>0) {
            res.send({  Message: 'Resultado de busqueda', Result: data });
        } else {
            res.send({  Message: 'No se encontro el pedido del Usuario:' + req.query.usuario, Result: data });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});


router.post('/guardarPedidoHeader', async (req, res) => {
    try{

        let {IdUsuario, Total, IdEstadoPedido } = req.body;

        //{IdUsuario, Total, IdEstadoPedido}

        var idHeader = await guardarPedidoHeader(IdUsuario, Total, IdEstadoPedido);

        if (idHeader>0) {
            res.send({  Message: 'Pedido registrado', Result: {idPedido: idHeader} });
        } else {
            res.send({  Message: "No se guardo Pedido", Result: [] });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.post('/guardarPedidoDetalle', async (req, res) => {
    try{

        let detalle= req.body;

        let productos = [];

        detalle.forEach(item => {
            productos.push({
                IdPedido: item.IdPedido , 
                IdProducto: item.IdProducto , 
                Cantidad: item.Cantidad , 
                PrecioUnitario: item.PrecioUnitario 
            })
        });

        //{IdUsuario, Total, IdEstadoPedido}

        var lista = await guardarPedidoDetalle(productos);

        //if (lista.length>0) {
            res.send({  Message: 'Detalle del pedido registrado', Result: lista });
        //} else {
        //    res.send({  Message: "No se guardo el Detalle del pedido", Result: [] });
        //}
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});


router.post('/agregarProducto', async (req, res) => {
    try{

        console.log("BODY", req.body)

        let {IdTipoProducto,
            NombreProducto,
            DescripcionProducto,
            PrecioUnitario,
            UrlImagen,
            UrlImagenAgotado,
            Existencias } = req.body;

        //{IdUsuario, Total, IdEstadoPedido}

        var id = await agregarProducto(IdTipoProducto,NombreProducto, DescripcionProducto,
                    PrecioUnitario, UrlImagen, UrlImagenAgotado, Existencias );

        if (id>0) {
            res.send({  Message: 'Producto registrado', Result: {idProducto: id} });
        } else {
            res.send({  Message: "No se guardo el producto", Result: [] });
        }
       
    } catch (err) {
        console.log("ERROR", err)
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.post('/actualizarProducto', async (req, res) => {
    try{

        let {IdTipoProducto,
            IdProducto,
            NombreProducto,
            DescripcionProducto,
            PrecioUnitario,
            UrlImagen,
            UrlImagenAgotado,
            Existencias } = req.body;

        //{IdUsuario, Total, IdEstadoPedido}

        var filasAfectadas = await actualizarProducto(IdTipoProducto,IdProducto,NombreProducto, DescripcionProducto,
                    PrecioUnitario, UrlImagen, UrlImagenAgotado, Existencias );

        if (filasAfectadas>0) {
            res.send({  Message: 'Producto actualizado', Result: {filasAfectadas: filasAfectadas} });
        } else {
            res.send({  Message: "No se actualizo el producto", Result: [] });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});

router.post('/eliminarProducto', async (req, res) => {
    try{

        let {IdProducto} = req.body;

        //{IdUsuario, Total, IdEstadoPedido}

        var filasAfectadas = await eliminarProducto(IdProducto);

        if (filasAfectadas>0) {
            res.send({  Message: 'Producto eliminado', Result: {FilasAfectadas: filasAfectadas} });
        } else {
            res.send({  Message: "No se elimino el producto", Result: [] });
        }
       
    } catch (err) {
        res.send({  Message: 'Error en la peticion',  Result: [] });
    }
});


module.exports = router;