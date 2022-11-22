//#region librerias
const { 
        getProductosByIdTipoProducto,
        getProductoByIdProducto,
        getTipoProductos,
        getUsuarios,
        getUsuariosByUsuario,
        getPedidosByIdPedido,
        getPedidosByIdUsuario,
        getPedidosByUsuario
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
        console.log(err)
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


module.exports = router;